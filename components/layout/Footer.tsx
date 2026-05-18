import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
  { href: "/team", label: "Our Team" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
  { href: "/book", label: "Book Appointment" },
];

export function Footer() {
  return (
    <footer className="relative bg-[#0a1818] text-[#a8c8c8] overflow-hidden">
      {/* subtle top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-600/40 to-transparent" />

      {/* Faint pattern overlay */}
      <div className="absolute inset-0 bg-cross-pattern opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-teal-400">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M14 2C9.5 2 7 6 7 10C7 14 8.5 16 8.5 19C8.5 22 10.5 26 14 26C17.5 26 19.5 22 19.5 19C19.5 16 21 14 21 10C21 6 18.5 2 14 2Z"
                    fill="currentColor"
                    fillOpacity="0.2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path d="M11 13C11 13 12.5 14.5 14 14.5C15.5 14.5 17 13 17 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </span>
              <span className="font-display text-xl font-semibold text-white">Smile Studio</span>
            </div>
            <p className="text-sm text-[#7aa0a0] italic mb-5 font-display">
              &ldquo;Where Every Smile Tells a Story&rdquo;
            </p>
            <p className="text-sm leading-relaxed text-[#7aa0a0]">
              A premium private dental practice in Koramangala, Bangalore — dedicated to exceptional, compassionate care.
            </p>

            {/* Social icons */}
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-teal-900/60 flex items-center justify-center text-teal-300 hover:bg-teal-700/60 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-teal-900/60 flex items-center justify-center text-teal-300 hover:bg-teal-700/60 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-teal-900/60 flex items-center justify-center text-teal-300 hover:bg-teal-700/60 hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.134.558 4.133 1.532 5.87L0 24l6.29-1.508A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.004-1.372l-.359-.214-3.732.895.928-3.628-.235-.372A9.818 9.818 0 012.182 12c0-5.422 4.396-9.818 9.818-9.818 5.422 0 9.818 4.396 9.818 9.818 0 5.422-4.396 9.818-9.818 9.818z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#7aa0a0] hover:text-teal-300 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-widest">Contact</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin size={16} className="text-teal-400 mt-0.5 shrink-0" />
                <span className="text-sm text-[#7aa0a0] leading-relaxed">
                  14, Rosewood Lane,<br />Koramangala, Bangalore — 560034
                </span>
              </li>
              <li className="flex gap-3">
                <Phone size={16} className="text-teal-400 mt-0.5 shrink-0" />
                <a href="tel:+919840012345" className="text-sm text-[#7aa0a0] hover:text-teal-300 transition-colors">
                  +91 98400 12345
                </a>
              </li>
              <li className="flex gap-3">
                <Mail size={16} className="text-teal-400 mt-0.5 shrink-0" />
                <a href="mailto:hello@smilestudio.in" className="text-sm text-[#7aa0a0] hover:text-teal-300 transition-colors">
                  hello@smilestudio.in
                </a>
              </li>
            </ul>
          </div>

          {/* Hours + map placeholder */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-widest">Working Hours</h4>
            <div className="flex gap-3 mb-6">
              <Clock size={16} className="text-teal-400 mt-0.5 shrink-0" />
              <div className="text-sm text-[#7aa0a0]">
                <p>Monday – Saturday</p>
                <p className="text-teal-300 font-medium">9:00 AM – 7:00 PM</p>
                <p className="mt-1 text-[#5a8080]">Sunday: Closed</p>
              </div>
            </div>

            {/* Fake map */}
            <div className="relative rounded-xl overflow-hidden h-28 bg-teal-900/40 border border-teal-800/50 flex items-center justify-center">
              <div className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 50 L100 50 M50 0 L50 100' stroke='%232ab8b8' stroke-width='0.5'/%3E%3Ccircle cx='50' cy='50' r='30' fill='none' stroke='%232ab8b8' stroke-width='0.5'/%3E%3C/svg%3E")`,
                  backgroundSize: "50px 50px",
                }}
              />
              <div className="relative flex flex-col items-center gap-1">
                <svg width="24" height="30" viewBox="0 0 24 30" fill="none">
                  <path d="M12 0C7.029 0 3 4.029 3 9C3 15.75 12 30 12 30C12 30 21 15.75 21 9C21 4.029 16.971 0 12 0Z" fill="#0d6e6e" />
                  <circle cx="12" cy="9" r="4" fill="white" />
                </svg>
                <span className="text-xs text-teal-300 font-medium">Koramangala, Bangalore</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-teal-900/60 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#5a8080]">
            © {new Date().getFullYear()} Smile Studio. All rights reserved.
          </p>
          <p className="text-xs text-[#5a8080]">
            Designed with care · Koramangala, Bangalore
          </p>
        </div>
      </div>
    </footer>
  );
}
