import { Link } from 'react-router-dom';
import Navigation from '../../components/feature/Navigation';
import Footer from '../../components/feature/Footer';

export default function Vision() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=diverse%20group%20of%20indigenous%20and%20cultural%20leaders%20from%20around%20the%20world%20collaborating%20together%20in%20modern%20conference%20setting%2C%20multicultural%20unity%2C%20professional%20photography%2C%20warm%20natural%20lighting%2C%20ultra%20high%20definition&width=1920&height=800&seq=vision-hero&orientation=landscape"
            alt="Cultural Leaders Collaboration"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy/75 via-primary-dark/70 to-navy/75"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-6">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Mission</span>
            <div className="h-0.5 w-16 bg-secondary mt-2 mx-auto"></div>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">
            Vision & Mission
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Repositioning culture as a central pillar of global sustainability and planetary stewardship.
          </p>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-6">
                Executive Summary
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white p-10 rounded-2xl border border-gray-200 shadow-xl mb-16">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                The Cultural Resilience, One Planet (CROP) Conference 2026 represents a transformative moment in global sustainability discourse. For too long, culture has been treated as peripheral to environmental and development agendas. This conference boldly repositions culture as a central pillar of planetary stewardship.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Bringing together 800+ international Indigenous and cultural leaders, policymakers, academics, private sector innovators, and youth changemakers, CROP 2026 will forge new pathways for integrating cultural resilience into global sustainability frameworks.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                Through three intensive days of dialogue, collaboration, and action, we will co-create strategies that honor cultural diversity while addressing the urgent challenges facing our shared planet.
              </p>
            </div>

            {/* Global Context */}
            <div className="mb-16">
              <h3 className="font-serif text-3xl font-bold text-navy mb-8 text-center">
                The Global Context
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    icon: 'ri-temp-hot-line',
                    title: 'Climate Crisis',
                    description: 'Accelerating climate change threatens cultural heritage sites, traditional livelihoods, and Indigenous knowledge systems worldwide.',
                  },
                  {
                    icon: 'ri-flight-takeoff-line',
                    title: 'Mass Displacement',
                    description: 'Over 100 million people forcibly displaced, facing loss of cultural identity and community connections.',
                  },
                  {
                    icon: 'ri-building-line',
                    title: 'Rapid Urbanization',
                    description: 'Urban populations growing by 1.5 million weekly, challenging cultural spaces and traditional practices.',
                  },
                  {
                    icon: 'ri-scales-line',
                    title: 'Growing Inequality',
                    description: 'Widening gaps in access to resources, opportunities, and cultural participation across communities.',
                  },
                ].map((item, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-primary hover:shadow-lg transition-all duration-300">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-4">
                      <i className={`${item.icon} text-3xl text-white`}></i>
                    </div>
                    <h4 className="font-serif text-xl font-semibold text-navy mb-3">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Central Question */}
            <div className="bg-gradient-to-br from-primary to-primary-dark p-12 rounded-2xl text-center mb-16">
              <div className="max-w-3xl mx-auto">
                <i className="ri-question-line text-6xl text-secondary mb-6 block"></i>
                <h3 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
                  The Central Question
                </h3>
                <p className="text-2xl md:text-3xl text-white font-serif italic leading-relaxed">
                  "How can cultural resilience shape a sustainable future for our shared planet?"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Five Strategic Pillars */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-6">
              Six Strategic Pillars
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive frameworks addressing the intersection of culture, care, and global sustainability challenges.
            </p>
          </div>

          <div className="space-y-12">
            {/* Pillar 1 */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-primary to-primary-dark p-8">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className="ri-store-line text-4xl text-white"></i>
                  </div>
                  <div>
                    <div className="text-secondary text-sm font-semibold mb-2">PILLAR 1</div>
                    <h3 className="font-serif text-3xl font-bold text-white">
                      Culture, Trade, Economies & Sustainable Livelihoods
                    </h3>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="mb-8">
                  <h4 className="font-serif text-xl font-semibold text-navy mb-4">Key Focus Areas</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      'Fair trade frameworks for cultural products',
                      'Cultural entrepreneurship and innovation',
                      'Revitalization of traditional economies',
                      'Ethical cultural tourism development',
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                        <i className="ri-checkbox-circle-fill text-primary text-xl mt-0.5 flex-shrink-0"></i>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-6">
                  <h4 className="font-serif text-xl font-semibold text-navy mb-4">Expected Outcomes</h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <i className="ri-trophy-line text-secondary text-xl mt-1 flex-shrink-0"></i>
                      <p className="text-gray-700">Establishment of Culture-Based Economy Working Group</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <i className="ri-trophy-line text-secondary text-xl mt-1 flex-shrink-0"></i>
                      <p className="text-gray-700">Fair trade certification guidelines for cultural products</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-secondary to-secondary-dark p-8">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className="ri-heart-pulse-line text-4xl text-navy"></i>
                  </div>
                  <div>
                    <div className="text-navy/70 text-sm font-semibold mb-2">PILLAR 2</div>
                    <h3 className="font-serif text-3xl font-bold text-navy">
                      Global Health Equity & Wellness Systems
                    </h3>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="mb-8">
                  <h4 className="font-serif text-xl font-semibold text-navy mb-4">Key Focus Areas</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      'Integrating traditional medicine into health systems',
                      'Addressing health disparities in cultural communities',
                      'Mental health frameworks rooted in cultural practices',
                      'One Health approach and pandemic preparedness',
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                        <i className="ri-checkbox-circle-fill text-secondary text-xl mt-0.5 flex-shrink-0"></i>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-6">
                  <h4 className="font-serif text-xl font-semibold text-navy mb-4">Expected Outcomes</h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <i className="ri-trophy-line text-secondary text-xl mt-1 flex-shrink-0"></i>
                      <p className="text-gray-700">Framework for integrating traditional medicine into national health systems</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <i className="ri-trophy-line text-secondary text-xl mt-1 flex-shrink-0"></i>
                      <p className="text-gray-700">Guidelines for culturally safe healthcare delivery</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-accent to-accent-coral p-8">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className="ri-smartphone-line text-4xl text-white"></i>
                  </div>
                  <div>
                    <div className="text-white/80 text-sm font-semibold mb-2">PILLAR 3</div>
                    <h3 className="font-serif text-3xl font-bold text-white">
                      Technology, Digital Innovation & Data Sovereignty
                    </h3>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="mb-8">
                  <h4 className="font-serif text-xl font-semibold text-navy mb-4">Key Focus Areas</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      'Digital tools for cultural preservation',
                      'AI applications for language revitalization',
                      'Indigenous data sovereignty frameworks',
                      'Preventing digital colonialism',
                      'Youth-led technological innovation',
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                        <i className="ri-checkbox-circle-fill text-accent text-xl mt-0.5 flex-shrink-0"></i>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-6">
                  <h4 className="font-serif text-xl font-semibold text-navy mb-4">Expected Outcomes</h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <i className="ri-trophy-line text-accent text-xl mt-1 flex-shrink-0"></i>
                      <p className="text-gray-700">Launch of Youth Cultural Innovation Lab</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <i className="ri-trophy-line text-accent text-xl mt-1 flex-shrink-0"></i>
                      <p className="text-gray-700">Data sovereignty frameworks and protocols</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-primary-light to-primary p-8">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className="ri-graduation-cap-line text-4xl text-white"></i>
                  </div>
                  <div>
                    <div className="text-white/80 text-sm font-semibold mb-2">PILLAR 4</div>
                    <h3 className="font-serif text-3xl font-bold text-white">
                      Education, Research, Skills & Capacity Development
                    </h3>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="mb-8">
                  <h4 className="font-serif text-xl font-semibold text-navy mb-4">Key Focus Areas</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      'Integration of Indigenous knowledge into formal education',
                      'Decolonizing research methodologies',
                      'Intergenerational knowledge transfer',
                      'Social entrepreneurship and capacity building',
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                        <i className="ri-checkbox-circle-fill text-primary text-xl mt-0.5 flex-shrink-0"></i>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-6">
                  <h4 className="font-serif text-xl font-semibold text-navy mb-4">Expected Outcomes</h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <i className="ri-trophy-line text-primary text-xl mt-1 flex-shrink-0"></i>
                      <p className="text-gray-700">Global Cultural Research Network establishment</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <i className="ri-trophy-line text-primary text-xl mt-1 flex-shrink-0"></i>
                      <p className="text-gray-700">Educational toolkit integrating cultural knowledge into curricula</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pillar 5 */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-primary-dark to-accent p-8">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className="ri-earth-line text-4xl text-white"></i>
                  </div>
                  <div>
                    <div className="text-secondary text-sm font-semibold mb-2">PILLAR 5</div>
                    <h3 className="font-serif text-3xl font-bold text-white">
                      Climate Justice, Cultural Governance & Planetary Stewardship
                    </h3>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="mb-8">
                  <h4 className="font-serif text-xl font-semibold text-navy mb-4">Key Focus Areas</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      'Indigenous knowledge for climate adaptation',
                      'Cultural governance and rights frameworks',
                      'Migration and cultural continuity',
                      'Participatory urban planning',
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                        <i className="ri-checkbox-circle-fill text-primary-dark text-xl mt-0.5 flex-shrink-0"></i>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-6">
                  <h4 className="font-serif text-xl font-semibold text-navy mb-4">Expected Outcomes</h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <i className="ri-trophy-line text-primary-dark text-xl mt-1 flex-shrink-0"></i>
                      <p className="text-gray-700">Multi-stakeholder Sydney Declaration on Cultural Resilience</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <i className="ri-trophy-line text-primary-dark text-xl mt-1 flex-shrink-0"></i>
                      <p className="text-gray-700">Indigenous Climate Knowledge Network establishment</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <i className="ri-trophy-line text-primary-dark text-xl mt-1 flex-shrink-0"></i>
                      <p className="text-gray-700">Urban cultural resilience toolkit</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pillar 6 - Care Industry */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-purple-500 to-purple-700 p-8">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className="ri-hand-heart-line text-4xl text-white"></i>
                  </div>
                  <div>
                    <div className="text-purple-100 text-sm font-semibold mb-2">PILLAR 6</div>
                    <h3 className="font-serif text-3xl font-bold text-white">
                      Care Industry & Cultural Transformation
                    </h3>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="mb-8">
                  <h4 className="font-serif text-xl font-semibold text-navy mb-4">Key Focus Areas</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      'How culture can transform and improve the care industry',
                      'Redefining cultural transformative values for care in the new era',
                      'Care for caregivers in cultural heritage perspective',
                      'Bringing seniors to partake in decision-making',
                      'Cultural approaches to aged care and disability support',
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                        <i className="ri-checkbox-circle-fill text-purple-600 text-xl mt-0.5 flex-shrink-0"></i>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-6">
                  <h4 className="font-serif text-xl font-semibold text-navy mb-4">Expected Outcomes</h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <i className="ri-trophy-line text-purple-600 text-xl mt-1 flex-shrink-0"></i>
                      <p className="text-gray-700">Framework for culturally-informed care practices</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <i className="ri-trophy-line text-purple-600 text-xl mt-1 flex-shrink-0"></i>
                      <p className="text-gray-700">Guidelines for senior participation in care governance</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <i className="ri-trophy-line text-purple-600 text-xl mt-1 flex-shrink-0"></i>
                      <p className="text-gray-700">Caregiver support programs rooted in cultural values</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Cutting Themes */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-6">
              Cross-Cutting Themes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Essential perspectives that weave through all six strategic pillars.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: 'ri-scales-3-line',
                title: 'Justice & Equity',
                description: 'Ensuring fair access to resources, opportunities, and cultural participation across all communities.',
              },
              {
                icon: 'ri-parent-line',
                title: 'Intergenerational Continuity',
                description: 'Bridging traditional knowledge with contemporary innovation for sustainable cultural transmission.',
              },
              {
                icon: 'ri-team-line',
                title: 'Community Leadership',
                description: 'Centering community voices and grassroots leadership in all decision-making processes.',
              },
              {
                icon: 'ri-book-open-line',
                title: 'Knowledge Democracy',
                description: 'Recognizing diverse knowledge systems as equally valid and essential to global solutions.',
              },
              {
                icon: 'ri-seedling-line',
                title: 'Sustainability',
                description: 'Integrating environmental, social, and cultural sustainability in all initiatives.',
              },
            ].map((theme, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:border-primary hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-6">
                  <i className={`${theme.icon} text-3xl text-white`}></i>
                </div>
                <h3 className="font-serif text-xl font-semibold text-navy mb-4">
                  {theme.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {theme.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-6">
              Conference Methodology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A transdisciplinary approach bringing together diverse perspectives and knowledge systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: 'ri-presentation-line',
                title: 'Plenary Sessions',
                description: 'High-level discussions featuring global leaders addressing critical intersections of culture and sustainability.',
              },
              {
                icon: 'ri-group-line',
                title: 'Parallel Thematic Working Sessions',
                description: 'Deep-dive workshops focused on each strategic pillar, developing actionable strategies.',
              },
              {
                icon: 'ri-discuss-line',
                title: 'Community Roundtables',
                description: 'Grassroots-led sessions where community practitioners share lived experiences and local solutions.',
              },
              {
                icon: 'ri-palette-line',
                title: 'Cultural Expositions',
                description: 'Showcasing traditional arts, crafts, and cultural practices from diverse communities worldwide.',
              },
              {
                icon: 'ri-user-voice-line',
                title: 'Youth Forums',
                description: 'Dedicated spaces for young leaders to present innovative solutions and shape future directions.',
              },
              {
                icon: 'ri-microscope-line',
                title: 'Research Presentations',
                description: 'Academic and community-based research on cultural resilience and sustainability.',
              },
            ].map((method, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-primary hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-6">
                  <i className={`${method.icon} text-3xl text-white`}></i>
                </div>
                <h3 className="font-serif text-xl font-semibold text-navy mb-4">
                  {method.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {method.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
