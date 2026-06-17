"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, CheckCircle2, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

/* ─── Intersection Observer hook ─── */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

/* ─── Animated counter ─── */
function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const duration = 1800;
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          const ease = 1 - Math.pow(1 - p, 3);
          setCount(Math.floor(ease * target));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        obs.disconnect();
      }
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

/* ─── Data ─── */
const stats = [
  { value: 1200, suffix: "+", label: "Happy Patients" },
  { value: 12, suffix: "", label: "Years Experience" },
  { value: 15, suffix: "+", label: "Treatments Offered" },
  { value: 4.9, suffix: "★", label: "Google Rating", static: true },
];

const services = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 3C11 3 8 7.5 8 12C8 16.5 10 18.5 10 22C10 25.5 12.5 29 16 29C19.5 29 22 25.5 22 22C22 18.5 24 16.5 24 12C24 7.5 21 3 16 3Z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M12 15C12 15 14 17 16 17C18 17 20 15 20 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    name: "Teeth Whitening",
    desc: "Professional in-chair whitening that lifts stains by up to 3 shades in a single session using our advanced LED-activated gel system.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="10" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M10 16 C10 12 13 9 16 9 C19 9 22 12 22 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
        <path d="M13 19.5 L19 19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="16" cy="22" r="1.5" fill="currentColor"/>
      </svg>
    ),
    name: "Dental Implants",
    desc: "Permanent tooth replacement using titanium implants that look, feel, and function exactly like your natural teeth — for a lifetime.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 10 C8 7 10 5 12 5 L20 5 C22 5 24 7 24 10 L24 22 C24 25 22 27 20 27 L12 27 C10 27 8 25 8 22 Z" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M11 12 L21 12 M11 16 L21 16 M11 20 L17 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    name: "Braces & Aligners",
    desc: "Achieve perfectly aligned teeth with metal braces or nearly invisible clear aligners. Customised treatment plans for teens and adults.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 10 L25 10 L25 24 C25 25.1 24.1 26 23 26 L9 26 C7.9 26 7 25.1 7 24 Z" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M5 10 L27 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M12 10 L12 6 M20 10 L20 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M11 17 L15 21 L21 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    name: "Root Canal Treatment",
    desc: "Advanced pulp therapy with precision instruments to eliminate infection and save your natural tooth — painless with proper anaesthesia.",
  },
];

const whyUs = [
  { icon: "🔬", title: "Advanced Equipment", desc: "Digital X-rays, 3D imaging, and laser-assisted procedures for precise, efficient care." },
  { icon: "💉", title: "Painless Procedures", desc: "Expert anaesthesia techniques and anxiety management so you barely feel a thing." },
  { icon: "🕐", title: "Flexible Timings", desc: "Open Monday to Saturday, 9 AM to 7 PM — evening slots available for working professionals." },
  { icon: "🏆", title: "Certified Specialists", desc: "IDA member, ISO 9001 certified. Our team holds advanced qualifications in their specialties." },
  { icon: "🧒", title: "Child-Friendly", desc: "A warm, playful environment that makes dental visits a positive experience for children." },
  { icon: "💳", title: "EMI Options Available", desc: "Flexible 0% EMI plans on major treatments so quality dental care fits every budget." },
];

const testimonials = [
  {
    name: "Arjun Kapoor",
    rating: 5,
    text: "I had always been self-conscious about my smile, but Dr. Aanya changed everything. The whitening was completely painless and the results were stunning — three shades whiter in a single session!",
    treatment: "Teeth Whitening",
    avatar: "https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?w=80&q=80",
  },
  {
    name: "Meera Iyer",
    rating: 5,
    text: "After losing a tooth in an accident, I was terrified about implants. Dr. Rohan walked me through every step with such patience. The implant looks and feels completely natural.",
    treatment: "Dental Implants",
    avatar: "https://images.unsplash.com/photo-1728141123512-87c415cecc9d?w=80&q=80",
  },
  {
    name: "Sunita Krishnamurthy",
    rating: 5,
    text: "Everyone dreads root canals, but I felt almost nothing. Dr. Aanya's technique is exceptional. The follow-up call the next day was a lovely touch. Highly recommend!",
    treatment: "Root Canal Treatment",
    avatar: "https://plus.unsplash.com/premium_photo-1661964274927-84559011dd89?w=80&q=80",
  },
];

