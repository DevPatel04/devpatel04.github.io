// ============================================
// SAARANGA — Shared components
// Logo, Navigation (with mega menu), Floating actions, Footer
// ============================================

// Curated Unsplash photo IDs (verified free-to-use under Unsplash License)
const UNSPLASH = {
  // Red chili / chilli pepper photography
  chilli_pile:     "1678019964614-a6515d5efd44",  // pile of spices w/ red chili pepper · Carlett Badenhorst
  chilli_white:    "1583119022894-919a68a3d0e3",  // red chili on white · Mockup Graphics
  cardamom_dark:   "1758657996330-095d08451cd9",  // cardamom pods on dark surface · Neil P-A
  masala_plate:    "1633881614907-8587c9b93c2f",  // Indian masala plate (turmeric, cardamom, cloves) · VD Photography, Gujarat
};
const unsplashUrl = (id, w = 1600, h = null) => {
  const params = `fm=jpg&q=75&w=${w}&auto=format&fit=crop${h ? `&h=${h}` : ""}&ixlib=rb-4.1.0`;
  return `https://images.unsplash.com/photo-${id}?${params}`;
};

// SpicePhoto — img wrapper with gradient-block fallback
function SpicePhoto({ photoId, spice = "spice-chilli", alt = "", width = 1600, height = null, style = {}, overlay = null, children }) {
  const [loaded, setLoaded] = React.useState(false);
  const [errored, setErrored] = React.useState(false);
  const url = photoId ? unsplashUrl(photoId, width, height) : null;
  return (
    <div className={`spice-block ${spice}`} style={{
      position: "relative",
      overflow: "hidden",
      isolation: "isolate", // create own stacking context so inner z-indexed children don't bubble up
      ...style,
    }}>
      {url && !errored && (
        <img
          src={url}
          alt={alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setErrored(true)}
          style={{
            position: "absolute", inset: 0,
            width: "100%", height: "100%",
            objectFit: "cover",
            opacity: loaded ? 1 : 0,
            transition: "opacity 0.4s ease",
            zIndex: 1,
          }}
        />
      )}
      {overlay && (
        <div style={{ position: "absolute", inset: 0, zIndex: 2, pointerEvents: "none", ...overlay }} />
      )}
      {children && (
        <div style={{ position: "relative", zIndex: 3, width: "100%", height: "100%" }}>{children}</div>
      )}
    </div>
  );
}

const BRAND = {
  name: "Saaranga",
  full: "Saaranga Spice Co.",
  tagline: "Exporters of soul-deep Indian spices since 2009",
  email: "trade@saaranga.co",
  phone: "+91 79 4690 1200",
  whatsapp: "+91 98250 14400",
  address: "Plot 12, Spice Park Industrial Estate, Unjha, Gujarat 384170, India",
};

// ---- Logo (typographic, no SVG art) -------------------------------
function Logo({ light = false, compact = false }) {
  const color = light ? "#FBF8F1" : "#1A1410";
  return (
    <a href="index.html" style={{ display: "inline-flex", alignItems: "center", gap: 10, color }}>
      <span style={{
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        width: 32, height: 32,
        background: "var(--color-primary)",
        color: "#FBF8F1",
        fontFamily: "var(--font-serif)",
        fontSize: 20, fontWeight: 600,
        letterSpacing: "-0.02em",
      }}>S</span>
      {!compact && (
        <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
          <span style={{
            fontFamily: "var(--font-serif)",
            fontSize: 22, fontWeight: 600,
            letterSpacing: "-0.01em",
          }}>Saaranga</span>
          <span style={{
            fontFamily: "var(--font-mono)",
            fontSize: 9, fontWeight: 500,
            textTransform: "uppercase",
            letterSpacing: "0.18em",
            marginTop: 3,
            color: light ? "rgba(251,248,241,0.6)" : "var(--color-ink-mute)",
          }}>Spice Co. · Est. 2009</span>
        </div>
      )}
    </a>
  );
}

