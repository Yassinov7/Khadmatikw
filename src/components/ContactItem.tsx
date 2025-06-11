"use client";

import React from "react";

export default function ContactItem({
  icon,
  title,
  value,
  link,
  copy,
  external,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  link?: string;
  copy?: boolean;
  external?: boolean;
}) {
  const handleCopy = () => {
    navigator.clipboard.writeText(value);
  };

  return (
    <div className="flex items-center justify-between bg-white rounded-lg shadow p-3 border border-gray-100 gap-3">
      <div className="flex items-center gap-3">
        {icon}
        <span className="font-bold text-gray-700">{title}</span>
      </div>
      <div className="flex items-center gap-2">
        {link ? (
          <a
            href={link}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className="font-mono text-base text-primary underline hover:text-secondary transition"
            title={`انقر للتواصل عبر ${title}`}
          >
            {value}
          </a>
        ) : (
          <span className="font-mono text-base text-gray-700">{value}</span>
        )}
        {copy && (
          <button
            onClick={handleCopy}
            className="ml-2 text-xs bg-gray-100 rounded-full px-2 py-1 text-gray-600 hover:bg-primary/10 transition"
            title="نسخ"
            type="button"
          >
            نسخ
          </button>
        )}
      </div>
    </div>
  );
}
