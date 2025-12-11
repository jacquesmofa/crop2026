import { Link } from 'react-router-dom';
import Navigation from '../../components/feature/Navigation';
import Footer from '../../components/feature/Footer';

export default function Outcomes() {
  const outcomes = [
    {
      icon: 'ri-file-shield-line',
      title: 'The Sydney Declaration on Cultural Resilience',
      color: 'from-primary to-primary-dark',
      description: 'A landmark global statement affirming the centrality of culture in sustainability agendas, climate action, and community resilience.',
      details: [
        'Principles for integrating cultural perspectives into climate policy',
        'Commitments to protect Indigenous knowledge and cultural rights',
        'Framework for culture-based sustainable development',
        'Call to action for governments, organizations, and communities',
      ],
      impact: 'This declaration will serve as a foundational document for advocacy, policy development, and international collaboration on cultural resilience.',
    },
    {
      icon: 'ri-book-open-line',
      title: 'Compendium of Research and Best Practices',
      color: 'from-secondary to-secondary-dark',
      description: 'A comprehensive collection of academic research, case studies, and community-led initiatives demonstrating effective cultural resilience strategies.',
      details: [
        'Peer-reviewed research papers from conference presentations',
        'Documented case studies from diverse global contexts',
        'Practical toolkits and implementation guides',
        'Video documentation of community practices',
      ],
      impact: 'This resource will be freely accessible to researchers, practitioners, and communities worldwide, advancing knowledge and practice.',
    },
    {
      icon: 'ri-team-line',
      title: 'Thematic Working Groups',
      color: 'from-accent to-accent-coral',
      description: 'Ongoing collaborative networks focused on each of the nine thematic pillars, driving sustained action beyond the conference.',
      details: [
        'Multi-stakeholder groups for each thematic pillar',
        'Action plans with clear objectives and timelines',
        'Regular virtual convenings and knowledge exchange',
        'Annual progress reporting and accountability mechanisms',
      ],
      impact: 'These working groups will ensure conference outcomes translate into tangible, long-term impact across all thematic areas.',
    },
  ];

  const additionalOutputs = [
    {
      icon: 'ri-video-line',
      title: 'Documentary Film',
      description: 'Professional documentation of conference highlights, key messages, and participant voices.',
    },
    {
      icon: 'ri-global-line',
      title: 'Digital Platform',
      description: 'Online hub for ongoing collaboration, resource sharing, and community engagement.',
    },
    {
      icon: 'ri-newspaper-line',
      title: 'Media Coverage',
      description: 'Extensive media outreach to amplify conference messages and outcomes globally.',
    },
    {
      icon: 'ri-award-line',
      title: 'Recognition Awards',
      description: 'Honoring outstanding contributions to cultural resilience and sustainability.',
    },
    {
      icon: 'ri-map-pin-line',
      title: 'Regional Networks',
      description: 'Establishment of regional hubs for localized action and collaboration.',
    },
    {
      icon: 'ri-calendar-check-line',
      title: 'Follow-up Events',
      description: 'Series of regional and thematic convenings building on conference momentum.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=successful%20international%20conference%20outcomes%20with%20diverse%20participants%20celebrating%20achievements%2C%20signing%20documents%2C%20collaborative%20success%2C%20professional%20photography%2C%20warm%20lighting%2C%20ultra%20high%20definition&width=1920&height=800&seq=outcomes-hero&orientation=landscape"
            alt="Conference Outcomes"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy/75 via-primary-dark/70 to-navy/75"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-6">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Conference Impact</span>
            <div className="h-0.5 w-16 bg-secondary mt-2 mx-auto"></div>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">
            Expected Outcomes
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Tangible deliverables and lasting impact from three days of global collaboration and commitment.
          </p>
        </div>
      </section>

      {/* Main Outcomes */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-6">
              Primary Outcomes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three flagship deliverables that will shape the future of cultural resilience globally.
            </p>
          </div>

          <div className="space-y-12">
            {outcomes.map((outcome, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden hover:shadow-3xl transition-all duration-300"
              >
                <div className={`bg-gradient-to-r ${outcome.color} p-8`}>
                  <div className="flex items-center space-x-6">
                    <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <i className={`${outcome.icon} text-5xl text-white`}></i>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-3xl font-bold text-white mb-2">
                        {outcome.title}
                      </h3>
                      <p className="text-white/90 text-lg">
                        {outcome.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <h4 className="font-serif text-xl font-semibold text-navy mb-6">Key Components</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {outcome.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                        <i className="ri-checkbox-circle-fill text-primary text-xl mt-0.5 flex-shrink-0"></i>
                        <span className="text-gray-700">{detail}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gradient-to-r from-secondary/10 to-accent/10 p-6 rounded-xl border-l-4 border-secondary">
                    <h5 className="font-semibold text-navy mb-2 flex items-center">
                      <i className="ri-lightbulb-line text-secondary mr-2"></i>
                      Expected Impact
                    </h5>
                    <p className="text-gray-700 leading-relaxed">
                      {outcome.impact}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Outputs */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-6">
              Additional Outputs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Supporting deliverables that amplify and sustain conference impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalOutputs.map((output, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl border border-gray-200 hover:border-primary hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary group-hover:to-accent rounded-2xl flex items-center justify-center mb-6 transition-all duration-300">
                  <i className={`${output.icon} text-3xl text-primary group-hover:text-white transition-colors`}></i>
                </div>
                <h3 className="font-serif text-xl font-semibold text-navy mb-3 group-hover:text-primary transition-colors">
                  {output.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {output.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-6">
              Impact Timeline
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How conference outcomes will unfold over time.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary to-accent hidden lg:block"></div>

            <div className="space-y-12">
              {[
                {
                  period: 'During Conference',
                  items: ['Launch of Sydney Declaration', 'Formation of Working Groups', 'Research presentations and documentation'],
                },
                {
                  period: '3 Months Post-Conference',
                  items: ['Publication of Compendium', 'First Working Group meetings', 'Digital platform launch'],
                },
                {
                  period: '6-12 Months',
                  items: ['Regional follow-up events', 'Working Group action plans implementation', 'Documentary film release'],
                },
                {
                  period: 'Ongoing',
                  items: ['Annual progress reports', 'Continuous knowledge exchange', 'Sustained advocacy and collaboration'],
                },
              ].map((phase, index) => (
                <div key={index} className="relative">
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12 lg:ml-auto' : 'lg:pl-12'}`}>
                    <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 shadow-lg">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold">{index + 1}</span>
                        </div>
                        <h3 className="font-serif text-2xl font-semibold text-navy">
                          {phase.period}
                        </h3>
                      </div>
                      <ul className="space-y-2">
                        {phase.items.map((item, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <i className="ri-arrow-right-s-line text-primary mt-1"></i>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
