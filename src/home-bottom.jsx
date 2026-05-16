// ============================================
// Home — Bottom sections
// Our Process, Certifications, Global Reach, Testimonials, Blog, FAQ
// ============================================

// ---- Section 7: Our Process ---------------------------------------
const PROCESS_STEPS = [
  {
    num: "01", title: "Farm Sourcing",
    desc: "Direct from 1,200+ contracted farmers in Andhra, Karnataka, Gujarat, Kerala, Rajasthan & Tamil Nadu.",
    meta: "Lead time: 4–10 days",
  },
  {
    num: "02", title: "Cleaning & Sorting",
    desc: "Destoning, magnetic separation, gravity & optical sorting. Foreign-matter target: <0.5%.",
    meta: "8 sorter lines",
  },
  {
    num: "03", title: "Lab Testing",
    desc: "14-point in-house panel + third-party (SGS, Eurofins) on every export consignment.",
    meta: "Turnaround: 24–48 hrs",
  },
  {
    num: "04", title: "Custom Packing",
    desc: "Nitrogen flushed pouches, jute, PP, FIBC — 25 g to 1,000 kg. Private label artwork in-house.",
    meta: "12 packing lines",
  },
  {
    num: "05", title: "Global Shipping",
    desc: "Container stuffing under DGFT supervision. FOB Mundra/Nhava Sheva or CIF to your port.",
    meta: "97.8% on-time",
  },
];

