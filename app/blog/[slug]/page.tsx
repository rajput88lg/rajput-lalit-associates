import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { blogs } from "@/data/blogs";

import IncomeTaxReturnFilingOnlineIndia from "@/content/blogs/income-tax-return-filing-online-india";
import GSTRegistrationOnlineIndia from "@/content/blogs/gst-registration-online-india";
import GSTRegistrationFeesIndia from "@/content/blogs/gst-registration-fees-india";
import GSTRegistrationDocumentsIndia from "@/content/blogs/gst-registration-documents-india";
import GSTReturnFilingIndia from "@/content/blogs/gst-return-filing-india";
import GSTRegistrationCancellationIndia from "@/content/blogs/gst-registration-cancellation-india";
import MSMERegistrationOnlineIndia from "@/content/blogs/msme-registration-online-india";
import GSTNoticeReplyOnlineIndia from "@/content/blogs/gst-notice-reply-online-india";
import PrivateLimitedCompanyRegistrationIndia from "@/content/blogs/private-limited-company-registration-india";
import HowToEarnMoneyInIndia from "@/content/blogs/how-to-earn-money-in-india";
import Section87ARebate12LakhIncomeTax from "@/content/blogs/section-87a-rebate-12-lakh-income-tax";
import GSTRegistrationAmbala from "@/content/blogs/gst-registration-ambala";
import TDSReturnFilingDueDatesLateFee from "@/content/blogs/tds-return-filing-due-dates-late-fee";
import BelatedRevisedITRAY202627 from "@/content/blogs/belated-revised-itr-ay-2026-27";
import NewIncomeTaxAct2025Vs1961 from "@/content/blogs/new-income-tax-act-2025-vs-1961";
import GSTR9AnnualReturnFilingGuideFY202526 from "@/content/blogs/gstr-9-annual-return-filing-guide-fy-2025-26";
import GSTCompositionSchemeEligibilityRates from "@/content/blogs/gst-composition-scheme-eligibility-rates";
import InputTaxCreditGSTRulesReversal from "@/content/blogs/input-tax-credit-gst-rules-reversal";
import GSTEwayBillRulesValidityLimit from "@/content/blogs/gst-eway-bill-rules-validity-limit";
import GSTFreelancersExportOfServicesLUT from "@/content/blogs/gst-freelancers-export-of-services-lut";
import GSTTCSEcommerceSellersRules from "@/content/blogs/gst-tcs-ecommerce-sellers-rules";
import GSTAuditAssessmentTypesNotice from "@/content/blogs/gst-audit-assessment-types-notice";
import AdvanceTaxPaymentDueDatesInterest from "@/content/blogs/advance-tax-payment-due-dates-interest";
import Form26ASAISTISReconciliationITR from "@/content/blogs/form-26as-ais-tis-reconciliation-itr";
import CapitalGainsTaxSharesMutualFundsSTCGLTCG from "@/content/blogs/capital-gains-tax-shares-mutual-funds-stcg-ltcg";
import HUFHinduUndividedFamilyTaxBenefits from "@/content/blogs/huf-hindu-undivided-family-tax-benefits";
import TDSOnRentSection194IB from "@/content/blogs/tds-on-rent-section-194ib";
import TDSOnProfessionalFeesSection194J from "@/content/blogs/tds-on-professional-fees-section-194j";
import TDSOnSalaryForm16Explained from "@/content/blogs/tds-on-salary-form-16-explained";
import TaxForFreelancersConsultantsSection44ADAPresumptiveTaxation from "@/content/blogs/tax-for-freelancers-consultants-section-44ada-presumptive-taxation";
import IncomeTaxNoticeTypes143_1_148_139_9Explained from "@/content/blogs/income-tax-notice-types-143-1-148-139-9-explained";
import LLPRegistrationProcessCostVsPvtLtd from "@/content/blogs/llp-registration-process-cost-vs-pvt-ltd";
import PartnershipFirmRegistrationAndPartnershipDeed from "@/content/blogs/partnership-firm-registration-and-partnership-deed";
import TrademarkRegistrationForSmallBusiness from "@/content/blogs/trademark-registration-for-small-business";
import WhySmallBusinessesNeedMonthlyBookkeeping from "@/content/blogs/why-small-businesses-need-monthly-bookkeeping";
import NREandNROandFCNRBankAccountsExplained from "@/content/blogs/nre-nro-fcnr-bank-accounts-explained";

