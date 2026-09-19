import { useState } from 'react';
import { company } from '../data/company';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    phone: '',
    email: '',
    product: '',
    gsm: '',
    quantity: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp message
    let text = `*New Raw Material Enquiry*\n\n`;
    text += `*Name:* ${formData.name}\n`;
    if (formData.companyName) text += `*Company:* ${formData.companyName}\n`;
    text += `*Phone:* ${formData.phone}\n`;
    if (formData.email) text += `*Email:* ${formData.email}\n`;
    text += `*Product Required:* ${formData.product}\n`;
    text += `*GSM Required:* ${formData.gsm}\n`;
    text += `*Quantity:* ${formData.quantity}\n`;
    if (formData.message) text += `\n*Message:* ${formData.message}`;
    
    const encodedText = encodeURIComponent(text);
    window.open(`${company.whatsappLink}?text=${encodedText}`, '_blank');
  };

  return (
    <section id="contact" className="bg-brand-offwhite py-12 md:py-20 scroll-mt-20">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-medium text-brand-charcoal mb-6">
            Let's Talk About Your Requirement
          </h2>
          <p className="text-lg text-gray-600">
            Have a requirement for paper plate raw materials? Get in touch with {company.name} to discuss your material, GSM, quantity, and supply requirements.
          </p>
        </div>

        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex flex-col lg:flex-row">
          
          {/* Form Side */}
          <div className="w-full lg:w-2/3 p-8 md:p-12">
            <h3 className="text-2xl font-heading font-medium text-brand-charcoal mb-8 border-b border-gray-100 pb-4">
              Send Enquiry
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                  <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-green/50 focus:border-brand-green bg-gray-50" />
                </div>
                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                  <input type="text" id="companyName" name="companyName" value={formData.companyName} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-green/50 focus:border-brand-green bg-gray-50" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                  <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-green/50 focus:border-brand-green bg-gray-50" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-green/50 focus:border-brand-green bg-gray-50" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-1">Product Required *</label>
                  <select id="product" name="product" required value={formData.product} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-green/50 focus:border-brand-green bg-gray-50">
                    <option value="">Select Material</option>
                    <option value="Silver Paper">Silver Paper</option>
                    <option value="Kraft / Chipboard">Kraft / Chipboard</option>
                    <option value="Thali Green Sheet">Thali Green Sheet</option>
                    <option value="Colour Plate Material">Colour Plate Material</option>
                    <option value="Other">Other / Not Sure</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="gsm" className="block text-sm font-medium text-gray-700 mb-1">GSM Required *</label>
                  <select id="gsm" name="gsm" required value={formData.gsm} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-green/50 focus:border-brand-green bg-gray-50">
                    <option value="">Select GSM</option>
                    <option value="80 GSM">80 GSM</option>
                    <option value="120 GSM">120 GSM</option>
                    <option value="180 GSM">180 GSM</option>
                    <option value="200 GSM">200 GSM</option>
                    <option value="Other">Other / Assorted</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">Quantity Required *</label>
                  <input type="text" id="quantity" name="quantity" required placeholder="e.g. 500 KGs" value={formData.quantity} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-green/50 focus:border-brand-green bg-gray-50" />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message / Special Requirements</label>
                <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-green/50 focus:border-brand-green bg-gray-50 resize-none"></textarea>
              </div>

              <button type="submit" className="w-full bg-brand-green hover:bg-brand-green-light text-white py-3 md:py-4 rounded-sm font-medium text-base md:text-lg transition-colors flex items-center justify-center">
                <Send size={20} className="mr-2" />
                Send Enquiry
              </button>
            </form>
          </div>

          {/* Info Side */}
          <div className="w-full lg:w-1/3 bg-brand-charcoal text-white p-8 md:p-12 flex flex-col justify-center">
            <h3 className="text-2xl font-heading font-medium mb-8">Contact Information</h3>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <MapPin className="text-brand-green-light shrink-0 mt-1 mr-4" size={24} />
                <div>
                  <h4 className="font-semibold text-brand-beige mb-1">Our Location</h4>
                  <p className="text-gray-300">
                    {company.address.street}<br />
                    {company.address.city}, {company.address.state} {company.address.pincode}<br />
                    {company.address.country}
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="text-brand-green-light shrink-0 mt-1 mr-4" size={24} />
                <div>
                  <h4 className="font-semibold text-brand-beige mb-1">Phone</h4>
                  <a href={`tel:${company.phone.replace(/[^0-9+]/g, '')}`} className="text-gray-300 hover:text-white transition-colors">
                    {company.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="text-brand-green-light shrink-0 mt-1 mr-4" size={24} />
                <div>
                  <h4 className="font-semibold text-brand-beige mb-1">Email</h4>
                  <a href={`mailto:${company.email}`} className="text-gray-300 hover:text-white transition-colors">
                    {company.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="text-brand-green-light shrink-0 mt-1 mr-4" size={24} />
                <div>
                  <h4 className="font-semibold text-brand-beige mb-1">Business Hours</h4>
                  <p className="text-gray-300">
                    {company.businessHours}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-10 border-t border-gray-700">
              <a 
                href={company.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center bg-white/10 hover:bg-white/20 text-white py-3 rounded transition-colors"
              >
                <MessageCircle size={20} className="mr-2" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
