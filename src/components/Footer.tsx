import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { company } from '../data/company';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-t from-brand-green to-white text-gray-900 pt-10 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-1">
            <div className="mb-6 flex flex-col items-start">
              <img src="/src/assets/logo.png" alt="Dia Enterprise Logo" className="h-16 md:h-36 w-auto object-contain -mt-6" />
              {/* <h3 className="text-2xl font-heading font-bold text-gray-900">Dia Enterprise</h3> */}
            </div>
            <p className="text-gray-800 mb-6 font-medium text-lg">
              One Stop Solution for Paper Plates
            </p>
            <p className="text-gray-800 mb-6">
              Quality materials. Multiple options. Simplified sourcing.
            </p>
            <p className="text-gray-800 text-sm leading-relaxed mb-6">
              {company.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-800 hover:text-brand-green transition-colors">Home</Link></li>
              <li><a href="/#about" className="text-gray-800 hover:text-brand-green transition-colors">About Us</a></li>
              <li><a href="/#products" className="text-gray-800 hover:text-brand-green transition-colors">Products</a></li>
              <li><a href="/#applications" className="text-gray-800 hover:text-brand-green transition-colors">Applications</a></li>
              <li><a href="/#why-dia" className="text-gray-800 hover:text-brand-green transition-colors">Why Dia Enterprise</a></li>
              <li><a href="/#contact" className="text-gray-800 hover:text-brand-green transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6">Product Links</h4>
            <ul className="space-y-3">
              <li><Link to="/products/80-gsm-silver" className="text-gray-800 hover:text-brand-green transition-colors">80 GSM Silver</Link></li>
              <li><Link to="/products/120-gsm-silver" className="text-gray-800 hover:text-brand-green transition-colors">120 GSM Silver</Link></li>
              <li><Link to="/products/180-gsm-silver" className="text-gray-800 hover:text-brand-green transition-colors">180 GSM Silver</Link></li>
              <li><Link to="/products/200-gsm-silver" className="text-gray-800 hover:text-brand-green transition-colors">200 GSM Silver</Link></li>
              <li><Link to="/products/200-gsm-kraft-chipboard" className="text-gray-800 hover:text-brand-green transition-colors">Kraft & Chipboard</Link></li>
              <li><Link to="/products/80-gsm-thali-green-sheet" className="text-gray-800 hover:text-brand-green transition-colors">Thali Green</Link></li>
              <li><Link to="/products/saree-box-colour-plate" className="text-gray-800 hover:text-brand-green transition-colors">Colour Plates</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="text-brand-green mr-3 mt-1 shrink-0" size={20} />
                <div>
                  <p className="text-gray-800 font-medium mb-4">
                    Have a requirement? Get in touch with us.
                  </p>
                  <a href="/#contact" className="bg-brand-green hover:bg-brand-green-light text-white px-6 py-2 rounded-sm font-medium transition-colors inline-block text-center">
                    Contact
                  </a>
                </div>
              </li>
              <li className="flex items-center">
                <Phone className="text-brand-green mr-3 shrink-0" size={20} />
                <a href={`tel:${company.phone}`} className="text-gray-800 hover:text-brand-green transition-colors">{company.phone}</a>
              </li>
              <li className="flex items-center">
                <MessageCircle className="text-brand-green mr-3 shrink-0" size={20} />
                <a href={company.whatsappLink} target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-brand-green transition-colors">{company.whatsapp}</a>
              </li>
              <li className="flex items-center">
                <Mail className="text-brand-green mr-3 shrink-0" size={20} />
                <a href={`mailto:${company.email}`} className="text-gray-800 hover:text-brand-green transition-colors">{company.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white font-medium">
          <p>&copy; {currentYear} {company.name}. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="cursor-not-allowed">Privacy Policy</span>
            <span className="cursor-not-allowed">Terms & Conditions</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
