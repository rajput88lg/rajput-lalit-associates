import { permanentRedirect } from "next/navigation";

// /packages was an empty placeholder page ("Website Packages" heading only)
// that Google had started indexing. Fees now live on /fees.
export default function PackagesPage() {
  permanentRedirect("/fees");
}