function OurProcess() {
  return (
    <section className="section surface-warm" id="process" style={{
      background: "var(--color-bg-warm)",
    }}>
      <div className="container">
        <SectionHeader
          eyebrow="From farm to your port"
          title={<>Five steps. <em style={{ fontStyle: "italic", color: "var(--color-primary)" }}>Zero shortcuts.</em></>}
          sub="The same routine your QA team would design — except we've been running it for seventeen years."
        />

        {/* Horizontal timeline */}
        <div style={{ position: "relative", marginTop: 32 }}>
          {/* Connecting line */}
          <div style={{
            position: "absolute", top: 42, left: 0, right: 0, height: 1,
            background: "var(--color-line)",
            zIndex: 0,
          }} />
          <div style={{
            position: "absolute", top: 42, left: 0, height: 1,
            background: "var(--color-primary)",
            width: "100%",
            zIndex: 1,
            transformOrigin: "left",
            animation: "fadeIn 1.5s ease",
          }} />

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: 24,
            position: "relative",
            zIndex: 2,
          }} className="process-grid">
            {PROCESS_STEPS.map((s, i) => (
              <div key={s.num} style={{ position: "relative" }}>
                {/* Number circle */}
                <div style={{
                  width: 84, height: 84,
                  borderRadius: "50%",
                  background: i === 0 ? "var(--color-primary)" : "var(--color-bg)",
                  color: i === 0 ? "#FBF8F1" : "var(--color-ink)",
                  border: "1px solid var(--color-primary)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: 32,
                  marginBottom: 24, position: "relative",
                  transition: "all 0.25s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "var(--color-primary)"; e.currentTarget.style.color = "#FBF8F1"; e.currentTarget.style.transform = "scale(1.08)"; }}
                onMouseLeave={(e) => { if (i !== 0) { e.currentTarget.style.background = "var(--color-bg)"; e.currentTarget.style.color = "var(--color-ink)"; } e.currentTarget.style.transform = "scale(1)"; }}
                >{s.num}</div>
                <h3 style={{
                  fontFamily: "var(--font-serif)", fontWeight: 500,
                  fontSize: 22, marginBottom: 10,
                }}>{s.title}</h3>
                <p style={{ fontSize: 13.5, color: "var(--color-ink-soft)", lineHeight: 1.55, marginBottom: 14 }}>
                  {s.desc}
                </p>
                <div style={{
                  fontFamily: "var(--font-mono)", fontSize: 10,
                  letterSpacing: "0.12em", textTransform: "uppercase",
                  color: "var(--color-primary)",
                }}>{s.meta}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---- Section 8: Certifications Strip ------------------------------
const CERTS = [
  { name: "FSSAI", sub: "Food Safety", num: "10018011000234" },
  { name: "APEDA", sub: "Export Authority", num: "RCMC SPI/26" },
  { name: "Spices Board", sub: "of India", num: "GJ/EXP/00891" },
  { name: "ISO 22000", sub: "Food Safety Mgmt", num: "Cert IS/0102" },
  { name: "HACCP", sub: "Hazard Analysis", num: "Audited 2025" },
  { name: "USDA Organic", sub: "Certified", num: "NPOP/12340" },
  { name: "Halal", sub: "India Certified", num: "HCI/SP/441" },
  { name: "Kosher", sub: "OK Certified", num: "OK-K-44219" },
];

function Certifications() {
  return (
    <section className="section" id="certs" style={{ paddingTop: 80, paddingBottom: 80 }}>
      <div className="container">
        <div style={{
          textAlign: "center", maxWidth: 620, margin: "0 auto 56px",
        }}>
          <div className="eyebrow" style={{ justifyContent: "center", marginBottom: 16 }}>
            Certifications & Compliance
          </div>
          <h2 className="h-3" style={{ marginBottom: 12 }}>
            Audited, certified, and <em style={{ fontStyle: "italic", color: "var(--color-primary)" }}>document-ready</em> on day one.
          </h2>
          <p className="body" style={{ fontSize: 15 }}>
            Click any badge to download the live certificate (PDF).
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(8, 1fr)",
          gap: 0,
          border: "1px solid var(--color-line)",
        }} className="certs-grid">
          {CERTS.map((c, i) => (
            <a key={c.name} href="#" style={{
              padding: "28px 16px",
              borderRight: (i + 1) % 8 !== 0 ? "1px solid var(--color-line)" : "none",
              textAlign: "center",
              transition: "all 0.25s",
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center",
              filter: "grayscale(0.6)",
              opacity: 0.85,
              minHeight: 140,
            }}
            onMouseEnter={(e) => { e.currentTarget.style.filter = "grayscale(0)"; e.currentTarget.style.opacity = "1"; e.currentTarget.style.background = "var(--color-bg-warm)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.filter = "grayscale(0.6)"; e.currentTarget.style.opacity = "0.85"; e.currentTarget.style.background = "transparent"; }}
            >
              <div style={{
                width: 44, height: 44,
                border: "1.5px solid var(--color-primary)",
                borderRadius: "50%",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: 16,
                color: "var(--color-primary)", marginBottom: 12,
              }}>{c.name.charAt(0)}</div>
              <div style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: 16, lineHeight: 1.1 }}>
                {c.name}
              </div>
              <div style={{
                fontFamily: "var(--font-mono)", fontSize: 9,
                letterSpacing: "0.12em", textTransform: "uppercase",
                color: "var(--color-ink-mute)", marginTop: 6,
              }}>{c.sub}</div>
              <div style={{
                fontFamily: "var(--font-mono)", fontSize: 9,
                color: "var(--color-ink-mute)", marginTop: 4, opacity: 0.7,
              }}>{c.num}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---- Section 9: Global Reach Map ----------------------------------
// Stylized world via positioned country pins on a grid of dots
const DESTINATIONS = [
  { country: "United States", flag: "US", region: "North America", volume: "820 MT/yr" },
  { country: "United Kingdom", flag: "UK", region: "Europe", volume: "440 MT/yr" },
  { country: "Germany", flag: "DE", region: "Europe", volume: "390 MT/yr" },
  { country: "UAE", flag: "AE", region: "Middle East", volume: "610 MT/yr" },
  { country: "Saudi Arabia", flag: "SA", region: "Middle East", volume: "520 MT/yr" },
  { country: "Canada", flag: "CA", region: "North America", volume: "260 MT/yr" },
  { country: "Australia", flag: "AU", region: "Oceania", volume: "180 MT/yr" },
  { country: "Singapore", flag: "SG", region: "Asia", volume: "210 MT/yr" },
  { country: "Malaysia", flag: "MY", region: "Asia", volume: "320 MT/yr" },
  { country: "South Africa", flag: "ZA", region: "Africa", volume: "150 MT/yr" },
  { country: "Japan", flag: "JP", region: "Asia", volume: "190 MT/yr" },
  { country: "Netherlands", flag: "NL", region: "Europe", volume: "280 MT/yr" },
];

function GlobalReach() {
  const [hover, setHover] = React.useState(null);

  // Pin positions on the stylized map (percentage x, y)
  const PINS = [
    { id: "us", x: 18, y: 38, country: "United States", vol: "820 MT" },
    { id: "ca", x: 22, y: 25, country: "Canada", vol: "260 MT" },
    { id: "uk", x: 46, y: 30, country: "UK", vol: "440 MT" },
    { id: "nl", x: 49, y: 32, country: "Netherlands", vol: "280 MT" },
    { id: "de", x: 51, y: 34, country: "Germany", vol: "390 MT" },
    { id: "ae", x: 60, y: 48, country: "UAE", vol: "610 MT" },
    { id: "sa", x: 58, y: 49, country: "Saudi Arabia", vol: "520 MT" },
    { id: "in", x: 68, y: 50, country: "India · HQ", vol: "Origin", origin: true },
    { id: "sg", x: 78, y: 60, country: "Singapore", vol: "210 MT" },
    { id: "my", x: 79, y: 62, country: "Malaysia", vol: "320 MT" },
    { id: "jp", x: 86, y: 40, country: "Japan", vol: "190 MT" },
    { id: "au", x: 86, y: 75, country: "Australia", vol: "180 MT" },
    { id: "za", x: 54, y: 75, country: "South Africa", vol: "150 MT" },
  ];

  return (
    <section className="section surface-dark" id="global">
      <div className="container">
        <SectionHeader
          eyebrow="Global reach"
          title={<>Shipping from <em style={{ fontStyle: "italic", color: "var(--color-saffron)" }}>Mundra & Nhava Sheva</em> to ports across 5 continents.</>}
          sub="The map shows our active routes. Hover any pin for last year's volume by country."
        />

        <div style={{
          display: "grid",
          gridTemplateColumns: "1.6fr 1fr",
          gap: 48,
          alignItems: "start",
        }} className="global-grid">
          {/* Map */}
          <div style={{
            position: "relative",
            aspectRatio: "16/9",
            background: "rgba(251,248,241,0.02)",
            border: "1px solid rgba(251,248,241,0.08)",
            overflow: "hidden",
          }}>
            {/* Dot grid backdrop */}
            <div style={{
              position: "absolute", inset: 0,
              backgroundImage: "radial-gradient(circle, rgba(251,248,241,0.10) 1px, transparent 1.5px)",
              backgroundSize: "16px 16px",
              opacity: 0.7,
            }} />
            {/* Continent silhouettes (very abstract — rounded rectangles) */}
            <svg viewBox="0 0 1600 900" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
              <g fill="rgba(217,119,6,0.10)" stroke="rgba(217,119,6,0.25)" strokeWidth="1">
                {/* North America */}
                <path d="M 180,180 Q 280,160 380,200 Q 420,260 400,360 Q 360,420 280,420 Q 200,380 180,300 Z" />
                {/* South America */}
                <path d="M 360,500 Q 420,480 440,560 Q 460,680 400,760 Q 340,740 340,640 Z" />
                {/* Europe */}
                <path d="M 720,220 Q 820,200 880,260 Q 900,320 840,360 Q 760,360 720,300 Z" />
                {/* Africa */}
                <path d="M 820,420 Q 920,400 960,500 Q 980,620 920,720 Q 840,720 800,620 Q 780,500 820,420 Z" />
                {/* Asia */}
                <path d="M 920,200 Q 1180,180 1320,260 Q 1380,360 1320,440 Q 1180,460 1020,420 Q 920,360 920,260 Z" />
                {/* Southeast Asia & islands */}
                <path d="M 1200,500 Q 1300,500 1340,560 Q 1320,600 1240,600 Q 1180,580 1200,500 Z" />
                {/* Australia */}
                <path d="M 1280,680 Q 1400,660 1440,720 Q 1420,780 1340,780 Q 1260,760 1280,680 Z" />
              </g>
            </svg>

            {/* Origin glow at India */}
            <div style={{
              position: "absolute",
              left: "68%", top: "50%",
              transform: "translate(-50%, -50%)",
              width: 160, height: 160,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(217,119,6,0.30) 0%, transparent 70%)",
              pointerEvents: "none",
            }} />

            {/* Pins */}
            {PINS.map((p) => (
              <div key={p.id}
                onMouseEnter={() => setHover(p)}
                onMouseLeave={() => setHover(null)}
                style={{
                  position: "absolute",
                  left: `${p.x}%`, top: `${p.y}%`,
                  transform: "translate(-50%, -50%)",
                  cursor: "pointer",
                  zIndex: hover?.id === p.id ? 20 : 5,
                }}
              >
                <div style={{
                  width: p.origin ? 18 : 12,
                  height: p.origin ? 18 : 12,
                  borderRadius: "50%",
                  background: p.origin ? "var(--color-saffron)" : "var(--color-primary)",
                  border: "2px solid #FBF8F1",
                  boxShadow: `0 0 0 ${hover?.id === p.id ? 8 : 0}px rgba(217,119,6,0.25)`,
                  transition: "box-shadow 0.2s",
                }} />
                {p.origin && (
                  <div style={{
                    position: "absolute", inset: -8,
                    border: "1px solid var(--color-saffron)",
                    borderRadius: "50%",
                    animation: "pulse 2.5s infinite",
                    opacity: 0.5,
                  }} />
                )}
                {hover?.id === p.id && (
                  <div style={{
                    position: "absolute",
                    bottom: 24, left: "50%",
                    transform: "translateX(-50%)",
                    background: "var(--color-bg)",
                    color: "var(--color-ink)",
                    padding: "10px 14px",
                    fontSize: 12,
                    whiteSpace: "nowrap",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
                    zIndex: 100,
                  }}>
                    <div style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: 14 }}>{p.country}</div>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--color-primary)", letterSpacing: "0.08em" }}>{p.vol} ANNUAL</div>
                  </div>
                )}
              </div>
            ))}

            {/* Map legend */}
            <div style={{
              position: "absolute", bottom: 16, left: 16,
              fontFamily: "var(--font-mono)", fontSize: 10,
              letterSpacing: "0.12em", textTransform: "uppercase",
              color: "rgba(251,248,241,0.55)",
              display: "flex", gap: 16, alignItems: "center",
            }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--color-saffron)" }} />
                Origin · Mundra
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--color-primary)" }} />
                32 Destination ports
              </span>
            </div>
          </div>

          {/* Right list */}
          <div>
            <div className="eyebrow" style={{ marginBottom: 20 }}>Top destinations · 2025</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {DESTINATIONS.slice(0, 8).map((d, i) => (
                <div key={d.country} style={{
                  display: "grid",
                  gridTemplateColumns: "auto 1fr auto",
                  gap: 14,
                  alignItems: "center",
                  padding: "14px 0",
                  borderBottom: "1px solid rgba(251,248,241,0.08)",
                }}>
                  <div style={{
                    width: 32, height: 24,
                    background: "rgba(251,248,241,0.08)",
                    fontFamily: "var(--font-mono)", fontSize: 11,
                    fontWeight: 600,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    letterSpacing: "0.04em",
                  }}>{d.flag}</div>
                  <div>
                    <div style={{ fontFamily: "var(--font-serif)", fontSize: 17 }}>{d.country}</div>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, opacity: 0.55, letterSpacing: "0.08em", textTransform: "uppercase" }}>{d.region}</div>
                  </div>
                  <div style={{
                    fontFamily: "var(--font-mono)", fontSize: 12,
                    color: "var(--color-saffron)",
                  }}>{d.volume}</div>
                </div>
              ))}
            </div>
            <a href="#" className="btn-ghost" style={{ marginTop: 24, color: "var(--color-saffron)" }}>
              See all 32 markets
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---- Section 10: Testimonials -------------------------------------
const TESTIMONIALS = [
  {
    quote: "We've tested four Indian exporters over six years. Saaranga is the only one whose COA matches our incoming lab reports every single time. Boring is good.",
    name: "Marcus Lindqvist", title: "Head of Sourcing", company: "Nordic Spice House",
    country: "Sweden", flag: "SE",
  },
  {
    quote: "The Byadgi chilli they ship is the closest thing to walking through a Karnataka market floor without leaving Hamburg. Our private label has doubled in three years.",
    name: "Annika Werner", title: "Founder", company: "Werner Gewürze",
    country: "Germany", flag: "DE",
  },
  {
    quote: "On-time, every time. Their documentation team replies to customs queries inside an hour. That alone is worth the relationship.",
    name: "Pradeep Mehta", title: "Director, Imports", company: "Spice Route Foods Ltd.",
    country: "United Kingdom", flag: "UK",
  },
  {
    quote: "We needed a private-label garam masala for a national grocery rollout. Saaranga turned the formulation, lab work, and 12,000 retail pouches in 38 days.",
    name: "Sarah O'Brien", title: "Procurement Lead", company: "Crown Provisions",
    country: "Canada", flag: "CA",
  },
  {
    quote: "Halal certification, kosher certification, organic — we asked for all three on a single SKU. They shipped with the paperwork on the container. Done.",
    name: "Fahad Al-Rashid", title: "Trade Manager", company: "Al-Khaleej Imports",
    country: "UAE", flag: "AE",
  },
  {
    quote: "The video walkthrough they sent before the first order sold our QA team. Then the cumin arrived three days early and pristine. Easy decision.",
    name: "Hiroshi Tanaka", title: "Buying Manager", company: "Tokyo Spice Co.",
    country: "Japan", flag: "JP",
  },
];

function Testimonials() {
  const [idx, setIdx] = React.useState(0);
  const visible = 2;
  const max = TESTIMONIALS.length - visible;

  React.useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) > max ? 0 : i + 1), 6000);
    return () => clearInterval(t);
  }, [max]);

  return (
    <section className="section" id="testimonials" style={{ background: "var(--color-bg-warm)" }}>
      <div className="container">
        <SectionHeader
          eyebrow="What buyers say"
          title={<>Six relationships. <em style={{ fontStyle: "italic", color: "var(--color-primary)" }}>Sixty-two consignments.</em> Zero rejections.</>}
          sub="A few of our long-term partners agreed to talk on the record. The full case studies are in our brochure."
          link="#"
          linkText="Read full case studies"
        />

        <div style={{ overflow: "hidden" }}>
          <div style={{
            display: "flex",
            gap: 24,
            transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
            transform: `translateX(calc(-${idx} * (50% + 12px)))`,
          }}>
            {TESTIMONIALS.map((t) => (
              <div key={t.name} style={{
                flex: "0 0 calc(50% - 12px)",
                background: "var(--color-bg)",
                padding: "44px 40px",
                position: "relative",
                border: "1px solid var(--color-line)",
              }}>
                <div style={{
                  position: "absolute", top: 24, right: 32,
                  fontFamily: "var(--font-serif)", fontSize: 96, fontWeight: 600,
                  color: "var(--color-primary)", opacity: 0.15,
                  lineHeight: 0.7,
                }}>"</div>
                <p style={{
                  fontFamily: "var(--font-serif)", fontWeight: 400,
                  fontSize: 23, lineHeight: 1.4,
                  color: "var(--color-ink)",
                  marginBottom: 36,
                  textWrap: "balance",
                }}>
                  "{t.quote}"
                </p>
                <div style={{
                  display: "flex", alignItems: "center", gap: 16,
                  paddingTop: 24,
                  borderTop: "1px solid var(--color-line)",
                }}>
                  <div style={{
                    width: 48, height: 48,
                    borderRadius: "50%",
                    background: "var(--color-primary)",
                    color: "#FBF8F1",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: 20,
                  }}>{t.name.split(" ").map(n => n.charAt(0)).slice(0, 2).join("")}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: "var(--font-serif)", fontSize: 17, fontWeight: 600 }}>{t.name}</div>
                    <div style={{ fontSize: 12, color: "var(--color-ink-mute)" }}>{t.title} · {t.company}</div>
                  </div>
                  <div style={{
                    fontFamily: "var(--font-mono)", fontSize: 10,
                    letterSpacing: "0.08em", textTransform: "uppercase",
                    background: "var(--color-bg-warm)",
                    padding: "6px 10px",
                    color: "var(--color-ink-soft)",
                  }}>{t.flag} · {t.country}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicators */}
        <div style={{
          display: "flex", justifyContent: "center", alignItems: "center", gap: 8,
          marginTop: 40,
        }}>
          {Array.from({ length: max + 1 }).map((_, i) => (
            <button key={i} onClick={() => setIdx(i)} style={{
              width: i === idx ? 32 : 8, height: 8,
              borderRadius: 4,
              background: i === idx ? "var(--color-primary)" : "var(--color-ink-mute)",
              opacity: i === idx ? 1 : 0.4,
              transition: "all 0.3s",
            }} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ---- Section 11: Latest Blog Posts --------------------------------
const BLOG_POSTS = [
  {
    cat: "Trade Insights",
    title: "Top 5 Indian spices trending globally in 2026",
    excerpt: "From Byadgi to black cardamom — the SKUs that grew double-digits this fiscal, and what's driving the demand curve.",
    author: "Vikram Patel",
    date: "Mar 14, 2026",
    read: "8 min read",
    spice: "spice-chilli",
  },
  {
    cat: "Buyer's Guide",
    title: "How to choose a reliable spice exporter (a buyer's checklist)",
    excerpt: "Twelve questions every importer should ask a new supplier before the first PO. Includes a free vendor audit template.",
    author: "Anjali Desai",
    date: "Feb 28, 2026",
    read: "12 min read",
    spice: "spice-turmeric",
  },
  {
    cat: "Origin Deep Dive",
    title: "Byadgi vs Guntur chilli — a buyer's primer",
    excerpt: "Pungency, oil content, colour. The two most popular Indian red chilli varieties side-by-side, with lab data from this year's crop.",
    author: "Sunil Iyer",
    date: "Feb 09, 2026",
    read: "10 min read",
    spice: "spice-pepper",
  },
];

function BlogPosts() {
  return (
    <section className="section" id="blog">
      <div className="container">
        <SectionHeader
          eyebrow="Field notes"
          title={<>The blog importers <em style={{ fontStyle: "italic", color: "var(--color-primary)" }}>actually bookmark.</em></>}
          sub="Crop reports, trade analysis, and origin deep-dives — written by our sourcing team, not a content agency."
          link="#"
          linkText="Read all 47 articles"
        />

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 24,
        }} className="blog-grid">
          {BLOG_POSTS.map((p) => (
            <a key={p.title} href="#" style={{
              display: "block",
              background: "var(--color-bg)",
              transition: "transform 0.25s",
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-4px)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
            >
              <div className={`spice-block ${p.spice}`} style={{ aspectRatio: "16/10", position: "relative" }}>
                <div style={{
                  position: "absolute", top: 14, left: 14,
                  background: "var(--color-bg)",
                  color: "var(--color-primary)",
                  padding: "5px 10px",
                  fontFamily: "var(--font-mono)", fontSize: 10,
                  letterSpacing: "0.12em", textTransform: "uppercase",
                  fontWeight: 600,
                }}>{p.cat}</div>
              </div>
              <div style={{ padding: "28px 4px 0" }}>
                <h3 style={{
                  fontFamily: "var(--font-serif)", fontWeight: 500,
                  fontSize: 24, lineHeight: 1.2,
                  marginBottom: 12, color: "var(--color-ink)",
                  textWrap: "balance",
                }}>{p.title}</h3>
                <p className="body" style={{ fontSize: 14, marginBottom: 20 }}>{p.excerpt}</p>
                <div style={{
                  display: "flex", justifyContent: "space-between",
                  fontFamily: "var(--font-mono)", fontSize: 10,
                  letterSpacing: "0.1em", textTransform: "uppercase",
                  color: "var(--color-ink-mute)",
                  paddingTop: 18,
                  borderTop: "1px solid var(--color-line)",
                }}>
                  <span>{p.author} · {p.date}</span>
                  <span>{p.read}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---- Section 12: FAQ Accordion ------------------------------------
const FAQS = [
  {
    q: "What spices do you export?",
    a: "We ship 36 SKUs across three formats — 14 whole spices, 10 ground powders, and 12 blends/masalas. Top runners by volume are red chilli, turmeric, cumin, coriander, black pepper, and garam masala. Full catalogue available on request.",
  },
  {
    q: "What is your minimum order quantity (MOQ)?",
    a: "Whole spices and powders ship from 1 MT (one metric ton) — typically a half-container — and scale to full 20 FT or 40 FT containers. Blends and private-label can go as low as 200 kg for first-time pilot runs.",
  },
  {
    q: "Do you offer private labelling?",
    a: "Yes. We have an in-house artwork team and a small-run packing line for retail-ready pouches (25 g to 1 kg). MOQ for private-label is 500 kg per SKU. Add 4–6 weeks lead time over standard bulk orders.",
  },
  {
    q: "What certifications do you hold?",
    a: "FSSAI, APEDA, Spices Board of India, ISO 22000:2018, HACCP, USDA Organic (NPOP), Halal (HCI), and Kosher (OK). All certificates are linked from the Quality page and we ship copies with every container.",
  },
  {
    q: "What are your packaging options?",
    a: "Standard: 25 kg or 50 kg PP woven sacks with inner LDPE liner. Premium: 25 kg jute with paper liner. Bulk: 750 kg or 1,000 kg FIBC. Retail: custom flexible pouches with nitrogen flush. All food-grade, FDA/EU compliant.",
  },
  {
    q: "Which payment methods do you accept?",
    a: "30% advance T/T against PI + 70% against scanned BL copy. Irrevocable Letter of Credit (LC) at sight, confirmed by a top-50 international bank, also accepted. For repeat buyers with 3+ orders, we extend 30-day open account terms.",
  },
  {
    q: "What is the typical delivery time?",
    a: "Production + lab + documentation: 12–18 days for in-catalogue SKUs. Ocean freight: 14–18 days to Northern Europe, 22–28 days to US East Coast, 30–36 days to US West Coast. Air shipment available on request.",
  },
  {
    q: "Do you handle customs and documentation?",
    a: "Yes. Every shipment ships with COA (Certificate of Analysis), COO (Certificate of Origin), Phytosanitary Certificate, Fumigation Certificate, MSDS, Halal/Kosher/Organic certificates as applicable, and a Bill of Lading. We coordinate directly with your customs broker if needed.",
  },
  {
    q: "Can you arrange container stuffing supervision or third-party inspection?",
    a: "Absolutely. We work with SGS, Bureau Veritas, Intertek, and Eurofins. You name the agency, we coordinate the appointment, and the inspector signs off before the seal goes on. Our cost or yours, your choice.",
  },
];

function FAQ() {
  const [open, setOpen] = React.useState(0);

  return (
    <section className="section" id="faq" style={{ background: "var(--color-bg-warm)" }}>
      <div className="container-narrow">
        <SectionHeader
          eyebrow="Frequently asked"
          title={<>The questions buyers ask us <em style={{ fontStyle: "italic", color: "var(--color-primary)" }}>before</em> placing a PO.</>}
          sub="If yours isn't here, our trade desk replies within four hours during IST business days."
          align="center"
        />

        <div style={{
          background: "var(--color-bg)",
          border: "1px solid var(--color-line)",
        }}>
          {FAQS.map((f, i) => (
            <div key={i} style={{
              borderBottom: i < FAQS.length - 1 ? "1px solid var(--color-line)" : "none",
            }}>
              <button onClick={() => setOpen(open === i ? -1 : i)} style={{
                width: "100%",
                padding: "24px 32px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 24,
                textAlign: "left",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = "rgba(161,29,29,0.03)"}
              onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
              >
                <span style={{
                  fontFamily: "var(--font-serif)", fontWeight: 500,
                  fontSize: 20, color: "var(--color-ink)",
                  display: "flex", alignItems: "center", gap: 20,
                }}>
                  <span style={{
                    fontFamily: "var(--font-mono)", fontSize: 12,
                    color: "var(--color-primary)", fontWeight: 600,
                    letterSpacing: "0.08em",
                  }}>{String(i + 1).padStart(2, "0")}</span>
                  {f.q}
                </span>
                <span style={{
                  width: 32, height: 32, flexShrink: 0,
                  borderRadius: "50%",
                  background: open === i ? "var(--color-primary)" : "transparent",
                  color: open === i ? "#FBF8F1" : "var(--color-ink)",
                  border: open === i ? "none" : "1px solid var(--color-line)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 16,
                  transition: "all 0.25s",
                }}>{open === i ? "−" : "+"}</span>
              </button>
              {open === i && (
                <div style={{
                  padding: "0 32px 28px 84px",
                  animation: "fadeIn 0.3s ease",
                }}>
                  <p className="body" style={{ fontSize: 15 }}>{f.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div style={{
          textAlign: "center", marginTop: 48,
          padding: 32, background: "var(--color-bg)",
          border: "1px solid var(--color-line)",
        }}>
          <div style={{ fontFamily: "var(--font-serif)", fontSize: 22, marginBottom: 8 }}>
            Still have questions?
          </div>
          <p className="body" style={{ marginBottom: 20 }}>
            Reach out to our trade desk — we typically reply within 4 hours, IST business days.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#" className="btn btn-primary">Schedule a call</a>
            <a href="#" className="btn btn-outline">Email trade desk</a>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, {
  OurProcess, Certifications, GlobalReach, Testimonials, BlogPosts, FAQ,
});
