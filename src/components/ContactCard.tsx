// components/ContactCard.tsx
"use client";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";

type Contact = {
  name: string;
  role: string;
  phone: string;
  whatsapp: string;
  email?: string;
  location?: string;
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
          className="bg-white shadow-lg border border-gray-100 rounded-2xl p-6 flex flex-col items-center text-center gap-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
        >
          <div className="bg-primary/10 p-3 rounded-full">
            {person.icon}
          </div>
          <div className="text-xl font-bold text-gray-800">{person.name}</div>
          <div className="text-sm text-secondary font-semibold">{person.role}</div>

          {person.location && (
            <div className="flex items-center gap-1 text-gray-600 text-sm">
              <MapPin size={14} />
              <span>{person.location}</span>
            </div>
          )}

          <div className="flex flex-col gap-3 w-full mt-2">
            <a
              href={`tel:${person.phone}`}
              className="flex items-center justify-center gap-2 px-4 py-3 bg-primary hover:bg-primary/90 text-white rounded-xl text-sm font-bold shadow transition-all"
            >
              <Phone size={16} /> اتصال مباشر
            </a>
            <a
              href={`https://wa.me/${person.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl text-sm font-bold shadow transition-all"
            >
              <MessageCircle size={16} /> واتساب
            </a>
            {person.email && (
              <a
                href={`mailto:${person.email}`}
                className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl text-sm font-bold transition-all"
              >
                <Mail size={16} /> البريد الإلكتروني
              </a>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}