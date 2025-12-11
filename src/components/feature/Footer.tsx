
export default function Footer() {
  const handleLogoClick = () => {
    window.REACT_APP_NAVIGATE('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div 
              onClick={handleLogoClick}
              className="flex items-center space-x-3 mb-4 cursor-pointer hover:opacity-80 transition-opacity"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-secondary to-secondary-dark rounded-full flex items-center justify-center">
                <i className="ri-global-line text-xl text-white"></i>
              </div>
              <span className="font-serif text-xl font-bold">CROP 2026</span>
            </div>
            <p className="text-sm font-semibold text-white mb-2">
              Cultural Resilience, One Planet
            </p>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Bridging cultural actors with global sustainability agendas, protecting Indigenous knowledge, and promoting community resilience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => window.REACT_APP_NAVIGATE('/vision')}
                  className="text-gray-300 hover:text-secondary transition-colors text-sm cursor-pointer"
                >
                  The Vision
                </button>
              </li>
              <li>
                <button
                  onClick={() => window.REACT_APP_NAVIGATE('/pillars')}
                  className="text-gray-300 hover:text-secondary transition-colors text-sm cursor-pointer"
                >
                  Thematic Pillars
                </button>
              </li>
              <li>
                <button
                  onClick={() => window.REACT_APP_NAVIGATE('/programme')}
                  className="text-gray-300 hover:text-secondary transition-colors text-sm cursor-pointer"
                >
                  Programme Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => window.REACT_APP_NAVIGATE('/outcomes')}
                  className="text-gray-300 hover:text-secondary transition-colors text-sm cursor-pointer"
                >
                  Expected Outcomes
                </button>
              </li>
              <li>
                <button
                  onClick={() => window.REACT_APP_NAVIGATE('/venue')}
                  className="text-gray-300 hover:text-secondary transition-colors text-sm cursor-pointer"
                >
                  Venue & Logistics
                </button>
              </li>
            </ul>
          </div>

          {/* Organizers */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Organizers</h3>
            <div className="space-y-3">
              <div>
                <button
                  onClick={() => window.REACT_APP_NAVIGATE('/kwetu')}
                  className="text-gray-300 hover:text-secondary transition-colors text-sm cursor-pointer text-left"
                >
                  KWETU CONNECT PTY LTD
                </button>
                <p className="text-gray-400 text-xs mt-1">Co-Organizer</p>
              </div>
              <div>
                <button
                  onClick={() => window.REACT_APP_NAVIGATE('/ldii')}
                  className="text-gray-300 hover:text-secondary transition-colors text-sm cursor-pointer text-left"
                >
                  Livelihood Development International Initiatives (LDII)
                </button>
                <p className="text-gray-400 text-xs mt-1">Co-Organizer</p>
              </div>
            </div>
          </div>

          {/* Contact & Follow Us */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-300 mb-6">
              <li className="flex items-start">
                <i className="ri-map-pin-line text-secondary mr-2 mt-1 flex-shrink-0"></i>
                <span>Sydney Olympic Park, NSW, Australia</span>
              </li>
              <li className="flex items-center">
                <i className="ri-mail-line text-secondary mr-2 flex-shrink-0"></i>
                <a href="mailto:crop2026@gmail.com" className="hover:text-secondary transition-colors">
                  crop2026@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <i className="ri-calendar-line text-secondary mr-2 flex-shrink-0"></i>
                <span>November 6-8, 2026</span>
              </li>
            </ul>

            <h3 className="font-serif text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex items-center space-x-3">
              <a
                href="https://facebook.com/crop2026"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-secondary rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-110"
                aria-label="Facebook"
              >
                <i className="ri-facebook-fill text-lg"></i>
              </a>
              <a
                href="https://youtube.com/crop2026"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-secondary rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-110"
                aria-label="YouTube"
              >
                <i className="ri-youtube-fill text-lg"></i>
              </a>
              <a
                href="https://instagram.com/crop2026"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-secondary rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-110"
                aria-label="Instagram"
              >
                <i className="ri-instagram-fill text-lg"></i>
              </a>
              <a
                href="https://x.com/crop2026"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-secondary rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-110"
                aria-label="X (Twitter)"
              >
                <i className="ri-twitter-x-line text-lg"></i>
              </a>
              <a
                href="https://linkedin.com/company/crop2026"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-secondary rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-110"
                aria-label="LinkedIn"
              >
                <i className="ri-linkedin-fill text-lg"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © 2025 KWETU CONNECT PTY LTD & Livelihood Development International Initiatives (LDII). All rights reserved.
              </p>
              <div className="flex items-center justify-center md:justify-start space-x-4 mt-2">
                <button
                  onClick={() => window.REACT_APP_NAVIGATE('/privacy-policy')}
                  className="text-gray-400 hover:text-secondary text-xs transition-colors cursor-pointer"
                >
                  Privacy Policy
                </button>
                <span className="text-gray-600">•</span>
                <button
                  onClick={() => window.REACT_APP_NAVIGATE('/terms-of-use')}
                  className="text-gray-400 hover:text-secondary text-xs transition-colors cursor-pointer"
                >
                  Terms of Use
                </button>
                <span className="text-gray-600">•</span>
                <button
                  onClick={() => window.REACT_APP_NAVIGATE('/dispute-resolution')}
                  className="text-gray-400 hover:text-secondary text-xs transition-colors cursor-pointer"
                >
                  Dispute Resolution
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