// ---- Top announcement bar -----------------------------------------
function AnnouncementBar() {
  return (
    <div style={{
      background: "var(--color-bg-deep)",
      color: "var(--color-bg)",
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      padding: "10px 0",
      borderBottom: "1px solid rgba(251,248,241,0.08)",
    }}>
      <div className="container" style={{
        display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24, flexWrap: "wrap",
      }}>
        <div style={{ display: "flex", gap: 24, alignItems: "center", flexWrap: "wrap" }}>
          <span style={{ display: "inline-flex", gap: 8, alignItems: "center" }}>
            <span style={{
              width: 6, height: 6, borderRadius: "50%",
              background: "#9AE6B4", boxShadow: "0 0 8px #9AE6B4",
              animation: "pulse 2s infinite",
            }} />
            FSSAI · APEDA · ISO 22000 · HACCP Certified
          </span>
          <span style={{ opacity: 0.6, display: "none" }}>•</span>
          <span style={{ opacity: 0.7 }} className="hide-sm">Exporting to 32 countries</span>
        </div>
        <div style={{ display: "flex", gap: 20, alignItems: "center" }} className="hide-sm">
          <a href="#" style={{ opacity: 0.7 }}>EN ▾</a>
          <a href="#" style={{ opacity: 0.7 }}>USD ▾</a>
          <a href={`mailto:${BRAND.email}`} style={{ opacity: 0.7 }}>{BRAND.email}</a>
        </div>
      </div>
    </div>
  );
}

// ---- Mega menu data -----------------------------------------------
const MEGA_MENU = {
  Products: {
    columns: [
      {
        title: "Whole Spices",
        href: "#",
        items: [
          { name: "Red Chilli Whole", href: "product.html" },
          { name: "Turmeric Fingers", href: "#" },
          { name: "Cumin Seeds", href: "#" },
          { name: "Coriander Seeds", href: "#" },
          { name: "Black Pepper", href: "#" },
          { name: "Green Cardamom", href: "#" },
          { name: "Cloves", href: "#" },
          { name: "Cinnamon / Cassia", href: "#" },
        ],
      },
      {
        title: "Spice Powders",
        href: "#",
        items: [
          { name: "Red Chilli Powder", href: "#" },
          { name: "Turmeric Powder", href: "#" },
          { name: "Cumin Powder", href: "#" },
          { name: "Coriander Powder", href: "#" },
          { name: "Black Pepper Powder", href: "#" },
          { name: "Ginger Powder", href: "#" },
          { name: "Fenugreek Powder", href: "#" },
          { name: "Cinnamon Powder", href: "#" },
        ],
      },
      {
        title: "Blends & Masalas",
        href: "#",
        items: [
          { name: "Garam Masala", href: "#" },
          { name: "Tandoori Masala", href: "#" },
          { name: "Biryani Masala", href: "#" },
          { name: "Chaat Masala", href: "#" },
          { name: "Sambhar Masala", href: "#" },
          { name: "Curry Powder", href: "#" },
          { name: "Pav Bhaji Masala", href: "#" },
          { name: "Chicken Masala", href: "#" },
        ],
      },
    ],
    feature: {
      eyebrow: "New harvest · 2026",
      title: "Single-origin Byadgi",
      sub: "Karnataka's mild, oil-rich red chilli — now lab-tested and ready to ship.",
      cta: "View Spec Sheet",
      ctaHref: "product.html",
      spice: "spice-chilli",
    },
  },
};

