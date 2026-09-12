import Script from "next/script";

/**
 * GoogleReviews
 * --------------
 * Elfsight ka Google Reviews widget.
 *
 * PERFORMANCE NOTE (13 Sept 2026):
 * Pehle Elfsight ki `platform.js` layout.tsx me thi, matlab ye site ke
 * SAARE 23 pages par load hoti thi — jabki reviews widget sirf 9 pages
 * par hai. Aur `afterInteractive` strategy ki wajah se ye page load ke
 * turant baad main thread par chalti thi, jisse Total Blocking Time
 * badhta tha (PageSpeed ka sabse bhaari metric).
 *
 * Ab wo script yahin is component ke andar hai, `lazyOnload` ke saath:
 *   - sirf un pages par load hoti hai jahan reviews actually dikhte hain
 *   - baaki poora page load hone ke baad, browser ke free time me chalti hai
 *
 * Widget div par `data-elfsight-app-lazy` pehle se tha, jo Elfsight ko
 * widget tab tak render na karne ko kehta hai jab tak wo screen par na aaye.
 */
export default function GoogleReviews() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div
          className="elfsight-app-7cae4e52-d20a-4fa9-b05a-3518b25b7660"
          data-elfsight-app-lazy
        ></div>
      </div>

      <Script
        src="https://elfsightcdn.com/platform.js"
        strategy="lazyOnload"
      />
    </section>
  );
}
