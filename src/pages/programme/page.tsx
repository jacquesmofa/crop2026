import Navigation from '../../components/feature/Navigation';
import Footer from '../../components/feature/Footer';

export default function Programme() {
  const schedule = [
    {
      day: 'Day 1',
      date: 'November 6, 2026',
      theme: 'Opening & Foundation',
      sessions: [
        {
          time: '08:00 - 09:00',
          title: 'Registration & Welcome Coffee',
          type: 'registration',
          icon: 'ri-cup-line',
        },
        {
          time: '09:00 - 10:30',
          title: 'Opening Ceremony & Keynote Address',
          type: 'plenary',
          icon: 'ri-mic-line',
          description: 'Welcome addresses from co-organizers, Indigenous acknowledgment, and keynote on cultural resilience and care transformation in the 21st century.',
        },
        {
          time: '10:30 - 11:00',
          title: 'Morning Tea & Networking',
          type: 'break',
          icon: 'ri-cup-line',
        },
        {
          time: '11:00 - 13:00',
          title: 'Plenary Panel: Bridging Culture, Care & Climate',
          type: 'plenary',
          icon: 'ri-team-line',
          description: 'Global leaders discuss integrating cultural perspectives into climate action and care industry transformation.',
        },
        {
          time: '13:00 - 14:00',
          title: 'Lunch & Cultural Exposition',
          type: 'break',
          icon: 'ri-restaurant-line',
        },
        {
          time: '14:00 - 16:00',
          title: 'Parallel Thematic Workshops: Culture & Care Integration',
          type: 'workshop',
          icon: 'ri-group-line',
          description: 'Deep-dive sessions on Climate Justice, Culture-Based Trade, and Cultural Approaches to Care.',
        },
        {
          time: '16:00 - 16:30',
          title: 'Afternoon Tea',
          type: 'break',
          icon: 'ri-cup-line',
        },
        {
          time: '16:30 - 18:00',
          title: 'Community Roundtables: Care for Caregivers',
          type: 'roundtable',
          icon: 'ri-discuss-line',
          description: 'Grassroots leaders share community-led resilience initiatives and cultural heritage perspectives on care.',
        },
        {
          time: '18:30 - 20:30',
          title: 'Welcome Reception & Cultural Performance',
          type: 'social',
          icon: 'ri-music-line',
        },
      ],
    },
    {
      day: 'Day 2',
      date: 'November 7, 2026',
      theme: 'Deep Dive & Innovation',
      sessions: [
        {
          time: '09:00 - 10:30',
          title: 'Plenary: Indigenous Knowledge & Care Systems',
          type: 'plenary',
          icon: 'ri-earth-line',
          description: 'Indigenous leaders present traditional knowledge as solutions to contemporary care and environmental challenges.',
        },
        {
          time: '10:30 - 11:00',
          title: 'Morning Tea',
          type: 'break',
          icon: 'ri-cup-line',
        },
        {
          time: '11:00 - 13:00',
          title: 'Parallel Workshops: Redefining Care Industry',
          type: 'workshop',
          icon: 'ri-group-line',
          description: 'Sessions on Cultural Transformative Values for Care, Senior Participation in Decision-Making, and Technology Integration.',
        },
        {
          time: '13:00 - 14:00',
          title: 'Lunch',
          type: 'break',
          icon: 'ri-restaurant-line',
        },
        {
          time: '14:00 - 16:00',
          title: 'Youth Forum: Next Generation Leadership in Care',
          type: 'forum',
          icon: 'ri-user-star-line',
          description: 'Young leaders present innovative approaches to cultural resilience and care transformation.',
        },
        {
          time: '16:00 - 16:30',
          title: 'Afternoon Tea',
          type: 'break',
          icon: 'ri-cup-line',
        },
        {
          time: '16:30 - 18:00',
          title: 'Research Presentations: Culture Meets Care',
          type: 'research',
          icon: 'ri-file-text-line',
          description: 'Academic and community researchers share findings on cultural approaches to care industry innovation.',
        },
        {
          time: '19:00 - 22:00',
          title: 'Gala Dinner & Awards Ceremony',
          type: 'social',
          icon: 'ri-trophy-line',
        },
      ],
    },
    {
      day: 'Day 3',
      date: 'November 8, 2026',
      theme: 'Sydney Discovery & Cultural Immersion',
      sessions: [
        {
          time: '09:00 - 10:30',
          title: 'Optional: Working Group Sessions',
          type: 'working-group',
          icon: 'ri-file-edit-line',
          description: 'Final collaborative sessions for action planning and commitments.',
        },
        {
          time: '10:30 - 11:00',
          title: 'Morning Tea & Departure Preparation',
          type: 'break',
          icon: 'ri-cup-line',
        },
        {
          time: '11:00 - 17:00',
          title: 'Sydney Cultural & Tourism Experience',
          type: 'social',
          icon: 'ri-map-2-line',
          description: 'Guided tours of Sydney\'s iconic landmarks: Opera House, Harbour Bridge, Royal Botanic Gardens, and cultural sites. Experience Australia\'s vibrant multicultural heritage.',
        },
        {
          time: '17:00 - 18:00',
          title: 'Optional: Sunset Harbour Cruise',
          type: 'social',
          icon: 'ri-ship-line',
          description: 'Relaxing cruise on Sydney Harbour with networking opportunities.',
        },
        {
          time: '18:30 - 20:00',
          title: 'Farewell Dinner (Optional)',
          type: 'social',
          icon: 'ri-restaurant-2-line',
          description: 'Closing celebration with Australian cuisine and cultural performances.',
        },
      ],
    },
  ];

  const components = [
    {
      icon: 'ri-presentation-line',
      title: 'Plenary Panels',
      description: 'High-level discussions featuring global leaders, policymakers, and cultural experts addressing critical intersections of culture and sustainability.',
    },
    {
      icon: 'ri-discuss-line',
      title: 'Community Roundtables',
      description: 'Grassroots-led sessions where community practitioners share lived experiences and locally-driven resilience strategies.',
    },
    {
      icon: 'ri-palette-line',
      title: 'Cultural Expositions',
      description: 'Showcasing traditional arts, crafts, and cultural practices from diverse communities, celebrating cultural diversity and heritage.',
    },
    {
      icon: 'ri-user-voice-line',
      title: 'Youth Forums',
      description: 'Dedicated spaces for young leaders to present innovative solutions and shape the future of cultural resilience.',
    },
    {
      icon: 'ri-microscope-line',
      title: 'Research Presentations',
      description: 'Academic and community-based research on cultural resilience, sustainability, and Indigenous knowledge systems.',
    },
    {
      icon: 'ri-team-line',
      title: 'Thematic Working Groups',
      description: 'Collaborative sessions developing actionable strategies and commitments for each of the nine thematic pillars.',
    },
  ];

  const getSessionColor = (type: string) => {
    const colors: Record<string, string> = {
      plenary: 'bg-primary text-white',
      workshop: 'bg-secondary text-navy',
      roundtable: 'bg-accent text-white',
      forum: 'bg-secondary-light text-navy',
      research: 'bg-primary-light text-white',
      'working-group': 'bg-accent-coral text-white',
      social: 'bg-gradient-to-r from-secondary to-secondary-dark text-navy',
      break: 'bg-gray-100 text-gray-600',
      registration: 'bg-gray-100 text-gray-600',
    };
    return colors[type] || 'bg-gray-100 text-gray-600';
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=Modern%20conference%20hall%20interior%20with%20professional%20stage%20setup%2C%20rows%20of%20elegant%20seating%2C%20sophisticated%20lighting%2C%20contemporary%20architecture%2C%20business%20event%20venue%2C%20high-end%20corporate%20meeting%20space%2C%20professional%20photography%2C%20warm%20ambient%20lighting&width=1920&height=800&seq=programme-hero-bg&orientation=landscape"
            alt="Conference Programme"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy/80 via-primary-dark/75 to-navy/80"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-6">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Conference Schedule</span>
            <div className="h-0.5 w-16 bg-secondary mt-2 mx-auto"></div>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">
            Programme Overview
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Three transformative days: two days of dialogue, collaboration, and action, plus one day exploring Sydney's vibrant culture and iconic landmarks.
          </p>
        </div>
      </section>

      {/* Programme Components */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-6">
              Programme Components
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Diverse formats designed to facilitate knowledge exchange, collaboration, and action.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {components.map((component, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:border-primary hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-6">
                  <i className={`${component.icon} text-3xl text-white`}></i>
                </div>
                <h3 className="font-serif text-xl font-semibold text-navy mb-4">
                  {component.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {component.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Schedule */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-6">
              3-Day Schedule
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Detailed programme timeline (subject to updates)
            </p>
            <a
              href="https://mag.wcoomd.org/uploads/2018/05/blank.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-secondary hover:bg-secondary-dark text-navy border border-secondary/30 rounded-full px-6 py-3 font-medium transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
            >
              <i className="ri-download-line"></i>
              <span>Download Full Programme (PDF)</span>
            </a>
          </div>

          <div className="space-y-12">
            {schedule.map((day, dayIndex) => (
              <div key={dayIndex} className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-primary to-primary-dark p-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-serif text-3xl font-bold text-white mb-2">
                        {day.day}
                      </h3>
                      <p className="text-secondary text-lg">{day.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-white/80 text-sm mb-1">Theme</p>
                      <p className="text-white font-semibold text-xl">{day.theme}</p>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="space-y-4">
                    {day.sessions.map((session, sessionIndex) => (
                      <div
                        key={sessionIndex}
                        className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-200"
                      >
                        <div className="flex-shrink-0 w-32 text-sm font-semibold text-gray-600">
                          {session.time}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start space-x-3">
                            <div className={`w-10 h-10 ${getSessionColor(session.type)} rounded-lg flex items-center justify-center flex-shrink-0`}>
                              <i className={`${session.icon} text-lg`}></i>
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-navy mb-1">
                                {session.title}
                              </h4>
                              {session.description && (
                                <p className="text-sm text-gray-600 leading-relaxed">
                                  {session.description}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
