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
    // { name: 'Applications', path: '/#applications' },
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
              src="/logo.png" 
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
            {/* <a
              href={company.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-black hover:text-green-600 transition-colors"
            >
              WhatsApp Us
            </a> */}
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

      {/* Mobile Nav Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 md:hidden backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Nav Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white z-40 shadow-2xl transition-transform duration-300 ease-in-out transform ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden flex flex-col`}
      >
        {/* Panel Header */}
        <div className="bg-brand-green px-6 pt-10 pb-6">
          <img
            src="/logo.png"
            alt="Dia Enterprise"
            className="h-14 w-auto object-contain brightness-0 invert"
          />
          <p className="text-white/80 text-xs mt-2 font-medium tracking-wide uppercase">
            Paper Plates & Raw Materials
          </p>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col flex-1 px-6 py-6 space-y-1 overflow-y-auto">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center justify-between py-4 border-b border-gray-100 group transition-colors ${
                location.hash === link.path.replace('/', '')
                  ? 'text-brand-green'
                  : 'text-brand-charcoal hover:text-brand-green'
              }`}
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <span className="text-lg font-heading font-medium">{link.name}</span>
              <span className={`text-xl transition-transform group-hover:translate-x-1 ${
                location.hash === link.path.replace('/', '') ? 'text-brand-green' : 'text-gray-300 group-hover:text-brand-green'
              }`}>›</span>
            </a>
          ))}
        </nav>

        {/* CTA Bottom */}
        <div className="px-6 pb-10 pt-4 space-y-3 border-t border-gray-100">
          <a
            href="/#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 bg-brand-green hover:bg-brand-green-light text-white text-center py-3.5 rounded-sm font-medium text-base transition-colors w-full shadow-md"
          >
            Contact Us
          </a>
          <a
            href={company.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 border-2 border-brand-green text-brand-green hover:bg-brand-green/5 text-center py-3.5 rounded-sm font-medium text-base transition-colors w-full"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </header>
  );
}
