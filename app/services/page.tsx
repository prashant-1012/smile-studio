"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

const services = [
  {
    name: "Teeth Cleaning",
    duration: "45–60 mins",
    desc: "Professional scaling and polishing to remove tartar build-up, surface stains, and plaque that regular brushing cannot address. Our hygienists use ultrasonic scalers and hand instruments for a thorough, comfortable clean — leaving your teeth feeling noticeably smoother and your breath fresher.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 4C13.5 4 10 9.5 10 15C10 20.5 12.5 23 12.5 27.5C12.5 32 15.5 36 20 36C24.5 36 27.5 32 27.5 27.5C27.5 23 30 20.5 30 15C30 9.5 26.5 4 20 4Z" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M15 19C15 19 17.5 21.5 20 21.5C22.5 21.5 25 19 25 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M8 20 L12 20 M28 20 L32 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    featured: false,
  },
  {
    name: "Teeth Whitening",
    duration: "60–90 mins",
    desc: "Our signature in-chair whitening treatment uses a professional-grade LED-activated whitening gel to lift deep stains caused by coffee, tea, wine, and ageing. Most patients see results of up to three shades brighter in a single session. A custom take-home kit is included for maintenance.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="10" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M20 8 L20 5 M20 35 L20 32 M8 20 L5 20 M35 20 L32 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M14 14 L12 12 M28 28 L26 26 M14 26 L12 28 M26 14 L28 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="20" cy="20" r="5" fill="currentColor" fillOpacity="0.3"/>
      </svg>
    ),
    featured: true,
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80",
  },
  {
    name: "Dental Implants",
    duration: "2–3 appointments",
    desc: "Dental implants are the gold standard for replacing missing teeth. A titanium post is surgically placed into the jawbone, topped with a natural-looking ceramic crown. The result is a permanent, fully functional tooth that looks and feels indistinguishable from your natural dentition — and lasts a lifetime with proper care.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 8 L20 28" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <path d="M14 12 L26 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M16 16 L24 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M14 28 L26 28 C26 28 28 28 28 32 L12 32 C12 28 14 28 14 28Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="20" cy="8" r="3" fill="currentColor" fillOpacity="0.4" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    featured: true,
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&q=80",
  },
  {
    name: "Braces & Aligners",
    duration: "12–24 months",
    desc: "Achieve a perfectly aligned smile with our orthodontic options — traditional metal braces for complex cases or virtually invisible clear aligners for a discreet treatment experience. We create fully customised treatment plans using digital impressions and 3D treatment simulation so you can preview your results before starting.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 15 C8 11 11 8 15 8 L25 8 C29 8 32 11 32 15 L32 25 C32 29 29 32 25 32 L15 32 C11 32 8 29 8 25 Z" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 20 L28 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <rect x="15" y="17.5" width="5" height="5" rx="1" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1"/>
        <rect x="22" y="17.5" width="5" height="5" rx="1" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1"/>
      </svg>
    ),
    featured: false,
  },
  {
    name: "Root Canal Treatment",
    duration: "60–90 mins",
    desc: "Root canal therapy removes infected or inflamed pulp tissue from inside the tooth, relieves pain, and seals the canal to prevent reinfection — saving a tooth that might otherwise need extraction. Using rotary endodontic instruments and digital apex locators, our procedure is precise, efficient, and virtually painless.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 4C14 4 10 9 10 14C10 19 12 21 12 26C12 31 15 36 20 36C25 36 28 31 28 26C28 21 30 19 30 14C30 9 26 4 20 4Z" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M20 14 L20 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2"/>
        <circle cx="20" cy="12" r="3" fill="currentColor" fillOpacity="0.4"/>
      </svg>
    ),
    featured: false,
  },
  {
    name: "Tooth Extraction",
    duration: "30–45 mins",
    desc: "When a tooth is too damaged or decayed to be saved, extraction provides relief and prevents further oral health complications. We offer both simple and surgical extractions under effective local anaesthesia. Post-extraction care instructions and follow-up are included, with implant consultation offered if needed.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 6C14 6 11 11 11 16C11 21 13 23 13 27C13 31 15.5 34 20 34C24.5 34 27 31 27 27C27 23 29 21 29 16C29 11 26 6 20 6Z" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M16 22 L24 28 M24 22 L16 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    featured: false,
  },
  {
    name: "Pediatric Dentistry",
    duration: "30–45 mins",
    desc: "Children's dental health lays the foundation for a lifetime of healthy smiles. Our pediatric appointments are designed to be fun, educational, and completely stress-free. We offer preventive sealants, fluoride treatments, and early orthodontic assessments — all in a bright, child-friendly environment that makes dental visits an adventure.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="14" r="7" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M14 26 C14 22 17 20 20 20 C23 20 26 22 26 26 L26 36 L14 36 Z" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M17 13 Q20 16 23 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    featured: false,
  },
  {
    name: "Cosmetic Dentistry",
    duration: "Varies by treatment",
    desc: "Transform your smile with our range of cosmetic procedures — ultra-thin porcelain veneers, dental bonding to repair chips and gaps, and tooth contouring for subtle reshaping. Each treatment is meticulously planned using shade guides and digital smile design software to ensure results that look beautifully natural.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 20 C10 14 14.5 10 20 10 C25.5 10 30 14 30 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
        <path d="M12 22 C12 26 15.5 30 20 30 C24.5 30 28 26 28 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
        <path d="M15 16 L15 24 M20 14 L20 26 M25 16 L25 24" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
        <circle cx="20" cy="20" r="2" fill="currentColor" fillOpacity="0.4"/>
      </svg>
    ),
    featured: true,
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80",
  },
  {
    name: "Dental Crown & Bridge",
    duration: "2 visits",
    desc: "Crowns restore damaged, cracked, or heavily filled teeth to full strength and aesthetics. Bridges replace one or more missing teeth by anchoring to adjacent teeth. We use high-strength zirconia and porcelain materials, shade-matched precisely to your existing teeth, for results that are indistinguishable from natural dentition.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 18 L12 28 C12 30 14 32 16 32 L24 32 C26 32 28 30 28 28 L28 18" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M10 18 L30 18 L28 12 L24 14 L20 10 L16 14 L12 12 Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    featured: false,
  },
  {
    name: "Emergency Dental Care",
    duration: "Walk-ins welcome",
    desc: "Dental emergencies don't wait for appointments. We reserve same-day slots for toothaches, broken teeth, lost fillings, dental trauma, and abscess drainage. Our team is equipped to provide immediate pain relief, stabilise the affected tooth, and plan definitive treatment — all with the compassion and efficiency an emergency demands.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="14" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M18 10 L18 18 L10 18 L10 22 L18 22 L18 30 L22 30 L22 22 L30 22 L30 18 L22 18 L22 10 Z" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1.2"/>
      </svg>
    ),
    featured: false,
  },
];

