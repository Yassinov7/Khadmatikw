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
          className="card-modern rounded-[2rem] p-6 flex flex-col items-center text-center gap-5 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
        >
          <div className="grid place-items-center rounded-[2.5rem] bg-gradient-to-br from-primary/15 to-secondary/15 p-5 text-primary shadow-md">
            <div className="grid place-items-center rounded-[2rem] bg-white p-4 shadow-sm">
              {person.icon}
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-xl font-bold text-slate-900">{person.name}</div>
            <div className="text-sm font-semibold text-primary">{person.role}</div>
          </div>

          {person.location && (
            <div className="flex items-center gap-2 text-slate-500 text-sm">
              <MapPin size={14} />
              <span>{person.location}</span>
            </div>
          )}

          <div className="flex flex-col gap-3 w-full mt-4">
            <a
              href={`tel:${person.phone}`}
              className="flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90"
            >
              <Phone size={16} /> اتصال مباشر
            </a>
            <a
              href={`https://wa.me/${person.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-green-500 px-4 py-3 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-600"
            >
              <MessageCircle size={16} /> واتساب
            </a>
            {person.email && (
              <a
                href={`mailto:${person.email}`}
                className="flex items-center justify-center gap-2 rounded-full bg-slate-100 px-4 py-3 text-sm font-bold text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-200"
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