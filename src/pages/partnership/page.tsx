import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../../components/feature/Navigation';
import Footer from '../../components/feature/Footer';
import PaymentModal from './components/PaymentModal';

export default function Partnership() {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
  const [paymentModal, setPaymentModal] = useState<{
    isOpen: boolean;
    tier: string;
    amount: string;
  }>({
    isOpen: false,
    tier: '',
    amount: '',
  });

  const partnershipTiers = [
    {
      tier: 'Platinum Partner',
      investment: 'AUD $100,000+',
      color: 'from-gray-400 to-gray-600',
      accentColor: 'from-purple-500 to-indigo-600',
      benefits: [
        'Premier branding on all conference materials',
        'Keynote speaking opportunity',
        '10 complimentary delegate registrations',
        'Exhibition booth in prime location',
        'Logo on Sydney Declaration document',
        'Exclusive networking reception with speakers',
        'Full-page advertisement in conference compendium',
        'Recognition in all media releases',
      ],
    },
    {
      tier: 'Gold Partner',
      investment: 'AUD $50,000 - $99,999',
      color: 'from-secondary to-secondary-dark',
      accentColor: 'from-yellow-400 to-orange-500',
      benefits: [
        'Prominent branding on conference materials',
        'Panel participation opportunity',
        '6 complimentary delegate registrations',
        'Exhibition booth',
        'Logo on conference website and materials',
        'Half-page advertisement in compendium',
        'Social media recognition',
      ],
    },
    {
      tier: 'Silver Partner',
      investment: 'AUD $25,000 - $49,999',
      color: 'from-gray-300 to-gray-500',
      accentColor: 'from-slate-400 to-gray-600',
      benefits: [
        'Branding on selected conference materials',
        '4 complimentary delegate registrations',
        'Exhibition space',
        'Logo on conference website',
        'Quarter-page advertisement in compendium',
        'Recognition in conference programme',
      ],
    },
    {
      tier: 'Bronze Partner',
      investment: 'AUD $10,000 - $24,999',
      color: 'from-amber-600 to-amber-800',
      accentColor: 'from-orange-600 to-red-700',
      benefits: [
        '2 complimentary delegate registrations',
        'Logo on conference website',
        'Listing in conference programme',
        'Social media acknowledgment',
      ],
    },
  ];

  const partnershipTypes = [
    {
      icon: 'ri-trophy-line',
      title: 'Corporate Sponsorship',
      description: 'Support cultural resilience while enhancing your organization\'s visibility and demonstrating commitment to sustainability and social responsibility.',
      opportunities: [
        'Conference title sponsorship',
        'Session and workshop sponsorship',
        'Networking event sponsorship',
        'Technology and innovation showcase',
      ],
    },
    {
      icon: 'ri-government-line',
      title: 'Government & Institutional Partners',
      description: 'Collaborate with us to advance policy objectives, support cultural preservation, and demonstrate leadership in sustainability.',
      opportunities: [
        'Thematic pillar partnership',
        'Research and publication support',
        'Youth forum sponsorship',
        'Working group facilitation',
      ],
    },
    {
      icon: 'ri-global-line',
      title: 'International Organizations',
      description: 'Partner with us to amplify global impact, support grassroots initiatives, and advance international development goals.',
      opportunities: [
        'Community roundtable support',
        'Scholarship programme for delegates',
        'Documentation and media partnership',
        'Post-conference network support',
      ],
    },
    {
      icon: 'ri-newspaper-line',
      title: 'Media Partnership',
      description: 'Gain exclusive access to conference content while helping amplify messages of cultural resilience and sustainability globally.',
      opportunities: [
        'Exclusive interview access',
        'Content sharing agreements',
        'Live coverage opportunities',
        'Documentary collaboration',
      ],
    },
  ];

  const benefits = [
    {
      icon: 'ri-eye-line',
      title: 'Global Visibility',
      description: 'Reach 500+ international delegates and extensive media coverage.',
    },
    {
      icon: 'ri-team-line',
      title: 'Strategic Networking',
      description: 'Connect with global leaders, policymakers, and cultural innovators.',
    },
    {
      icon: 'ri-lightbulb-line',
      title: 'Thought Leadership',
      description: 'Position your organization at the forefront of cultural resilience.',
    },
    {
      icon: 'ri-heart-line',
      title: 'Social Impact',
      description: 'Demonstrate commitment to cultural preservation and sustainability.',
    },
    {
      icon: 'ri-file-text-line',
      title: 'Research Access',
      description: 'Early access to conference research and best practice documentation.',
    },
    {
      icon: 'ri-links-line',
      title: 'Long-term Engagement',
      description: 'Ongoing involvement through thematic working groups.',
    },
  ];

  const handlePaymentClick = (tier: string, amount: string) => {
    setPaymentModal({
      isOpen: true,
      tier,
      amount,
    });
  };

  const closePaymentModal = () => {
    setPaymentModal({
      isOpen: false,
      tier: '',
      amount: '',
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-navy via-primary-dark to-navy overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://readdy.ai/api/search-image?query=professional%20diverse%20business%20partnership%20handshake%20international%20collaboration%20modern%20conference%20setting%20with%20cultural%20symbols%20sustainability%20elements%20warm%20professional%20lighting%20ultra%20high%20definition%204k%20photography&width=1920&height=1080&seq=partnership-hero-bg&orientation=landscape)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-navy/70 via-primary-dark/60 to-navy/70"></div>
        </div>
        
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-6">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Collaborate With Us</span>
            <div className="h-0.5 w-16 bg-secondary mt-2 mx-auto"></div>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-2xl">
            Partnership Opportunities
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
            Join us as a partner in advancing cultural resilience and planetary sustainability. Together, we can create lasting impact.
          </p>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-6">
              Partnership Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Diverse partnership opportunities tailored to different organizational goals and capacities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnershipTypes.map((type, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:border-primary hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-6">
                  <i className={`${type.icon} text-3xl text-white`}></i>
                </div>
                <h3 className="font-serif text-2xl font-semibold text-navy mb-4">
                  {type.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {type.description}
                </p>
                <div className="border-t border-gray-200 pt-6">
                  <p className="font-semibold text-navy mb-3 text-sm uppercase tracking-wide">Opportunities Include:</p>
                  <ul className="space-y-2">
                    {type.opportunities.map((opp, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm">
                        <i className="ri-arrow-right-s-line text-primary mt-0.5"></i>
                        <span className="text-gray-700">{opp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-6">
              Sponsorship Tiers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible sponsorship packages designed to maximize your impact and visibility.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {partnershipTiers.map((tier, index) => (
              <div
                key={index}
                className="relative h-[500px] perspective-1000"
                onMouseEnter={() => setFlippedCard(index)}
                onMouseLeave={() => setFlippedCard(null)}
              >
                <div
                  className={`relative w-full h-full transition-all duration-700 transform-style-3d ${
                    flippedCard === index ? 'rotate-y-180' : ''
                  }`}
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: flippedCard === index ? 'rotateY(180deg)' : 'rotateY(0deg)',
                  }}
                >
                  {/* Front */}
                  <div
                    className="absolute inset-0 backface-hidden rounded-2xl shadow-2xl overflow-hidden cursor-pointer"
                    style={{ backfaceVisibility: 'hidden' }}
                    onClick={() => handlePaymentClick(tier.tier, tier.investment)}
                  >
                    <div className={`h-full bg-gradient-to-br ${tier.color} p-8 flex flex-col items-center justify-center text-center relative overflow-hidden`}>
                      <div className="absolute inset-0 opacity-20">
                        <div className="absolute inset-0" style={{
                          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                          backgroundSize: '30px 30px',
                        }}></div>
                      </div>
                      <div className="relative z-10">
                        <div className={`w-24 h-24 bg-gradient-to-br ${tier.accentColor} rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl`}>
                          <i className="ri-vip-crown-line text-5xl text-white"></i>
                        </div>
                        <h3 className="font-serif text-4xl font-bold text-white mb-4">
                          {tier.tier}
                        </h3>
                        <div className="h-1 w-24 bg-white/50 mx-auto mb-6"></div>
                        <p className="text-white text-2xl font-bold mb-6">
                          {tier.investment}
                        </p>
                        <p className="text-white/90 text-sm uppercase tracking-wider mb-4">
                          Hover to see benefits
                        </p>
                        <div className="inline-flex items-center space-x-2 bg-white/20 hover:bg-white/30 px-6 py-3 rounded-full transition-colors">
                          <i className="ri-secure-payment-line text-white"></i>
                          <span className="text-white font-semibold text-sm">Click to Pay</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Back */}
                  <div
                    className="absolute inset-0 backface-hidden rounded-2xl shadow-2xl overflow-hidden bg-white cursor-pointer"
                    style={{
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                    }}
                    onClick={() => handlePaymentClick(tier.tier, tier.investment)}
                  >
                    <div className={`bg-gradient-to-r ${tier.color} p-6`}>
                      <h3 className="font-serif text-2xl font-bold text-white text-center">
                        {tier.tier}
                      </h3>
                    </div>
                    <div className="p-6 h-[calc(100%-80px)] overflow-y-auto">
                      <ul className="space-y-3 mb-6">
                        {tier.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start space-x-3 group">
                            <i className={`ri-checkbox-circle-fill bg-gradient-to-r ${tier.accentColor} bg-clip-text text-transparent text-xl mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform`}></i>
                            <span className="text-gray-700 group-hover:text-navy transition-colors">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="pt-4 border-t border-gray-200">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handlePaymentClick(tier.tier, tier.investment);
                          }}
                          className={`w-full bg-gradient-to-r ${tier.color} text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 cursor-pointer`}
                        >
                          <span className="flex items-center justify-center">
                            <i className="ri-secure-payment-line mr-2"></i>
                            Proceed to Payment
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              Custom partnership packages available. Contact us to discuss tailored opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-6">
              Why Partner With Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic benefits that extend far beyond the conference dates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:border-primary hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary group-hover:to-accent rounded-xl flex items-center justify-center mb-6 transition-all duration-300">
                  <i className={`${benefit.icon} text-3xl text-primary group-hover:text-white transition-colors`}></i>
                </div>
                <h3 className="font-serif text-xl font-semibold text-navy mb-3 group-hover:text-primary transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* In-Kind Support */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-4xl font-bold text-navy mb-6">
                In-Kind Contributions
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-secondary to-accent mb-8"></div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We welcome in-kind support that enhances the conference experience and extends our impact. Non-financial contributions are equally valuable in achieving our mission.
              </p>
              <div className="space-y-4">
                {[
                  { icon: 'ri-computer-line', title: 'Technology & Equipment', desc: 'AV equipment, software licenses, digital platforms' },
                  { icon: 'ri-printer-line', title: 'Printing & Materials', desc: 'Conference materials, signage, publications' },
                  { icon: 'ri-service-line', title: 'Professional Services', desc: 'Design, translation, documentation services' },
                  { icon: 'ri-gift-line', title: 'Delegate Support', desc: 'Accommodation, travel, catering contributions' },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-gray-200">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className={`${item.icon} text-2xl text-primary`}></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://readdy.ai/api/search-image?query=Professional%20business%20partnership%20handshake%2C%20diverse%20corporate%20collaboration%2C%20modern%20office%20setting%2C%20sustainability%20and%20cultural%20symbols%20in%20background%2C%20professional%20photography%2C%20warm%20lighting%2C%20trust%20and%20cooperation%20theme&width=800&height=1000&seq=partnership-collaboration&orientation=portrait"
                alt="Partnership Collaboration"
                className="rounded-2xl shadow-2xl object-cover w-full h-full"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-secondary to-accent rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary to-primary-dark p-12 rounded-2xl shadow-2xl text-center">
            <i className="ri-handshake-line text-6xl text-secondary mb-6"></i>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              Let's Create Impact Together
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Our partnership team is ready to discuss how we can collaborate to advance cultural resilience and sustainability. Contact us to explore customized partnership opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:crop2026@gmail.com"
                className="inline-flex items-center justify-center space-x-2 bg-secondary hover:bg-secondary-dark text-navy px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
              >
                <i className="ri-mail-line"></i>
                <span>Email Partnership Team</span>
              </a>
              <a
                href="https://mag.wcoomd.org/uploads/2018/05/blank.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 text-white border-2 border-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer"
              >
                <i className="ri-download-line"></i>
                <span>Download Partnership Prospectus</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      {/* Payment Modal */}
      <PaymentModal
        isOpen={paymentModal.isOpen}
        onClose={closePaymentModal}
        tier={paymentModal.tier}
        amount={paymentModal.amount}
      />
    </div>
  );
}
