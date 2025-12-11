import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/vision', label: 'Vision' },
    { path: '/pillars', label: 'Thematic Pillars' },
    { path: '/programme', label: 'Programme' },
    { path: '/outcomes', label: 'Outcomes' },
    { path: '/venue', label: 'Venue & Logistics' },
    { path: '/partnership', label: 'Partnership' },
  ];

  const handleLogoClick = () => {
    window.REACT_APP_NAVIGATE('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-navy shadow-lg' : 'bg-navy/98 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            onClick={handleLogoClick}
            className="flex items-center space-x-3 cursor-pointer hover:opacity-80 transition-opacity duration-200"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
              <i className="ri-global-line text-xl text-white"></i>
            </div>
            <span className="font-serif text-xl font-bold text-white">CROP 2026</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 cursor-pointer whitespace-nowrap ${
                  location.pathname === link.path
                    ? 'text-secondary bg-white/10'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-white/70 text-sm cursor-pointer hover:text-white transition-colors duration-200">
              <i className="ri-global-line"></i>
              <span>EN</span>
            </div>
            <Link to="/register" className="cursor-pointer">
              <button className="bg-secondary hover:bg-secondary-dark text-navy px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 whitespace-nowrap cursor-pointer">
                Register Interest
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2 cursor-pointer hover:bg-white/10 rounded-md transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <i className={`text-2xl ${isMobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-navy/98 backdrop-blur-md border-t border-white/10">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-md text-base font-medium transition-all duration-200 cursor-pointer ${
                  location.pathname === link.path
                    ? 'text-secondary bg-white/10'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/register" onClick={() => setIsMobileMenuOpen(false)} className="cursor-pointer">
              <button className="w-full bg-secondary hover:bg-secondary-dark text-navy px-6 py-3 rounded-lg font-semibold transition-all duration-300 mt-4 whitespace-nowrap cursor-pointer">
                Register Interest
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
