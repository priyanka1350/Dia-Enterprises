import { MessageCircle } from 'lucide-react';
import { company } from '../data/company';

export function WhatsAppButton() {
  return (
    <a
      href={company.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:scale-110 hover:bg-[#1ebe57] transition-all duration-300 flex items-center justify-center"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle size={32} />
    </a>
  );
}