function Navigation({ active = "home" }) {
  const [megaOpen, setMegaOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { id: "home", label: "Home", href: "index.html" },
    { id: "about", label: "About", href: "#" },
    { id: "products", label: "Products", href: "#", mega: true },
    { id: "quality", label: "Quality & Certifications", href: "#" },
    { id: "process", label: "Export Process", href: "#" },
    { id: "gallery", label: "Gallery", href: "#" },
    { id: "blog", label: "Blog", href: "#" },
    { id: "contact", label: "Contact", href: "#" },
  ];

  return (
    <>
      <AnnouncementBar />
      <nav
        onMouseLeave={() => setMegaOpen(false)}
        style={{
          background: "var(--color-bg)",
          borderBottom: `1px solid ${scrolled ? "var(--color-line)" : "transparent"}`,
          position: "sticky", top: 0, zIndex: 50,
          transition: "border-color 0.2s",
        }}
      >
        <div className="container" style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          height: 76,
        }}>
          <Logo />

          <div style={{ display: "flex", gap: 4, alignItems: "center" }} className="nav-links">
            {navLinks.map((l) => (
              <div
                key={l.id}
                onMouseEnter={() => setMegaOpen(l.mega ? true : false)}
                style={{ position: "relative" }}
              >
                <a
                  href={l.href}
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 4,
                    padding: "10px 14px",
                    fontSize: 13.5,
                    fontWeight: 500,
                    color: active === l.id ? "var(--color-primary)" : "var(--color-ink)",
                    borderBottom: active === l.id ? "2px solid var(--color-primary)" : "2px solid transparent",
                    position: "relative",
                  }}
                >
                  {l.label}
                  {l.mega && <span style={{ fontSize: 9, opacity: 0.6 }}>▼</span>}
                </a>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <a href="#brochure" className="btn btn-outline hide-md" style={{ padding: "10px 16px", fontSize: 11 }}>
              <span style={{ fontSize: 14 }}>↓</span> Brochure
            </a>
            <a href="#quote" className="btn btn-primary" style={{ padding: "10px 18px", fontSize: 11 }}>
              Get a Quote
            </a>
            <button
              className="nav-mobile-trigger"
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{
                display: "none",
                width: 40, height: 40,
                border: "1px solid var(--color-line)",
                alignItems: "center", justifyContent: "center",
                flexDirection: "column", gap: 4,
              }}
              aria-label="Menu"
            >
              <span style={{ width: 18, height: 1.5, background: "var(--color-ink)" }} />
              <span style={{ width: 18, height: 1.5, background: "var(--color-ink)" }} />
              <span style={{ width: 18, height: 1.5, background: "var(--color-ink)" }} />
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {mobileOpen && (
          <div style={{
            position: "absolute", top: "100%", left: 0, right: 0,
            background: "var(--color-bg)",
            borderTop: "1px solid var(--color-line)",
            borderBottom: "1px solid var(--color-line)",
            padding: "16px 0",
            boxShadow: "0 16px 32px rgba(0,0,0,0.08)",
          }}>
            <div className="container" style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {navLinks.map((l) => (
                <a key={l.id} href={l.href} style={{
                  padding: "12px 0",
                  fontFamily: "var(--font-serif)", fontSize: 20,
                  color: active === l.id ? "var(--color-primary)" : "var(--color-ink)",
                  borderBottom: "1px solid var(--color-line)",
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                }} onClick={() => setMobileOpen(false)}>
                  {l.label}
                  <span style={{ color: "var(--color-ink-mute)", fontSize: 14 }}>→</span>
                </a>
              ))}
              <a href="#brochure" className="btn btn-outline" style={{ marginTop: 12 }}>↓ Download Brochure</a>
            </div>
          </div>
        )}

        {/* Mega Menu */}
        {megaOpen && (
          <div
            onMouseEnter={() => setMegaOpen(true)}
            style={{
              position: "absolute", left: 0, right: 0, top: "100%",
              background: "var(--color-bg)",
              borderTop: "1px solid var(--color-line)",
              borderBottom: "1px solid var(--color-line)",
              boxShadow: "0 24px 40px -16px rgba(26,20,16,0.12)",
              animation: "fadeIn 0.18s ease",
            }}
          >
            <div className="container" style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr 1.2fr",
              gap: 48,
              padding: "40px 32px",
            }}>
              {MEGA_MENU.Products.columns.map((col) => (
                <div key={col.title}>
                  <div className="eyebrow" style={{ marginBottom: 18 }}>{col.title}</div>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                    {col.items.map((it) => (
                      <li key={it.name}>
                        <a href={it.href} style={{
                          fontFamily: "var(--font-serif)",
                          fontSize: 19,
                          fontWeight: 500,
                          color: "var(--color-ink)",
                          display: "inline-block",
                          transition: "color 0.15s",
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.color = "var(--color-primary)"}
                        onMouseLeave={(e) => e.currentTarget.style.color = "var(--color-ink)"}
                        >{it.name}</a>
                      </li>
                    ))}
                  </ul>
                  <a href={col.href} className="btn-ghost" style={{ marginTop: 18, display: "inline-block" }}>
                    View all
                  </a>
                </div>
              ))}
              <div style={{
                background: "var(--color-bg-warm)",
                padding: 28,
                position: "relative",
                overflow: "hidden",
              }}>
                <div className={`spice-block ${MEGA_MENU.Products.feature.spice}`} style={{
                  position: "absolute", inset: 0, opacity: 0.18,
                }} />
                <div style={{ position: "relative" }}>
                  <div className="eyebrow" style={{ marginBottom: 12 }}>
                    {MEGA_MENU.Products.feature.eyebrow}
                  </div>
                  <div className="h-3" style={{ marginBottom: 8 }}>
                    {MEGA_MENU.Products.feature.title}
                  </div>
                  <div className="body" style={{ marginBottom: 20, fontSize: 14 }}>
                    {MEGA_MENU.Products.feature.sub}
                  </div>
                  <a href={MEGA_MENU.Products.feature.ctaHref} className="btn btn-primary" style={{ padding: "10px 16px", fontSize: 11 }}>
                    {MEGA_MENU.Products.feature.cta}
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

// ---- Floating actions ---------------------------------------------
function FloatingActions() {
  return (
    <div className="float-actions">
      <a className="float-btn float-btn-whatsapp" href={`https://wa.me/${BRAND.whatsapp.replace(/[^0-9]/g, "")}`} aria-label="WhatsApp">
        <span style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: 22 }}>W</span>
        <span className="float-tooltip">Chat on WhatsApp</span>
      </a>
      <a className="float-btn float-btn-call" href={`tel:${BRAND.phone.replace(/[^0-9+]/g, "")}`} aria-label="Call">
        <span style={{ fontSize: 22 }}>☏</span>
        <span className="float-tooltip">{BRAND.phone}</span>
      </a>
    </div>
  );
}