import GSTR9CReconciliationStatementGuideFY202526 from "@/content/blogs/gstr-9c-reconciliation-statement-guide-fy-2025-26";
import GSTRates2026SlabListItemWise from "@/content/blogs/gst-rates-2026-slab-list-item-wise";
import GSTRefundProcessExportersInvertedDutyStructure from "@/content/blogs/gst-refund-process-exporters-inverted-duty-structure";
import GSTInputServiceDistributorISDRules from "@/content/blogs/gst-input-service-distributor-isd-rules";
import GSTReverseChargeMechanismRCMExplained from "@/content/blogs/gst-reverse-charge-mechanism-rcm-explained";
import GSTOnRealEstateUnderConstructionProperty from "@/content/blogs/gst-on-real-estate-under-construction-property";
import TaxAuditSection44ABApplicabilityTurnoverLimit from "@/content/blogs/tax-audit-section-44ab-applicability-turnover-limit";
import TDSOnCashWithdrawalEcommerceSection194N194O from "@/content/blogs/tds-on-cash-withdrawal-ecommerce-section-194n-194o";
import NewITRFormsAY202627ChangesExplained from "@/content/blogs/new-itr-forms-ay-2026-27-changes-explained";
import IncomeTaxSlabsNewVsOldRegimeFY202627 from "@/content/blogs/income-tax-slabs-new-vs-old-regime-fy-2026-27";
import Deductions80CTo80UOldRegimeGuide from "@/content/blogs/deductions-80c-to-80u-old-regime-guide";
import OnePersonCompanyOPCRegistrationGuide from "@/content/blogs/one-person-company-opc-registration-guide";
import SoleProprietorshipRegistrationGuideIndia from "@/content/blogs/sole-proprietorship-registration-guide-india";
import ROCAnnualComplianceCalendarPvtLtdLLP from "@/content/blogs/roc-annual-compliance-calendar-pvt-ltd-llp";
import DigitalSignatureCertificateDSCGuideBusinessRegistration from "@/content/blogs/digital-signature-certificate-dsc-guide-business-registration";
import AccrualVsCashAccountingSmallBusiness from "@/content/blogs/accrual-vs-cash-accounting-small-business";
import FinancialStatementsChecklistBankLoanCCLimit from "@/content/blogs/financial-statements-checklist-bank-loan-cc-limit";
import NRISaleOfInheritedPropertyTaxTDSGuide from "@/content/blogs/nri-sale-of-inherited-property-tax-tds-guide";
import NRIITRFilingWhichFormDTAARelief from "@/content/blogs/nri-itr-filing-which-form-dtaa-relief";
import Section195TDSOnNRIPaymentsOverview from "@/content/blogs/section-195-tds-on-nri-payments-overview";

import MSME45DayPaymentRuleSection43BH from "@/content/blogs/msme-45-day-payment-rule-section-43b-h";
import GST20Reforms2026SectorImpactGuide from "@/content/blogs/gst-2-0-reforms-2026-sector-impact-guide";
import EInvoicingMandatory2026TurnoverLimitGuide from "@/content/blogs/e-invoicing-mandatory-2026-turnover-limit-guide";
import GSTInvoiceManagementSystemIMSGuide from "@/content/blogs/gst-invoice-management-system-ims-guide";
import NewLabourCodes2026EmployerGuide from "@/content/blogs/new-labour-codes-2026-employer-guide";
import IncomeTaxReturnFilingServicesInAmbala from "@/content/blogs/income-tax-return-filing-services-in-ambala";
import CompanyLLPRegistrationConsultantAmbala from "@/content/blogs/company-llp-registration-consultant-ambala";
import GSTDRC01DemandNoticeReplyGuide from "@/content/blogs/gst-drc-01-demand-notice-reply-guide";
import GSTAmnestySchemeSection128AExplained from "@/content/blogs/gst-amnesty-scheme-section-128a-explained";
import FacelessAssessmentAndAppealSchemeExplained from "@/content/blogs/faceless-assessment-and-appeal-scheme-explained";

