import { readFile } from "fs/promises";
import path from "path";

import { DIGITAL_FILES, type DigitalFileId } from "@/lib/paidServices";
import { checkDownloadToken, isOrderId } from "@/lib/purchaseTokens";

/**
 * GET /api/download?order=...&f=...&t=... — serves a purchased kit.
 *
 * Files sit in /private-downloads (not /public), so the only way to get one
 * is a link signed after payment (see /api/fulfil). next.config.ts ships the
 * folder with this route via outputFileTracingIncludes.
 */
export const runtime = "nodejs";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const orderId = url.searchParams.get("order");
  const fileId = url.searchParams.get("f") || "";

  if (
    !isOrderId(orderId) ||
    !Object.prototype.hasOwnProperty.call(DIGITAL_FILES, fileId) ||
    !checkDownloadToken(orderId, fileId, url.searchParams.get("t"))
  ) {
    return new Response("This download link is not valid. Please WhatsApp +91 93549 53603.", {
      status: 403,
    });
  }

  const file = DIGITAL_FILES[fileId as DigitalFileId];
  try {
    const data = await readFile(path.join(process.cwd(), "private-downloads", file.filename));
    return new Response(new Uint8Array(data), {
      headers: {
        "Content-Type": file.contentType,
        "Content-Disposition": `attachment; filename="${file.filename}"`,
        "Cache-Control": "private, no-store",
        "X-Robots-Tag": "noindex",
      },
    });
  } catch (err) {
    console.error("[download] file missing:", file.filename, err);
    return new Response("File temporarily unavailable. Please WhatsApp +91 93549 53603.", { status: 500 });
  }
}
