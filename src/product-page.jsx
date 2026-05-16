// ============================================
// Product Detail — Red Chilli Whole
// Kore-Agro-style spec-rich template
// ============================================

const PRODUCT = {
  name: "Red Chilli Whole",
  slug: "red-chilli-whole",
  tagline: "Turn up the heat — and ignite your taste buds with the fiery kick of sun-dried Indian chilli.",
  botanical: "Capsicum annuum",
  hsCode: "0904.22",
  origin: "Andhra Pradesh, Karnataka, Gujarat",
  spice: "spice-chilli",
  shu: "15,000 – 100,000",
  varieties: [
    { name: "S17 Teja", pungency: "High", color: "Bright red", note: "Most pungent, hot oil base" },
    { name: "Sanam 334", pungency: "Moderate", color: "Deep red", note: "Balanced heat & colour" },
    { name: "Byadgi Kaddi", pungency: "Mild", color: "Deep crimson", note: "High oil, signature wrinkle" },
    { name: "Guntur Sannam", pungency: "High", color: "Vibrant red", note: "Restaurant-grade workhorse" },
    { name: "273 Wrinkle", pungency: "Medium", color: "Deep red", note: "Premium gift packs" },
    { name: "341 Wonder Hot", pungency: "Very High", color: "Fire red", note: "Extract-grade" },
  ],
  uses: ["Culinary applications", "Spice blends & masalas", "Oleoresin extraction", "Natural food colouring"],
  features: [
    "Uniformly sun-dried — color & pungency preserved",
    "Free from mold, infestation, foreign matter",
    "Suitable for direct consumption, grinding, or oleoresin extraction",
    "Steam sterilized on request (12 log reduction)",
    "Single-origin traceability — field to container",
    "Custom-cut: stem-on, stemless, or split as per spec",
  ],
  packing: [
    { label: "Standard", value: "PP/Jute bags · 25 kg or 50 kg" },
    { label: "Premium", value: "Jute with paper liner · 25 kg" },
    { label: "Bulk", value: "FIBC · 750 kg or 1,000 kg" },
    { label: "Retail", value: "Custom pouches · 25 g – 1 kg, N₂ flushed" },
  ],
  container: [
    { label: "20 FT", value: "7 – 8 MT" },
    { label: "40 FT", value: "14 – 15 MT" },
    { label: "40 HC", value: "16 – 18 MT" },
  ],
  shelfLife: "12 – 18 months in cool, dry storage (≤25°C, ≤65% RH)",
  physicalSpecs: [
    { param: "Length", range: "5 – 15 cm" },
    { param: "Colour", range: "Bright red / Deep red" },
    { param: "Pungency (SHU)", range: "15,000 – 100,000" },
    { param: "ASTA Colour Value", range: "60 – 120" },
    { param: "Moisture", range: "8 – 12 % max" },
    { param: "Foreign Matter", range: "1 – 2 % max" },
    { param: "Broken Chilli", range: "1 – 2 % max" },
    { param: "Damaged / Discoloured", range: "2 – 3 % max" },
  ],
  chemicalSpecs: [
    { param: "Capsaicin", spec: "0.2 % – 0.5 %" },
    { param: "Aflatoxin (B1+B2+G1+G2)", spec: "< 5 – 10 ppb · EU compliant" },
    { param: "Ochratoxin A", spec: "< 15 ppb" },
    { param: "Total Ash", spec: "6 – 8 % max" },
    { param: "Acid-insoluble Ash", spec: "< 1.25 %" },
    { param: "Non-volatile Ether Extract", spec: "10 – 12 %" },
    { param: "Pesticide Residue", spec: "EU MRL compliant" },
    { param: "Heavy Metals (Pb, Cd, As, Hg)", spec: "Below WHO limits" },
  ],
};

const RELATED = [
  { name: "Red Chilli Powder", origin: "Guntur, AP", spice: "spice-chilli", photoId: window.UNSPLASH?.chilli_white, tag: "ASTA 100+ · 80 mesh" },
  { name: "Turmeric Fingers", origin: "Erode, TN", spice: "spice-turmeric", tag: "Curcumin 3.5–5.5%" },
  { name: "Black Pepper", origin: "Tellicherry, KL", spice: "spice-pepper", tag: "550 GL · Piperine 4.5%" },
  { name: "Cumin Seeds", origin: "Unjha, GJ", spice: "spice-cumin", tag: "Singapore quality" },
  { name: "Coriander Seeds", origin: "Kota, RJ", spice: "spice-coriander", tag: "Eagle · 3.5–5 mm" },
  { name: "Mustard Seeds", origin: "Rajasthan", spice: "spice-mustard", tag: "Yellow · oil 28%" },
];

// ---- Breadcrumb ---------------------------------------------------
function Breadcrumb() {
  return (
    <div style={{
      borderBottom: "1px solid var(--color-line)",
      background: "var(--color-bg)",
    }}>
      <div className="container" style={{
        padding: "16px 32px",
        fontFamily: "var(--font-mono)", fontSize: 11,
        letterSpacing: "0.08em", textTransform: "uppercase",
        color: "var(--color-ink-mute)",
        display: "flex", gap: 10, alignItems: "center",
      }}>
        <a href="index.html" style={{ color: "var(--color-ink-mute)" }}>Home</a>
        <span>/</span>
        <a href="#" style={{ color: "var(--color-ink-mute)" }}>Products</a>
        <span>/</span>
        <a href="#" style={{ color: "var(--color-ink-mute)" }}>Whole Spices</a>
        <span>/</span>
        <span style={{ color: "var(--color-primary)", fontWeight: 600 }}>Red Chilli Whole</span>
      </div>
    </div>
  );
}