import BlogSchema from "@/components/BlogSchema";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title: blog.seoTitle,
    description: blog.seoDescription,
    keywords: blog.keywords,
    alternates: {
      canonical: `https://www.rajputlalitassociates.in/blog/${blog.slug}`,
    },
    openGraph: {
      title: blog.seoTitle,
      description: blog.seoDescription,
      url: `https://www.rajputlalitassociates.in/blog/${blog.slug}`,
      type: "article",
      images: [
        {
          url: blog.image,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.seoTitle,
      description: blog.seoDescription,
      images: [blog.image],
    },
  };
}

export default async function BlogDetails({ params }: PageProps) {
  const { slug } = await params;
  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    notFound();
  }

  // Component ko dynamically assign karna
  let BlogContent;
  switch (slug) {
    case "gst-registration-online-india":
      BlogContent = GSTRegistrationOnlineIndia;
      break;
    case "gst-registration-fees-india":
      BlogContent = GSTRegistrationFeesIndia;
      break;
    case "gst-registration-documents-india":
      BlogContent = GSTRegistrationDocumentsIndia;
      break;
    case "gst-return-filing-india":
      BlogContent = GSTReturnFilingIndia;
      break;
    case "gst-registration-cancellation-india":
      BlogContent = GSTRegistrationCancellationIndia;
      break;
      case "income-tax-return-filing-online-india":
  BlogContent = IncomeTaxReturnFilingOnlineIndia;
  break;

case "msme-registration-online-india":
  BlogContent = MSMERegistrationOnlineIndia;
  break;

  case "gst-notice-reply-online-india":
  BlogContent = GSTNoticeReplyOnlineIndia;
  break;

  case "private-limited-company-registration-india":
  BlogContent = PrivateLimitedCompanyRegistrationIndia;
  break;

  case "how-to-earn-money-in-india":
  BlogContent = HowToEarnMoneyInIndia;
  break;

  case "section-87a-rebate-12-lakh-income-tax":
  BlogContent = Section87ARebate12LakhIncomeTax;
  break;

  case "gst-registration-ambala":
  BlogContent = GSTRegistrationAmbala;
  break;

  case "tds-return-filing-due-dates-late-fee":
  BlogContent = TDSReturnFilingDueDatesLateFee;
  break;

  case "belated-revised-itr-ay-2026-27":
  BlogContent = BelatedRevisedITRAY202627;
  break;

  case "new-income-tax-act-2025-vs-1961":
  BlogContent = NewIncomeTaxAct2025Vs1961;
  break;

  case "gstr-9-annual-return-filing-guide-fy-2025-26":
  BlogContent = GSTR9AnnualReturnFilingGuideFY202526;
  break;

  case "gst-composition-scheme-eligibility-rates":
  BlogContent = GSTCompositionSchemeEligibilityRates;
  break;

  case "input-tax-credit-gst-rules-reversal":
  BlogContent = InputTaxCreditGSTRulesReversal;
  break;

  case "gst-eway-bill-rules-validity-limit":
  BlogContent = GSTEwayBillRulesValidityLimit;
  break;

  case "gst-freelancers-export-of-services-lut":
  BlogContent = GSTFreelancersExportOfServicesLUT;
  break;

  case "gst-tcs-ecommerce-sellers-rules":
  BlogContent = GSTTCSEcommerceSellersRules;
  break;

  case "gst-audit-assessment-types-notice":
  BlogContent = GSTAuditAssessmentTypesNotice;
  break;

  case "advance-tax-payment-due-dates-interest":
  BlogContent = AdvanceTaxPaymentDueDatesInterest;
  break;

  case "form-26as-ais-tis-reconciliation-itr":
  BlogContent = Form26ASAISTISReconciliationITR;
  break;

  case "capital-gains-tax-shares-mutual-funds-stcg-ltcg":
  BlogContent = CapitalGainsTaxSharesMutualFundsSTCGLTCG;
  break;

  case "huf-hindu-undivided-family-tax-benefits":
  BlogContent = HUFHinduUndividedFamilyTaxBenefits;
  break;

  case "tds-on-rent-section-194ib":
  BlogContent = TDSOnRentSection194IB;
  break;

  case "tds-on-professional-fees-section-194j":
  BlogContent = TDSOnProfessionalFeesSection194J;
  break;

  case "tds-on-salary-form-16-explained":
  BlogContent = TDSOnSalaryForm16Explained;
  break;

  case "tax-for-freelancers-consultants-section-44ada-presumptive-taxation":
  BlogContent = TaxForFreelancersConsultantsSection44ADAPresumptiveTaxation;
  break;

  case "income-tax-notice-types-143-1-148-139-9-explained":
  BlogContent = IncomeTaxNoticeTypes143_1_148_139_9Explained;
  break;

  case "llp-registration-process-cost-vs-pvt-ltd":
  BlogContent = LLPRegistrationProcessCostVsPvtLtd;
  break;

  case "partnership-firm-registration-and-partnership-deed":
  BlogContent = PartnershipFirmRegistrationAndPartnershipDeed;
  break;

  case "trademark-registration-for-small-business":
  BlogContent = TrademarkRegistrationForSmallBusiness;
  break;

  case "why-small-businesses-need-monthly-bookkeeping":
  BlogContent = WhySmallBusinessesNeedMonthlyBookkeeping;
  break;

  case "nre-nro-fcnr-bank-accounts-explained":
  BlogContent = NREandNROandFCNRBankAccountsExplained;
  break;

  case "gstr-9c-reconciliation-statement-guide-fy-2025-26":
    BlogContent = GSTR9CReconciliationStatementGuideFY202526;
    break;
  case "gst-rates-2026-slab-list-item-wise":
    BlogContent = GSTRates2026SlabListItemWise;
    break;
  case "gst-refund-process-exporters-inverted-duty-structure":
    BlogContent = GSTRefundProcessExportersInvertedDutyStructure;
    break;
  case "gst-input-service-distributor-isd-rules":
    BlogContent = GSTInputServiceDistributorISDRules;
    break;
  case "gst-reverse-charge-mechanism-rcm-explained":
    BlogContent = GSTReverseChargeMechanismRCMExplained;
    break;
  case "gst-on-real-estate-under-construction-property":
    BlogContent = GSTOnRealEstateUnderConstructionProperty;
    break;
  case "tax-audit-section-44ab-applicability-turnover-limit":
    BlogContent = TaxAuditSection44ABApplicabilityTurnoverLimit;
    break;
  case "tds-on-cash-withdrawal-ecommerce-section-194n-194o":
    BlogContent = TDSOnCashWithdrawalEcommerceSection194N194O;
    break;
  case "new-itr-forms-ay-2026-27-changes-explained":
    BlogContent = NewITRFormsAY202627ChangesExplained;
    break;
  case "income-tax-slabs-new-vs-old-regime-fy-2026-27":
    BlogContent = IncomeTaxSlabsNewVsOldRegimeFY202627;
    break;
  case "deductions-80c-to-80u-old-regime-guide":
    BlogContent = Deductions80CTo80UOldRegimeGuide;
    break;
  case "one-person-company-opc-registration-guide":
    BlogContent = OnePersonCompanyOPCRegistrationGuide;
    break;
  case "sole-proprietorship-registration-guide-india":
    BlogContent = SoleProprietorshipRegistrationGuideIndia;
    break;
  case "roc-annual-compliance-calendar-pvt-ltd-llp":
    BlogContent = ROCAnnualComplianceCalendarPvtLtdLLP;
    break;
  case "digital-signature-certificate-dsc-guide-business-registration":
    BlogContent = DigitalSignatureCertificateDSCGuideBusinessRegistration;
    break;
  case "accrual-vs-cash-accounting-small-business":
    BlogContent = AccrualVsCashAccountingSmallBusiness;
    break;
  case "financial-statements-checklist-bank-loan-cc-limit":
    BlogContent = FinancialStatementsChecklistBankLoanCCLimit;
    break;
  case "nri-sale-of-inherited-property-tax-tds-guide":
    BlogContent = NRISaleOfInheritedPropertyTaxTDSGuide;
    break;
  case "nri-itr-filing-which-form-dtaa-relief":
    BlogContent = NRIITRFilingWhichFormDTAARelief;
    break;
  case "section-195-tds-on-nri-payments-overview":
    BlogContent = Section195TDSOnNRIPaymentsOverview;
    break;

  case "msme-45-day-payment-rule-section-43b-h":
    BlogContent = MSME45DayPaymentRuleSection43BH;
    break;
  case "gst-2-0-reforms-2026-sector-impact-guide":
    BlogContent = GST20Reforms2026SectorImpactGuide;
    break;
  case "e-invoicing-mandatory-2026-turnover-limit-guide":
    BlogContent = EInvoicingMandatory2026TurnoverLimitGuide;
    break;
  case "gst-invoice-management-system-ims-guide":
    BlogContent = GSTInvoiceManagementSystemIMSGuide;
    break;
  case "new-labour-codes-2026-employer-guide":
    BlogContent = NewLabourCodes2026EmployerGuide;
    break;
  case "income-tax-return-filing-services-in-ambala":
    BlogContent = IncomeTaxReturnFilingServicesInAmbala;
    break;
  case "company-llp-registration-consultant-ambala":
    BlogContent = CompanyLLPRegistrationConsultantAmbala;
    break;
  case "gst-drc-01-demand-notice-reply-guide":
    BlogContent = GSTDRC01DemandNoticeReplyGuide;
    break;
  case "gst-amnesty-scheme-section-128a-explained":
    BlogContent = GSTAmnestySchemeSection128AExplained;
    break;
  case "faceless-assessment-and-appeal-scheme-explained":
    BlogContent = FacelessAssessmentAndAppealSchemeExplained;
    break;

    default:
      notFound();
      return null;
  }

  return (
    <main className="max-w-5xl mx-auto px-6 py-20 flex-grow w-full bg-white">
      
      <BlogSchema
        title={blog.title}
        description={blog.description}
        image={blog.image}
        slug={blog.slug}
        datePublished={blog.date}
        author={blog.author}
      />

      <Image
        src={blog.image}
        alt={blog.title}
        width={1200}
        height={630}
        className="w-full object-cover rounded-2xl shadow-lg mb-8 bg-gray-100"
        priority
      />

      <div className="mb-4">
        <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
          {blog.category}
        </span>
      </div>

      <h1 className="text-5xl font-extrabold text-[#002b5c] leading-tight mt-4">
        {blog.title}
      </h1>

      <div className="flex flex-wrap items-center gap-6 text-gray-500 mt-6 text-sm border-b border-gray-200 pb-6 font-medium">
        <span className="flex items-center gap-2">👤 {blog.author}</span>
        <span className="flex items-center gap-2">📅 {blog.date}</span>
        <span className="flex items-center gap-2">⏱️ {blog.readTime}</span>
      </div>

      {/* Yahan par ab dynamic content render hoga */}
      <article className="prose prose-lg prose-blue max-w-none mt-12 text-gray-700 leading-loose">
        <BlogContent />
      </article>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#002b5c] to-[#004a99] text-white rounded-3xl p-10 mt-16 text-center shadow-xl">
        <h2 className="text-3xl font-bold">Need Professional Assistance?</h2>
        <p className="mt-4 text-blue-100 text-lg max-w-2xl mx-auto">
          Rajput Lalit & Associates provides fast, secure and professional GST, Income Tax, and Business Registration services across India.
        </p>

        <div className="flex flex-wrap justify-center gap-5 mt-8">
          <a
            href="tel:9354953603"
            className="bg-white text-[#002b5c] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition shadow-md hover:shadow-lg flex items-center gap-2"
          >
            📞 Call Now
          </a>
          <a
            href="https://wa.me/919354953603"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#20bd5a] transition shadow-md hover:shadow-lg flex items-center gap-2"
          >
            💬 WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