export default function ServicesPage() {
  const heroReveal = useReveal();
  const gridReveal = useReveal();

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-teal-50 via-background to-background dark:from-teal-950/40 dark:via-background dark:to-background">
        <div className="absolute inset-0 bg-dental-pattern opacity-60 pointer-events-none" />
        <div ref={heroReveal.ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className={cn("reveal", heroReveal.visible && "in-view")}>
            <Badge className="mb-5 bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300 border-0 px-4 py-1.5">Our Services</Badge>
            <h1 className="font-display text-5xl sm:text-6xl font-bold text-foreground mb-5">
              Everything Your Smile <span className="gradient-text">Needs</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              From preventive care to advanced cosmetic treatments, Smile Studio offers a full spectrum of dental services — all under one roof, delivered with clinical precision and genuine warmth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 relative">
        <div ref={gridReveal.ref} className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="space-y-8">
            {services.map((service, i) => (
              service.featured ? (
                /* Featured — horizontal card with image */
                <div
                  key={service.name}
                  className={cn(
                    "group grid md:grid-cols-2 gap-0 bg-card border border-border rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-teal-900/10 transition-all duration-500 reveal",
                    gridReveal.visible && "in-view",
                    i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
                  )}
                  style={{ transitionDelay: `${(i % 4) * 80}ms` }}
                >
                  <div className="relative h-64 md:h-auto overflow-hidden">
                    <Image
                      src={service.image!}
                      alt={service.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-teal-900/20" />
                  </div>
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <div className="text-primary mb-4">{service.icon}</div>
                    <div className="flex items-center gap-3 mb-3">
                      <h2 className="font-display text-2xl font-bold text-foreground">{service.name}</h2>
                      <Badge className="bg-accent/15 text-accent border-0 text-xs">Featured</Badge>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                      <Clock size={14} />
                      <span>{service.duration}</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-6">{service.desc}</p>
                    <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 w-fit">
                      <Link href="/book">Book This Treatment <ArrowRight size={16} className="ml-2" /></Link>
                    </Button>
                  </div>
                </div>
              ) : (
                /* Standard card */
                <div
                  key={service.name}
                  className={cn(
                    "group bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:shadow-teal-900/8 hover:-translate-y-0.5 transition-all duration-300 grid sm:grid-cols-[auto_1fr_auto] gap-6 items-start reveal",
                    gridReveal.visible && "in-view"
                  )}
                  style={{ transitionDelay: `${(i % 4) * 80}ms` }}
                >
                  <div className="text-primary group-hover:scale-110 transition-transform duration-300 w-fit">
                    {service.icon}
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h2 className="font-display text-xl font-bold text-foreground">{service.name}</h2>
                      <div className="flex items-center gap-1.5 text-muted-foreground text-xs">
                        <Clock size={12} />
                        <span>{service.duration}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-sm">{service.desc}</p>
                  </div>
                  <Button asChild variant="outline" size="sm" className="border-primary/30 text-primary hover:bg-primary/5 shrink-0 mt-1">
                    <Link href="/book">Book <ArrowRight size={14} className="ml-1" /></Link>
                  </Button>
                </div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-r from-primary to-teal-700">
        <div className="absolute inset-0 bg-cross-pattern opacity-10" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-4xl font-bold text-white mb-4">Not Sure Which Treatment You Need?</h2>
          <p className="text-teal-100 mb-8">Book a consultation and Dr. Aanya will assess your smile and recommend the ideal treatment plan for you.</p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-teal-50 font-semibold px-8">
            <Link href="/book">Book a Consultation <ArrowRight size={16} className="ml-2" /></Link>
          </Button>
        </div>
      </section>
    </>
  );
}
