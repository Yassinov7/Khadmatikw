// components/ContactCard.tsx
"use client";
import { Phone, MessageCircle} from "lucide-react";

type Contact = {
  name: string;
  role: string;
  phone: string;
  whatsapp: string;
  icon: React.ReactNode;
};

type Props = {
  contacts: Contact[];
};

export function ContactCard({ contacts }: Props) {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {contacts.map((person, index) => (
        <div
          key={index}
          className="bg-white shadow border border-gray-200 rounded-2xl p-5 flex flex-col items-center text-center gap-3"
        >
          <div>{person.icon}</div>
          <div className="text-xl font-bold text-gray-800">{person.name}</div>
          <div className="text-sm text-gray-500">{person.role}</div>

          <div className="flex flex-col gap-2 w-full mt-3">
            <a
              href={`tel:${person.phone}`}
              className="flex items-center justify-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-full text-sm font-bold shadow"
            >
              <Phone size={16} /> اتصال مباشر
            </a>
            <a
              href={`https://wa.me/${person.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-full text-sm font-bold shadow"
            >
              <MessageCircle size={16} /> واتساب
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}