// ---- Hero Banner --------------------------------------------------
function ProductHero() {
  return (
    <section style={{ position: "relative", overflow: "hidden", color: "#FBF8F1" }}>
      <SpicePhoto
        photoId={window.UNSPLASH?.chilli_pile}
        spice={PRODUCT.spice}
        width={2400}
        alt="Red chilli — Saaranga harvest"
        style={{ position: "absolute", inset: 0 }}
      />
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(110deg, rgba(15,8,4,0.75) 0%, rgba(15,8,4,0.45) 60%, rgba(15,8,4,0.25) 100%)",
      }} />
      <div className="container" style={{
        position: "relative",
        padding: "112px 32px 96px",
        display: "grid",
        gridTemplateColumns: "1.4fr 1fr",
        gap: 64,
        alignItems: "end",
      }} className="product-hero-grid">
        <div>
          <div className="eyebrow" style={{ color: "var(--color-saffron)", marginBottom: 24 }}>
            Whole Spices · 01 / 14
          </div>
          <h1 style={{
            fontFamily: "var(--font-serif)", fontWeight: 500,
            fontSize: "clamp(48px, 6.5vw, 96px)",
            lineHeight: 0.98, letterSpacing: "-0.02em",
            marginBottom: 24,
          }}>
            {PRODUCT.name}
          </h1>
          <p style={{
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontSize: "clamp(20px, 1.8vw, 26px)",
            lineHeight: 1.35,
            maxWidth: 640,
            opacity: 0.92,
            color: "var(--color-saffron)",
          }}>
            "{PRODUCT.tagline}"
          </p>
        </div>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 12,
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          letterSpacing: "0.04em",
          textTransform: "uppercase",
        }}>
          {[
            { l: "Botanical", v: <em style={{ fontStyle: "italic", fontFamily: "var(--font-serif)", fontSize: 14, textTransform: "none", letterSpacing: 0 }}>{PRODUCT.botanical}</em> },
            { l: "HS Code", v: PRODUCT.hsCode },
            { l: "Origin", v: PRODUCT.origin.split(",")[0] },
            { l: "Pungency", v: `${PRODUCT.shu} SHU` },
          ].map((m) => (
            <div key={m.l} style={{
              padding: "16px 18px",
              background: "rgba(0,0,0,0.30)",
              backdropFilter: "blur(4px)",
              border: "1px solid rgba(251,248,241,0.12)",
            }}>
              <div style={{ opacity: 0.6, marginBottom: 6 }}>{m.l}</div>
              <div style={{ color: "var(--color-saffron)", fontWeight: 600, fontSize: 13, letterSpacing: "0.02em" }}>{m.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---- Main Product Section (image + info) --------------------------
function ProductMain() {
  const [activeImg, setActiveImg] = React.useState(0);
  const variants = [
    { label: "Pack shot · 25 kg jute", spice: "spice-chilli", photoId: window.UNSPLASH?.chilli_white },
    { label: "Loose · top-down", spice: "spice-chilli", photoId: window.UNSPLASH?.chilli_pile },
    { label: "Single chilli macro", spice: "spice-chilli", photoId: window.UNSPLASH?.chilli_white },
    { label: "Container stuffing", spice: "spice-pepper", photoId: null },
  ];

  return (
    <section className="section" style={{ paddingTop: 96 }}>
      <div className="container">
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
        }} className="product-main-grid">
          {/* Gallery */}
          <div style={{ position: "sticky", top: 100, alignSelf: "start" }}>
            {variants[activeImg].photoId ? (
              <SpicePhoto
                photoId={variants[activeImg].photoId}
                spice={variants[activeImg].spice}
                width={1200}
                alt={variants[activeImg].label}
                style={{ aspectRatio: "4/5", position: "relative", border: "1px solid var(--color-line)" }}
              >
                <div className="ph-label" style={{
                  position: "absolute", bottom: 20, left: 20,
                  background: "rgba(251,248,241,0.95)",
                }}>
                  {variants[activeImg].label}
                </div>
                <div style={{
                  position: "absolute", top: 16, right: 16,
                  display: "flex", flexDirection: "column", gap: 6,
                }}>
                  <div style={{
                    background: "var(--color-saffron)",
                    color: "var(--color-ink)",
                    padding: "5px 10px",
                    fontFamily: "var(--font-mono)", fontSize: 9,
                    letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 600,
                  }}>★ Bestseller</div>
                  <div style={{
                    background: "rgba(251,248,241,0.95)",
                    color: "var(--color-primary)",
                    padding: "5px 10px",
                    fontFamily: "var(--font-mono)", fontSize: 9,
                    letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 600,
                  }}>EU Compliant</div>
                </div>
                <div style={{
                  position: "absolute", bottom: 16, right: 16,
                  fontFamily: "var(--font-mono)", fontSize: 10,
                  letterSpacing: "0.1em",
                  background: "rgba(20,12,8,0.7)", color: "#FBF8F1",
                  padding: "4px 8px",
                }}>{activeImg + 1} / {variants.length}</div>
              </SpicePhoto>
            ) : (
              <div className={`spice-block ${variants[activeImg].spice}`} style={{
                aspectRatio: "4/5",
                position: "relative",
                border: "1px solid var(--color-line)",
              }}>
              <div className="ph-label" style={{
                position: "absolute", bottom: 20, left: 20,
                background: "rgba(251,248,241,0.95)",
              }}>
                {variants[activeImg].label}
              </div>
              <div style={{
                position: "absolute", top: 16, right: 16,
                display: "flex", flexDirection: "column", gap: 6,
              }}>
                <div style={{
                  background: "var(--color-saffron)",
                  color: "var(--color-ink)",
                  padding: "5px 10px",
                  fontFamily: "var(--font-mono)", fontSize: 9,
                  letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 600,
                }}>★ Bestseller</div>
                <div style={{
                  background: "rgba(251,248,241,0.95)",
                  color: "var(--color-primary)",
                  padding: "5px 10px",
                  fontFamily: "var(--font-mono)", fontSize: 9,
                  letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 600,
                }}>EU Compliant</div>
              </div>
              <div style={{
                position: "absolute", bottom: 16, right: 16,
                fontFamily: "var(--font-mono)", fontSize: 10,
                letterSpacing: "0.1em",
                background: "rgba(20,12,8,0.7)", color: "#FBF8F1",
                padding: "4px 8px",
              }}>{activeImg + 1} / {variants.length}</div>
              </div>
            )}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 8,
              marginTop: 12,
            }}>
              {variants.map((v, i) => (
                <button key={i} onClick={() => setActiveImg(i)}
                  style={{
                    aspectRatio: "1/1",
                    border: activeImg === i ? "2px solid var(--color-primary)" : "1px solid var(--color-line)",
                    cursor: "pointer",
                    position: "relative",
                    padding: 0,
                    overflow: "hidden",
                  }}
                >
                  {v.photoId ? (
                    <img
                      src={unsplashUrl(v.photoId, 200)}
                      alt={v.label}
                      style={{
                        position: "absolute", inset: 0,
                        width: "100%", height: "100%",
                        objectFit: "cover",
                        opacity: activeImg === i ? 1 : 0.75,
                      }}
                    />
                  ) : (
                    <div className={`spice-block ${v.spice}`} style={{ position: "absolute", inset: 0 }} />
                  )}
                  <div style={{
                    position: "absolute", inset: 0,
                    background: activeImg === i ? "transparent" : "rgba(20,12,8,0.20)",
                  }} />
                </button>
              ))}
            </div>

            {/* Quick-fact strip below gallery */}
            <div style={{
              marginTop: 20,
              padding: "20px 24px",
              background: "var(--color-bg-warm)",
              borderLeft: "3px solid var(--color-primary)",
            }}>
              <div style={{
                fontFamily: "var(--font-mono)", fontSize: 10,
                letterSpacing: "0.14em", textTransform: "uppercase",
                color: "var(--color-primary)", marginBottom: 6, fontWeight: 600,
              }}>Trade fact · 2025 crop</div>
              <div style={{ fontFamily: "var(--font-serif)", fontSize: 17, lineHeight: 1.35 }}>
                India produces <strong>43%</strong> of the world's red chilli — and the Guntur market alone trades 1.4 million MT a year.
              </div>
            </div>
          </div>

          {/* Right column: info */}
          <div>
            {/* Product Information */}
            <div style={{ marginBottom: 48 }}>
              <div className="eyebrow" style={{ marginBottom: 16 }}>01 / Product Information</div>
              <h2 className="h-3" style={{ marginBottom: 20 }}>Specifications & origin</h2>
              <p className="body" style={{ marginBottom: 28, fontSize: 15 }}>
                Sun-dried, hand-cleaned, and graded into six commercial varieties. Available stem-on, stemless, or split, with optional steam sterilization (12-log reduction) for buyers shipping to ETO-restricted markets.
              </p>

              {/* Key-value rows */}
              <div style={{ borderTop: "1px solid var(--color-line)" }}>
                {[
                  { k: "Botanical Name", v: <em style={{ fontStyle: "italic", fontFamily: "var(--font-serif)", fontSize: 17 }}>{PRODUCT.botanical}</em> },
                  { k: "HS Code", v: PRODUCT.hsCode },
                  { k: "Origin", v: PRODUCT.origin },
                  { k: "Crop Season", v: "Nov – Mar (peak: Jan)" },
                  { k: "Shelf Life", v: PRODUCT.shelfLife },
                ].map((row) => (
                  <div key={row.k} style={{
                    display: "grid",
                    gridTemplateColumns: "180px 1fr",
                    gap: 24,
                    padding: "14px 0",
                    borderBottom: "1px solid var(--color-line)",
                    fontSize: 14,
                  }}>
                    <div style={{
                      fontFamily: "var(--font-mono)", fontSize: 11,
                      letterSpacing: "0.1em", textTransform: "uppercase",
                      color: "var(--color-ink-mute)",
                      paddingTop: 2,
                    }}>{row.k}</div>
                    <div style={{ color: "var(--color-ink)" }}>{row.v}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Varieties */}
            <div style={{ marginBottom: 48 }}>
              <div className="eyebrow" style={{ marginBottom: 16 }}>02 / Varieties Available</div>
              <h2 className="h-3" style={{ marginBottom: 20 }}>Six commercial cultivars</h2>
              <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 12,
              }}>
                {PRODUCT.varieties.map((v) => (
                  <div key={v.name} style={{
                    padding: "16px 18px",
                    background: "var(--color-bg)",
                    border: "1px solid var(--color-line)",
                    transition: "border-color 0.2s",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = "var(--color-primary)"}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = "var(--color-line)"}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 6 }}>
                      <div style={{ fontFamily: "var(--font-serif)", fontSize: 17, fontWeight: 600 }}>{v.name}</div>
                      <div style={{
                        fontFamily: "var(--font-mono)", fontSize: 9,
                        letterSpacing: "0.1em", textTransform: "uppercase",
                        color: "var(--color-primary)",
                      }}>{v.pungency}</div>
                    </div>
                    <div style={{ fontSize: 12, color: "var(--color-ink-soft)", lineHeight: 1.5 }}>
                      <div style={{ marginBottom: 2 }}>Colour — {v.color}</div>
                      <div style={{ opacity: 0.75 }}>{v.note}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Uses */}
            <div style={{ marginBottom: 48 }}>
              <div className="eyebrow" style={{ marginBottom: 16 }}>03 / Applications</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {PRODUCT.uses.map((u) => (
                  <span key={u} style={{
                    padding: "10px 16px",
                    background: "var(--color-bg-warm)",
                    fontSize: 13,
                    fontFamily: "var(--font-sans)",
                  }}>{u}</span>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div style={{ marginBottom: 48 }}>
              <div className="eyebrow" style={{ marginBottom: 16 }}>04 / Key Features</div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                {PRODUCT.features.map((f) => (
                  <li key={f} style={{
                    display: "flex", gap: 14, alignItems: "flex-start",
                    paddingBottom: 12,
                    borderBottom: "1px solid var(--color-line)",
                  }}>
                    <span style={{
                      flexShrink: 0,
                      width: 22, height: 22, borderRadius: "50%",
                      background: "var(--color-primary)", color: "#FBF8F1",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 12,
                      marginTop: 2,
                    }}>✓</span>
                    <span style={{ fontSize: 14.5, color: "var(--color-ink)", lineHeight: 1.55 }}>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTAs */}
            <div style={{
              padding: "32px",
              background: "var(--color-bg-warm)",
              display: "grid", gap: 12,
            }}>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <a href="#inquiry" className="btn btn-primary btn-large" style={{ flex: 1, minWidth: 200 }}>
                  Inquiry Now
                </a>
                <a href="#" className="btn btn-outline btn-large">↓ Download Spec Sheet</a>
              </div>
              <a href="#" className="btn btn-outline" style={{ background: "#25D366", color: "white", borderColor: "#25D366" }}>
                Chat on WhatsApp · {window.BRAND?.whatsapp || "+91 98250 14400"}
              </a>
              <div style={{
                fontFamily: "var(--font-mono)", fontSize: 11,
                color: "var(--color-ink-mute)", letterSpacing: "0.06em",
                textAlign: "center", marginTop: 4,
              }}>
                MOQ 1 MT · Trade desk replies within 4 hours IST
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---- Packing & Shipping -------------------------------------------
function PackingShipping() {
  return (
    <section className="section" style={{ background: "var(--color-bg-warm)" }}>
      <div className="container">
        <SectionHeader
          eyebrow="Packing & Shipping"
          title={<>From <em style={{ fontStyle: "italic", color: "var(--color-primary)" }}>jute sack to container floor</em> — every option spelled out.</>}
          sub="Custom artwork and barcode integration available on retail packs. Standard pallet stack: 24 bags × 25 kg per Euro pallet."
        />

        <div style={{
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr 1fr",
          gap: 24,
        }} className="pack-grid">
          {/* Packing */}
          <div style={{ background: "var(--color-bg)", padding: 36, border: "1px solid var(--color-line)" }}>
            <div className="eyebrow" style={{ marginBottom: 16 }}>Packaging options</div>
            <h3 className="h-4" style={{ marginBottom: 20 }}>Four standard formats</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {PRODUCT.packing.map((p) => (
                <div key={p.label} style={{
                  display: "grid",
                  gridTemplateColumns: "90px 1fr",
                  gap: 16,
                  paddingBottom: 14,
                  borderBottom: "1px solid var(--color-line)",
                }}>
                  <div style={{
                    fontFamily: "var(--font-mono)", fontSize: 10,
                    letterSpacing: "0.12em", textTransform: "uppercase",
                    color: "var(--color-primary)", fontWeight: 600,
                    paddingTop: 2,
                  }}>{p.label}</div>
                  <div style={{ fontSize: 14, color: "var(--color-ink)" }}>{p.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Container */}
          <div style={{ background: "var(--color-bg)", padding: 36, border: "1px solid var(--color-line)" }}>
            <div className="eyebrow" style={{ marginBottom: 16 }}>Container load</div>
            <h3 className="h-4" style={{ marginBottom: 20 }}>Capacity by size</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {PRODUCT.container.map((c) => (
                <div key={c.label} style={{
                  display: "grid",
                  gridTemplateColumns: "auto 1fr",
                  gap: 16, alignItems: "center",
                  paddingBottom: 14,
                  borderBottom: "1px solid var(--color-line)",
                }}>
                  <div style={{
                    background: "var(--color-ink)", color: "#FBF8F1",
                    padding: "6px 12px",
                    fontFamily: "var(--font-mono)", fontSize: 11,
                    letterSpacing: "0.08em", fontWeight: 600,
                  }}>{c.label}</div>
                  <div style={{
                    fontFamily: "var(--font-serif)", fontSize: 22, fontWeight: 500,
                    color: "var(--color-primary)",
                  }}>{c.value}</div>
                </div>
              ))}
            </div>
            <div style={{
              marginTop: 20, fontSize: 12,
              color: "var(--color-ink-mute)", lineHeight: 1.5,
            }}>
              Volumes assume bulk packing. Retail packing reduces capacity by ~12%.
            </div>
          </div>

          {/* Shipping logistics */}
          <div style={{ background: "var(--color-ink)", color: "#FBF8F1", padding: 36 }}>
            <div className="eyebrow" style={{ color: "var(--color-saffron)", marginBottom: 16 }}>Shipping terms</div>
            <h3 className="h-4" style={{ marginBottom: 20, color: "#FBF8F1" }}>Incoterms 2020</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, fontSize: 13.5, opacity: 0.85, lineHeight: 1.6 }}>
              {[
                { l: "Port", v: "Mundra / Nhava Sheva" },
                { l: "Standard", v: "FOB Mundra" },
                { l: "Premium", v: "CIF to your port" },
                { l: "Transit (EU)", v: "14 – 18 days" },
                { l: "Transit (US East)", v: "22 – 28 days" },
                { l: "Documentation", v: "COA · COO · Phyto · Fumigation" },
              ].map((row) => (
                <div key={row.l} style={{
                  display: "grid", gridTemplateColumns: "1fr 1fr",
                  paddingBottom: 10, borderBottom: "1px solid rgba(251,248,241,0.12)",
                }}>
                  <div style={{ opacity: 0.6 }}>{row.l}</div>
                  <div style={{ fontWeight: 500 }}>{row.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---- Specifications Tables ----------------------------------------
function SpecTables() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeader
          eyebrow="Lab specifications"
          title={<>Every batch tested. <em style={{ fontStyle: "italic", color: "var(--color-primary)" }}>EU-MRL compliant.</em></>}
          sub="14-point in-house panel plus third-party verification by SGS or Eurofins on every export consignment. Certificate of Analysis ships with every container."
        />

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 32,
        }} className="spec-grid">
          {/* Physical */}
          <div>
            <div style={{
              display: "flex", alignItems: "center", gap: 12, marginBottom: 24,
              paddingBottom: 16, borderBottom: "2px solid var(--color-primary)",
            }}>
              <div style={{
                width: 36, height: 36, borderRadius: "50%",
                background: "var(--color-primary)", color: "#FBF8F1",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 600,
              }}>01</div>
              <h3 className="h-3">Physical specifications</h3>
            </div>
            <table style={{
              width: "100%",
              borderCollapse: "collapse",
              fontFamily: "var(--font-sans)",
            }}>
              <thead>
                <tr style={{
                  fontFamily: "var(--font-mono)", fontSize: 10,
                  letterSpacing: "0.14em", textTransform: "uppercase",
                  color: "var(--color-ink-mute)",
                }}>
                  <th style={{ textAlign: "left", padding: "12px 0", borderBottom: "1px solid var(--color-line)" }}>Parameter</th>
                  <th style={{ textAlign: "right", padding: "12px 0", borderBottom: "1px solid var(--color-line)" }}>Range</th>
                </tr>
              </thead>
              <tbody>
                {PRODUCT.physicalSpecs.map((s) => (
                  <tr key={s.param}>
                    <td style={{
                      padding: "16px 0", fontSize: 14,
                      borderBottom: "1px solid var(--color-line)",
                      fontFamily: "var(--font-serif)", fontSize: 17,
                    }}>{s.param}</td>
                    <td style={{
                      padding: "16px 0", fontSize: 14,
                      borderBottom: "1px solid var(--color-line)",
                      textAlign: "right",
                      fontFamily: "var(--font-mono)",
                      color: "var(--color-primary)", fontWeight: 600,
                    }}>{s.range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Chemical */}
          <div>
            <div style={{
              display: "flex", alignItems: "center", gap: 12, marginBottom: 24,
              paddingBottom: 16, borderBottom: "2px solid var(--color-primary)",
            }}>
              <div style={{
                width: 36, height: 36, borderRadius: "50%",
                background: "var(--color-primary)", color: "#FBF8F1",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 600,
              }}>02</div>
              <h3 className="h-3">Chemical specifications</h3>
            </div>
            <table style={{
              width: "100%",
              borderCollapse: "collapse",
              fontFamily: "var(--font-sans)",
            }}>
              <thead>
                <tr style={{
                  fontFamily: "var(--font-mono)", fontSize: 10,
                  letterSpacing: "0.14em", textTransform: "uppercase",
                  color: "var(--color-ink-mute)",
                }}>
                  <th style={{ textAlign: "left", padding: "12px 0", borderBottom: "1px solid var(--color-line)" }}>Parameter</th>
                  <th style={{ textAlign: "right", padding: "12px 0", borderBottom: "1px solid var(--color-line)" }}>Specification</th>
                </tr>
              </thead>
              <tbody>
                {PRODUCT.chemicalSpecs.map((s) => (
                  <tr key={s.param}>
                    <td style={{
                      padding: "16px 0", fontSize: 14,
                      borderBottom: "1px solid var(--color-line)",
                      fontFamily: "var(--font-serif)", fontSize: 17,
                    }}>{s.param}</td>
                    <td style={{
                      padding: "16px 0", fontSize: 14,
                      borderBottom: "1px solid var(--color-line)",
                      textAlign: "right",
                      fontFamily: "var(--font-mono)",
                      color: "var(--color-primary)", fontWeight: 600,
                    }}>{s.spec}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div style={{
          marginTop: 40,
          padding: "20px 28px",
          background: "var(--color-bg-warm)",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: 16,
        }}>
          <div style={{
            fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.05em",
            color: "var(--color-ink-soft)",
          }}>
            <strong style={{ color: "var(--color-primary)" }}>Need a custom spec sheet?</strong> We tailor parameters to your buyer's QC requirements.
          </div>
          <a href="#" className="btn btn-outline">Download full COA template (PDF)</a>
        </div>
      </div>
    </section>
  );
}

// ---- Origin Map ---------------------------------------------------
function OriginMap() {
  // Stylized India outline with sourcing regions highlighted
  const REGIONS = [
    { id: "ap", name: "Andhra Pradesh", varieties: "Guntur Sannam, S17 Teja", x: 56, y: 70, vol: "Primary · 42%" },
    { id: "ka", name: "Karnataka", varieties: "Byadgi Kaddi, 273 Wrinkle", x: 42, y: 75, vol: "28%" },
    { id: "gj", name: "Gujarat", varieties: "Galiyakot, Reshmpatti", x: 18, y: 45, vol: "18%" },
    { id: "mh", name: "Maharashtra", varieties: "Lavangi, 341 Wonder", x: 38, y: 58, vol: "12%" },
  ];
  const [hover, setHover] = React.useState(null);

  return (
    <section className="section" style={{ background: "var(--color-bg-warm)" }}>
      <div className="container">
        <SectionHeader
          eyebrow="Single-origin traceability"
          title={<>Where this chilli comes from.</>}
          sub="Four states, four cultivars, one supply chain you can audit field-by-field."
        />

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.2fr",
          gap: 64,
          alignItems: "center",
        }} className="origin-grid">
          {/* Map */}
          <div style={{
            aspectRatio: "5/6",
            background: "var(--color-bg)",
            border: "1px solid var(--color-line)",
            position: "relative",
            overflow: "hidden",
          }}>
            <div style={{
              position: "absolute", inset: 0,
              backgroundImage: "radial-gradient(circle, rgba(26,20,16,0.08) 1px, transparent 1.5px)",
              backgroundSize: "14px 14px",
            }} />
            {/* Stylized India outline */}
            <svg viewBox="0 0 100 120" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
              <path
                d="M 25,18 Q 35,12 48,15 Q 58,18 62,22 Q 72,20 78,30 Q 80,40 75,48 Q 70,58 65,72 Q 60,85 52,98 Q 45,108 38,110 Q 32,105 30,95 Q 28,82 22,72 Q 14,58 16,42 Q 18,28 25,18 Z"
                fill="rgba(161,29,29,0.06)"
                stroke="var(--color-primary)"
                strokeWidth="0.5"
              />
            </svg>
            {/* Pins */}
            {REGIONS.map((r) => (
              <div key={r.id}
                onMouseEnter={() => setHover(r.id)}
                onMouseLeave={() => setHover(null)}
                style={{
                  position: "absolute",
                  left: `${r.x}%`, top: `${r.y}%`,
                  transform: "translate(-50%, -50%)",
                  cursor: "pointer",
                }}>
                <div style={{
                  width: hover === r.id ? 28 : 16,
                  height: hover === r.id ? 28 : 16,
                  borderRadius: "50%",
                  background: "var(--color-primary)",
                  border: "3px solid var(--color-bg)",
                  boxShadow: "0 4px 12px rgba(161,29,29,0.4)",
                  transition: "all 0.2s",
                }} />
                <div style={{
                  position: "absolute",
                  top: "100%", left: "50%",
                  transform: "translateX(-50%)",
                  marginTop: 6,
                  fontFamily: "var(--font-mono)", fontSize: 10,
                  letterSpacing: "0.08em",
                  fontWeight: 600,
                  color: "var(--color-primary)",
                  whiteSpace: "nowrap",
                }}>{r.id.toUpperCase()}</div>
                {/* Pulse */}
                <div style={{
                  position: "absolute", inset: -4,
                  border: "1px solid var(--color-primary)",
                  borderRadius: "50%",
                  animation: "pulse 2.5s infinite",
                  opacity: 0.4,
                  pointerEvents: "none",
                }} />
              </div>
            ))}
            {/* North/South cue */}
            <div style={{
              position: "absolute", top: 16, right: 16,
              fontFamily: "var(--font-mono)", fontSize: 9,
              letterSpacing: "0.16em", textTransform: "uppercase",
              color: "var(--color-ink-mute)",
            }}>N ↑</div>
          </div>

          {/* Region list */}
          <div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {REGIONS.map((r, i) => (
                <div key={r.id}
                  onMouseEnter={() => setHover(r.id)}
                  onMouseLeave={() => setHover(null)}
                  style={{
                    padding: "24px 0",
                    borderTop: i === 0 ? "1px solid var(--color-line)" : "none",
                    borderBottom: "1px solid var(--color-line)",
                    background: hover === r.id ? "rgba(161,29,29,0.04)" : "transparent",
                    transition: "background 0.2s",
                    display: "grid",
                    gridTemplateColumns: "60px 1fr auto",
                    gap: 24,
                    alignItems: "center",
                    cursor: "pointer",
                  }}>
                  <div style={{
                    fontFamily: "var(--font-serif)", fontSize: 36,
                    fontWeight: 500, color: "var(--color-primary)",
                    lineHeight: 1,
                  }}>{String(i + 1).padStart(2, "0")}</div>
                  <div>
                    <div style={{ fontFamily: "var(--font-serif)", fontSize: 22, fontWeight: 500, marginBottom: 4 }}>{r.name}</div>
                    <div style={{ fontSize: 13, color: "var(--color-ink-soft)" }}>{r.varieties}</div>
                  </div>
                  <div style={{
                    fontFamily: "var(--font-mono)", fontSize: 11,
                    letterSpacing: "0.1em", textTransform: "uppercase",
                    color: "var(--color-primary)", fontWeight: 600,
                  }}>{r.vol}</div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 28, fontSize: 13, color: "var(--color-ink-soft)", lineHeight: 1.55 }}>
              We work with farmer cooperatives in all four regions on annual contracts at pre-set minimum prices — protecting them from market swings and us from supply shocks.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---- Related Products ---------------------------------------------
function RelatedProducts() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeader
          eyebrow="Related products"
          title={<>Buyers of red chilli also order.</>}
          link="#"
          linkText="Browse all whole spices"
        />
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gap: 16,
        }} className="related-grid">
          {RELATED.map((p) => (
            <a key={p.name} href="#" style={{
              display: "block",
              border: "1px solid var(--color-line)",
              transition: "border-color 0.2s",
            }}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = "var(--color-primary)"}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = "var(--color-line)"}
            >
              {p.photoId ? (
                <SpicePhoto photoId={p.photoId} spice={p.spice} width={400} alt={p.name} style={{ aspectRatio: "1/1" }} />
              ) : (
                <div className={`spice-block ${p.spice}`} style={{ aspectRatio: "1/1" }} />
              )}
              <div style={{ padding: "16px 14px" }}>
                <div style={{
                  fontFamily: "var(--font-mono)", fontSize: 9,
                  letterSpacing: "0.12em", textTransform: "uppercase",
                  color: "var(--color-ink-mute)", marginBottom: 4,
                }}>{p.origin}</div>
                <div style={{ fontFamily: "var(--font-serif)", fontSize: 17, lineHeight: 1.15, marginBottom: 6 }}>{p.name}</div>
                <div style={{ fontSize: 11.5, color: "var(--color-ink-soft)", minHeight: 28 }}>{p.tag}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---- Inquiry Form -------------------------------------------------
function InquiryForm() {
  const [submitted, setSubmitted] = React.useState(false);
  const [form, setForm] = React.useState({
    name: "", company: "", country: "", email: "", phone: "",
    product: "Red Chilli Whole", quantity: "1 MT – 5 MT", currency: "USD", message: "",
  });

  const onChange = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4500);
  };

  const inputStyle = {
    width: "100%",
    padding: "14px 0",
    border: "none",
    borderBottom: "1px solid var(--color-line)",
    background: "transparent",
    fontFamily: "var(--font-sans)",
    fontSize: 15,
    color: "var(--color-ink)",
    outline: "none",
    transition: "border-color 0.2s",
  };
  const labelStyle = {
    fontFamily: "var(--font-mono)", fontSize: 10,
    letterSpacing: "0.14em", textTransform: "uppercase",
    color: "var(--color-ink-mute)", marginBottom: 4,
    display: "block",
  };

  return (
    <section className="section surface-dark" id="inquiry">
      <div className="container">
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.2fr",
          gap: 80,
          alignItems: "start",
        }} className="inquiry-grid">
          {/* Left: context */}
          <div>
            <div className="eyebrow" style={{ marginBottom: 20 }}>Inquiry form</div>
            <h2 style={{
              fontFamily: "var(--font-serif)", fontWeight: 500,
              fontSize: "clamp(36px, 4vw, 56px)",
              lineHeight: 1.05, letterSpacing: "-0.015em",
              color: "#FBF8F1", marginBottom: 28,
              textWrap: "balance",
            }}>
              Request a sample, a quote, or a video walkthrough.
            </h2>
            <p className="body" style={{ marginBottom: 32 }}>
              Our trade desk replies within four hours during IST business days. For urgent inquiries, WhatsApp us at the number below.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 32 }}>
              {[
                { l: "Trade desk", v: window.BRAND?.email || "trade@saaranga.co" },
                { l: "WhatsApp", v: window.BRAND?.whatsapp || "+91 98250 14400" },
                { l: "Direct line", v: window.BRAND?.phone || "+91 79 4690 1200" },
                { l: "Office hours", v: "Mon–Sat · 10 AM – 7 PM IST" },
              ].map((row) => (
                <div key={row.l}>
                  <div style={{
                    fontFamily: "var(--font-mono)", fontSize: 10,
                    letterSpacing: "0.14em", textTransform: "uppercase",
                    opacity: 0.55, marginBottom: 4,
                  }}>{row.l}</div>
                  <div style={{ fontFamily: "var(--font-serif)", fontSize: 19 }}>{row.v}</div>
                </div>
              ))}
            </div>

            <div style={{
              padding: "20px 24px",
              borderLeft: "2px solid var(--color-saffron)",
              background: "rgba(217,119,6,0.05)",
            }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-saffron)", marginBottom: 6 }}>
                ★ First-order incentive
              </div>
              <div style={{ fontFamily: "var(--font-serif)", fontSize: 17, lineHeight: 1.4 }}>
                Free 500 g lab sample + air courier to your QA lab, on any inquiry over 5 MT.
              </div>
            </div>
          </div>

          {/* Right: form */}
          <form onSubmit={submit} style={{
            background: "var(--color-bg)",
            padding: 48,
            color: "var(--color-ink)",
            position: "relative",
          }}>
            {submitted && (
              <div style={{
                position: "absolute", inset: 0,
                background: "var(--color-bg)",
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center",
                padding: 48, textAlign: "center",
                zIndex: 5,
                animation: "fadeIn 0.3s ease",
              }}>
                <div style={{
                  width: 64, height: 64, borderRadius: "50%",
                  background: "var(--color-primary)", color: "#FBF8F1",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 28, marginBottom: 20,
                }}>✓</div>
                <h3 className="h-3" style={{ marginBottom: 12 }}>Thank you, {form.name || "we'll be in touch"}.</h3>
                <p className="body" style={{ maxWidth: 380 }}>
                  Your inquiry is in our trade desk queue. Expect a reply within 4 hours during IST business days.
                </p>
              </div>
            )}

            <div style={{
              display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28, marginBottom: 28,
            }}>
              <div>
                <label style={labelStyle}>Full name *</label>
                <input required style={inputStyle} value={form.name} onChange={onChange("name")} placeholder="Marcus Lindqvist" />
              </div>
              <div>
                <label style={labelStyle}>Company *</label>
                <input required style={inputStyle} value={form.company} onChange={onChange("company")} placeholder="Nordic Spice House" />
              </div>
              <div>
                <label style={labelStyle}>Country *</label>
                <input required style={inputStyle} value={form.country} onChange={onChange("country")} placeholder="Sweden" />
              </div>
              <div>
                <label style={labelStyle}>Email *</label>
                <input required type="email" style={inputStyle} value={form.email} onChange={onChange("email")} placeholder="marcus@nordicspice.se" />
              </div>
              <div>
                <label style={labelStyle}>Phone (with code)</label>
                <input style={inputStyle} value={form.phone} onChange={onChange("phone")} placeholder="+46 70 123 4567" />
              </div>
              <div>
                <label style={labelStyle}>Product of interest</label>
                <select style={{ ...inputStyle, appearance: "none", cursor: "pointer" }} value={form.product} onChange={onChange("product")}>
                  <option>Red Chilli Whole</option>
                  <option>Red Chilli Powder</option>
                  <option>Turmeric Fingers</option>
                  <option>Cumin Seeds</option>
                  <option>Black Pepper</option>
                  <option>Garam Masala</option>
                </select>
              </div>
              <div>
                <label style={labelStyle}>Quantity (MT)</label>
                <select style={{ ...inputStyle, appearance: "none", cursor: "pointer" }} value={form.quantity} onChange={onChange("quantity")}>
                  <option>1 MT – 5 MT</option>
                  <option>5 MT – 15 MT</option>
                  <option>15 MT – 50 MT</option>
                  <option>50 MT+</option>
                  <option>Sample only</option>
                </select>
              </div>
              <div>
                <label style={labelStyle}>Quote currency</label>
                <div style={{ display: "flex", gap: 8, paddingTop: 6 }}>
                  {["USD", "EUR", "INR"].map((c) => (
                    <button key={c} type="button" onClick={() => setForm({ ...form, currency: c })}
                      style={{
                        flex: 1, padding: "10px 0",
                        fontFamily: "var(--font-mono)", fontSize: 11,
                        letterSpacing: "0.1em", fontWeight: 600,
                        background: form.currency === c ? "var(--color-primary)" : "transparent",
                        color: form.currency === c ? "#FBF8F1" : "var(--color-ink)",
                        border: `1px solid ${form.currency === c ? "var(--color-primary)" : "var(--color-line)"}`,
                      }}>{c}</button>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ marginBottom: 32 }}>
              <label style={labelStyle}>Message / additional requirements</label>
              <textarea rows="3" style={{ ...inputStyle, resize: "vertical", paddingTop: 14 }} value={form.message} onChange={onChange("message")} placeholder="Spec preferences, target port, certifications required, target delivery date…" />
            </div>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button type="submit" className="btn btn-primary btn-large" style={{ flex: 1, minWidth: 200 }}>
                Send Inquiry →
              </button>
              <a href="#" className="btn btn-outline btn-large" style={{ background: "#25D366", color: "white", borderColor: "#25D366" }}>
                Send via WhatsApp
              </a>
            </div>

            <div style={{
              marginTop: 20,
              fontFamily: "var(--font-mono)", fontSize: 10,
              letterSpacing: "0.06em",
              color: "var(--color-ink-mute)",
              display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8,
            }}>
              <span>By submitting, you agree to our trade terms & privacy policy.</span>
              <span>Avg. response: 2h 14m</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

// ---- App assembly --------------------------------------------------
function ProductPage() {
  return (
    <div data-screen-label="Product · Red Chilli Whole">
      <Navigation active="products" />
      <Breadcrumb />
      <ProductHero />
      <ProductMain />
      <PackingShipping />
      <SpecTables />
      <OriginMap />
      <RelatedProducts />
      <InquiryForm />
      <FooterCTABanner />
      <Footer />
      <FloatingActions />
    </div>
  );
}

(function mount() {
  const el = document.getElementById("app");
  if (!el) { requestAnimationFrame(mount); return; }
  ReactDOM.createRoot(el).render(<ProductPage />);
})();
