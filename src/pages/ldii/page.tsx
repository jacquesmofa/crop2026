import Navigation from '../../components/feature/Navigation';
import Footer from '../../components/feature/Footer';

export default function LDIIPage() {
  const handleBackToHome = () => {
    window.REACT_APP_NAVIGATE('/#co-organizers');
  };

  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://readdy.ai/api/search-image?query=african%20community%20development%20sustainable%20livelihoods%20empowerment%20cultural%20preservation%20international%20cooperation%20professional%20photography%20ultra%20high%20definition&width=1920&height=1080&seq=ldiihero&orientation=landscape)',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-navy/70 via-primary/60 to-navy/70"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <div className="inline-block mb-4">
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider bg-white/90 px-6 py-2 rounded-full">Co-Organizer</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-2xl">
              Livelihood Development International Initiatives
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto drop-shadow-lg">
              Empowering Communities Through Sustainable Livelihood Programs
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img
                  src="https://readdy.ai/api/search-image?query=african%20community%20members%20working%20together%20on%20sustainable%20development%20projects%20cultural%20preservation%20empowerment%20professional%20photography%20ultra%20high%20definition&width=800&height=600&seq=ldiimission&orientation=landscape"
                  alt="LDII Community Development"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
              </div>
              <div>
                <div className="inline-block mb-4">
                  <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Mission</span>
                  <div className="h-0.5 w-12 bg-secondary mt-2"></div>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-6">
                  Building Resilient Communities Worldwide
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Livelihood Development International Initiatives (LDII) is an international organization committed to empowering communities through sustainable livelihood programs, cultural preservation, and resilience-building initiatives worldwide.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  We work at the intersection of cultural heritage and sustainable development, ensuring that communities maintain their identity while building economic resilience and adapting to global challenges.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <a
                    href="https://ldiinitiatives.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-gradient-to-r from-primary to-accent hover:from-primary-dark hover:to-accent-coral text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer whitespace-nowrap"
                  >
                    <i className="ri-external-link-line mr-2"></i>
                    Visit Official Website
                  </a>
                  <button
                    onClick={handleBackToHome}
                    className="inline-flex items-center justify-center bg-white border-2 border-primary hover:bg-primary hover:text-white text-primary px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg cursor-pointer whitespace-nowrap"
                  >
                    <i className="ri-arrow-left-line mr-2"></i>
                    Back to Co-Organizers
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: 'url(https://readdy.ai/api/search-image?query=rural%20community%20development%20project%20with%20people%20working%20together%20on%20sustainable%20agriculture%20and%20livelihood%20programs%20professional%20photography%20ultra%20high%20definition%20hopeful%20atmosphere&width=1920&height=1080&seq=ldii1&orientation=landscape)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-navy/20 via-primary/20 to-navy/20"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-block mb-6">
              <span className="text-secondary font-bold text-sm uppercase tracking-wider bg-white/90 px-6 py-2 rounded-full">
                Co-Organizer
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Livelihood Development<br />International Initiatives
            </h1>
            <p className="text-xl md:text-2xl text-white font-semibold mb-4 drop-shadow-lg">
              (LDII)
            </p>
            <p className="text-2xl md:text-3xl text-white font-semibold max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
              Transforming Lives Through Sustainable Livelihood Development
            </p>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <img
                  src="https://readdy.ai/api/search-image?query=international%20development%20workers%20collaborating%20with%20local%20communities%20on%20sustainable%20projects%20diverse%20team%20professional%20photography%20ultra%20high%20definition&width=800&height=1000&seq=ldii2&orientation=portrait"
                  alt="LDII Team"
                  className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                />
              </div>
              <div>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-6">
                  Who We Are
                </h2>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    <strong className="text-primary">Livelihood Development International Initiatives (LDII)</strong> is a global organization committed to empowering vulnerable communities through sustainable livelihood programs, capacity building, and integrated development approaches.
                  </p>
                  <p>
                    With decades of experience working across diverse contexts—from rural agricultural communities to urban informal settlements—LDII has established itself as a trusted partner in community-driven development. We believe that sustainable livelihoods are the foundation for resilient communities and lasting social change.
                  </p>
                  <p>
                    Our approach is holistic, addressing not only economic needs but also social, cultural, and environmental dimensions of development. We work hand-in-hand with communities, respecting local knowledge and traditions while introducing innovative solutions that enhance resilience and prosperity.
                  </p>
                  <p>
                    LDII operates on the principle that development must be locally owned, culturally appropriate, and environmentally sustainable to create meaningful and lasting impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: 'url(https://readdy.ai/api/search-image?query=sustainable%20development%20goals%20concept%20with%20community%20empowerment%20and%20environmental%20conservation%20themes%20professional%20illustration%20ultra%20high%20definition&width=1920&height=1080&seq=ldii3&orientation=landscape)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div className="absolute inset-0 bg-primary/20"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-10 shadow-2xl">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mb-6">
                  <i className="ri-eye-line text-3xl text-white"></i>
                </div>
                <h3 className="font-serif text-3xl font-bold text-navy mb-6">Our Vision</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  A world where all communities have access to sustainable livelihoods, where poverty is eradicated through dignified work and economic opportunity, and where development is inclusive, equitable, and respects both cultural heritage and environmental limits.
                </p>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-10 shadow-2xl">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary-dark rounded-full flex items-center justify-center mb-6">
                  <i className="ri-compass-3-line text-3xl text-navy"></i>
                </div>
                <h3 className="font-serif text-3xl font-bold text-navy mb-6">Our Mission</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To empower marginalized communities worldwide through integrated livelihood development programs that build capacity, create economic opportunities, strengthen resilience, and promote sustainable practices that honor cultural traditions and protect the environment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Programs */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-6">
                Our Core Programs
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive approaches to sustainable livelihood development
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: 'ri-plant-line',
                  title: 'Sustainable Agriculture',
                  description: 'Supporting smallholder farmers with climate-smart agricultural practices, market access, and value chain development.',
                  color: 'from-green-500 to-green-600',
                },
                {
                  icon: 'ri-store-2-line',
                  title: 'Microenterprise Development',
                  description: 'Providing training, microfinance, and business development support to help communities create sustainable income sources.',
                  color: 'from-blue-500 to-blue-600',
                },
                {
                  icon: 'ri-graduation-cap-line',
                  title: 'Skills Training',
                  description: 'Offering vocational training and capacity building programs that equip individuals with marketable skills.',
                  color: 'from-purple-500 to-purple-600',
                },
                {
                  icon: 'ri-group-line',
                  title: "Women's Empowerment",
                  description: 'Implementing gender-focused programs that promote economic independence and leadership for women.',
                  color: 'from-pink-500 to-pink-600',
                },
                {
                  icon: 'ri-seedling-line',
                  title: 'Environmental Conservation',
                  description: 'Integrating environmental sustainability into livelihood programs through conservation and restoration initiatives.',
                  color: 'from-teal-500 to-teal-600',
                },
                {
                  icon: 'ri-heart-pulse-line',
                  title: 'Health & Nutrition',
                  description: 'Addressing health and nutrition needs as fundamental components of sustainable livelihoods.',
                  color: 'from-red-500 to-red-600',
                },
              ].map((program, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${program.color} rounded-full flex items-center justify-center mb-6`}>
                    <i className={`${program.icon} text-3xl text-white`}></i>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-navy mb-4">{program.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{program.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Reach */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-6">
                Our Global Reach
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Making a difference in communities across continents
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div className="relative">
                <img
                  src="https://readdy.ai/api/search-image?query=world%20map%20showing%20international%20development%20projects%20and%20global%20community%20connections%20professional%20infographic%20ultra%20high%20definition&width=800&height=600&seq=ldii4&orientation=landscape"
                  alt="Global Reach"
                  className="rounded-2xl shadow-xl w-full h-auto object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: '45+', label: 'Countries', icon: 'ri-earth-line' },
                  { number: '500+', label: 'Projects', icon: 'ri-briefcase-line' },
                  { number: '2M+', label: 'Beneficiaries', icon: 'ri-group-line' },
                  { number: '25+', label: 'Years Experience', icon: 'ri-time-line' },
                ].map((stat, index) => (
                  <div key={index} className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-center text-white shadow-xl">
                    <i className={`${stat.icon} text-5xl mb-4`}></i>
                    <div className="text-4xl font-bold font-serif mb-2">{stat.number}</div>
                    <div className="text-lg font-semibold">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-12">
              <h3 className="font-serif text-3xl font-bold text-navy mb-8 text-center">
                Regional Focus Areas
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { region: 'Africa', countries: '20+ countries', icon: 'ri-map-pin-line' },
                  { region: 'Asia-Pacific', countries: '15+ countries', icon: 'ri-map-pin-line' },
                  { region: 'Latin America', countries: '8+ countries', icon: 'ri-map-pin-line' },
                  { region: 'Middle East', countries: '5+ countries', icon: 'ri-map-pin-line' },
                ].map((area, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary-dark rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className={`${area.icon} text-3xl text-navy`}></i>
                    </div>
                    <h4 className="font-serif text-2xl font-bold text-navy mb-2">{area.region}</h4>
                    <p className="text-gray-600">{area.countries}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Approach & Methodology */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: 'url(https://readdy.ai/api/search-image?query=community%20participatory%20planning%20session%20with%20diverse%20stakeholders%20collaborative%20development%20professional%20photography%20ultra%20high%20definition&width=1920&height=1080&seq=ldii5&orientation=landscape)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div className="absolute inset-0 bg-navy/20"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-12 shadow-2xl">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-12 text-center">
                Our Approach
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: 'Community-Driven',
                    description: 'We believe communities are the experts on their own needs. Our programs are designed and implemented with full community participation.',
                    icon: 'ri-team-line',
                  },
                  {
                    title: 'Culturally Sensitive',
                    description: 'We respect and integrate local cultural values, traditions, and knowledge systems into all our development initiatives.',
                    icon: 'ri-global-line',
                  },
                  {
                    title: 'Holistic Integration',
                    description: 'We address multiple dimensions of wellbeing—economic, social, environmental, and cultural—in an integrated manner.',
                    icon: 'ri-links-line',
                  },
                  {
                    title: 'Evidence-Based',
                    description: 'Our programs are grounded in research, data, and proven methodologies, with continuous monitoring and evaluation.',
                    icon: 'ri-bar-chart-line',
                  },
                  {
                    title: 'Partnership-Oriented',
                    description: 'We collaborate with local organizations, governments, and international partners to maximize impact and sustainability.',
                    icon: 'ri-hand-heart-line',
                  },
                  {
                    title: 'Long-Term Commitment',
                    description: 'We invest in building local capacity and systems that ensure programs continue long after our direct involvement ends.',
                    icon: 'ri-time-line',
                  },
                ].map((principle, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                        <i className={`${principle.icon} text-2xl text-white`}></i>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-serif text-xl font-bold text-navy mb-2">{principle.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{principle.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CROP 2026 Role */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-trophy-line text-4xl text-white"></i>
                </div>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-6">
                  Our Role in CROP 2026
                </h2>
              </div>
              <div className="bg-gray-50 rounded-2xl p-10 shadow-xl">
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    As a co-organizer of the <strong className="text-primary">CROP 2026 Conference</strong>, LDII brings its extensive experience in livelihood development, community engagement, and sustainable practices to ensure the conference addresses the real-world challenges faced by communities globally.
                  </p>
                  <p>
                    Our role encompasses coordinating thematic working sessions on sustainable livelihoods and economic resilience, facilitating knowledge exchange between practitioners and policymakers, and ensuring that conference outcomes translate into actionable programs that benefit communities on the ground.
                  </p>
                  <p>
                    We are particularly focused on the intersection of cultural resilience and economic sustainability, recognizing that livelihoods must be both economically viable and culturally appropriate to be truly sustainable.
                  </p>
                  <p>
                    LDII is committed to ensuring that CROP 2026 produces concrete frameworks, partnerships, and initiatives that will advance sustainable livelihood development while respecting and strengthening cultural identity and community resilience worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-gradient-to-br from-primary to-primary-dark">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
              Collaborate With Us
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Join us in creating sustainable livelihoods and resilient communities. Together, we can make lasting change.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button
                onClick={() => window.REACT_APP_NAVIGATE('/partnership')}
                className="bg-secondary hover:bg-secondary-dark text-navy px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 shadow-2xl hover:scale-105 whitespace-nowrap cursor-pointer"
              >
                <span className="flex items-center">
                  <i className="ri-hand-heart-line mr-3 text-xl"></i>
                  Partnership Opportunities
                </span>
              </button>
              <button
                onClick={() => window.REACT_APP_NAVIGATE('/register')}
                className="bg-white hover:bg-gray-100 text-primary px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 shadow-2xl hover:scale-105 whitespace-nowrap cursor-pointer"
              >
                <span className="flex items-center">
                  <i className="ri-mail-line mr-3 text-xl"></i>
                  Contact Us
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">
                Connect With Us
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Partner with us to create sustainable change and build resilient communities
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl p-8 shadow-xl text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-phone-line text-3xl text-white"></i>
                </div>
                <h3 className="font-serif text-xl font-bold text-navy mb-3">Contact</h3>
                <p className="text-gray-600 mb-2">
                  <a href="tel:+61246279742" className="hover:text-primary transition-colors">
                    +61 2 4627 9742
                  </a>
                </p>
                <p className="text-gray-600">
                  <a href="tel:+61469739330" className="hover:text-primary transition-colors">
                    +61 469 739 330
                  </a>
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-xl text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary-dark rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-global-line text-3xl text-white"></i>
                </div>
                <h3 className="font-serif text-xl font-bold text-navy mb-3">Website</h3>
                <a
                  href="https://ldiinitiatives.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-dark transition-colors font-semibold"
                >
                  ldiinitiatives.org
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
