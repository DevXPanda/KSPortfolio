import React from 'react';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  type: 'education' | 'experience';
}

const Experience: React.FC = () => {
  const timelineItems: TimelineItem[] = [
    {
      year: '2020 - Present',
      title: 'Freelance Fashion Designer & Makeup Artist',
      description: 'Working with private clients, fashion brands, and production houses creating custom designs and providing makeup services for various events.',
      type: 'experience'
    },
    {
      year: '2018 - 2020',
      title: 'Creative Lead - Bridal Collection',
      description: 'Led the design and development of seasonal bridal collections for a boutique fashion label, specializing in contemporary ethnic wear.',
      type: 'experience'
    },
    {
      year: '2017',
      title: 'VLCC Institute of Beauty & Nutrition',
      description: 'Advanced certification in Professional Makeup Artistry and Hair Styling.',
      type: 'education'
    },
    {
      year: '2015 - 2017',
      title: 'Assistant Designer',
      description: 'Assisted senior designers in creating seasonal collections, managing production timelines, and client consultations.',
      type: 'experience'
    },
    {
      year: '2013 - 2015',
      title: 'INIFD - International Institute of Fashion Design',
      description: 'Bachelor\'s degree in Fashion Design with specialization in Indian ethnic wear and embroidery techniques.',
      type: 'education'
    },
  ];

  return (
    <section id="experience" className="section-padding bg-[#F8F4EC]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience & Education</h2>
          <div className="h-1 w-24 bg-[#E6C9A9] mx-auto mb-6"></div>
          <p className="text-[#666666] mb-0">
            My professional journey in the world of fashion and beauty.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative pl-8 border-l-2 border-[#F3D7CA]">
            {timelineItems.map((item, index) => (
              <div 
                key={index}
                className="timeline-item mb-10 relative"
              >
                <div className={`mb-3 py-2 px-4 inline-block rounded-sm ${
                  item.type === 'education' ? 'bg-[#F3D7CA]' : 'bg-[#E6C9A9]'
                }`}>
                  <span className="text-white font-medium text-sm">{item.year}</span>
                </div>
                <h3 className="text-xl font-serif font-semibold mb-2">{item.title}</h3>
                <p className="text-[#666666]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;