export default function HomePage() {
  const statsReveal = useReveal();
  const servicesReveal = useReveal();
  const whyReveal = useReveal();
  const doctorReveal = useReveal();
  const testimonialsReveal = useReveal();
  const ctaReveal = useReveal();

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center bg-dental-pattern overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f8f5f0] via-transparent to-teal-50/40 dark:from-[#0a1818] dark:via-transparent dark:to-teal-900/20 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-16 grid lg:grid-cols-2 gap-12 items-center w-full">
          <div className="animate-fade-slide-up">
            <Badge className="mb-6 bg-teal-100 text-teal-700 dark:bg-teal-900/50 dark:text-teal-300 border-0 px-4 py-1.5 text-xs font-medium tracking-wide uppercase">
              Koramangala · Bangalore
            </Badge>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.08] text-foreground mb-6">
              Your Perfect{" "}
              <span className="gradient-text">Smile</span>{" "}
              Starts Here
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
              At Smile Studio, we combine clinical excellence with genuine warmth — because great dental care should feel as good as it looks. Led by Dr. Aanya Sharma with 12 years of transforming smiles across Bangalore.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 text-base shadow-lg shadow-teal-600/20">
                <Link href="/book">Book Appointment <ArrowRight size={18} className="ml-2" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="px-8 text-base border-primary/30 hover:bg-primary/5 hover:border-primary/60">
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
            <div className="flex items-center gap-6 mt-10">
              <div className="flex -space-x-2">
                {["Arjun+K", "Meera+I", "Sunita+K"].map((n) => (
                  <div key={n} className="w-8 h-8 rounded-full border-2 border-background overflow-hidden">
                    <Image src={`https://ui-avatars.com/api/?name=${n}&background=0d6e6e&color=fff&size=32`} width={32} height={32} alt={n} />
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => <Star key={i} size={13} fill="currentColor" />)}
                </div>
                <p className="text-muted-foreground text-xs mt-0.5">1,200+ patients trust us</p>
              </div>
            </div>
          </div>

          <div className="relative animate-scale-in" style={{ animationDelay: "200ms" }}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-teal-900/20">
              <Image
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&q=80"
                alt="Smile Studio dental clinic interior"
                width={1200}
                height={800}
                className="w-full h-[420px] lg:h-[520px] object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-card border border-border rounded-2xl px-5 py-4 shadow-xl backdrop-blur-sm">
              <p className="text-xs text-muted-foreground mb-1">Next available slot</p>
              <p className="font-semibold text-foreground text-sm">Today, 4:00 PM</p>
              <div className="flex items-center gap-1.5 mt-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs text-emerald-600 dark:text-emerald-400">Accepting patients</span>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 w-16 h-16 rounded-full bg-card border border-border shadow-xl flex items-center justify-center p-2.5 animate-float">
              <Image src="/icons/dental-implant_4357767.png" alt="Dental implants" width={44} height={44} className="object-contain" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-14 h-14 rounded-full bg-card border border-border shadow-xl flex items-center justify-center p-2 animate-float" style={{ animationDelay: "1.5s" }}>
              <Image src="/icons/protection_4357525.png" alt="Trusted dental protection" width={38} height={38} className="object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="bg-primary py-14 relative overflow-hidden">
        <div className="absolute inset-0 bg-cross-pattern opacity-10" />
        <div
          ref={statsReveal.ref}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={cn("text-center reveal", statsReveal.visible && "in-view")}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <p className="font-display text-4xl sm:text-5xl font-bold text-white mb-2">
                {stat.static ? (
                  <>{stat.value}{stat.suffix}</>
                ) : (
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                )}
              </p>
              <p className="text-teal-200 text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Services Preview ── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#f8f5f0] to-background dark:from-[#0a1818] dark:to-background pointer-events-none" />
        <div ref={servicesReveal.ref} className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className={cn("text-center mb-14 reveal", servicesReveal.visible && "in-view")}>
            <Badge className="mb-4 bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300 border-0">Our Services</Badge>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Treatments That <span className="gradient-text">Transform</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              From routine cleanings to full smile makeovers — we offer a comprehensive range of dental treatments under one roof.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <div
                key={s.name}
                className={cn(
                  "group bg-card border border-border rounded-2xl p-6 hover:shadow-xl hover:shadow-teal-900/10 hover:-translate-y-1.5 transition-all duration-300 reveal",
                  servicesReveal.visible && "in-view"
                )}
                style={{ transitionDelay: `${i * 80 + 100}ms` }}
              >
                <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300 w-fit">
                  {s.icon}
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{s.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className={cn("text-center mt-10 reveal", servicesReveal.visible && "in-view")} style={{ transitionDelay: "400ms" }}>
            <Link href="/services" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
              View All 10 Services <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-teal-50 via-background to-amber-50/30 dark:from-teal-950/30 dark:via-background dark:to-amber-950/20">
        <div className="absolute inset-0 bg-dental-pattern pointer-events-none opacity-60" />
        <div ref={whyReveal.ref} className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className={cn("text-center mb-14 reveal", whyReveal.visible && "in-view")}>
            <Badge className="mb-4 bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300 border-0">Why Smile Studio</Badge>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Care You Can <span className="gradient-text">Count On</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item, i) => (
              <div
                key={item.title}
                className={cn(
                  "flex gap-4 bg-card/70 backdrop-blur-sm border border-border rounded-2xl p-6 hover:bg-card hover:shadow-lg transition-all duration-300 reveal",
                  whyReveal.visible && "in-view"
                )}
                style={{ transitionDelay: `${i * 80 + 100}ms` }}
              >
                <span className="text-3xl shrink-0">{item.icon}</span>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Meet the Doctor ── */}
      <section className="py-24 overflow-hidden">
        <div ref={doctorReveal.ref} className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-14 items-center">
          <div className={cn("relative reveal-left", doctorReveal.visible && "in-view")}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-teal-900/15">
              <Image
                src="https://plus.unsplash.com/premium_photo-1661778976948-0cbf766dc0e8?w=600&q=80"
                alt="Dr. Aanya Sharma"
                width={600}
                height={700}
                className="w-full h-[480px] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-display text-2xl font-bold text-white">Dr. Aanya Sharma</p>
                <p className="text-teal-200 text-sm">BDS, MDS — Prosthodontics</p>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground rounded-2xl px-5 py-3 shadow-lg">
              <p className="text-2xl font-bold font-display">12+</p>
              <p className="text-xs font-medium">Years Experience</p>
            </div>
          </div>
          <div className={cn("reveal-right", doctorReveal.visible && "in-view")}>
            <Badge className="mb-5 bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300 border-0">Meet the Doctor</Badge>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6 leading-tight">
              The Smile Behind <span className="gradient-text">Smile Studio</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Dr. Aanya Sharma is a prosthodontist with over 12 years of experience transforming smiles across Bangalore. After completing her MDS from Manipal College of Dental Sciences, she founded Smile Studio with a singular vision.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              She is known for her gentle approach, meticulous attention to detail, and ability to put even the most anxious patients at ease — making every visit something to look forward to.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {["Indian Dental Association", "ISO 9001 Certified", "AACD Associate", "DCI Registered"].map((c) => (
                <div key={c} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 size={16} className="text-primary shrink-0" />
                  {c}
                </div>
              ))}
            </div>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/team">Meet the Full Team <ArrowRight size={16} className="ml-2" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Testimonials Preview ── */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-background to-teal-50/40 dark:to-teal-950/20">
        <div ref={testimonialsReveal.ref} className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className={cn("text-center mb-14 reveal", testimonialsReveal.visible && "in-view")}>
            <Badge className="mb-4 bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300 border-0">Patient Stories</Badge>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Real Smiles, <span className="gradient-text">Real Stories</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className={cn(
                  "bg-card border border-border rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 reveal",
                  testimonialsReveal.visible && "in-view"
                )}
                style={{ transitionDelay: `${i * 100 + 100}ms` }}
              >
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} size={14} className="text-amber-400" fill="currentColor" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full overflow-hidden">
                    <Image
                      src={t.avatar}
                      width={36}
                      height={36}
                      alt={t.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.treatment}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={cn("text-center mt-10 reveal", testimonialsReveal.visible && "in-view")} style={{ transitionDelay: "400ms" }}>
            <Link href="/testimonials" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
              Read All Reviews <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section ref={ctaReveal.ref} className="py-24 relative overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-cross-pattern opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-teal-600/30 to-transparent" />
        <div className={cn("relative max-w-3xl mx-auto px-4 sm:px-6 text-center reveal", ctaReveal.visible && "in-view")}>
          <p className="text-teal-200 text-sm font-medium tracking-widest uppercase mb-4">Take the First Step</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            Ready for the Smile You Deserve?
          </h2>
          <p className="text-teal-100 text-lg mb-10 leading-relaxed">
            Book your appointment today and experience dental care that truly puts you first. Same-day slots available for emergencies.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-teal-50 px-8 text-base font-semibold shadow-xl">
              <Link href="/book">Book Appointment <ArrowRight size={18} className="ml-2" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="px-8 text-base border-white/40 !text-white !bg-transparent hover:!bg-white/10">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
          <p className="text-teal-100 text-sm mt-6">
            📞 +91 98400 12345 · Mon–Sat, 9 AM – 7 PM
          </p>
        </div>
      </section>
    </>
  );
}
