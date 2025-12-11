import { useEffect, useRef, useState } from 'react';
import Navigation from '../../components/feature/Navigation';
import Footer from '../../components/feature/Footer';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default function Venue() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const sydneyImages = [
    'https://readdy.ai/api/search-image?query=sydney%20opera%20house%20iconic%20view%20at%20sunset%20with%20harbour%20bridge%2C%20vibrant%20colors%2C%20professional%20travel%20photography%2C%20ultra%20high%20definition&width=1200&height=800&seq=sydney1&orientation=landscape',
    'https://readdy.ai/api/search-image?query=sydney%20harbour%20waterfront%20with%20modern%20skyline%2C%20beautiful%20blue%20waters%2C%20boats%2C%20sunny%20day%2C%20professional%20photography%2C%20ultra%20high%20definition&width=1200&height=800&seq=sydney2&orientation=landscape',
    'https://readdy.ai/api/search-image?query=bondi%20beach%20sydney%20with%20golden%20sand%2C%20turquoise%20waters%2C%20coastal%20lifestyle%2C%20professional%20travel%20photography%2C%20ultra%20high%20definition&width=1200&height=800&seq=sydney3&orientation=landscape',
    'https://readdy.ai/api/search-image?query=sydney%20city%20skyline%20at%20dusk%20with%20illuminated%20buildings%2C%20darling%20harbour%2C%20vibrant%20urban%20scene%2C%20professional%20photography%2C%20ultra%20high%20definition&width=1200&height=800&seq=sydney4&orientation=landscape',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % sydneyImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (mapRef.current) {
      const map = L.map(mapRef.current).setView([-33.8474, 151.0631], 15);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      const customIcon = L.divIcon({
        className: 'custom-marker',
        html: '<div style="background: linear-gradient(135deg, #0D5C63, #2E8B9E); width: 40px; height: 40px; border-radius: 50% 50% 50% 0; transform: rotate(-45deg); display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(0,0,0,0.3);"><i class="ri-map-pin-fill" style="color: white; font-size: 20px; transform: rotate(45deg);"></i></div>',
        iconSize: [40, 40],
        iconAnchor: [20, 40],
      });

      L.marker([-33.8474, 151.0631], { icon: customIcon })
        .addTo(map)
        .bindPopup('<strong>Sydney Olympic Park</strong><br>CROP Conference 2026 Venue');

      return () => {
        map.remove();
      };
    }
  }, []);

  const logistics = [
    {
      icon: 'ri-hotel-line',
      title: 'Accommodation',
      items: [
        'Partner hotels with conference rates available',
        'Range of options from budget to luxury',
        'Shuttle service from major hotels to venue',
        'Early booking recommended for best rates',
      ],
    },
    {
      icon: 'ri-flight-takeoff-line',
      title: 'Travel & Transport',
      items: [
        'Sydney Kingsford Smith Airport (20km from venue)',
        'Direct train service to Olympic Park Station',
        'Taxi and rideshare services readily available',
        'Parking facilities at the venue',
      ],
    },
    {
      icon: 'ri-passport-line',
      title: 'Visa Information',
      items: [
        'Check visa requirements for Australia',
        'Apply early - processing can take several weeks',
        'Conference invitation letters available upon request',
        'Contact your nearest Australian embassy',
      ],
    },
    {
      icon: 'ri-wheelchair-line',
      title: 'Accessibility',
      items: [
        'Fully wheelchair-accessible venue',
        'Accessible transport options available',
        'Sign language interpretation provided',
        'Special dietary requirements accommodated',
      ],
    },
  ];

  const venueFeatures = [
    { icon: 'ri-presentation-line', title: 'State-of-the-art Conference Facilities' },
    { icon: 'ri-restaurant-line', title: 'On-site Catering & Dining' },
    { icon: 'ri-wifi-line', title: 'High-speed WiFi Throughout' },
    { icon: 'ri-customer-service-line', title: 'Multilingual Support Staff' },
    { icon: 'ri-parking-box-line', title: 'Ample Parking Space' },
    { icon: 'ri-shield-check-line', title: 'Security & Safety Measures' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=the%20dome%20sydney%20olympic%20park%20exterior%20modern%20architecture%2C%20large%20scale%20venue%2C%20professional%20architectural%20photography%2C%20clear%20blue%20sky%2C%20ultra%20high%20definition&width=1920&height=800&seq=venue-hero&orientation=landscape"
            alt="The Dome, Sydney Olympic Park"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy/70 via-primary-dark/65 to-navy/70"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-6">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Sydney, Australia</span>
            <div className="h-0.5 w-16 bg-secondary mt-2 mx-auto"></div>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">
            Venue & Logistics
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Join us at The Dome, Sydney Olympic Park — a world-class venue in the heart of Australia's most vibrant city.
          </p>
        </div>
      </section>

      {/* Venue Details */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-6">
                The Dome
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <i className="ri-map-pin-line text-3xl text-primary mt-1"></i>
                  <div>
                    <h3 className="font-semibold text-navy text-lg mb-2">Address</h3>
                    <p className="text-gray-600">
                      The Dome<br />
                      1 Showground Rd<br />
                      Sydney Olympic Park NSW 2127<br />
                      Australia
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <i className="ri-building-line text-3xl text-primary mt-1"></i>
                  <div>
                    <h3 className="font-semibold text-navy text-lg mb-2">World-Class Facility</h3>
                    <p className="text-gray-600">
                      The Dome at Sydney Olympic Park is a premier event venue featuring state-of-the-art facilities, flexible spaces, and modern amenities designed to host international conferences of the highest caliber.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <i className="ri-train-line text-3xl text-primary mt-1"></i>
                  <div>
                    <h3 className="font-semibold text-navy text-lg mb-2">Easy Access</h3>
                    <p className="text-gray-600">
                      Located just 16km from Sydney CBD with excellent public transport connections via train and bus. Sydney Olympic Park station provides direct access to the venue.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://readdy.ai/api/search-image?query=the%20dome%20sydney%20olympic%20park%20interior%20large%20conference%20hall%2C%20modern%20facilities%2C%20professional%20event%20space%2C%20high%20ceilings%2C%20ultra%20high%20definition%20architectural%20photography&width=800&height=1000&seq=venue-interior&orientation=portrait"
                alt="The Dome Interior"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Venue Features */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
            {venueFeatures.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 hover:border-primary hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${feature.icon} text-2xl text-primary`}></i>
                </div>
                <p className="text-sm text-gray-700 font-medium leading-tight">{feature.title}</p>
              </div>
            ))}
          </div>

          {/* Large Venue Image */}
          <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl mb-16">
            <img
              src="https://readdy.ai/api/search-image?query=sydney%20olympic%20park%20aerial%20panoramic%20view%2C%20the%20dome%20venue%2C%20modern%20facilities%2C%20green%20spaces%2C%20professional%20architectural%20photography%2C%20clear%20day%2C%20ultra%20high%20definition&width=1600&height=900&seq=venue-aerial&orientation=landscape"
              alt="Sydney Olympic Park Aerial View"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className="font-serif text-3xl font-bold mb-2">Sydney Olympic Park</h3>
              <p className="text-lg text-white/90">A world-renowned precinct that hosted the 2000 Olympic Games</p>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Discounts Section */}
      <section className="py-24 bg-gradient-to-br from-secondary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-6">
              Exclusive Travel Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take advantage of our special conference rates for flights, accommodation, and transportation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Discounted Flights */}
            <a
              href="https://www.skyscanner.com.au/flights-to/syd/cheap-flights-to-sydney.html"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <div className="relative h-64">
                <img
                  src="https://readdy.ai/api/search-image?query=modern%20commercial%20airplane%20flying%20above%20clouds%20at%20sunset%2C%20professional%20aviation%20photography%2C%20beautiful%20sky%20colors%2C%20travel%20and%20tourism%20concept%2C%20ultra%20high%20definition&width=600&height=400&seq=flights-discount&orientation=landscape"
                  alt="Discounted Flights"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/50 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                    <i className="ri-flight-takeoff-line text-2xl text-navy"></i>
                  </div>
                  <h3 className="font-serif text-2xl font-bold">Discounted Flights</h3>
                </div>
                <p className="text-white/90 mb-4">Find the best flight deals to Sydney from anywhere in the world</p>
                <div className="inline-flex items-center space-x-2 text-secondary font-semibold group-hover:translate-x-2 transition-transform">
                  <span>Search Flights</span>
                  <i className="ri-arrow-right-line"></i>
                </div>
              </div>
            </a>

            {/* Discounted Hotels */}
            <a
              href="https://www.booking.com/searchresults.html?ss=Sydney+Olympic+Park&checkin=2026-11-05&checkout=2026-11-09"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <div className="relative h-64">
                <img
                  src="https://readdy.ai/api/search-image?query=luxury%20hotel%20room%20interior%20with%20modern%20design%2C%20comfortable%20bed%2C%20city%20view%2C%20professional%20hospitality%20photography%2C%20warm%20lighting%2C%20five%20star%20accommodation%2C%20ultra%20high%20definition&width=600&height=400&seq=hotels-discount&orientation=landscape"
                  alt="Discounted Hotels"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                    <i className="ri-hotel-line text-2xl text-navy"></i>
                  </div>
                  <h3 className="font-serif text-2xl font-bold">Discounted Hotels</h3>
                </div>
                <p className="text-white/90 mb-4">Special conference rates at partner hotels near the venue</p>
                <div className="inline-flex items-center space-x-2 text-secondary font-semibold group-hover:translate-x-2 transition-transform">
                  <span>Browse Hotels</span>
                  <i className="ri-arrow-right-line"></i>
                </div>
              </div>
            </a>

            {/* Discounted Rides */}
            <a
              href="https://transportnsw.info/trip"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <div className="relative h-64">
                <img
                  src="https://readdy.ai/api/search-image?query=modern%20sydney%20train%20at%20station%2C%20clean%20public%20transport%2C%20professional%20photography%2C%20urban%20mobility%2C%20comfortable%20travel%2C%20ultra%20high%20definition&width=600&height=400&seq=transport-discount&orientation=landscape"
                  alt="Discounted Transportation"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent/90 via-accent/50 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                    <i className="ri-train-line text-2xl text-navy"></i>
                  </div>
                  <h3 className="font-serif text-2xl font-bold">Discounted Rides</h3>
                </div>
                <p className="text-white/90 mb-4">Convenient transport options and special rates for delegates</p>
                <div className="inline-flex items-center space-x-2 text-secondary font-semibold group-hover:translate-x-2 transition-transform">
                  <span>Plan Journey</span>
                  <i className="ri-arrow-right-line"></i>
                </div>
              </div>
            </a>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-lg">
              <i className="ri-information-line text-primary"></i>
              <span className="text-gray-700">For exclusive conference discount codes, contact <a href="mailto:crop2026@gmail.com" className="text-primary font-semibold hover:underline">crop2026@gmail.com</a></span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-6">
              Location Map
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Easily accessible from Sydney CBD and the airport.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
            <div ref={mapRef} className="w-full h-96 md:h-[500px]"></div>
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Sydney+Olympic+Park+NSW+Australia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-primary font-semibold hover:text-primary-dark transition-colors cursor-pointer"
            >
              <i className="ri-external-link-line"></i>
              <span>Open in Google Maps</span>
            </a>
          </div>
        </div>
      </section>

      {/* Logistics Information */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-6">
              Travel &amp; Logistics
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know to plan your visit to Sydney.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {logistics.map((section, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className={`${section.icon} text-3xl text-white`}></i>
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-navy">
                    {section.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <i className="ri-checkbox-circle-fill text-primary text-xl mt-0.5 flex-shrink-0"></i>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Sydney with Image Slideshow */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-6">
              Discover Sydney
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Australia's largest and most vibrant city awaits you
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1">
              {sydneyImages.map((image, index) => (
                <div
                  key={index}
                  className="absolute inset-0 transition-opacity duration-1000"
                  style={{
                    opacity: currentImageIndex === index ? 1 : 0,
                  }}
                >
                  <img
                    src={image}
                    alt={`Sydney ${index + 1}`}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              ))}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {sydneyImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      currentImageIndex === index ? 'bg-white w-8' : 'bg-white/50'
                    }`}
                    aria-label={`View image ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h3 className="font-serif text-3xl font-bold text-navy mb-6">
                Experience Sydney's Vibrant Culture
              </h3>
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Sydney is Australia's largest and most vibrant city, known for its iconic Opera House, stunning harbor, and multicultural atmosphere. The city offers world-class dining, cultural attractions, and natural beauty that seamlessly blend urban sophistication with coastal charm.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  November is springtime in Sydney, with pleasant temperatures ranging from 18-25°C (64-77°F) and ideal conditions for exploring the city's beaches, parks, and cultural sites. The weather is perfect for outdoor activities and sightseeing.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                    <div className="flex items-center space-x-3 mb-3">
                      <i className="ri-sun-line text-secondary text-2xl"></i>
                      <h4 className="font-semibold text-navy">Perfect Climate</h4>
                    </div>
                    <p className="text-gray-600 text-sm">Spring weather with comfortable temperatures and low rainfall</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                    <div className="flex items-center space-x-3 mb-3">
                      <i className="ri-global-line text-secondary text-2xl"></i>
                      <h4 className="font-semibold text-navy">Multicultural Hub</h4>
                    </div>
                    <p className="text-gray-600 text-sm">Over 250 languages spoken, celebrating diversity</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                    <div className="flex items-center space-x-3 mb-3">
                      <i className="ri-restaurant-line text-secondary text-2xl"></i>
                      <h4 className="font-semibold text-navy">World-Class Dining</h4>
                    </div>
                    <p className="text-gray-600 text-sm">Renowned restaurants and diverse culinary experiences</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                    <div className="flex items-center space-x-3 mb-3">
                      <i className="ri-landscape-line text-secondary text-2xl"></i>
                      <h4 className="font-semibold text-navy">Natural Beauty</h4>
                    </div>
                    <p className="text-gray-600 text-sm">Stunning beaches, harbor, and national parks</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sydney Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative h-48">
                <img
                  src="https://readdy.ai/api/search-image?query=sydney%20opera%20house%20close%20up%20architectural%20detail%2C%20iconic%20white%20sails%2C%20blue%20sky%2C%20professional%20photography%2C%20ultra%20high%20definition&width=600&height=400&seq=opera-house&orientation=landscape"
                  alt="Sydney Opera House"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h4 className="font-serif text-xl font-semibold text-navy mb-2">Sydney Opera House</h4>
                <p className="text-gray-600">UNESCO World Heritage site and architectural masterpiece</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative h-48">
                <img
                  src="https://readdy.ai/api/search-image?query=sydney%20harbour%20bridge%20iconic%20view%2C%20steel%20arch%20bridge%2C%20boats%20in%20harbour%2C%20professional%20travel%20photography%2C%20ultra%20high%20definition&width=600&height=400&seq=harbour-bridge&orientation=landscape"
                  alt="Sydney Harbour Bridge"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h4 className="font-serif text-xl font-semibold text-navy mb-2">Harbour Bridge</h4>
                <p className="text-gray-600">Iconic landmark offering spectacular city views</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative h-48">
                <img
                  src="https://readdy.ai/api/search-image?query=royal%20botanic%20gardens%20sydney%20lush%20greenery%2C%20peaceful%20walkways%2C%20harbour%20views%2C%20professional%20photography%2C%20ultra%20high%20definition&width=600&height=400&seq=botanic-gardens&orientation=landscape"
                  alt="Royal Botanic Gardens"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h4 className="font-serif text-xl font-semibold text-navy mb-2">Botanic Gardens</h4>
                <p className="text-gray-600">Tranquil oasis in the heart of the city</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Logistics */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-primary to-primary-dark p-12 rounded-2xl shadow-2xl">
            <i className="ri-customer-service-2-line text-6xl text-secondary mb-6"></i>
            <h2 className="font-serif text-3xl font-bold text-white mb-4">
              Need Assistance?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Our logistics team is here to help with accommodation, travel arrangements, visa support, and any special requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:crop2026@gmail.com"
                className="inline-flex items-center justify-center space-x-2 bg-secondary hover:bg-secondary-dark text-navy px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
              >
                <i className="ri-mail-line"></i>
                <span>Email Logistics Team</span>
              </a>
              <a
                href="https://mag.wcoomd.org/uploads/2018/05/blank.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 text-white border-2 border-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer"
              >
                <i className="ri-download-line"></i>
                <span>Download Travel Guide</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
