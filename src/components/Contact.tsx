import React, { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    alert('Thank you for your message! I will get back to you soon.');
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Me</h2>
          <div className="h-1 w-24 bg-[#E6C9A9] mx-auto mb-6"></div>
          <p className="text-[#666666] mb-0">
            Let's discuss your project or book a consultation.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-xl bg-[#F8F4EC] rounded-2xl shadow-xl border border-[#e6c9a9]/40 px-8 py-10 flex flex-col gap-8">
            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#E6C9A9] rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-sm text-[#E6C9A9] font-semibold mb-1">Email</div>
                <div className="text-lg font-semibold text-[#333]">kirtika.sinha@example.com</div>
                <div className="text-sm text-[#666]">Feel free to send me an email anytime.</div>
              </div>
            </div>
            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#F3D7CA] rounded-lg flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-sm text-[#F3D7CA] font-semibold mb-1">Phone</div>
                <div className="text-lg font-semibold text-[#333]">+91 98765 43210</div>
                <div className="text-sm text-[#666]">Call or WhatsApp for quick queries or bookings.</div>
              </div>
            </div>
            {/* Location */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#E6C9A9] rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-sm text-[#E6C9A9] font-semibold mb-1">Location</div>
                <div className="text-lg font-semibold text-[#333]">Mumbai, Maharashtra, India</div>
                <div className="text-sm text-[#666]">Available for projects across India and online consultations.</div>
              </div>
            </div>
            {/* Socials */}
            <div>
              <div className="text-sm text-[#F3D7CA] font-semibold mb-2">Follow Me</div>
              <div className="flex gap-4">
                <a 
                  href="https://www.instagram.com/_cosmoholic._?igsh=MWUyaW5mNzI3aHJycA==" 
                  className="p-2 bg-white rounded-full shadow border border-[#e6c9a9]/30 hover:bg-[#F3D7CA] hover:scale-110 transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-[#E6C9A9]" />
                </a>
                <a 
                  href="#" 
                  className="p-2 bg-white rounded-full shadow border border-[#e6c9a9]/30 hover:bg-[#F3D7CA] hover:scale-110 transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 text-[#E6C9A9]" />
                </a>
                <a 
                  href="#" 
                  className="p-2 bg-white rounded-full shadow border border-[#e6c9a9]/30 hover:bg-[#F3D7CA] hover:scale-110 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-[#E6C9A9]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;