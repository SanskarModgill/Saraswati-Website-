export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919417711022"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-4 text-white font-semibold shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-[#1ebe5d]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="w-7 h-7 fill-current"
      >
        <path d="M16.04 3C9.4 3 4 8.26 4 14.73c0 2.56.86 5.03 2.46 7.06L4 29l7.45-2.34a12.3 12.3 0 0 0 4.59.88C22.6 27.54 28 22.28 28 15.8 28 9.33 22.68 3 16.04 3Zm6.95 18.17c-.29.8-1.7 1.52-2.36 1.62-.61.09-1.38.13-2.23-.14-.52-.17-1.2-.39-2.06-.76-3.63-1.57-5.99-5.23-6.17-5.47-.18-.24-1.48-1.93-1.48-3.68 0-1.75.92-2.61 1.25-2.97.33-.36.72-.45.96-.45.24 0 .48 0 .69.01.22.01.52-.08.82.63.3.72 1.03 2.48 1.12 2.66.09.18.15.39.03.63-.12.24-.18.39-.36.6-.18.21-.39.46-.56.62-.18.18-.36.38-.16.74.21.36.92 1.51 1.98 2.45 1.37 1.2 2.52 1.57 2.88 1.75.36.18.57.15.78-.09.21-.24.9-1.04 1.14-1.39.24-.36.48-.3.81-.18.33.12 2.08.97 2.44 1.15.36.18.6.27.69.42.09.15.09.89-.2 1.69Z" />
      </svg>

      <span className="hidden md:inline">
        Chat on WhatsApp
      </span>
    </a>
  );
}