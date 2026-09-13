/**
 * Affiliate / referral links for the calculator toolkit
 * =======================================================
 *
 * IMPORTANT FOR LALIT: Once you sign up as an affiliate/publisher with
 * BankBazaar (via a network like INRDeals or Cuelinks), PaisaBazaar, Groww,
 * or GroMo, paste YOUR unique tracking link below in place of the empty
 * string. Until you do that, every "Apply Now" / "Check Eligibility" button
 * on these calculators safely falls back to your own appointment booking
 * section — so the tools work and generate enquiries from day one either way.
 *
 * How to get a link:
 *  1. Home Loan  -> sign up at an affiliate network (e.g. inrdeals.com or
 *     cuelinks.com) and search their offer list for "BankBazaar Home Loan"
 *     or "PaisaBazaar Home Loan". You'll be given a tracking URL like
 *     https://prf.hn/click/camref:XXXX/pubref:YYYY — paste that below.
 *  2. Business Loan -> same networks, search "Business Loan" offers
 *     (BankBazaar / PaisaBazaar / GroMo all run one).
 *  3. SIP / Mutual Funds -> sign up directly at groww.in/partner or via
 *     GroMo (gromo.in) and search "Mutual Fund" / "SIP" / "Demat Account".
 *
 * Each network shows you a live dashboard of clicks, leads and payouts —
 * check it there rather than guessing from site analytics.
 */

export const affiliateLinks = {
  homeLoan: "", // <- paste your BankBazaar/PaisaBazaar Home Loan tracking link here
  businessLoan: "", // <- paste your Business Loan tracking link here
  sip: "", // <- paste your Groww/GroMo Mutual Fund-SIP tracking link here
  personalLoan: "", // <- paste a general/personal loan tracking link here (used by the generic EMI calculator)
};

/** Falls back to the site's own appointment booking section until a real link is set. */
export function getAffiliateLink(key: keyof typeof affiliateLinks): string {
  const link = affiliateLinks[key];
  return link && link.trim() !== "" ? link : "/#appointment";
}

/** True once a real affiliate link has been pasted in — used to tweak button copy. */
export function hasAffiliateLink(key: keyof typeof affiliateLinks): boolean {
  return affiliateLinks[key].trim() !== "";
}