// ---- Footer CTA Banner --------------------------------------------
function FooterCTABanner() {
  return (
    <section style={{
      background: "var(--color-primary)",
      color: "#FBF8F1",
      padding: "80px 0",
      position: "relative",
      overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage:
          "radial-gradient(circle at 15% 30%, rgba(255,255,255,0.06) 1px, transparent 2px)," +
          "radial-gradient(circle at 70% 70%, rgba(0,0,0,0.10) 1px, transparent 2px)," +
          "radial-gradient(circle at 40% 50%, rgba(255,255,255,0.04) 1px, transparent 2px)",
        backgroundSize: "120px 120px, 100px 100px, 80px 80px",
        opacity: 0.6,
      }} />
      <div className="container" style={{ position: "relative", textAlign: "center" }}>
        <div style={{
          fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.2em",
          textTransform: "uppercase", opacity: 0.75, marginBottom: 18,
        }}>
          — From our warehouse to your port —
        </div>
        <h2 className="h-1" style={{ maxWidth: 880, margin: "0 auto 18px", color: "#FBF8F1" }}>
          Looking for a reliable spice <em style={{ fontStyle: "italic", fontFamily: "var(--font-serif)" }}>export partner?</em> Let's talk.
        </h2>
        <p style={{ fontSize: 17, opacity: 0.85, maxWidth: 640, margin: "0 auto 32px" }}>
          Request a sample, get a quote, or schedule a video walkthrough of our processing facility.
        </p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#quote" className="btn btn-large" style={{
            background: "#FBF8F1", color: "var(--color-primary)",
          }}>Get a Free Quote</a>
          <a href="#" className="btn btn-large btn-outline-light">Request a Sample</a>
        </div>
      </div>
    </section>
  );
}

