/**
 * NRI Residential Status — determination logic
 * =============================================
 *
 * Law applied: Section 6 of the Income-tax Act, 2025 (the section number is
 * unchanged from the 1961 Act). Verified 13 September 2026 against two
 * independent sources that agree on every threshold.
 *
 * THE TESTS
 * ---------
 * An individual is RESIDENT if EITHER:
 *   (a) in India for 182 days or more in the tax year, OR
 *   (b) in India for 60 days or more in the tax year AND 365 days or more
 *       across the four preceding tax years.
 *
 * The 60-day figure in test (b) is replaced:
 *   - by 182 days for an Indian citizen who leaves India for employment
 *     (or as a member of the crew of an Indian ship);
 *   - by 182 days for an Indian citizen or PIO visiting India;
 *   - BUT by 120 days for a visiting Indian citizen / PIO whose Indian income
 *     (excluding foreign-source income) exceeds Rs 15 lakh.
 *
 * Anyone who becomes resident ONLY because of that 120-day rule
 * (i.e. stayed 120-181 days) is automatically RNOR.
 *
 * DEEMED RESIDENT — Section 6(1A):
 *   An INDIAN CITIZEN with Indian income above Rs 15 lakh who is not liable to
 *   tax in any other country by reason of domicile or residence is deemed
 *   resident regardless of days in India, and is automatically RNOR.
 *
 * RNOR — Section 6(6). A resident is "not ordinarily resident" if EITHER:
 *   - they were non-resident in 9 of the 10 preceding tax years, OR
 *   - they were in India for 729 days or fewer in the 7 preceding tax years.
 *
 * Day counting: the day of arrival and the day of departure both count as
 * days in India.
 *
 * Pure module — no React, no DOM — so the decision tree can be unit-tested.
 */

export type PersonCategory = "indian_citizen" | "pio" | "foreign_national";
export type Purpose = "employment_abroad" | "visiting_india" | "other";

export type StatusInput = {
  /** Days physically in India during the current tax year */
  daysThisYear: number;
  /** Total days in India across the 4 preceding tax years */
  daysPrev4Years: number;
  category: PersonCategory;
  /** Why the person is outside India / the nature of their India stay */
  purpose: Purpose;
  /** Indian-source income above Rs 15 lakh in the tax year */
  indianIncomeAbove15L: boolean;
  /** Liable to tax in another country by reason of residence or domicile */
  liableToTaxAbroad: boolean;
  /** Non-resident in 9 or more of the 10 preceding tax years */
  nonResidentIn9of10: boolean;
  /** Total days in India across the 7 preceding tax years */
  daysPrev7Years: number;
};

export type Status = "Non-Resident" | "RNOR" | "Resident and Ordinarily Resident";

export type StatusResult = {
  status: Status;
  /** Short label for the badge */
  shortLabel: "NRI" | "RNOR" | "Resident";
  /** The threshold that applied in test (b) for this person */
  appliedThreshold: number;
  /** Plain-language reasons, in the order the law applies them */
  reasons: string[];
  /** What income India can tax */
  taxScope: string;
  /** True when the person became resident only via the 120-day rule */
  caughtBy120DayRule: boolean;
  /** True when resident only because of the deemed-resident provision */
  isDeemedResident: boolean;
};

