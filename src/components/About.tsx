import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-24 bg-[#E6C9A9] mx-auto mb-6"></div>
          <p className="text-[#666666] italic font-serif text-lg mb-6">
            "Fashion and beauty are forms of self-expression – I help bring out the best version of you."
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <img
              src="https://images.pexels.com/photos/4926666/pexels-photo-4926666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Working as a designer"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-serif font-semibold mb-4 text-[#333333]">My Journey</h3>
            <p className="mb-4 text-[#444444]">
              With over 8 years of experience in the fashion and beauty industry, I've developed a unique 
              perspective that bridges the gap between fashion design and makeup artistry. My journey began 
              with a passion for textiles and design, which eventually expanded into the world of beauty and styling.
            </p>
            <p className="mb-6 text-[#444444]">
              As a graduate from INIFD (International Institute of Fashion Design) and certified makeup artist 
              from VLCC, I bring professional expertise to every project. My experience ranges from creating 
              custom designer wear to styling bridal parties and editorial shoots for leading publications.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-4 bg-[#F8F4EC] rounded-lg">
                <h4 className="font-semibold mb-2 text-[#333333]">Fashion Design</h4>
                <p className="text-sm text-[#666666]">Specializing in contemporary fusion wear with traditional embroidery techniques</p>
              </div>
              <div className="p-4 bg-[#F8F4EC] rounded-lg">
                <h4 className="font-semibold mb-2 text-[#333333]">Makeup & Hair</h4>
                <p className="text-sm text-[#666666]">Expert in bridal, editorial, and special occasion styling with attention to detail</p>
              </div>
            </div>
            <a 
              href="#contact" 
              className="inline-block px-6 py-3 bg-[#F3D7CA] text-[#333333] font-medium rounded-sm hover:bg-[#ebc3b1] transition-colors duration-300"
            >
              Work With Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;