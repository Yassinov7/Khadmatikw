export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-6 mt-16 text-center text-gray-600 text-sm">
      <div className="container mx-auto">
        جميع الحقوق محفوظة &copy; {new Date().getFullYear()} خدماتي KW
        <span className="mx-2">|</span>
        <a
          href="https://wa.me/96550266068"
          target="_blank"
          rel="noopener"
          className="text-primary hover:underline"
        >
          تواصل عبر واتساب
        </a>
      </div>
    </footer>
  );
}
