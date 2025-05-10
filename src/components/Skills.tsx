import React from 'react';
import { Scissors, PenTool, Palette, Sparkles, Gem, Users } from 'lucide-react';

const Skills: React.FC = () => {
  const fashionSkills = [
    { 
      icon: <Scissors className="w-6 h-6 text-[#E6C9A9]" />, 
      name: 'Pattern Making', 
      description: 'Creating precise patterns for garment construction' 
    },
    { 
      icon: <PenTool className="w-6 h-6 text-[#E6C9A9]" />, 
      name: 'Fashion Illustration', 
      description: 'Translating concepts into detailed sketches' 
    },
    { 
      icon: <Palette className="w-6 h-6 text-[#E6C9A9]" />, 
      name: 'Textile Design', 
      description: 'Developing unique fabric patterns and textures' 
    },
    { 
      icon: <Sparkles className="w-6 h-6 text-[#E6C9A9]" />, 
      name: 'Embroidery', 
      description: 'Skilled in traditional and contemporary techniques' 
    },
  ];

  const makeupSkills = [
    { 
      icon: <Palette className="w-6 h-6 text-[#F3D7CA]" />, 
      name: 'Bridal Makeup', 
      description: 'Creating timeless looks for the special day' 
    },
    { 
      icon: <Sparkles className="w-6 h-6 text-[#F3D7CA]" />, 
      name: 'Editorial Styling', 
      description: 'Innovative looks for photography and media' 
    },
    { 
      icon: <Gem className="w-6 h-6 text-[#F3D7CA]" />, 
      name: 'Hair Styling', 
      description: 'Expertise in updos, braiding, and styling techniques' 
    },
    { 
      icon: <Users className="w-6 h-6 text-[#F3D7CA]" />, 
      name: 'Group Styling', 
      description: 'Coordinating looks for events and productions' 
    },
  ];

  return (
    <section id="skills" className="section-padding bg-[#F8F4EC]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="h-1 w-24 bg-[#E6C9A9] mx-auto mb-6"></div>
          <p className="text-[#666666] mb-0">
            With expertise spanning fashion design and beauty artistry, I bring a comprehensive skill set to every project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <h3 className="text-2xl font-serif font-semibold mb-6 text-center text-[#333333]">
              Fashion Design
            </h3>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="grid grid-cols-1 gap-6">
                {fashionSkills.map((skill, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mr-4 p-2 bg-[#F8F4EC] rounded-md">
                      {skill.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-lg mb-1">{skill.name}</h4>
                      <p className="text-[#666666] text-sm">{skill.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-serif font-semibold mb-6 text-center text-[#333333]">
              Makeup & Hair
            </h3>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="grid grid-cols-1 gap-6">
                {makeupSkills.map((skill, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mr-4 p-2 bg-[#F8F4EC] rounded-md">
                      {skill.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-lg mb-1">{skill.name}</h4>
                      <p className="text-[#666666] text-sm">{skill.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;