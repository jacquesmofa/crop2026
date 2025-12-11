import { Link } from 'react-router-dom';
import Button from '../../../components/base/Button';

export default function VisionPreview() {
  const objectives = [
    {
      icon: 'ri-links-line',
      title: 'Bridge the Gap',
      description: 'Connect cultural actors with global sustainability agendas and climate action frameworks.',
    },
    {
      icon: 'ri-volume-up-line',
      title: 'Amplify Voices',
      description: 'Elevate Indigenous knowledge and community-led resilience strategies on the world stage.',
    },
    {
      icon: 'ri-team-line',
      title: 'Co-create Strategies',
      description: 'Develop collaborative solutions for cultural preservation and environmental sustainability.',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Mission</span>
            <div className="h-0.5 w-16 bg-secondary mt-2 mx-auto"></div>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mt-4 mb-6">
            The Vision
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Bridging cultural actors with global sustainability agendas, protecting Indigenous knowledge, and promoting community resilience in the face of climate change and urbanization.
          </p>
        </div>

        {/* Objectives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {objectives.map((objective, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary/20 cursor-pointer"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className={`${objective.icon} text-3xl text-white`}></i>
              </div>
              <h3 className="font-serif text-2xl font-semibold text-navy mb-4 group-hover:text-primary transition-colors">
                {objective.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {objective.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/vision" className="cursor-pointer">
            <Button variant="outline" size="lg">
              <span>Learn More About Our Vision</span>
              <i className="ri-arrow-right-line ml-2"></i>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
