
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../../components/feature/Navigation';
import Footer from '../../components/feature/Footer';

export default function Pillars() {
  const [activePillar, setActivePillar] = useState(0);

  const pillars = [
    {
      icon: 'ri-store-line',
      title: 'Culture, Trade, Economies & Sustainable Livelihoods',
      color: 'from-primary to-primary-dark',
      description: 'Exploring sustainable economic models rooted in cultural practices, traditional crafts, and community-based enterprises that support livelihoods while preserving heritage.',
      focus: [
        'Fair trade frameworks for cultural products',
        'Cultural entrepreneurship and innovation',
        'Revitalization of traditional economies',
        'Ethical cultural tourism development',
      ],
      outcomes: [
        'Establishment of Culture-Based Economy Working Group',
        'Fair trade certification guidelines for cultural products',
      ],
    },
    {
      icon: 'ri-heart-pulse-line',
      title: 'Global Health Equity & Wellness Systems',
      color: 'from-secondary to-secondary-dark',
      description: 'Integrating traditional medicine and cultural practices into modern health systems, addressing health disparities, and promoting holistic wellbeing approaches.',
      focus: [
        'Integrating traditional medicine into health systems',
        'Addressing health disparities in cultural communities',
        'Mental health frameworks rooted in cultural practices',
        'One Health approach and pandemic preparedness',
      ],
      outcomes: [
        'Framework for integrating traditional medicine into national health systems',
        'Guidelines for culturally safe healthcare delivery',
      ],
    },
    {
      icon: 'ri-smartphone-line',
      title: 'Technology, Digital Innovation & Data Sovereignty',
      color: 'from-accent to-accent-coral',
      description: 'Empowering communities through technology while protecting Indigenous data sovereignty, leveraging digital tools for cultural preservation and innovation.',
      focus: [
        'Digital tools for cultural preservation',
        'AI applications for language revitalization',
        'Indigenous data sovereignty frameworks',
        'Preventing digital colonialism',
        'Youth-led technological innovation',
      ],
      outcomes: [
        'Launch of Youth Cultural Innovation Lab',
        'Data sovereignty frameworks and protocols',
      ],
    },
    {
      icon: 'ri-graduation-cap-line',
      title: 'Education, Research, Skills & Capacity Development',
      color: 'from-primary-light to-primary',
      description: 'Strengthening educational systems to support cultural transmission, decolonizing research methodologies, and building capacity for sustainable development.',
      focus: [
        'Integration of Indigenous knowledge into formal education',
        'Decolonizing research methodologies',
        'Intergenerational knowledge transfer',
        'Social entrepreneurship and capacity building',
      ],
      outcomes: [
        'Global Cultural Research Network establishment',
        'Educational toolkit integrating cultural knowledge into curricula',
      ],
    },
    {
      icon: 'ri-earth-line',
      title: 'Climate Justice, Cultural Governance & Planetary Stewardship',
      color: 'from-primary-dark to-accent',
      description: 'Recognizing Indigenous knowledge as essential to climate action, ensuring cultural rights in governance, and promoting sustainable planetary stewardship.',
      focus: [
        'Indigenous knowledge for climate adaptation',
        'Cultural governance and rights frameworks',
        'Migration and cultural continuity',
        'Participatory urban planning',
      ],
      outcomes: [
        'Multi-stakeholder Sydney Declaration on Cultural Resilience',
        'Indigenous Climate Knowledge Network establishment',
        'Urban cultural resilience toolkit',
      ],
    },
    {
      icon: 'ri-hand-heart-line',
      title: 'Care Industry & Cultural Transformation',
      color: 'from-purple-500 to-purple-700',
      description: 'Redefining cultural transformative values for the care industry in the new era. Integrating cultural heritage perspectives to transform how we approach care, support caregivers, and empower seniors in decision-making.',
      focus: [
        'How culture can transform and improve the care industry',
        'Redefining cultural transformative values for care in the new era',
        'Care for caregivers in cultural heritage perspective',
        'Bringing seniors to partake in decision-making',
        'Cultural approaches to aged care and disability support',
      ],
      outcomes: [
        'Framework for culturally-informed care practices',
        'Guidelines for senior participation in care governance',
        'Caregiver support programs rooted in cultural values',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=six%20interconnected%20pillars%20representing%20global%20sustainability%20cultural%20diversity%20and%20care%20industry%2C%20modern%20abstract%20visualization%20with%20earth%20tones%20vibrant%20colors%20and%20purple%20accents%2C%20professional%20design%2C%20ultra%20high%20definition&width=1920&height=800&seq=pillars-hero-6&orientation=landscape"
            alt="Six Strategic Pillars"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy/75 via-primary-dark/70 to-navy/75"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-6">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Conference Framework</span>
            <div className="h-0.5 w-16 bg-secondary mt-2 mx-auto"></div>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">
            Six Strategic Pillars
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Comprehensive frameworks addressing the intersection of culture, care, and global sustainability challenges.
          </p>
        </div>
      </section>

      {/* Interactive Pillars */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Pillar Tabs */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {pillars.map((pillar, index) => (
              <button
                key={index}
                id={`pillar-${index}`}
                onClick={() => setActivePillar(index)}
                className={`p-6 rounded-xl text-left transition-all duration-300 cursor-pointer ${
                  activePillar === index
                    ? `bg-gradient-to-br ${pillar.color} text-white shadow-xl scale-105`
                    : 'bg-white text-navy hover:shadow-lg border border-gray-200'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    activePillar === index ? 'bg-white/20' : 'bg-gray-100'
                  }`}>
                    <i className={`${pillar.icon} text-2xl ${
                      activePillar === index ? 'text-white' : 'text-primary'
                    }`}></i>
                  </div>
                  <h3 className="font-serif text-lg font-semibold flex-1">
                    {pillar.title}
                  </h3>
                </div>
              </button>
            ))}
          </div>

          {/* Active Pillar Content */}
          <div className="bg-white rounded-2xl p-10 shadow-2xl border border-gray-100">
            <div className="flex items-start space-x-6 mb-8">
              <div className={`w-20 h-20 bg-gradient-to-br ${pillars[activePillar].color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                <i className={`${pillars[activePillar].icon} text-4xl text-white`}></i>
              </div>
              <div className="flex-1">
                <div className="text-primary text-sm font-semibold mb-2">PILLAR {activePillar + 1}</div>
                <h2 className="font-serif text-3xl font-bold text-navy mb-4">
                  {pillars[activePillar].title}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {pillars[activePillar].description}
                </p>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8 mb-8">
              <h4 className="font-serif text-xl font-semibold text-navy mb-6">Key Focus Areas</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {pillars[activePillar].focus.map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                    <i className="ri-checkbox-circle-fill text-primary text-xl mt-0.5 flex-shrink-0"></i>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h4 className="font-serif text-xl font-semibold text-navy mb-6">Expected Outcomes</h4>
              <div className="space-y-3">
                {pillars[activePillar].outcomes.map((outcome, idx) => (
                  <div key={idx} className="flex items-start space-x-3 p-4 bg-gradient-to-r from-secondary/10 to-transparent rounded-lg">
                    <i className="ri-trophy-line text-secondary text-xl mt-0.5 flex-shrink-0"></i>
                    <span className="text-gray-700 font-medium">{outcome}</span>
                  </div>
                ))}
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
                desc: 'Ensuring fair access to resources, opportunities, and cultural participation across all communities.',
              },
              {
                icon: 'ri-parent-line',
                title: 'Intergenerational Continuity',
                desc: 'Bridging traditional knowledge with contemporary innovation for sustainable cultural transmission.',
              },
              {
                icon: 'ri-team-line',
                title: 'Community Leadership',
                desc: 'Centering community voices and grassroots leadership in all decision-making processes.',
              },
              {
                icon: 'ri-book-open-line',
                title: 'Knowledge Democracy',
                desc: 'Recognizing diverse knowledge systems as equally valid and essential to global solutions.',
              },
              {
                icon: 'ri-seedling-line',
                title: 'Sustainability',
                desc: 'Integrating environmental, social, and cultural sustainability in all initiatives.',
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
                  {theme.desc}
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
