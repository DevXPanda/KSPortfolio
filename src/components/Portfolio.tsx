import React, { useState } from 'react';

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
}

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: 'Bridal Collection Design',
      category: 'fashion',
      image: 'https://images.pexels.com/photos/291759/pexels-photo-291759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 2,
      title: 'Elegant Bridal Makeup',
      category: 'makeup',
      image: 'https://images.pexels.com/photos/457701/pexels-photo-457701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 3,
      title: 'Couture Evening Wear',
      category: 'fashion',
      image: 'https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 4,
      title: 'Editorial Hair Design',
      category: 'makeup',
      image: 'https://images.pexels.com/photos/3065015/pexels-photo-3065015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 5,
      title: 'Traditional Embroidery Work',
      category: 'fashion',
      image: 'https://images.pexels.com/photos/10679171/pexels-photo-10679171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 6,
      title: 'Glamour Makeup Session',
      category: 'makeup',
      image: 'https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
  ];

  const filteredItems = filter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Portfolio</h2>
          <div className="h-1 w-24 bg-[#E6C9A9] mx-auto mb-6"></div>
          <p className="text-[#666666] mb-6">
            Browse through a selection of my work in fashion design and makeup artistry.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-md transition-colors duration-300 ${
                filter === 'all'
                  ? 'bg-[#E6C9A9] text-white'
                  : 'bg-[#F8F4EC] text-[#333333] hover:bg-[#F3D7CA]'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('fashion')}
              className={`px-4 py-2 rounded-md transition-colors duration-300 ${
                filter === 'fashion'
                  ? 'bg-[#E6C9A9] text-white'
                  : 'bg-[#F8F4EC] text-[#333333] hover:bg-[#F3D7CA]'
              }`}
            >
              Fashion
            </button>
            <button
              onClick={() => setFilter('makeup')}
              className={`px-4 py-2 rounded-md transition-colors duration-300 ${
                filter === 'makeup'
                  ? 'bg-[#E6C9A9] text-white'
                  : 'bg-[#F8F4EC] text-[#333333] hover:bg-[#F3D7CA]'
              }`}
            >
              Makeup
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              className="portfolio-item overflow-hidden rounded-lg shadow-md group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 text-center p-4">
                    <h3 className="text-xl font-serif font-semibold mb-2">{item.title}</h3>
                    <span className="capitalize text-sm bg-[#E6C9A9] text-white py-1 px-3 rounded-full">
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-6 py-3 bg-[#E6C9A9] text-white font-medium rounded-sm hover:bg-[#d8b88e] transition-colors duration-300">
            View More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;