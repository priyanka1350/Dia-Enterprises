import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { company } from '../data/company';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/#home' },
    { name: 'About Us', path: '/#about' },
    { name: 'Products', path: '/#products' },
    { name: 'Why DIA', path: '/#why-dia' },
    { name: 'Applications', path: '/#applications' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white shadow-md py-0' : `pt-6 md:pt-2 ${location.pathname === '/' ? 'pb-16 md:pb-24 bg-gradient-to-b from-white/70 via-white/30 to-transparent' : 'pb-4 md:pb-0 bg-transparent'}`
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo Spacer & Container */}
        <div className={`transition-all duration-500 ${isScrolled ? 'w-auto' : 'w-24 md:w-40'}`}>
          <a 
            href="/#home" 
            className={`flex flex-col z-50 group transition-all duration-500 ${
              isScrolled ? 'relative' : 'absolute top-4 md:top-6 left-4 md:left-8'
            }`}
          >
            <img 
              src="/src/assets/logo.png" 
              alt="Dia Enterprise Logo" 
              className={`object-contain transition-all duration-500 origin-top-left ${
                isScrolled ? 'h-12 md:h-16' : 'h-24 md:h-40'
              }`}
            />
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className={`text-sm font-medium transition-colors hover:text-brand-green ${
                location.hash === link.path.replace('/', '') ? 'text-brand-green font-semibold' : 'text-black'
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center space-x-4 ml-4">
            <a
              href={company.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-black hover:text-green-600 transition-colors"
            >
              WhatsApp Us
            </a>
            <a
              href="/#contact"
              className="bg-brand-green hover:bg-brand-green-light text-white px-5 py-2.5 rounded-sm font-medium text-sm transition-colors shadow-sm"
            >
              Contact
            </a>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden z-50 p-2 text-brand-charcoal"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out transform ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden flex flex-col pt-24 px-6`}
      >
        <div className="flex flex-col space-y-6 flex-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-2xl font-heading font-medium ${
                location.hash === link.path.replace('/', '') ? 'text-brand-green' : 'text-brand-charcoal'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
        <div className="pb-12 flex flex-col space-y-4">
          <a
            href="/#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="bg-brand-green text-white text-center py-4 rounded-sm font-medium text-lg"
          >
            Contact
          </a>
          <a
            href={company.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-brand-green text-brand-green text-center py-4 rounded-sm font-medium text-lg"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </header>
  );
}
