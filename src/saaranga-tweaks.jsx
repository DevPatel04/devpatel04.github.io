// ============================================
// Tweaks — Saaranga design controls
// ============================================

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "primary": "#A11D1D",
  "fontPair": "cormorant-manrope",
  "density": "comfort",
  "heroOverlay": "balanced"
}/*EDITMODE-END*/;

const PRIMARY_PALETTE = {
  "#A11D1D": { deep: "#7A1313", soft: "#C2410C" },   // chilli red
  "#D97706": { deep: "#B45309", soft: "#F59E0B" },   // saffron
  "#2D5F3F": { deep: "#1F4A2D", soft: "#4A7A55" },   // forest
  "#1A1410": { deep: "#0A0604", soft: "#3A302A" },   // charcoal
};

function applyTweaks(t) {
  const root = document.documentElement;
  const palette = PRIMARY_PALETTE[t.primary] || PRIMARY_PALETTE["#A11D1D"];
  root.style.setProperty("--color-primary", t.primary);
  root.style.setProperty("--color-primary-deep", palette.deep);
  root.style.setProperty("--color-primary-soft", palette.soft);

  const fontMap = {
    "cormorant-manrope": { serif: '"Cormorant Garamond", Georgia, serif', sans: '"Manrope", sans-serif' },
    "dmserif-manrope":   { serif: '"DM Serif Display", Georgia, serif',    sans: '"Manrope", sans-serif' },
    "playfair-poppins":  { serif: '"Playfair Display", Georgia, serif',    sans: '"Poppins", sans-serif' },
  };
  const f = fontMap[t.fontPair] || fontMap["cormorant-manrope"];
  root.style.setProperty("--font-serif", f.serif);
  root.style.setProperty("--font-sans", f.sans);

  const densityMap = {
    compact: { s8: "44px", s9: "64px", s10: "84px" },
    comfort: { s8: "64px", s9: "96px", s10: "128px" },
    spacious:{ s8: "84px", s9: "128px", s10: "168px" },
  };
  const d = densityMap[t.density] || densityMap.comfort;
  root.style.setProperty("--space-8", d.s8);
  root.style.setProperty("--space-9", d.s9);
  root.style.setProperty("--space-10", d.s10);

  // Hero overlay
  root.style.setProperty("--hero-overlay-mod",
    t.heroOverlay === "darker" ? "0.18" : t.heroOverlay === "lighter" ? "-0.15" : "0");
}

function SaarangaTweaks() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => { applyTweaks(t); }, [t]);

  return (
    <TweaksPanel title="Saaranga Tweaks">
      <TweakSection label="Brand color" />
      <TweakColor
        label="Primary"
        value={t.primary}
        onChange={(v) => setTweak("primary", v)}
        options={["#A11D1D", "#D97706", "#2D5F3F", "#1A1410"]}
      />

      <TweakSection label="Typography" />
      <TweakSelect
        label="Font pairing"
        value={t.fontPair}
        onChange={(v) => setTweak("fontPair", v)}
        options={[
          { value: "cormorant-manrope", label: "Cormorant + Manrope" },
          { value: "dmserif-manrope",   label: "DM Serif + Manrope" },
          { value: "playfair-poppins",  label: "Playfair + Poppins" },
        ]}
      />

      <TweakSection label="Layout" />
      <TweakRadio
        label="Density"
        value={t.density}
        onChange={(v) => setTweak("density", v)}
        options={["compact", "comfort", "spacious"]}
      />
      <TweakRadio
        label="Hero overlay"
        value={t.heroOverlay}
        onChange={(v) => setTweak("heroOverlay", v)}
        options={["lighter", "balanced", "darker"]}
      />
    </TweaksPanel>
  );
}

(function mountTweaks() {
  const el = document.getElementById("tweaks-root");
  if (!el) { requestAnimationFrame(mountTweaks); return; }
  ReactDOM.createRoot(el).render(<SaarangaTweaks />);
})();

// Apply defaults immediately on script load
applyTweaks(TWEAK_DEFAULTS);