// ---- Footer -------------------------------------------------------
function Footer() {
  return (
    <footer className="surface-dark" style={{ paddingTop: 80, paddingBottom: 24 }}>
      <div className="container">
        <div style={{
          display: "grid",
          gridTemplateColumns: "1.4fr 1fr 1fr 1.4fr",
          gap: 64,
          paddingBottom: 64,
          borderBottom: "1px solid rgba(251,248,241,0.10)",
        }} className="footer-grid">
          <div>
            <Logo light />
            <p className="body" style={{ marginTop: 20, maxWidth: 320 }}>
              A third-generation spice trading house from Unjha, Gujarat — supplying export-grade whole spices, powders, and custom blends to importers in 32 countries.
            </p>
            <div style={{ marginTop: 28, display: "flex", gap: 12 }}>
              {["in", "ig", "fb", "yt", "wa"].map((s) => (
                <a key={s} href="#" style={{
                  width: 36, height: 36,
                  border: "1px solid rgba(251,248,241,0.20)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "var(--font-mono)", fontSize: 10, textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  transition: "background 0.2s, border-color 0.2s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "var(--color-primary)"; e.currentTarget.style.borderColor = "var(--color-primary)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(251,248,241,0.20)"; }}
                >{s}</a>
              ))}
            </div>
          </div>

          <div>
            <div className="eyebrow" style={{ color: "var(--color-saffron)", marginBottom: 20 }}>Explore</div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
              {["About Us", "Our Process", "Quality & Certifications", "Gallery", "Blog", "Careers", "Contact"].map((l) => (
                <li key={l}><a href="#" style={{ opacity: 0.75, fontSize: 14 }}>{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <div className="eyebrow" style={{ color: "var(--color-saffron)", marginBottom: 20 }}>Products</div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
              {["Whole Spices", "Spice Powders", "Blends & Masalas", "Herbs & Seeds", "Organic Range", "Private Label", "Bulk Catalogue (PDF)"].map((l) => (
                <li key={l}><a href="#" style={{ opacity: 0.75, fontSize: 14 }}>{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <div className="eyebrow" style={{ color: "var(--color-saffron)", marginBottom: 20 }}>Contact & Trade</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16, fontSize: 14, opacity: 0.85 }}>
              <div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, opacity: 0.55, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 4 }}>Head Office</div>
                {BRAND.address}
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, opacity: 0.55, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 4 }}>Trade Desk</div>
                <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a><br />
                <a href={`tel:${BRAND.phone}`}>{BRAND.phone}</a>
              </div>
              <div style={{ marginTop: 8 }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, opacity: 0.55, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 8 }}>Newsletter</div>
                <div style={{ display: "flex", borderBottom: "1px solid rgba(251,248,241,0.30)" }}>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    style={{
                      background: "transparent", border: "none", outline: "none",
                      color: "#FBF8F1", padding: "8px 0",
                      fontSize: 14, flex: 1, fontFamily: "var(--font-sans)",
                    }}
                  />
                  <button style={{
                    color: "var(--color-saffron)", fontSize: 18, padding: "8px 0",
                  }}>→</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{
          display: "flex", justifyContent: "space-between",
          alignItems: "center", paddingTop: 24,
          fontSize: 12, opacity: 0.55,
          flexWrap: "wrap", gap: 12,
        }}>
          <div>© 2026 Saaranga Spice Trading Co. Pvt. Ltd. — All rights reserved.</div>
          <div style={{ display: "flex", gap: 24 }}>
            <a href="#">Privacy</a>
            <a href="#">Terms of Trade</a>
            <a href="#">Shipping Policy</a>
            <a href="#">Sitemap</a>
          </div>
          <div style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.08em" }}>
            IEC: 2410012345 · APEDA RCMC: SPI/26/4421
          </div>
        </div>
      </div>
    </footer>
  );
}

// ---- Section header ------------------------------------------------
function SectionHeader({ eyebrow, title, sub, link, linkText = "View all", align = "split" }) {
  if (align === "center") {
    return (
      <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto 64px" }}>
        {eyebrow && <div className="eyebrow" style={{ justifyContent: "center", marginBottom: 18 }}>{eyebrow}</div>}
        <h2 className="h-2" style={{ marginBottom: 16 }}>{title}</h2>
        {sub && <p className="lead">{sub}</p>}
      </div>
    );
  }
  return (
    <div className="section-header">
      <div>
        {eyebrow && <div className="eyebrow" style={{ marginBottom: 18 }}>{eyebrow}</div>}
        <h2 className="h-2">{title}</h2>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 16 }}>
        {sub && <p className="lead" style={{ maxWidth: 540 }}>{sub}</p>}
        {link && <a href={link} className="btn-ghost">{linkText}</a>}
      </div>
    </div>
  );
}

// ---- Export to window ---------------------------------------------
Object.assign(window, {
  BRAND,
  UNSPLASH, unsplashUrl, SpicePhoto,
  Logo,
  AnnouncementBar,
  Navigation,
  FloatingActions,
  FooterCTABanner,
  Footer,
  SectionHeader,
});
