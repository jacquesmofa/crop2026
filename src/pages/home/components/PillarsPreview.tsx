
export default function PillarsPreview() {
  const handleViewAllClick = () => {
    window.REACT_APP_NAVIGATE('/pillars');
  };

  const pillars = [
    {
      icon: 'ri-store-line',
      title: 'Culture, Trade, Economies & Sustainable Livelihoods',
      description: 'Fair trade frameworks, cultural entrepreneurship, and revitalization of traditional economies.',
      color: 'from-primary to-primary-dark',
    },
    {
      icon: 'ri-heart-pulse-line',
      title: 'Global Health Equity & Wellness Systems',
      description: 'Integrating traditional medicine, addressing health disparities, and promoting holistic wellbeing.',
      color: 'from-secondary to-secondary-dark',
    },
    {
      icon: 'ri-smartphone-line',
      title: 'Technology, Digital Innovation & Data Sovereignty',
      description: 'Digital tools for cultural preservation, AI for language revitalization, and Indigenous data sovereignty.',
      color: 'from-accent to-accent-coral',
    },
    {
      icon: 'ri-graduation-cap-line',
      title: 'Education, Research, Skills & Capacity Development',
      description: 'Integration of Indigenous knowledge, decolonizing research, and intergenerational knowledge transfer.',
      color: 'from-primary-light to-primary',
    },
    {
      icon: 'ri-earth-line',
      title: 'Climate Justice, Cultural Governance & Planetary Stewardship',
      description: 'Indigenous knowledge for climate adaptation, cultural governance, and sustainable planetary stewardship.',
      color: 'from-primary-dark to-accent',
    },
    {
      icon: 'ri-hand-heart-line',
      title: 'Care Industry & Cultural Transformation',
      description: 'Redefining cultural transformative values for care, supporting caregivers, and empowering seniors in decision-making.',
      color: 'from-purple-500 to-purple-700',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Conference Framework</span>
            <div className="h-0.5 w-16 bg-primary mt-2 mx-auto"></div>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-6">
            Six Strategic Pillars
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive frameworks addressing the intersection of culture, care, and global sustainability challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-300"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${pillar.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <i className={`${pillar.icon} text-3xl text-white`}></i>
              </div>
              <h3 className="font-serif text-xl font-semibold text-navy mb-4 group-hover:text-primary transition-colors">
                {pillar.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={handleViewAllClick}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 whitespace-nowrap cursor-pointer"
          >
            <span>Explore All Pillars</span>
            <i className="ri-arrow-right-line text-xl"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
