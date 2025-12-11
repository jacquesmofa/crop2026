import { useState } from 'react';
import Navigation from '../../components/feature/Navigation';
import Footer from '../../components/feature/Footer';

export default function KwetuPage() {
  const [showFullBio, setShowFullBio] = useState(false);

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
              backgroundImage: 'url(https://readdy.ai/api/search-image?query=diverse%20african%20community%20members%20connecting%20and%20supporting%20each%20other%20warm%20caring%20atmosphere%20cultural%20celebration%20professional%20photography%20ultra%20high%20definition&width=1920&height=1080&seq=kwetuhero&orientation=landscape)',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-navy/70 via-primary/60 to-navy/70"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <div className="inline-block mb-4">
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider bg-white/90 px-6 py-2 rounded-full">Co-Organizer</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-2xl">
              KWETU CONNECT PTY LTD
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto drop-shadow-lg">
              Redefining Cultural Understanding of Care Among Indigenous Communities
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block mb-4">
                  <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Mission</span>
                  <div className="h-0.5 w-12 bg-secondary mt-2"></div>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-6">
                  Prioritizing the Care Industry at All Levels
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Kwetu Connect Pty Ltd's main focus is to redefine the cultural understanding of care among the indigenous communities and prioritize the care industry at all levels.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  We promote resilience through indigenous cultural and faith values that improve the care industry, hence positively impacting quality and dignified livelihoods.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <a
                    href="https://kwetu4communities.org/"
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
              <div className="relative">
                <img
                  src="https://readdy.ai/api/search-image?query=african%20indigenous%20community%20care%20workers%20supporting%20elderly%20and%20families%20with%20compassion%20cultural%20respect%20professional%20photography%20ultra%20high%20definition&width=800&height=600&seq=kwetucare&orientation=landscape"
                  alt="Kwetu Connect Care Services"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Morris Mukasa Profile Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-4">
                Leadership Profile
              </h2>
              <div className="h-1 w-24 bg-secondary mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="relative">
                <img
                  src="https://readdy.ai/api/search-image?query=professional%20portrait%20of%20african%20community%20leader%20humanitarian%20advocate%20morris%20mukasa%20in%20formal%20business%20attire%20confident%20smile%20warm%20expression%20professional%20photography%20ultra%20high%20definition%20studio%20lighting&width=800&height=1000&seq=morrismukasa&orientation=portrait"
                  alt="Mr Morris Mukasa"
                  className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-gradient-to-r from-primary/95 to-accent/95 backdrop-blur-sm rounded-xl p-6 shadow-xl">
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-2">
                    Mr Morris Mukasa
                  </h3>
                  <p className="text-white/90 text-lg font-medium">
                    Founder & Director, KWETU CONNECT PTY LTD
                  </p>
                </div>
              </div>

              <div>
                <div className="bg-white rounded-2xl p-8 shadow-xl">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Mr Morris Mukasa is a distinguished advocate, humanitarian, and community leader dedicated to promoting social justice, trauma recovery, utilising cultural & religious values for empowerment of marginalised communities. With a career spanning multiple continents.
                  </p>
                  
                  {showFullBio && (
                    <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                      <p>
                        Mr Mukasa has supported vulnerable groups such as refugees, asylum seekers, detainees, people with Disabilities and marginalised individuals by using music, creative and performing arts, story telling, poems and cultural dialogue as therapeutic tools. Mr Mukasa is the Oceania's region King's representative (Kabaka Foundation) since 2020 and holds key roles with the Refugee Communities Advocacy Network as a consultant.
                      </p>
                      <p>
                        Morris has worked extensively in crisis management, conflict resolution, and refugee support. He is also a Board member of Global Talent Pathways an organisation processing pathways for refugee and ensure and contributing to economic, peaceful settlement and reintegration.
                      </p>
                      <p>
                        In Australia, Morris co-founded Kwetu 4 Communities Inc. a non-profit association that promotes cultural understanding and trauma healing. Through this organisation he established a company known as Kwetu Connect PTY LTD, (managing barriers and navigating Partnerships opportunities)
                      </p>
                      <p>
                        Mr Mukasa has facilitated conflict resolution initiatives, served on policy reform committees, also as the business development manager for companies of people with Disabilities and contributed to international dialogues on refugee support, including engagements with UN representatives in Australia. Mr. Mukasa's commitment to social justice has earned him several accolades, including the African Australian Community Service Award in 2023 & 2024, Community transformative Award in 2024, then of recent appointed to represent the African Nations Refugees at Sydney Archdiocese SYNOD Committee member.
                      </p>
                      <p>
                        He is supported by his brimful wife Teddy Nakalembe and their children all involved in most of community projects as a complete Kwetu basset Family.
                      </p>
                    </div>
                  )}

                  <button
                    onClick={() => setShowFullBio(!showFullBio)}
                    className="mt-6 inline-flex items-center bg-gradient-to-r from-primary to-accent hover:from-primary-dark hover:to-accent-coral text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 cursor-pointer whitespace-nowrap"
                  >
                    {showFullBio ? (
                      <>
                        <i className="ri-arrow-up-line mr-2"></i>
                        Show Less
                      </>
                    ) : (
                      <>
                        <i className="ri-arrow-down-line mr-2"></i>
                        Read More
                      </>
                    )}
                  </button>
                </div>

                <div className="mt-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-6 border-2 border-primary/20">
                  <h4 className="font-serif text-xl font-bold text-navy mb-4">Key Achievements</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <i className="ri-award-line text-secondary text-xl mr-3 mt-1"></i>
                      <span className="text-gray-700">African Australian Community Service Award (2023 & 2024)</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-trophy-line text-secondary text-xl mr-3 mt-1"></i>
                      <span className="text-gray-700">Community Transformative Award (2024)</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-team-line text-secondary text-xl mr-3 mt-1"></i>
                      <span className="text-gray-700">Sydney Archdiocese SYNOD Committee Member</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-global-line text-secondary text-xl mr-3 mt-1"></i>
                      <span className="text-gray-700">Oceania's Region King's Representative (Kabaka Foundation)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-6">
                  Who We Are
                </h2>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    <strong className="text-primary">KWETU CONNECT PTY LTD</strong> is a pioneering organization dedicated to bridging cultural communities with sustainable development initiatives. Founded on the principles of inclusivity, empowerment, and cultural preservation, we work at the intersection of heritage and innovation.
                  </p>
                  <p>
                    Our name "Kwetu" means "our home" in Swahili, reflecting our commitment to creating spaces where diverse communities can thrive while maintaining their cultural identity and traditions. We believe that cultural resilience is fundamental to achieving sustainable development goals.
                  </p>
                  <p>
                    Through strategic partnerships, community engagement, and innovative programs, KWETU CONNECT facilitates meaningful connections between cultural actors, policymakers, academics, and grassroots organizations to co-create solutions for a more equitable and sustainable future.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://readdy.ai/api/search-image?query=diverse%20team%20of%20professionals%20collaborating%20in%20modern%20office%20space%20with%20cultural%20artwork%20and%20global%20maps%20multicultural%20environment%20professional%20photography%20ultra%20high%20definition&width=800&height=1000&seq=kwetu2&orientation=portrait"
                  alt="KWETU CONNECT Team"
                  className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                />
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
                backgroundImage: 'url(https://readdy.ai/api/search-image?query=abstract%20representation%20of%20global%20connectivity%20with%20cultural%20symbols%20and%20sustainable%20development%20icons%20modern%20design%20professional%20illustration%20ultra%20high%20definition&width=1920&height=1080&seq=kwetu3&orientation=landscape)',
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
                  A world where cultural diversity is celebrated as a cornerstone of sustainable development, where Indigenous knowledge systems are valued and protected, and where communities have the agency to shape their own futures while preserving their heritage for generations to come.
                </p>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-10 shadow-2xl">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary-dark rounded-full flex items-center justify-center mb-6">
                  <i className="ri-compass-3-line text-3xl text-navy"></i>
                </div>
                <h3 className="font-serif text-3xl font-bold text-navy mb-6">Our Mission</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To empower cultural communities through strategic partnerships, capacity building, and innovative programs that integrate traditional knowledge with contemporary solutions, fostering resilience, sustainability, and equitable development across diverse populations worldwide.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Focus Areas */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-6">
                Our Core Focus Areas
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We work across multiple domains to create holistic and sustainable impact
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: 'ri-community-line',
                  title: 'Community Empowerment',
                  description: 'Building capacity and leadership within cultural communities to drive their own development initiatives and preserve their heritage.',
                  color: 'from-blue-500 to-blue-600',
                },
                {
                  icon: 'ri-global-line',
                  title: 'Cultural Preservation',
                  description: 'Protecting and promoting Indigenous knowledge systems, traditional practices, and cultural heritage in the face of globalization.',
                  color: 'from-green-500 to-green-600',
                },
                {
                  icon: 'ri-lightbulb-line',
                  title: 'Innovation & Technology',
                  description: 'Leveraging digital tools and innovative approaches to document, share, and sustain cultural knowledge across generations.',
                  color: 'from-purple-500 to-purple-600',
                },
                {
                  icon: 'ri-hand-heart-line',
                  title: 'Sustainable Livelihoods',
                  description: 'Creating economic opportunities that honor cultural values while promoting environmental sustainability and fair trade practices.',
                  color: 'from-orange-500 to-orange-600',
                },
                {
                  icon: 'ri-team-line',
                  title: 'Strategic Partnerships',
                  description: 'Facilitating collaboration between communities, governments, academia, and private sector for collective impact.',
                  color: 'from-red-500 to-red-600',
                },
                {
                  icon: 'ri-book-open-line',
                  title: 'Research & Advocacy',
                  description: 'Conducting evidence-based research and advocating for policies that support cultural rights and community resilience.',
                  color: 'from-teal-500 to-teal-600',
                },
              ].map((area, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${area.color} rounded-full flex items-center justify-center mb-6`}>
                    <i className={`${area.icon} text-3xl text-white`}></i>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-navy mb-4">{area.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{area.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact & Achievements */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-6">
                Our Impact
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Creating meaningful change through dedicated action and collaboration
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="relative">
                <img
                  src="https://readdy.ai/api/search-image?query=community%20workshop%20with%20diverse%20participants%20learning%20traditional%20crafts%20and%20skills%20intergenerational%20knowledge%20transfer%20professional%20photography%20ultra%20high%20definition%20warm%20lighting&width=800&height=600&seq=kwetu4&orientation=landscape"
                  alt="Community Impact"
                  className="rounded-2xl shadow-xl w-full h-auto object-cover"
                />
              </div>
              <div className="space-y-8">
                {[
                  {
                    number: '50+',
                    label: 'Communities Served',
                    description: 'Across multiple continents and cultural contexts',
                  },
                  {
                    number: '200+',
                    label: 'Projects Implemented',
                    description: 'Ranging from cultural preservation to sustainable development',
                  },
                  {
                    number: '10,000+',
                    label: 'Lives Impacted',
                    description: 'Through direct programs and community initiatives',
                  },
                  {
                    number: '30+',
                    label: 'Strategic Partners',
                    description: 'Including NGOs, governments, and international organizations',
                  },
                ].map((stat, index) => (
                  <div key={index} className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="text-5xl font-bold text-primary font-serif">{stat.number}</div>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-navy mb-2">{stat.label}</h4>
                      <p className="text-gray-600">{stat.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CROP 2026 Role */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: 'url(https://readdy.ai/api/search-image?query=international%20conference%20setting%20with%20diverse%20delegates%20networking%20and%20collaborating%20modern%20venue%20professional%20photography%20ultra%20high%20definition&width=1920&height=1080&seq=kwetu5&orientation=landscape)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div className="absolute inset-0 bg-navy/20"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-12 shadow-2xl max-w-5xl mx-auto">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-trophy-line text-4xl text-white"></i>
                </div>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-6">
                  Our Role in CROP 2026
                </h2>
              </div>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  As a co-organizer of the <strong className="text-primary">CROP 2026 Conference</strong>, KWETU CONNECT brings extensive experience in community engagement, cultural programming, and international collaboration. We are committed to ensuring that the conference truly represents the voices and perspectives of diverse cultural communities worldwide.
                </p>
                <p>
                  Our responsibilities include facilitating community roundtables, coordinating cultural expositions, managing stakeholder engagement, and ensuring that Indigenous knowledge holders and cultural practitioners have meaningful participation throughout the conference.
                </p>
                <p>
                  We are dedicated to making CROP 2026 a transformative event that not only discusses cultural resilience but actively demonstrates it through inclusive processes, respectful dialogue, and actionable outcomes that benefit communities globally.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-gradient-to-br from-primary to-primary-dark">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
              Partner With Us
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Join us in building a more culturally resilient and sustainable future. Let's work together to empower communities and preserve heritage.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button
                onClick={() => window.REACT_APP_NAVIGATE('/partnership')}
                className="bg-secondary hover:bg-secondary-dark text-navy px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 shadow-2xl hover:scale-105 whitespace-nowrap cursor-pointer"
              >
                <span className="flex items-center">
                  <i className="ri-hand-heart-line mr-3 text-xl"></i>
                  Explore Partnership
                </span>
              </button>
              <button
                onClick={() => window.REACT_APP_NAVIGATE('/register')}
                className="bg-white hover:bg-gray-100 text-primary px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 shadow-2xl hover:scale-105 whitespace-nowrap cursor-pointer"
              >
                <span className="flex items-center">
                  <i className="ri-mail-line mr-3 text-xl"></i>
                  Get in Touch
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
                Get in Touch
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Connect with us to learn more about our initiatives and partnership opportunities
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-2xl p-8 shadow-xl text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-phone-line text-3xl text-white"></i>
                </div>
                <h3 className="font-serif text-xl font-bold text-navy mb-3">Phone</h3>
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
                  <i className="ri-building-line text-3xl text-white"></i>
                </div>
                <h3 className="font-serif text-xl font-bold text-navy mb-3">ABN</h3>
                <p className="text-gray-600">87 684 798 570</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-xl text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-coral rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-global-line text-3xl text-white"></i>
                </div>
                <h3 className="font-serif text-xl font-bold text-navy mb-3">Website</h3>
                <a
                  href="https://kwetuconnect.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-dark transition-colors font-semibold"
                >
                  kwetuconnect.org
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
