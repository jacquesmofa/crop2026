
export default function PartnersSection() {
  const partners = [
    { name: 'UN Women', url: 'https://www.unwomen.org/', logo: 'https://readdy.ai/api/search-image?query=UN%20Women%20official%20logo%20high%20resolution%20colorful&width=200&height=100&seq=unwomen&orientation=landscape' },
    { name: 'UNHCR', url: 'https://www.unhcr.org/', logo: 'https://readdy.ai/api/search-image?query=UNHCR%20United%20Nations%20High%20Commissioner%20for%20Refugees%20official%20logo%20colorful&width=200&height=100&seq=unhcr&orientation=landscape' },
    { name: 'UNESCO', url: 'https://www.unesco.org/', logo: 'https://readdy.ai/api/search-image?query=UNESCO%20United%20Nations%20Educational%20Scientific%20Cultural%20Organization%20official%20logo%20colorful&width=200&height=100&seq=unesco&orientation=landscape' },
    { name: 'UNDP', url: 'https://www.undp.org/', logo: 'https://readdy.ai/api/search-image?query=UNDP%20United%20Nations%20Development%20Programme%20official%20logo%20colorful&width=200&height=100&seq=undp&orientation=landscape' },
    { name: 'UNICEF', url: 'https://www.unicef.org/', logo: 'https://readdy.ai/api/search-image?query=UNICEF%20United%20Nations%20Children%20Fund%20official%20logo%20colorful&width=200&height=100&seq=unicef&orientation=landscape' },
    { name: 'WHO', url: 'https://www.who.int/', logo: 'https://readdy.ai/api/search-image?query=WHO%20World%20Health%20Organization%20official%20logo%20colorful&width=200&height=100&seq=who&orientation=landscape' },
    { name: 'ILO', url: 'https://www.ilo.org/', logo: 'https://readdy.ai/api/search-image?query=ILO%20International%20Labour%20Organization%20official%20logo%20colorful&width=200&height=100&seq=ilo&orientation=landscape' },
    { name: 'FAO', url: 'https://www.fao.org/', logo: 'https://readdy.ai/api/search-image?query=FAO%20Food%20Agriculture%20Organization%20United%20Nations%20official%20logo%20colorful&width=200&height=100&seq=fao&orientation=landscape' },
    { name: 'UNEP', url: 'https://www.unep.org/', logo: 'https://readdy.ai/api/search-image?query=UNEP%20United%20Nations%20Environment%20Programme%20official%20logo%20colorful&width=200&height=100&seq=unep&orientation=landscape' },
    { name: 'IFAD', url: 'https://www.ifad.org/', logo: 'https://readdy.ai/api/search-image?query=IFAD%20International%20Fund%20Agricultural%20Development%20official%20logo%20colorful&width=200&height=100&seq=ifad&orientation=landscape' },
    { name: 'WFP', url: 'https://www.wfp.org/', logo: 'https://readdy.ai/api/search-image?query=WFP%20World%20Food%20Programme%20United%20Nations%20official%20logo%20colorful&width=200&height=100&seq=wfp&orientation=landscape' },
    { name: 'UNODC', url: 'https://www.unodc.org/', logo: 'https://readdy.ai/api/search-image?query=UNODC%20United%20Nations%20Office%20Drugs%20Crime%20official%20logo%20colorful&width=200&height=100&seq=unodc&orientation=landscape' },
    { name: 'IOM', url: 'https://www.iom.int/', logo: 'https://readdy.ai/api/search-image?query=IOM%20International%20Organization%20Migration%20official%20logo%20colorful&width=200&height=100&seq=iom&orientation=landscape' },
    { name: 'UNIDO', url: 'https://www.unido.org/', logo: 'https://readdy.ai/api/search-image?query=UNIDO%20United%20Nations%20Industrial%20Development%20Organization%20official%20logo%20colorful&width=200&height=100&seq=unido&orientation=landscape' },
    { name: 'ITU', url: 'https://www.itu.int/', logo: 'https://readdy.ai/api/search-image?query=ITU%20International%20Telecommunication%20Union%20official%20logo%20colorful&width=200&height=100&seq=itu&orientation=landscape' },
    { name: 'WIPO', url: 'https://www.wipo.int/', logo: 'https://readdy.ai/api/search-image?query=WIPO%20World%20Intellectual%20Property%20Organization%20official%20logo%20colorful&width=200&height=100&seq=wipo&orientation=landscape' },
    { name: 'WMO', url: 'https://public.wmo.int/', logo: 'https://readdy.ai/api/search-image?query=WMO%20World%20Meteorological%20Organization%20official%20logo%20colorful&width=200&height=100&seq=wmo&orientation=landscape' },
    { name: 'IMO', url: 'https://www.imo.org/', logo: 'https://readdy.ai/api/search-image?query=IMO%20International%20Maritime%20Organization%20official%20logo%20colorful&width=200&height=100&seq=imo&orientation=landscape' },
    { name: 'ICAO', url: 'https://www.icao.int/', logo: 'https://readdy.ai/api/search-image?query=ICAO%20International%20Civil%20Aviation%20Organization%20official%20logo%20colorful&width=200&height=100&seq=icao&orientation=landscape' },
    { name: 'UNWTO', url: 'https://www.unwto.org/', logo: 'https://readdy.ai/api/search-image?query=UNWTO%20World%20Tourism%20Organization%20official%20logo%20colorful&width=200&height=100&seq=unwto&orientation=landscape' },
    { name: 'UPU', url: 'https://www.upu.int/', logo: 'https://readdy.ai/api/search-image?query=UPU%20Universal%20Postal%20Union%20official%20logo%20colorful&width=200&height=100&seq=upu&orientation=landscape' },
    { name: 'The Salvation Army Australia', url: 'https://www.salvationarmy.org.au/', logo: 'https://readdy.ai/api/search-image?query=The%20Salvation%20Army%20Australia%20official%20logo%20red%20shield%20colorful&width=200&height=100&seq=salvationarmy&orientation=landscape' },
    { name: 'Citizens Commission on Human Rights', url: 'https://www.cchr.org/', logo: 'https://readdy.ai/api/search-image?query=Citizens%20Commission%20Human%20Rights%20CCHR%20official%20logo%20colorful&width=200&height=100&seq=cchr&orientation=landscape' },
    { name: 'World Bank', url: 'https://www.worldbank.org/', logo: 'https://readdy.ai/api/search-image?query=World%20Bank%20official%20logo%20colorful&width=200&height=100&seq=worldbank&orientation=landscape' },
    { name: 'IMF', url: 'https://www.imf.org/', logo: 'https://readdy.ai/api/search-image?query=IMF%20International%20Monetary%20Fund%20official%20logo%20colorful&width=200&height=100&seq=imf&orientation=landscape' },
    { name: 'OECD', url: 'https://www.oecd.org/', logo: 'https://readdy.ai/api/search-image?query=OECD%20Organisation%20Economic%20Cooperation%20Development%20official%20logo%20colorful&width=200&height=100&seq=oecd&orientation=landscape' },
    { name: 'Commonwealth Secretariat', url: 'https://thecommonwealth.org/', logo: 'https://readdy.ai/api/search-image?query=Commonwealth%20Secretariat%20official%20logo%20colorful&width=200&height=100&seq=commonwealth&orientation=landscape' },
    { name: 'African Union', url: 'https://au.int/', logo: 'https://readdy.ai/api/search-image?query=African%20Union%20official%20logo%20colorful&width=200&height=100&seq=africanunion&orientation=landscape' },
    { name: 'ASEAN', url: 'https://asean.org/', logo: 'https://readdy.ai/api/search-image?query=ASEAN%20Association%20Southeast%20Asian%20Nations%20official%20logo%20colorful&width=200&height=100&seq=asean&orientation=landscape' },
    { name: 'Pacific Islands Forum', url: 'https://www.forumsec.org/', logo: 'https://readdy.ai/api/search-image?query=Pacific%20Islands%20Forum%20Secretariat%20official%20logo%20colorful&width=200&height=100&seq=pacificforum&orientation=landscape' },
  ];

  const handleKwetuClick = () => {
    window.REACT_APP_NAVIGATE('/kwetu');
  };

  const handleLDIIClick = () => {
    window.REACT_APP_NAVIGATE('/ldii');
  };

  return (
    <section id="co-organizers" className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Collaboration</span>
            <div className="h-0.5 w-16 bg-secondary mt-2 mx-auto"></div>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mt-4 mb-4">
            Co-Organizers
          </h2>
        </div>

        {/* Organizers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          <div 
            onClick={handleKwetuClick}
            className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-4">
              <i className="ri-global-line text-3xl text-white"></i>
            </div>
            <h3 className="font-serif text-xl font-bold text-navy mb-3">
              KWETU CONNECT PTY LTD
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              A leading organization dedicated to fostering cultural connections and community development across diverse populations, with a focus on sustainable and inclusive growth.
            </p>
            <div className="inline-flex items-center text-primary font-semibold cursor-pointer group">
              <span>Learn More</span>
              <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform"></i>
            </div>
          </div>

          <div 
            onClick={handleLDIIClick}
            className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary-dark rounded-2xl flex items-center justify-center mb-4">
              <i className="ri-hand-heart-line text-3xl text-white"></i>
            </div>
            <h3 className="font-serif text-xl font-bold text-navy mb-3">
              Livelihood Development International Initiatives (LDII)
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              An international organization committed to empowering communities through sustainable livelihood programs, cultural preservation, and resilience-building initiatives worldwide.
            </p>
            <div className="inline-flex items-center text-primary font-semibold cursor-pointer group">
              <span>Learn More</span>
              <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform"></i>
            </div>
          </div>
        </div>

        {/* Collaborative Partners Section */}
        <div className="text-center mb-10">
          <h3 className="font-serif text-2xl font-bold text-navy mb-3">
            Collaborative Partners
          </h3>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            Working together with leading international organizations, UN agencies, and civil society partners to advance cultural resilience globally.
          </p>
        </div>

        {/* Partner Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-6">
          {partners.map((partner, index) => (
            <a
              key={index}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-xl p-4 border border-gray-200 hover:border-primary hover:shadow-2xl transition-all duration-300 flex items-center justify-center cursor-pointer transform hover:-translate-y-2"
              title={partner.name}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-full h-14 object-contain transition-all duration-300"
                loading="lazy"
              />
            </a>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-500 text-sm mb-4">
            Partnership opportunities available for organizations committed to cultural resilience and sustainability
          </p>
          <button
            onClick={() => window.REACT_APP_NAVIGATE('/partnership')}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary to-accent hover:from-primary-dark hover:to-accent-coral text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer whitespace-nowrap"
          >
            <span>Become a Partner</span>
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
