import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const backgroundImages = [
    'https://readdy.ai/api/search-image?query=stunning%20aerial%20view%20of%20sydney%20opera%20house%20and%20harbour%20bridge%20at%20golden%20hour%20with%20vibrant%20blue%20waters%20and%20clear%20sky%20ultra%20high%20definition%20professional%20photography&width=1920&height=1080&seq=hero1&orientation=landscape',
    'https://readdy.ai/api/search-image?query=Diverse%20global%20cultures%20meeting%20nature%20and%20sustainability%2C%20Indigenous%20art%20motifs%20blending%20with%20modern%20environmental%20symbols%2C%20aerial%20view%20of%20Sydney%20Opera%20House%20and%20harbor%2C%20cultural%20diversity%20celebration%20with%20earth%20tones%2C%20professional%20conference%20atmosphere%2C%20cinematic%20lighting%2C%20ultra%20high%20quality%2C%20minimalist%20composition%20with%20natural%20elements&width=1920&height=1080&seq=hero-crop-2026&orientation=landscape',
    'https://readdy.ai/api/search-image?query=beautiful%20panoramic%20view%20of%20sydney%20skyline%20at%20sunset%20with%20modern%20buildings%20and%20natural%20landscape%20ultra%20high%20definition%20professional%20photography&width=1920&height=1080&seq=hero3&orientation=landscape',
    'https://readdy.ai/api/search-image?query=sydney%20olympic%20park%20aerial%20view%20showing%20green%20spaces%20modern%20facilities%20and%20surrounding%20areas%20during%20daytime%20ultra%20high%20definition%20professional%20photography&width=1920&height=1080&seq=hero4&orientation=landscape',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleRegisterClick = () => {
    window.REACT_APP_NAVIGATE('/register');
  };

  const handleProgrammeClick = () => {
    window.REACT_APP_NAVIGATE('/programme');
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image Slideshow */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{
              opacity: currentImageIndex === index ? 1 : 0,
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}
        {/* Very light blur - only 20% opacity */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy/20 via-primary-dark/15 to-navy/20"></div>
      </div>

      {/* Decorative Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}></div>
      </div>

      {/* Content - Left Aligned */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="max-w-3xl">
          <div className="inline-block mb-6 animate-fade-in">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider bg-white/90 px-6 py-2 rounded-full">Sydney, Australia</span>
          </div>

          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-slide-up drop-shadow-2xl">
            <span className="inline-block bg-navy/40 backdrop-blur-sm px-6 py-3 rounded-2xl">
              Cultural Resilience,<br />One Planet
            </span>
          </h1>

          <div className="mb-6">
            <p className="text-xl md:text-2xl text-white font-semibold mb-3 drop-shadow-lg">
              <span className="inline-block bg-navy/40 backdrop-blur-sm px-6 py-2 rounded-xl">
                CROP Conference 2026
              </span>
            </p>
            <p className="text-lg md:text-xl text-white mb-4 drop-shadow-lg">
              <span className="inline-block bg-navy/40 backdrop-blur-sm px-6 py-2 rounded-xl">
                November 6th - 8th, 2026
              </span>
            </p>
            <div className="flex items-center space-x-2 text-white text-base md:text-lg">
              <span className="inline-block bg-navy/40 backdrop-blur-sm px-6 py-2 rounded-xl drop-shadow-lg">
                <i className="ri-map-pin-line text-secondary text-xl mr-2"></i>
                The Dome, 1 Showground Rd, Sydney Olympic Park NSW 2127
              </span>
            </div>
          </div>

          <div className="max-w-2xl mb-8">
            <div className="bg-white/95 backdrop-blur-sm border border-white/30 rounded-2xl p-6 shadow-2xl">
              <p className="text-xl md:text-2xl text-navy font-serif italic leading-relaxed">
                "How can cultural resilience shape a sustainable future for our shared planet?"
              </p>
            </div>
          </div>

          <p className="text-lg md:text-xl text-white max-w-2xl mb-8 leading-relaxed drop-shadow-lg">
            <span className="inline-block bg-navy/40 backdrop-blur-sm px-6 py-3 rounded-xl">
              Join 800+ international Indigenous and cultural leaders, policymakers, academics, private sector innovators, and youth changemakers in shaping the future of cultural resilience, care transformation, and planetary sustainability.
            </span>
          </p>

          <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
            <button
              onClick={handleRegisterClick}
              className="bg-gradient-to-r from-secondary to-secondary-dark hover:from-secondary-dark hover:to-secondary text-navy px-8 py-4 rounded-full font-bold text-base transition-all duration-300 shadow-2xl hover:shadow-secondary/50 hover:scale-105 whitespace-nowrap cursor-pointer"
            >
              <span className="flex items-center">
                <i className="ri-user-add-line mr-3 text-lg"></i>
                Register Interest
              </span>
            </button>
            <button
              onClick={handleProgrammeClick}
              className="bg-white/95 backdrop-blur-sm border-2 border-white/50 hover:bg-white text-navy px-8 py-4 rounded-full font-bold text-base transition-all duration-300 shadow-2xl whitespace-nowrap cursor-pointer"
            >
              <span className="flex items-center">
                <i className="ri-calendar-line mr-3 text-lg"></i>
                View Programme
              </span>
            </button>
            <button
              onClick={handleRegisterClick}
              className="bg-primary/95 backdrop-blur-sm hover:bg-primary text-white px-8 py-4 rounded-full font-bold text-base transition-all duration-300 shadow-2xl hover:scale-105 whitespace-nowrap cursor-pointer"
            >
              <span className="flex items-center">
                <i className="ri-file-text-line mr-3 text-lg"></i>
                Submit Abstract
              </span>
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-8 animate-bounce">
          <i className="ri-arrow-down-line text-white text-3xl drop-shadow-lg"></i>
        </div>
      </div>
    </section>
  );
}
