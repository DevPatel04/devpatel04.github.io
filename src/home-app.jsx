// ============================================
// Home — App assembly
// ============================================

function HomePage() {
  return (
    <div data-screen-label="Home">
      <Navigation active="home" />
      <Hero />
      <AboutSnapshot />
      <ProductCategories />
      <FeaturedProducts />
      <StatsCounter />
      <WhyChooseUs />
      <OurProcess />
      <Certifications />
      <GlobalReach />
      <Testimonials />
      <BlogPosts />
      <FAQ />
      <FooterCTABanner />
      <Footer />
      <FloatingActions />
    </div>
  );
}

(function mount() {
  const el = document.getElementById("app");
  if (!el) { requestAnimationFrame(mount); return; }
  ReactDOM.createRoot(el).render(<HomePage />);
})();
