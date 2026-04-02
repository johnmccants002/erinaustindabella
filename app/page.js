const links = [
  {
    title: "DaBella Official Website",
    description: "Explore products, services, and financing options.",
    href: "https://dabella.us/",
    cta: "Visit DaBella",
  },
  {
    title: "GAF Manufacturer Partnership",
    description: "Learn more about DaBella on the official GAF page.",
    href: "https://www.gaf.com/en-us/plan-design/dabella",
    cta: "View GAF Listing",
  },
  {
    title: "A+ BBB Rating",
    description: "See DaBella's Better Business Bureau profile.",
    href: "https://www.bbb.org/us/or/hillsboro/profile/roofing-contractors/dabella-1296-22828301",
    cta: "Check BBB Profile",
  },
  {
    title: "Book a Free Quote",
    description: "Start your home improvement conversation with DaBella.",
    href: "https://dabella.us/get-quote/",
    cta: "Get Free Quote",
  },
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <section className="bg-orb bg-orb-top" aria-hidden="true" />
      <section className="bg-orb bg-orb-bottom" aria-hidden="true" />

      <div className="linktree-card">
        <img
          src="/dabella.svg"
          alt="DaBella logo"
          className="brand-logo"
          width="262"
          height="57"
        />

        <p className="eyebrow">Placerville, California</p>
        <h1>Erin Austin</h1>
        <p className="subtitle">DaBella Home Improvement Specialist</p>

        <div className="trust-row" aria-label="Trust markers">
          <span>GAF Partner</span>
          <span>BBB A+ Rated</span>
          <span>Licensed & Insured</span>
        </div>

        <div className="links-wrap" aria-label="Quick links">
          {links.map((item, index) => (
            <a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="link-card"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
              <span className="cta-text">{item.cta}</span>
            </a>
          ))}
        </div>

        <p className="footer-note">
          Proudly serving homeowners in and around Placerville, CA.
        </p>
      </div>
    </main>
  );
}
