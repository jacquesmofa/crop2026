import { useState, useEffect } from 'react';

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const conferenceDate = new Date('2026-11-06T09:00:00+11:00');

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const distance = conferenceDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleRegisterClick = () => {
    window.REACT_APP_NAVIGATE('/register');
  };

  const handleSponsorClick = () => {
    window.REACT_APP_NAVIGATE('/partnership');
  };

  const handlePapersClick = () => {
    window.REACT_APP_NAVIGATE('/register');
  };

  const handlePillarClick = (pillarIndex: number) => {
    window.REACT_APP_NAVIGATE('/pillars');
    // Scroll to specific pillar after navigation
    setTimeout(() => {
      const element = document.getElementById(`pillar-${pillarIndex}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  };

  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background - Single Sunset Image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(https://readdy.ai/api/search-image?query=stunning%20ultra%20high%20definition%20dramatic%20sunset%20view%20of%20sydney%20olympic%20park%20the%20dome%20venue%20with%20deep%20orange%20and%20purple%20sky%20golden%20hour%20lighting%20warm%20atmospheric%20colors%20professional%20architectural%20photography%20vibrant%20moody%20atmosphere%20dark%20tones&width=1920&height=1080&seq=countdownsunset1&orientation=landscape)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-block mb-4">
            <span className="text-secondary font-bold text-sm uppercase tracking-wider bg-black/40 backdrop-blur-sm px-6 py-2 rounded-full shadow-lg" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
              Annual Signature Initiative
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-3" style={{ textShadow: '3px 3px 12px rgba(0,0,0,0.9), 1px 1px 6px rgba(0,0,0,0.8)' }}>
            <span className="inline-block bg-black/50 backdrop-blur-sm px-6 py-3 rounded-2xl">
              CROP 2026 Conference
            </span>
          </h2>
          <p className="text-2xl md:text-3xl text-white font-semibold mb-6" style={{ textShadow: '3px 3px 12px rgba(0,0,0,0.9), 1px 1px 6px rgba(0,0,0,0.8)' }}>
            <span className="inline-block bg-black/50 backdrop-blur-sm px-6 py-2 rounded-xl">
              Cultural Resilience, One Planet
            </span>
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-6 text-white text-lg">
            <div className="flex items-center space-x-2 bg-black/50 backdrop-blur-sm text-white px-6 py-3 rounded-full shadow-xl" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
              <i className="ri-map-pin-line text-secondary"></i>
              <span className="font-semibold">Sydney Olympic Park, Australia</span>
            </div>
            <div className="hidden md:block text-white text-3xl" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>|</div>
            <div className="flex items-center space-x-2 bg-black/50 backdrop-blur-sm text-white px-6 py-3 rounded-full shadow-xl" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
              <i className="ri-calendar-line text-secondary"></i>
              <span className="font-semibold">November 6-8, 2026</span>
            </div>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-5xl mx-auto">
          <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 text-center shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <div className="text-5xl md:text-6xl font-bold text-white mb-2 font-serif" style={{ textShadow: '3px 3px 10px rgba(0,0,0,0.9)' }}>
              {timeLeft.days}
            </div>
            <div className="text-white font-semibold text-base uppercase tracking-wider" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>Days</div>
          </div>
          <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 text-center shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <div className="text-5xl md:text-6xl font-bold text-white mb-2 font-serif" style={{ textShadow: '3px 3px 10px rgba(0,0,0,0.9)' }}>
              {String(timeLeft.hours).padStart(2, '0')}
            </div>
            <div className="text-white font-semibold text-base uppercase tracking-wider" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>Hours</div>
          </div>
          <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 text-center shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <div className="text-5xl md:text-6xl font-bold text-white mb-2 font-serif" style={{ textShadow: '3px 3px 10px rgba(0,0,0,0.9)' }}>
              {String(timeLeft.minutes).padStart(2, '0')}
            </div>
            <div className="text-white font-semibold text-base uppercase tracking-wider" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>Minutes</div>
          </div>
          <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 text-center shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <div className="text-5xl md:text-6xl font-bold text-white mb-2 font-serif" style={{ textShadow: '3px 3px 10px rgba(0,0,0,0.9)' }}>
              {String(timeLeft.seconds).padStart(2, '0')}
            </div>
            <div className="text-white font-semibold text-base uppercase tracking-wider" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>Seconds</div>
          </div>
        </div>

        {/* Five Conference Pillars + Care Industry */}
        <div className="mb-8">
          <h3 className="text-2xl font-serif font-bold text-white text-center mb-6" style={{ textShadow: '3px 3px 12px rgba(0,0,0,0.9), 1px 1px 6px rgba(0,0,0,0.8)' }}>
            <span className="inline-block bg-black/50 backdrop-blur-sm px-6 py-2 rounded-xl">
              Conference Focus Areas
            </span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {[
              { icon: 'ri-store-3-line', title: 'Culture & Trade', color: 'from-orange-500 to-orange-600', index: 0 },
              { icon: 'ri-heart-pulse-line', title: 'Health Equity', color: 'from-green-500 to-green-600', index: 1 },
              { icon: 'ri-cpu-line', title: 'Technology', color: 'from-blue-500 to-blue-600', index: 2 },
              { icon: 'ri-graduation-cap-line', title: 'Education', color: 'from-red-500 to-red-600', index: 3 },
              { icon: 'ri-leaf-line', title: 'Climate Justice', color: 'from-teal-500 to-teal-600', index: 4 },
              { icon: 'ri-hand-heart-line', title: 'Care Industry', color: 'from-purple-500 to-purple-600', index: 5 },
            ].map((pillar) => (
              <div
                key={pillar.index}
                onClick={() => handlePillarClick(pillar.index)}
                className="bg-black/50 backdrop-blur-sm rounded-2xl p-5 text-center shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${pillar.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                  <i className={`${pillar.icon} text-2xl text-white`}></i>
                </div>
                <h4 className="font-semibold text-white text-base" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>{pillar.title}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
          <button
            onClick={handleRegisterClick}
            className="bg-gradient-to-r from-secondary to-secondary-dark hover:from-secondary-dark hover:to-secondary text-navy px-8 py-4 rounded-full font-bold text-base transition-all duration-300 shadow-2xl hover:shadow-secondary/50 hover:scale-105 whitespace-nowrap cursor-pointer"
          >
            <span className="flex items-center">
              <i className="ri-user-add-line mr-3 text-lg"></i>
              Register Now
            </span>
          </button>
          <button
            onClick={handleSponsorClick}
            className="bg-white/95 backdrop-blur-sm hover:bg-white text-navy px-8 py-4 rounded-full font-bold text-base transition-all duration-300 shadow-2xl hover:scale-105 whitespace-nowrap cursor-pointer"
          >
            <span className="flex items-center">
              <i className="ri-hand-heart-line mr-3 text-lg"></i>
              Become a Sponsor
            </span>
          </button>
          <button
            onClick={handlePapersClick}
            className="bg-primary/95 backdrop-blur-sm hover:bg-primary text-white px-8 py-4 rounded-full font-bold text-base transition-all duration-300 shadow-2xl hover:scale-105 whitespace-nowrap cursor-pointer"
          >
            <span className="flex items-center">
              <i className="ri-file-text-line mr-3 text-lg"></i>
              Call for Papers
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
