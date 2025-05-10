import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 min-h-screen flex items-center">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#333333] leading-tight mb-4">
              Kirtika Sinha
            </h1>
            <div className="h-1 w-32 bg-[#E6C9A9] mb-6"></div>
            <h2 className="text-xl md:text-2xl text-[#666666] mb-8 font-light tracking-wide">
              Fashion Designer | Makeup Artist & Hairstylist
            </h2>
            <p className="text-[#333333] mb-8 max-w-lg">
              Creating beauty through design, makeup, and hair styling. Based in India, bringing artistry
              to every project with passion and precision.
            </p>
            <div className="flex space-x-4">
              <a
                href="#portfolio"
                className="px-6 py-3 bg-[#E6C9A9] text-white font-medium rounded-sm hover:bg-[#d8b88e] transition-colors duration-300"
              >
                View Portfolio
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-[#E6C9A9] text-[#333333] font-medium rounded-sm hover:bg-[#F3D7CA] hover:border-[#F3D7CA] transition-colors duration-300"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-end">
            <div className="relative">
              <div className="absolute -inset-4 rounded-lg bg-[#F3D7CA] opacity-30 transform rotate-3"></div>
              <img
                src="https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Kirtika Sinha"
                className="relative z-10 w-full max-w-md rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;