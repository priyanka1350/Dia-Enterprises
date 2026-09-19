import { Link } from 'react-router-dom';
import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react';
import { company } from '../data/company';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-white via-brand-green/20 to-brand-green">
      {/* Main Footer */}
      <div className="container mx-auto px-4 md:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Brand */}
          <div className="md:col-span-1">
            <img
              src="/logo.png"
              alt="Dia Enterprise Logo"
              className="h-14 w-auto object-contain mb-3"
            />
            <p className="text-brand-charcoal/70 text-sm leading-relaxed">
              {company.shortDescription}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-brand-charcoal font-medium text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-brand-charcoal/70 hover:text-brand-green transition-colors">Home</Link></li>
              <li><a href="/#about" className="text-brand-charcoal/70 hover:text-brand-green transition-colors">About Us</a></li>
              <li><a href="/#products" className="text-brand-charcoal/70 hover:text-brand-green transition-colors">Products</a></li>
              <li><a href="/#why-dia" className="text-brand-charcoal/70 hover:text-brand-green transition-colors">Why DIA</a></li>
              <li><a href="/#contact" className="text-brand-charcoal/70 hover:text-brand-green transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-brand-charcoal font-medium text-sm uppercase tracking-wider mb-4">Our Products</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/products/80-gsm-silver" className="text-brand-charcoal/70 hover:text-brand-green transition-colors">80 GSM Silver</Link></li>
              <li><Link to="/products/120-gsm-silver" className="text-brand-charcoal/70 hover:text-brand-green transition-colors">120 GSM Silver</Link></li>
              <li><Link to="/products/180-gsm-silver" className="text-brand-charcoal/70 hover:text-brand-green transition-colors">180 GSM Silver</Link></li>
              <li><Link to="/products/200-gsm-silver" className="text-brand-charcoal/70 hover:text-brand-green transition-colors">200 GSM Silver</Link></li>
              <li><Link to="/products/200-gsm-kraft-chipboard" className="text-brand-charcoal/70 hover:text-brand-green transition-colors">Kraft & Chipboard</Link></li>
              <li><Link to="/products/80-gsm-thali-green-sheet" className="text-brand-charcoal/70 hover:text-brand-green transition-colors">Thali Green Sheet</Link></li>
              <li><Link to="/products/saree-box-colour-plate" className="text-brand-charcoal/70 hover:text-brand-green transition-colors">Colour Plates</Link></li>
              <li><Link to="/products/duplex-board" className="text-brand-charcoal/70 hover:text-brand-green transition-colors">Duplex Board</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-brand-charcoal font-medium text-sm uppercase tracking-wider mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-brand-charcoal/70">
                <MapPin size={15} className="text-brand-green shrink-0 mt-0.5" />
                <span>{company.address.street}, {company.address.city}, {company.address.state} – {company.address.pincode}</span>
              </li>
              <li>
                <a href={`tel:${company.phone}`} className="flex items-center gap-2 text-brand-charcoal/70 hover:text-brand-green transition-colors">
                  <Phone size={15} className="text-brand-green shrink-0" />
                  {company.phone}
                </a>
              </li>
              <li>
                <a href={company.whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-brand-charcoal/70 hover:text-brand-green transition-colors">
                  <MessageCircle size={15} className="text-brand-green shrink-0" />
                  WhatsApp Us
                </a>
              </li>
              <li>
                <a href={`mailto:${company.email}`} className="flex items-center gap-2 text-brand-charcoal/70 hover:text-brand-green transition-colors">
                  <Mail size={15} className="text-brand-green shrink-0" />
                  {company.email}
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 md:px-8 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-white/50">
          <p>© {currentYear} {company.name}. All Rights Reserved.</p>
          <div className="flex gap-4">
            <span className="cursor-not-allowed">Privacy Policy</span>
            <span className="cursor-not-allowed">Terms & Conditions</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