export function determineResidentialStatus(
  input: StatusInput
): StatusResult {
  const reasons: string[] = [];

  const {
    daysThisYear,
    daysPrev4Years,
    category,
    purpose,
    indianIncomeAbove15L,
    liableToTaxAbroad,
    nonResidentIn9of10,
    daysPrev7Years,
  } = input;

  const isCitizenOrPio =
    category === "indian_citizen" || category === "pio";

  // ---- Which threshold applies in test (b)? ----
  let appliedThreshold = 60;

  if (category === "indian_citizen" && purpose === "employment_abroad") {
    appliedThreshold = 182;
    reasons.push(
      "You are an Indian citizen who left India for employment, so the 60-day test is relaxed to 182 days."
    );
  } else if (isCitizenOrPio && purpose === "visiting_india") {
    if (indianIncomeAbove15L) {
      appliedThreshold = 120;
      reasons.push(
        "You are a visiting Indian citizen/PIO with Indian income above ₹15 lakh, so the stricter 120-day threshold applies instead of 182 days."
      );
    } else {
      appliedThreshold = 182;
      reasons.push(
        "You are a visiting Indian citizen/PIO with Indian income up to ₹15 lakh, so the 60-day test is relaxed to 182 days."
      );
    }
  } else {
    reasons.push(
      "The standard 60-day threshold applies to you in the second test."
    );
  }

  // ---- Deemed resident (Section 6(1A)) — checked first ----
  const isDeemedResident =
    category === "indian_citizen" &&
    indianIncomeAbove15L &&
    !liableToTaxAbroad &&
    daysThisYear < 182;

  if (isDeemedResident) {
    reasons.push(
      "You are an Indian citizen with Indian income above ₹15 lakh and are not liable to tax in any other country — so you are a DEEMED RESIDENT regardless of how many days you spent in India."
    );
    return {
      status: "RNOR",
      shortLabel: "RNOR",
      appliedThreshold,
      reasons,
      taxScope: taxScopeFor("RNOR"),
      caughtBy120DayRule: false,
      isDeemedResident: true,
    };
  }

  // ---- Test (a): 182 days ----
  const passesTestA = daysThisYear >= 182;

  // ---- Test (b): threshold + 365 days in preceding 4 years ----
  const passesTestB =
    daysThisYear >= appliedThreshold && daysPrev4Years >= 365;

  if (!passesTestA && !passesTestB) {
    reasons.push(
      `You spent ${daysThisYear} days in India this year — below both the 182-day test and the ${appliedThreshold}-day test — so you are a NON-RESIDENT (NRI).`
    );
    return {
      status: "Non-Resident",
      shortLabel: "NRI",
      appliedThreshold,
      reasons,
      taxScope: taxScopeFor("Non-Resident"),
      caughtBy120DayRule: false,
      isDeemedResident: false,
    };
  }

  if (passesTestA) {
    reasons.push(
      `You spent ${daysThisYear} days in India, which is 182 or more — so you are a RESIDENT this year.`
    );
  } else {
    reasons.push(
      `You spent ${daysThisYear} days in India (${appliedThreshold} or more) and ${daysPrev4Years} days across the previous four years (365 or more) — so you are a RESIDENT this year.`
    );
  }

  // Caught only by the 120-day rule -> automatically RNOR
  const caughtBy120DayRule =
    !passesTestA && appliedThreshold === 120 && daysThisYear < 182;

  if (caughtBy120DayRule) {
    reasons.push(
      "Because you became resident only through the 120-day rule, the law automatically treats you as RNOR — not as an ordinary resident."
    );
    return {
      status: "RNOR",
      shortLabel: "RNOR",
      appliedThreshold,
      reasons,
      taxScope: taxScopeFor("RNOR"),
      caughtBy120DayRule: true,
      isDeemedResident: false,
    };
  }

  // ---- RNOR test (Section 6(6)) ----
  if (nonResidentIn9of10) {
    reasons.push(
      "You were a non-resident in 9 of the last 10 years, so you qualify as RNOR rather than an ordinary resident."
    );
    return {
      status: "RNOR",
      shortLabel: "RNOR",
      appliedThreshold,
      reasons,
      taxScope: taxScopeFor("RNOR"),
      caughtBy120DayRule: false,
      isDeemedResident: false,
    };
  }

  if (daysPrev7Years <= 729) {
    reasons.push(
      `You spent ${daysPrev7Years} days in India over the last 7 years (729 or fewer), so you qualify as RNOR rather than an ordinary resident.`
    );
    return {
      status: "RNOR",
      shortLabel: "RNOR",
      appliedThreshold,
      reasons,
      taxScope: taxScopeFor("RNOR"),
      caughtBy120DayRule: false,
      isDeemedResident: false,
    };
  }

  reasons.push(
    "You do not meet either RNOR condition, so you are a Resident and Ordinarily Resident — your worldwide income is taxable in India."
  );

  return {
    status: "Resident and Ordinarily Resident",
    shortLabel: "Resident",
    appliedThreshold,
    reasons,
    taxScope: taxScopeFor("Resident and Ordinarily Resident"),
    caughtBy120DayRule: false,
    isDeemedResident: false,
  };
}

function taxScopeFor(status: Status): string {
  switch (status) {
    case "Non-Resident":
      return "Only income earned or received in India is taxable. Your foreign salary, foreign interest and other overseas income stay outside the Indian tax net.";
    case "RNOR":
      return "Income earned or received in India is taxable, and so is foreign income from a business controlled from India or a profession set up in India. Your other foreign income is not taxed in India.";
    case "Resident and Ordinarily Resident":
      return "Your WORLDWIDE income is taxable in India — including foreign salary, overseas rent, interest and capital gains. You may also have to report foreign assets in your return.";
  }
}
