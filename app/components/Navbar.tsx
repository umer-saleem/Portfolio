'use client';

import { useState, useEffect } from 'react';

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Awards', href: '#awards' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const sections = navigation.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll handler
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false); // close mobile menu if open
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="w-8 md:w-12"></div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex space-x-1 bg-white/80 backdrop-blur-sm rounded-full p-1 shadow-lg border border-gray-200">
              {navigation.map(item => {
                const sectionName = item.href.substring(1);
                const isActive = activeSection === sectionName;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={e => handleSmoothScroll(e, sectionName)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'
                    }`}
                  >
                    {item.name}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <span className={`block h-0.5 w-6 bg-gray-700 transition-transform ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}></span>
                <span className={`block h-0.5 w-6 bg-gray-700 opacity-100 transition-opacity ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}></span>
                <span className={`block h-0.5 w-6 bg-gray-700 transition-transform ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md rounded-lg shadow-lg p-4 mt-2 border border-gray-200">
            <div className="grid grid-cols-2 gap-2">
              {navigation.map(item => {
                const sectionName = item.href.substring(1);
                const isActive = activeSection === sectionName;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={e => handleSmoothScroll(e, sectionName)}
                    className={`px-4 py-3 rounded-lg text-sm font-medium text-center transition-all duration-300 ${
                      isActive
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'
                    }`}
                  >
                    {item.name}
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
