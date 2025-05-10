import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#333] text-white py-6 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <div className="font-bold text-lg mb-1">Kirtika Sinha</div>
          <div className="text-sm">Fashion Designer | Makeup Artist & Hairstylist</div>
        </div>
        <div className="text-center text-xs mt-2 md:mt-0">
          © 2025 Kirtika Sinha. All rights reserved.
        </div>
        <div className="flex space-x-4 text-xs mt-2 md:mt-0">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;