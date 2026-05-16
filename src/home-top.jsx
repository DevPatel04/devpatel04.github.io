// ============================================
// Home — Top sections
// Hero, About Snapshot, Product Categories, Featured Products,
// Stats Counter, Why Choose Us
// ============================================

// ---- Section 1: Hero Slider ---------------------------------------
const HERO_SLIDES = [
  {
    eyebrow: "01 — From the soil of India",
    title: "Premium Indian spices,",
    titleEm: "exported to the world.",
    sub: "Single-origin whole spices, custom blends, and lab-tested powders — sourced direct from farms in Andhra Pradesh, Karnataka, Gujarat & Kerala.",
    primary: { label: "Explore Products", href: "#categories" },
    secondary: { label: "Request a Sample", href: "#" },
    spice: "spice-chilli",
    photoId: window.UNSPLASH?.chilli_pile,
    tag: "Guntur · Karnataka · Gujarat",
    overlay: 0.55,
  },
  {
    eyebrow: "02 — This season's harvest",
    title: "Farm-fresh chilli, turmeric &",
    titleEm: "cumin from the heart of India.",
    sub: "Each consignment is traceable to its field, sun-dried, steam-sterilized on request, and tested for aflatoxin and pesticide residue to EU compliance.",
    primary: { label: "Request a Sample", href: "#" },
    secondary: { label: "See Certifications", href: "#certs" },
    spice: "spice-turmeric",
    photoId: window.UNSPLASH?.masala_plate,
    tag: "Erode · Unjha · Idukki",
    overlay: 0.50,
  },
  {
    eyebrow: "03 — Global reach",
    title: "Trusted by importers in",
    titleEm: "32 countries.",
    sub: "From a 30-foot kirana store in 1962 to a 14,000 sq ft processing facility today — three generations, one obsession.",
    primary: { label: "Get a Quote", href: "#quote" },
    secondary: { label: "Our Story", href: "#" },
    spice: "spice-pepper",
    photoId: window.UNSPLASH?.cardamom_dark,
    tag: "Mundra · Nhava Sheva",
    overlay: 0.55,
  },
];

