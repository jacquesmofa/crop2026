
export default function CTASection() {
  const handleRegisterClick = () => {
    window.REACT_APP_NAVIGATE('/register');
  };

  const handlePartnershipClick = () => {
    window.REACT_APP_NAVIGATE('/partnership');
  };

  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://readdy.ai/api/search-image?query=diverse%20group%20of%20african%20indigenous%20cultural%20leaders%20and%20youth%20changemakers%20collaborating%20at%20modern%20international%20conference%20with%20warm%20lighting%20professional%20photography%20ultra%20high%20definition&width=1920&height=1080&seq=cta1&orientation=landscape)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-navy/50 via-primary/40 to-navy/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
          Be Part of the Change
        </h2>
        <p className="text-lg md:text-xl text-white max-w-3xl mx-auto mb-8">
          Join us in Sydney for two transformative days of dialogue, collaboration, and action towards a culturally resilient and sustainable future.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
          <button
            onClick={handleRegisterClick}
            className="bg-gradient-to-r from-secondary to-secondary-dark hover:from-secondary-dark hover:to-secondary text-navy px-8 py-4 rounded-full font-bold text-base transition-all duration-300 shadow-2xl hover:shadow-secondary/50 hover:scale-105 whitespace-nowrap cursor-pointer"
          >
            <span className="flex items-center">
              <i className="ri-user-add-line mr-3 text-lg"></i>
              Register Your Interest
            </span>
          </button>
          <button
            onClick={handlePartnershipClick}
            className="bg-white/95 backdrop-blur-sm hover:bg-white text-navy px-8 py-4 rounded-full font-bold text-base transition-all duration-300 shadow-2xl hover:scale-105 whitespace-nowrap cursor-pointer"
          >
            <span className="flex items-center">
              <i className="ri-hand-heart-line mr-3 text-lg"></i>
              Partnership Opportunities
            </span>
          </button>
        </div>

        {/* Additional CTAs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div 
            onClick={handleRegisterClick}
            className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-file-text-line text-2xl text-white"></i>
            </div>
            <h3 className="font-serif text-xl font-bold text-navy mb-2">Submit Abstract</h3>
            <p className="text-gray-600 text-sm">
              Share your research and insights with global experts
            </p>
          </div>

          <div 
            onClick={handlePartnershipClick}
            className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-secondary to-secondary-dark rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-hand-heart-line text-2xl text-white"></i>
            </div>
            <h3 className="font-serif text-xl font-bold text-navy mb-2">Become a Sponsor</h3>
            <p className="text-gray-600 text-sm">
              Support cultural resilience and sustainability initiatives
            </p>
          </div>

          <div 
            onClick={handlePartnershipClick}
            className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent-coral rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-megaphone-line text-2xl text-white"></i>
            </div>
            <h3 className="font-serif text-xl font-bold text-navy mb-2">Media Partnership</h3>
            <p className="text-gray-600 text-sm">
              Amplify the message of cultural and environmental resilience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
