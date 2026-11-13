import { useEffect } from 'react';
import Navigation from '../../components/feature/Navigation';
import Footer from '../../components/feature/Footer';
import SiteGallery from '../../components/feature/SiteGallery';

// Gallery: albums in src/content/gallery.json, masonry in deep teal + gold.
export default function Gallery() {
  useEffect(() => {
    document.title = 'Gallery | CROP Conference 2026';
  }, []);
  return (
    <div className="min-h-screen bg-[#FAF7F0]">
      <Navigation />
      <section className="pt-36 pb-16 px-4 bg-[#0D5C63] text-white text-center">
        <p className="uppercase tracking-[0.3em] text-sm text-[#C9A961] font-semibold">Gallery</p>
        <h1 className="font-serif text-4xl md:text-6xl font-bold mt-4">CROP 2026 in Pictures</h1>
        <p className="mt-5 text-lg text-white/85 max-w-2xl mx-auto">Cultural Resilience, One Planet: Sydney, 6–8 November 2026. Tap any photo to see it full size.</p>
      </section>
      <section className="px-4 py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          <SiteGallery
            note="These pictures are illustrations until photos from the conference are added."
            theme={{ layout: 'masonry', ink: '#1A2332', muted: '#475569', accent: '#0D5C63', accentInk: '#ffffff', tabBg: '#e6efe9', radius: '0.75rem', headingClass: 'font-serif' }}
          />
        </div>
      </section>
      <Footer />
    </div>
  );
}