function Hero() {
  const [idx, setIdx] = React.useState(0);
  const [paused, setPaused] = React.useState(false);

  React.useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % HERO_SLIDES.length), 6500);
    return () => clearInterval(t);
  }, [paused]);

  const slide = HERO_SLIDES[idx];

  return (
    <section
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      style={{
        position: "relative",
        height: "min(86vh, 820px)",
        minHeight: 620,
        overflow: "hidden",
        background: "var(--color-bg-deep)",
        color: "#FBF8F1",
      }}
    >
      {/* Spice gradient background with optional real photo */}
      {slide.photoId ? (
        <SpicePhoto
          key={`bg-${idx}`}
          photoId={slide.photoId}
          spice={slide.spice}
          width={2400}
          alt={slide.title}
          style={{ position: "absolute", inset: 0, animation: "fadeIn 1.2s ease" }}
        />
      ) : (
        <div className={`spice-block ${slide.spice}`}
          key={`bg-${idx}`}
          style={{ position: "absolute", inset: 0, animation: "fadeIn 1.2s ease" }} />
      )}

      {/* Layered overlay — strong at bottom-left for text legibility, soft at top-right to keep image visible */}
      <div style={{
        position: "absolute", inset: 0,
        background:
          "linear-gradient(120deg, rgba(15,8,4,0.78) 0%, rgba(15,8,4,0.55) 38%, rgba(15,8,4,0.18) 75%, rgba(15,8,4,0.05) 100%)," +
          "linear-gradient(180deg, rgba(15,8,4,0.10) 0%, transparent 30%, transparent 60%, rgba(15,8,4,0.50) 100%)",
      }} />

      {/* Subtle vignette + grain */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "repeating-linear-gradient(0deg, transparent 0 2px, rgba(0,0,0,0.06) 2px 3px)",
        mixBlendMode: "overlay", pointerEvents: "none",
      }} />

      {/* Content */}
      <div className="container" style={{
        position: "relative", height: "100%",
        display: "flex", flexDirection: "column", justifyContent: "flex-end",
        paddingBottom: 96,
      }}>
        <div style={{ maxWidth: 880 }} key={`content-${idx}`}>
          <div className="eyebrow" style={{
            color: "var(--color-saffron)", marginBottom: 28,
            animation: "fadeUp 0.6s ease",
            textShadow: "0 2px 12px rgba(0,0,0,0.4)",
          }}>
            {slide.eyebrow}
          </div>
          <h1 style={{
            fontFamily: "var(--font-serif)", fontWeight: 500,
            fontSize: "clamp(48px, 7vw, 96px)",
            lineHeight: 1.0, letterSpacing: "-0.02em",
            marginBottom: 28,
            animation: "fadeUp 0.7s ease",
            textShadow: "0 4px 32px rgba(0,0,0,0.5)",
          }}>
            {slide.title}<br />
            <span style={{ fontStyle: "italic", color: "var(--color-saffron)" }}>{slide.titleEm}</span>
          </h1>
          <p style={{
            fontSize: "clamp(16px, 1.4vw, 19px)",
            lineHeight: 1.55,
            maxWidth: 620,
            opacity: 0.92,
            marginBottom: 40,
            animation: "fadeUp 0.8s ease",
            textShadow: "0 2px 16px rgba(0,0,0,0.5)",
          }}>
            {slide.sub}
          </p>
          <div style={{
            display: "flex", gap: 12, flexWrap: "wrap",
            animation: "fadeUp 0.9s ease",
          }}>
            <a href={slide.primary.href} className="btn btn-large" style={{
              background: "var(--color-saffron)", color: "var(--color-ink)",
            }}>{slide.primary.label}</a>
            <a href={slide.secondary.href} className="btn btn-large btn-outline-light" style={{
              background: "rgba(0,0,0,0.2)",
              backdropFilter: "blur(4px)",
            }}>
              {slide.secondary.label}
            </a>
          </div>
        </div>

        {/* Slide controls + indicator */}
        <div style={{
          position: "absolute", bottom: 40, right: 32,
          display: "flex", alignItems: "center", gap: 24,
        }}>
          <div style={{
            fontFamily: "var(--font-mono)", fontSize: 12,
            letterSpacing: "0.1em",
            display: "flex", alignItems: "center", gap: 12,
            textShadow: "0 2px 8px rgba(0,0,0,0.5)",
          }}>
            <span style={{ fontSize: 22, fontFamily: "var(--font-serif)" }}>{String(idx + 1).padStart(2, "0")}</span>
            <span style={{ width: 32, height: 1, background: "currentColor", opacity: 0.4 }} />
            <span style={{ opacity: 0.6 }}>{String(HERO_SLIDES.length).padStart(2, "0")}</span>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <button onClick={() => setIdx((idx - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)} style={{
              width: 44, height: 44,
              border: "1px solid rgba(251,248,241,0.4)",
              background: "rgba(20,12,8,0.4)",
              backdropFilter: "blur(4px)",
              color: "#FBF8F1", fontSize: 16,
              transition: "all 0.15s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "var(--color-saffron)"; e.currentTarget.style.color = "var(--color-ink)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(20,12,8,0.4)"; e.currentTarget.style.color = "#FBF8F1"; }}
            >←</button>
            <button onClick={() => setIdx((idx + 1) % HERO_SLIDES.length)} style={{
              width: 44, height: 44,
              border: "1px solid rgba(251,248,241,0.4)",
              background: "rgba(20,12,8,0.4)",
              backdropFilter: "blur(4px)",
              color: "#FBF8F1", fontSize: 16,
              transition: "all 0.15s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "var(--color-saffron)"; e.currentTarget.style.color = "var(--color-ink)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(20,12,8,0.4)"; e.currentTarget.style.color = "#FBF8F1"; }}
            >→</button>
          </div>
        </div>

        {/* Bottom indicators bar */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0,
          display: "flex", gap: 0,
        }}>
          {HERO_SLIDES.map((_, i) => (
            <div key={i} style={{ flex: 1, height: 3, background: "rgba(251,248,241,0.15)", position: "relative", overflow: "hidden" }}>
              <div style={{
                position: "absolute", inset: 0, background: "var(--color-saffron)",
                transformOrigin: "left",
                transform: i === idx ? "scaleX(1)" : i < idx ? "scaleX(1)" : "scaleX(0)",
                transition: i === idx && !paused ? "transform 6.5s linear" : "transform 0.3s",
                opacity: i === idx ? 1 : i < idx ? 0.5 : 0,
              }} />
            </div>
          ))}
        </div>
      </div>

      {/* Top-right scroll cue */}
      <div style={{
        position: "absolute", top: 40, right: 32,
        fontFamily: "var(--font-mono)", fontSize: 11,
        letterSpacing: "0.18em", textTransform: "uppercase",
        opacity: 0.7,
        writingMode: "vertical-rl",
        textShadow: "0 2px 8px rgba(0,0,0,0.5)",
      }}>
        Scroll to explore ↓
      </div>
    </section>
  );
}

// ---- Section 2: About Snapshot ------------------------------------
function AboutSnapshot() {
  return (
    <section className="section" id="about" style={{ paddingTop: 120 }}>
      <div className="container">
        <div style={{
          display: "grid",
          gridTemplateColumns: "0.95fr 1fr",
          gap: 96,
          alignItems: "center",
        }} className="about-grid">
          {/* Left: image */}
          <div style={{ position: "relative" }}>
            <SpicePhoto
              photoId={window.UNSPLASH?.masala_plate}
              spice="spice-turmeric"
              width={1200}
              alt="Saaranga warehouse — sorting and grading floor"
              style={{ aspectRatio: "4/5" }}
            >
              <div className="ph-label" style={{
                position: "absolute", bottom: 20, left: 20,
                background: "rgba(251,248,241,0.95)",
              }}>
                Sorting & grading floor · Unjha
              </div>
            </SpicePhoto>
            {/* Floating badge */}
            <div style={{
              position: "absolute",
              top: -32, right: -32,
              width: 180, height: 180,
              borderRadius: "50%",
              background: "var(--color-ink)",
              color: "var(--color-bg)",
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center",
              textAlign: "center",
              padding: 16,
              boxShadow: "0 16px 40px rgba(26,20,16,0.18)",
              transform: "rotate(-6deg)",
              animation: "pulse 6s ease-in-out infinite",
            }}>
              <div style={{
                fontFamily: "var(--font-serif)",
                fontSize: 56, lineHeight: 1, fontWeight: 500,
                color: "var(--color-saffron)",
              }}>17</div>
              <div style={{
                fontFamily: "var(--font-mono)", fontSize: 10,
                letterSpacing: "0.16em", textTransform: "uppercase",
                marginTop: 6, opacity: 0.85,
              }}>Years of<br />Export Trust</div>
            </div>
            {/* Bottom-left footnote */}
            <div style={{
              position: "absolute", bottom: -20, left: -20,
              background: "var(--color-bg)",
              border: "1px solid var(--color-line)",
              padding: "14px 18px",
              fontFamily: "var(--font-mono)", fontSize: 11,
              letterSpacing: "0.08em",
              maxWidth: 240,
            }}>
              <div style={{ color: "var(--color-primary)", textTransform: "uppercase", marginBottom: 4 }}>EST. 2009</div>
              <div style={{ color: "var(--color-ink)" }}>Spice Park, Unjha — the world's largest cumin market.</div>
            </div>
          </div>

          {/* Right: copy */}
          <div>
            <div className="eyebrow" style={{ marginBottom: 28 }}>Our Story</div>
            <h2 style={{
              fontFamily: "var(--font-serif)", fontWeight: 500,
              fontSize: "clamp(36px, 4vw, 56px)",
              lineHeight: 1.05, letterSpacing: "-0.015em",
              marginBottom: 28,
              textWrap: "balance",
            }}>
              We don't just export spices — we export the <em style={{ color: "var(--color-primary)" }}>soul of India.</em>
            </h2>
            <p className="lead" style={{ marginBottom: 22 }}>
              Three generations of the Patel family have walked the same fields in Gujarat — selecting cumin by smell, chilli by colour, turmeric by the snap of the rhizome. We still buy that way, only now we ship 5,400 metric tons of it to 32 countries each year.
            </p>
            <p className="body" style={{ marginBottom: 36 }}>
              Every consignment passes through a 14-point lab protocol before it leaves Mundra port: moisture, ash, aflatoxin, pesticide residue, foreign matter. The result is the kind of consistency importers can build a private-label line around — and the kind of warmth a customer can taste.
            </p>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 24,
              marginBottom: 36,
              padding: "28px 0",
              borderTop: "1px solid var(--color-line)",
              borderBottom: "1px solid var(--color-line)",
            }}>
              {[
                { num: "32", label: "Countries served" },
                { num: "5,400", label: "MT shipped / year" },
                { num: "84", label: "SKUs in catalogue" },
              ].map((s) => (
                <div key={s.label}>
                  <div style={{
                    fontFamily: "var(--font-serif)", fontSize: 36,
                    fontWeight: 500, lineHeight: 1, color: "var(--color-primary)",
                  }}>{s.num}</div>
                  <div style={{
                    fontFamily: "var(--font-mono)", fontSize: 11,
                    letterSpacing: "0.1em", textTransform: "uppercase",
                    color: "var(--color-ink-mute)", marginTop: 8,
                  }}>{s.label}</div>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: 12 }}>
              <a href="#" className="btn btn-outline">Read the full story</a>
              <a href="#" className="btn-ghost" style={{ alignSelf: "center" }}>Meet the team</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---- Section 3: Product Categories --------------------------------
const CATEGORIES = [
  {
    id: "whole",
    num: "01",
    name: "Whole Spices",
    skus: "14 SKUs",
    desc: "Sun-dried, hand-cleaned and graded at source. Red chilli, cumin, coriander, fennel, cardamom, black pepper, cinnamon, cloves, star anise & more.",
    spice: "spice-chilli",
    photoId: window.UNSPLASH?.chilli_pile,
    highlights: ["Red Chilli", "Turmeric Fingers", "Cumin Seeds", "Black Pepper"],
  },
  {
    id: "powder",
    num: "02",
    name: "Spice Powders",
    skus: "10 SKUs",
    desc: "Ground in nitrogen-flushed mills to preserve volatile oils. Custom mesh sizes (40, 60, 80) and ASTA colour values to your spec.",
    spice: "spice-turmeric",
    photoId: window.UNSPLASH?.masala_plate,
    highlights: ["Chilli Powder", "Turmeric Powder", "Cumin Powder", "Ginger Powder"],
  },
  {
    id: "blend",
    num: "03",
    name: "Blends & Masalas",
    skus: "12 SKUs",
    desc: "Family recipes refined for export shelves. Garam masala, biryani masala, tandoori, chaat, curry powder — and private-label formulations on request.",
    spice: "spice-garam",
    photoId: window.UNSPLASH?.cardamom_dark,
    highlights: ["Garam Masala", "Tandoori", "Biryani Masala", "Chaat Masala"],
  },
];

function ProductCategories() {
  return (
    <section className="section" id="categories" style={{ background: "var(--color-bg-warm)" }}>
      <div className="container">
        <SectionHeader
          eyebrow="What we export"
          title={<>A catalogue of <em style={{ fontStyle: "italic", color: "var(--color-primary)" }}>36 spices</em>, three formats, one obsession with quality.</>}
          sub="Browse by format. Every SKU ships with a Certificate of Analysis, Certificate of Origin, and Phytosanitary documentation."
          link="#"
          linkText="Download full catalogue (PDF)"
        />

        <div style={{
          display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20,
        }} className="cat-grid">
          {CATEGORIES.map((cat) => (
            <a key={cat.id} href="#" style={{
              display: "block",
              background: "var(--color-bg)",
              border: "1px solid var(--color-line)",
              overflow: "hidden",
              position: "relative",
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 24px 48px -16px rgba(26,20,16,0.18)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
            >
              {/* Image */}
              {cat.photoId ? (
                <SpicePhoto photoId={cat.photoId} spice={cat.spice} width={900} alt={cat.name} style={{ aspectRatio: "5/4" }}>
                  <div style={{
                    position: "absolute", top: 20, left: 20,
                    fontFamily: "var(--font-mono)", fontSize: 11,
                    letterSpacing: "0.16em", color: "rgba(251,248,241,0.95)",
                    background: "rgba(20,12,8,0.55)",
                    backdropFilter: "blur(4px)",
                    padding: "6px 10px",
                    textTransform: "uppercase",
                  }}>{cat.num} / {cat.skus}</div>
                </SpicePhoto>
              ) : (
                <div className={`spice-block ${cat.spice}`} style={{ aspectRatio: "5/4", position: "relative" }}>
                  <div style={{
                    position: "absolute", top: 20, left: 20,
                    fontFamily: "var(--font-mono)", fontSize: 11,
                    letterSpacing: "0.16em", color: "rgba(251,248,241,0.85)",
                    background: "rgba(20,12,8,0.4)",
                    backdropFilter: "blur(4px)",
                    padding: "6px 10px",
                    textTransform: "uppercase",
                  }}>{cat.num} / {cat.skus}</div>
                </div>
              )}
              {/* Copy */}
              <div style={{ padding: "32px 28px" }}>
                <h3 className="h-3" style={{ marginBottom: 12 }}>{cat.name}</h3>
                <p className="body" style={{ marginBottom: 20, minHeight: 70 }}>{cat.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 24 }}>
                  {cat.highlights.map((h) => (
                    <span key={h} style={{
                      fontFamily: "var(--font-mono)", fontSize: 10,
                      letterSpacing: "0.08em", textTransform: "uppercase",
                      padding: "5px 10px",
                      background: "var(--color-bg-warm)",
                      color: "var(--color-ink-soft)",
                    }}>{h}</span>
                  ))}
                </div>
                <span className="btn-ghost">Explore range</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---- Section 4: Featured Products ---------------------------------
const FEATURED_PRODUCTS = [
  { id: "chilli", name: "Red Chilli Whole", origin: "Guntur, AP", tag: "Sun-dried · vibrant red · 35,000 SHU", spice: "spice-chilli", photoId: window.UNSPLASH?.chilli_white, featured: true, href: "product.html" },
  { id: "turmeric", name: "Turmeric Fingers", origin: "Erode, TN", tag: "Curcumin 3.5–5.5% · ASTA 8,000–10,000", spice: "spice-turmeric", href: "#" },
  { id: "cumin", name: "Cumin Seeds (Jeera)", origin: "Unjha, GJ", tag: "Singapore quality · ash <8% · oil 2.5–4%", spice: "spice-cumin", href: "#" },
  { id: "cardamom", name: "Green Cardamom", origin: "Idukki, KL", tag: "8 mm bold · cineol 28–34% · machine-cleaned", spice: "spice-cardamom", photoId: window.UNSPLASH?.cardamom_dark, href: "#" },
  { id: "pepper", name: "Black Pepper", origin: "Tellicherry, KL", tag: "550 GL+ · piperine 4.5% min · TGSEB grade", spice: "spice-pepper", href: "#" },
  { id: "coriander", name: "Coriander Seeds", origin: "Kota, RJ", tag: "Eagle quality · 3.5–5 mm · oil 0.4–1.0%", spice: "spice-coriander", href: "#" },
  { id: "cinnamon", name: "Cinnamon Sticks", origin: "Cochin, KL", tag: "Cassia 8 cm · oil 1.5–4% · hand-rolled", spice: "spice-cinnamon", href: "#" },
  { id: "clove", name: "Cloves", origin: "Nilgiris, TN", tag: "5–6 mm · eugenol 75% min · stems removed", spice: "spice-clove", href: "#" },
];

function FeaturedProducts() {
  return (
    <section className="section" id="featured">
      <div className="container">
        <SectionHeader
          eyebrow="Featured this season"
          title={<>The bestsellers. <em style={{ fontStyle: "italic", color: "var(--color-primary)" }}>Tested twice.</em> Loved everywhere.</>}
          sub="Our top eight SKUs by volume, with the technical specs buyers care about written right on the card."
          link="#"
          linkText="See all 36 products"
        />

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 16,
        }} className="featured-grid">
          {FEATURED_PRODUCTS.map((p) => (
            <a key={p.id} href={p.href} style={{
              display: "block",
              position: "relative",
              background: "var(--color-bg)",
              border: "1px solid var(--color-line)",
              transition: "all 0.25s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--color-primary)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--color-line)"; }}
            >
              {/* Spice block */}
              {p.photoId ? (
                <SpicePhoto photoId={p.photoId} spice={p.spice} width={600} alt={p.name} style={{ aspectRatio: "1/1" }}>
                  {p.featured && (
                    <div style={{
                      position: "absolute", top: 12, left: 12,
                      background: "var(--color-saffron)",
                      color: "var(--color-ink)",
                      padding: "4px 8px",
                      fontFamily: "var(--font-mono)", fontSize: 9,
                      letterSpacing: "0.14em", textTransform: "uppercase",
                      fontWeight: 600,
                    }}>★ Bestseller</div>
                  )}
                  <div style={{
                    position: "absolute", bottom: 12, right: 12,
                    width: 36, height: 36,
                    background: "rgba(251,248,241,0.95)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    borderRadius: "50%",
                    fontSize: 14, color: "var(--color-primary)",
                  }} title="WhatsApp inquiry">W</div>
                </SpicePhoto>
              ) : (
                <div className={`spice-block ${p.spice}`} style={{ aspectRatio: "1/1", position: "relative" }}>
                  {p.featured && (
                    <div style={{
                      position: "absolute", top: 12, left: 12,
                      background: "var(--color-saffron)",
                      color: "var(--color-ink)",
                      padding: "4px 8px",
                      fontFamily: "var(--font-mono)", fontSize: 9,
                      letterSpacing: "0.14em", textTransform: "uppercase",
                      fontWeight: 600,
                    }}>★ Bestseller</div>
                  )}
                  <div style={{
                    position: "absolute", bottom: 12, right: 12,
                    width: 36, height: 36,
                    background: "rgba(251,248,241,0.9)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    borderRadius: "50%",
                    fontSize: 14, color: "var(--color-primary)",
                    opacity: 0.95,
                  }} title="WhatsApp inquiry">W</div>
                </div>
              )}
              {/* Info */}
              <div style={{ padding: "20px 18px" }}>
                <div style={{
                  fontFamily: "var(--font-mono)", fontSize: 10,
                  letterSpacing: "0.12em", textTransform: "uppercase",
                  color: "var(--color-ink-mute)", marginBottom: 6,
                }}>{p.origin}</div>
                <h3 style={{
                  fontFamily: "var(--font-serif)", fontWeight: 500,
                  fontSize: 22, lineHeight: 1.15,
                  marginBottom: 8, color: "var(--color-ink)",
                }}>{p.name}</h3>
                <p style={{ fontSize: 12.5, color: "var(--color-ink-soft)", lineHeight: 1.45, minHeight: 36 }}>
                  {p.tag}
                </p>
                <div style={{
                  marginTop: 16, paddingTop: 14,
                  borderTop: "1px solid var(--color-line)",
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                }}>
                  <span style={{
                    fontFamily: "var(--font-mono)", fontSize: 10,
                    letterSpacing: "0.12em", textTransform: "uppercase",
                    color: "var(--color-primary)", fontWeight: 600,
                  }}>View Spec Sheet →</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---- Section 5: Stats Counter -------------------------------------
const STATS = [
  { num: "17", suffix: "+", label: "Years of Excellence", sub: "Family-run since 2009" },
  { num: "32", suffix: "", label: "Countries Exported", sub: "Across 5 continents" },
  { num: "5,400", suffix: " MT", label: "Annual Capacity", sub: "From a 14,000 sq ft facility" },
  { num: "540", suffix: "+", label: "Happy Buyers", sub: "Importers, brands & retailers" },
  { num: "100", suffix: "%", label: "Quality Assured", sub: "14-point lab protocol" },
];

function useCountUp(target, duration = 1800, trigger = true) {
  const [val, setVal] = React.useState(0);
  React.useEffect(() => {
    if (!trigger) return;
    const num = parseFloat(target.toString().replace(/,/g, "")) || 0;
    const start = performance.now();
    let raf;
    const step = (t) => {
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(num * eased);
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, trigger]);
  return val;
}

function StatItem({ stat, trigger }) {
  const target = parseFloat(stat.num.replace(/,/g, "")) || 0;
  const val = useCountUp(target, 2000, trigger);
  const formatted = target >= 1000
    ? Math.round(val).toLocaleString("en-IN")
    : Math.round(val);
  return (
    <div style={{ padding: "0 20px", textAlign: "center" }}>
      <div style={{
        fontFamily: "var(--font-serif)", fontWeight: 500,
        fontSize: "clamp(56px, 6vw, 88px)", lineHeight: 1, letterSpacing: "-0.02em",
        color: "var(--color-saffron)",
      }} className="tabular">
        {formatted}<span>{stat.suffix}</span>
      </div>
      <div style={{
        fontFamily: "var(--font-serif)", fontSize: 19, fontWeight: 500,
        marginTop: 16, color: "#FBF8F1",
      }}>{stat.label}</div>
      <div style={{
        fontFamily: "var(--font-mono)", fontSize: 11,
        letterSpacing: "0.08em", textTransform: "uppercase",
        color: "rgba(251,248,241,0.55)", marginTop: 6,
      }}>{stat.sub}</div>
    </div>
  );
}

function StatsCounter() {
  const [visible, setVisible] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!ref.current) return;
    const ob = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setVisible(true);
    }, { threshold: 0.3 });
    ob.observe(ref.current);
    return () => ob.disconnect();
  }, []);

  return (
    <section ref={ref} className="surface-dark section" id="stats" style={{
      position: "relative", overflow: "hidden",
    }}>
      {/* Decorative bg pattern */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.5,
        backgroundImage:
          "radial-gradient(circle at 10% 20%, rgba(217,119,6,0.10) 0, transparent 40%)," +
          "radial-gradient(circle at 90% 80%, rgba(161,29,29,0.10) 0, transparent 40%)",
      }} />
      <div className="container" style={{ position: "relative" }}>
        <div className="eyebrow" style={{ marginBottom: 18, justifyContent: "center" }}>By the numbers</div>
        <h2 className="h-2 text-center" style={{ color: "#FBF8F1", marginBottom: 80, maxWidth: 820, margin: "0 auto 80px" }}>
          A working spice export house, <em style={{ fontStyle: "italic", color: "var(--color-saffron)" }}>not a marketing brochure.</em>
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: 0,
          alignItems: "start",
        }} className="stats-grid">
          {STATS.map((s, i) => (
            <div key={s.label} style={{
              borderLeft: i > 0 ? "1px solid rgba(251,248,241,0.10)" : "none",
            }}>
              <StatItem stat={s} trigger={visible} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---- Section 6: Why Choose Us -------------------------------------
const WHY = [
  { icon: "◐", title: "Direct Farm Sourcing", desc: "We buy at source from 1,200+ farmers across six Indian spice belts — no middlemen, no margins, full traceability." },
  { icon: "✓", title: "Export-Grade Quality", desc: "FSSAI, APEDA, ISO 22000, HACCP, USDA Organic, Halal & Kosher certified — and audited annually by SGS." },
  { icon: "◇", title: "Custom Packaging & Private Label", desc: "From 25 kg jute sacks to retail-ready 100 g pouches with your label, barcode, and nutrition panel." },
  { icon: "→", title: "Global Logistics", desc: "Stuffing under DGFT supervision at Mundra & Nhava Sheva. On-time delivery rate: 97.8% over the last 36 months." },
  { icon: "⊙", title: "Lab-Tested, Every Batch", desc: "14-point protocol: pesticide residue (LC-MS), aflatoxin (HPLC), heavy metals, moisture, ash, ASTA colour, SHU." },
  { icon: "≡", title: "Transparent Documentation", desc: "Every shipment ships with COA, COO, Phytosanitary, Fumigation, MSDS — and a video of the stuffing if you ask." },
];

function WhyChooseUs() {
  return (
    <section className="section" id="why">
      <div className="container">
        <SectionHeader
          eyebrow="Why importers choose us"
          title={<>The boring stuff, done <em style={{ fontStyle: "italic", color: "var(--color-primary)" }}>extraordinarily well.</em></>}
          sub="The reason a buyer in Hamburg or Houston picks up the phone the second time isn't romance — it's the third-party lab report attached to every invoice."
        />

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 0,
          border: "1px solid var(--color-line)",
        }} className="why-grid">
          {WHY.map((w, i) => (
            <div key={w.title} style={{
              padding: "44px 36px",
              borderRight: (i + 1) % 3 !== 0 ? "1px solid var(--color-line)" : "none",
              borderBottom: i < 3 ? "1px solid var(--color-line)" : "none",
              transition: "background 0.25s",
              position: "relative",
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = "var(--color-bg-warm)"}
            onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
            >
              <div style={{
                width: 56, height: 56,
                borderRadius: "50%",
                background: "var(--color-primary)",
                color: "#FBF8F1",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "var(--font-serif)", fontSize: 28,
                marginBottom: 24,
              }}>{w.icon}</div>
              <div style={{
                fontFamily: "var(--font-mono)", fontSize: 10,
                letterSpacing: "0.14em", textTransform: "uppercase",
                color: "var(--color-ink-mute)", marginBottom: 8,
              }}>0{i + 1} / 06</div>
              <h3 className="h-4" style={{ marginBottom: 10 }}>{w.title}</h3>
              <p className="body" style={{ fontSize: 14 }}>{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, {
  Hero, AboutSnapshot, ProductCategories, FeaturedProducts, StatsCounter, WhyChooseUs,
});
