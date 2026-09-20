#!/usr/bin/env node
/**
 * Validates every JSON-LD (<script type="application/ld+json">) block in
 * the production build output.
 *
 * Why this exists: Schema.org markup (Organization, Service, FAQPage,
 * BreadcrumbList schemas across the site) only helps SEO if it is valid
 * JSON. A single stray comma or an unescaped character silently breaks
 * rich-result eligibility in Google Search Console, and nothing in a
 * normal `next build` catches that — the page still renders fine, it's
 * only the embedded JSON that's broken.
 *
 * Usage:
 *   npm run build        (must run first — this reads .next/server/app)
 *   npm run validate:schema
 *
 * Exits with a non-zero status if any page has invalid or missing-field
 * JSON-LD, so it can be wired into CI later if desired.
 */

import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const BUILD_DIR = join(process.cwd(), ".next", "server", "app");
const LD_JSON_RE =
  /<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi;

// Fields that, per schema.org / Google's structured data guidelines,
// should always be present on these common @type values used on this site.
const REQUIRED_FIELDS = {
  Organization: ["name", "url"],
  ProfessionalService: ["name"],
  AccountingService: ["name"],
  Service: ["name"],
  FAQPage: ["mainEntity"],
  BreadcrumbList: ["itemListElement"],
  WebSite: ["name", "url"],
};

function walkHtmlFiles(dir) {
  const out = [];
  let entries;
  try {
    entries = readdirSync(dir, { withFileTypes: true });
  } catch {
    return out;
  }
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...walkHtmlFiles(full));
    } else if (entry.name.endsWith(".html")) {
      out.push(full);
    }
  }
  return out;
}

function checkRequiredFields(obj, filePath, issues) {
  const type = obj["@type"];
  const types = Array.isArray(type) ? type : [type];

  for (const t of types) {
    const required = REQUIRED_FIELDS[t];
    if (!required) continue;
    for (const field of required) {
      if (!(field in obj)) {
        issues.push(`${filePath}: @type "${t}" is missing recommended field "${field}"`);
      }
    }
  }

  // @graph holds multiple schema nodes (used by OrganizationSchema.tsx)
  if (Array.isArray(obj["@graph"])) {
    for (const node of obj["@graph"]) {
      checkRequiredFields(node, filePath, issues);
    }
  }
}

function main() {
  if (!statSync(BUILD_DIR, { throwIfNoEntry: false })) {
    console.error(
      `Build output not found at ${BUILD_DIR}.\nRun "npm run build" first, then re-run "npm run validate:schema".`
    );
    process.exit(1);
  }

  const files = walkHtmlFiles(BUILD_DIR);
  let totalBlocks = 0;
  let pagesWithSchema = 0;
  const errors = [];
  const warnings = [];

  for (const file of files) {
    const html = readFileSync(file, "utf8");
    const matches = [...html.matchAll(LD_JSON_RE)];
    if (matches.length === 0) continue;

    pagesWithSchema++;

    for (const match of matches) {
      totalBlocks++;
      const raw = match[1].trim();
      try {
        const parsed = JSON.parse(raw);
        checkRequiredFields(parsed, file, warnings);
      } catch (err) {
        errors.push(`${file}: INVALID JSON — ${err.message}`);
      }
    }
  }

  console.log(`Scanned ${files.length} built page(s).`);
  console.log(`Found ${totalBlocks} JSON-LD block(s) across ${pagesWithSchema} page(s).\n`);

  if (warnings.length > 0) {
    console.log(`⚠ ${warnings.length} recommended-field warning(s):`);
    for (const w of warnings) console.log(`  - ${w}`);
    console.log("");
  }

  if (errors.length > 0) {
    console.error(`✗ ${errors.length} invalid JSON-LD block(s):`);
    for (const e of errors) console.error(`  - ${e}`);
    process.exit(1);
  }

  console.log("✓ All JSON-LD blocks are valid JSON.");
}

main();
