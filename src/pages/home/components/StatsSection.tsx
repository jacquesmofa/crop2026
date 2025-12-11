
import { useState, useEffect, useRef } from 'react';

export default function StatsSection() {
  const [counts, setCounts] = useState({
    days: 0,
    attendees: 0,
    pillars: 0,
    venue: 0,
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    {
      icon: 'ri-calendar-line',
      number: 3,
      label: 'Days',
      description: 'November 6-8, 2026',
      key: 'days',
    },
    {
      icon: 'ri-team-line',
      number: 800,
      label: 'Attendees',
      description: 'Global leaders & innovators',
      key: 'attendees',
      suffix: '+',
    },
    {
      icon: 'ri-global-line',
      number: 6,
      label: 'Strategic Pillars',
      description: 'Comprehensive frameworks',
      key: 'pillars',
    },
    {
      icon: 'ri-map-pin-line',
      number: 1,
      label: 'Venue',
      description: 'The Dome, Sydney Olympic Park',
      key: 'venue',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounters();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    stats.forEach((stat) => {
      let currentStep = 0;
      const increment = stat.number / steps;

      const timer = setInterval(() => {
        currentStep++;
        const newValue = Math.min(Math.floor(increment * currentStep), stat.number);
        
        setCounts((prev) => ({
          ...prev,
          [stat.key]: newValue,
        }));

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, stepDuration);
    });
  };

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-navy via-primary-dark to-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <i className={`${stat.icon} text-3xl text-navy`}></i>
              </div>
              <div className="text-5xl font-bold text-white mb-2">
                {counts[stat.key as keyof typeof counts]}{stat.suffix || ''}
              </div>
              <div className="text-secondary text-xl font-semibold mb-2">{stat.label}</div>
              <div className="text-white/80 text-sm">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
