"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle2 } from "lucide-react";
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

const values = [
  {
    icon: "❤️",
    title: "Comfort First",
    desc: "Every procedure is designed around patient comfort, not just clinical efficiency. We believe a relaxed patient is a healed patient.",
  },
  {
    icon: "🔬",
    title: "Clinical Excellence",
    desc: "We invest continuously in the latest technology and in our team's education to deliver outcomes that set benchmarks.",
  },
  {
    icon: "🤝",
    title: "Transparency",
    desc: "No hidden costs. Treatment plans are explained in plain language before any procedure begins — you decide, informed.",
  },
  {
    icon: "🌱",
    title: "Community Care",
    desc: "Free dental check-up camps for school children every quarter. Because a healthier community begins with healthy smiles.",
  },
];

const certifications = [
  { name: "Indian Dental Association", detail: "Karnataka State Branch Member", badge: "IDA" },
  { name: "ISO 9001:2015 Certified", detail: "Quality management systems certified", badge: "ISO" },
  { name: "AACD Associate Member", detail: "American Academy of Cosmetic Dentistry", badge: "AACD" },
  { name: "Dental Council of India", detail: "Reg. No. KA-DCI-2012-4471", badge: "DCI" },
];

const timeline = [
  { year: "2012", title: "Smile Studio Founded", desc: "Dr. Aanya Sharma opens a modest 2-chair clinic on Residency Road, Bangalore, with a vision to make premium dentistry accessible." },
  { year: "2015", title: "Moved to Koramangala", desc: "Growing patient trust demanded more space. The clinic relocated to its current home and expanded to 4 fully equipped treatment chairs." },
  { year: "2016", title: "Implant Services Launched", desc: "Dr. Rohan Mehta joins as Associate Dentist. The implantology programme launches, serving patients from across Bangalore." },
  { year: "2019", title: "Digital Imaging Upgrade", desc: "Investment in digital X-ray systems and 3D cone beam CT imaging brings hospital-grade diagnostics to the clinic." },
  { year: "2022", title: "Clear Aligner Programme", desc: "Smile Studio launches its clear aligner service, adding a discreet orthodontic option. Active patient count crosses 800." },
  { year: "2024", title: "1,200+ Patients Milestone", desc: "A landmark year — over 1,200 patients treated. EMI-friendly payment plans introduced to make quality care even more accessible." },
];

export default function AboutPage() {
  const storyReveal = useReveal();
  const valuesReveal = useReveal();
  const certReveal = useReveal();
  const timelineReveal = useReveal();

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-teal-50 via-background to-background dark:from-teal-950/40 dark:via-background dark:to-background">
        <div className="absolute inset-0 bg-dental-pattern opacity-50 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center animate-fade-slide-up">
          <Badge className="mb-5 bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300 border-0 px-4 py-1.5">Our Story</Badge>
          <h1 className="font-display text-5xl sm:text-6xl font-bold text-foreground mb-5">
            About <span className="gradient-text">Smile Studio</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            A clinic built on the belief that every patient deserves premium dental care delivered with warmth, honesty, and genuine expertise.
          </p>
        </div>
      </section>

      {/* Clinic Story */}
      <section className="py-24 overflow-hidden">
        <div ref={storyReveal.ref} className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className={cn("reveal-left", storyReveal.visible && "in-view")}>
            <Badge className="mb-5 bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300 border-0">How It Began</Badge>
            <h2 className="font-display text-4xl font-bold text-foreground mb-6 leading-tight">
              From a Two-Chair Clinic to Bangalore&apos;s Most Trusted Dental Practice
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              In 2012, Dr. Aanya Sharma had just completed her MDS in Prosthodontics from Manipal College of Dental Sciences. She had worked in two large hospital dental departments and noticed the same thing everywhere: patients were nervous, often in the dark about their treatment, and treated as cases rather than people.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              She opened Smile Studio on Residency Road with two chairs, one hygienist, and a firm philosophy — every patient walks out better informed, better cared for, and more comfortable than when they walked in. Word spread quickly.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Today, Smile Studio is home to a team of four dedicated dental professionals, four fully equipped treatment chairs, and a patient community of over 1,200 families across Bangalore who trust us with their smiles.
            </p>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/team">Meet Our Team <ArrowRight size={16} className="ml-2" /></Link>
            </Button>
          </div>
          <div className={cn("reveal-right", storyReveal.visible && "in-view")}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-teal-900/15">
              <Image
                src="https://images.unsplash.com/photo-1704455306251-b4634215d98f?w=900&q=80"
                alt="Smile Studio clinic interior"
                width={900}
                height={600}
                className="w-full h-[440px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/30 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-teal-50/60 to-amber-50/30 dark:from-teal-950/30 dark:to-amber-950/20">
        <div className="absolute inset-0 bg-cross-pattern opacity-30 pointer-events-none" />
        <div ref={valuesReveal.ref} className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className={cn("text-center mb-14 reveal", valuesReveal.visible && "in-view")}>
            <Badge className="mb-4 bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300 border-0">What We Stand For</Badge>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Our Core <span className="gradient-text">Values</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div
                key={v.title}
                className={cn(
                  "bg-card border border-border rounded-2xl p-7 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 reveal",
                  valuesReveal.visible && "in-view"
                )}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="font-display text-lg font-bold text-foreground mb-3">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 overflow-hidden">
        <div ref={certReveal.ref} className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className={cn("text-center mb-14 reveal", certReveal.visible && "in-view")}>
            <Badge className="mb-4 bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300 border-0">Credentials</Badge>
            <h2 className="font-display text-4xl font-bold text-foreground mb-4">
              Certified, Recognised, <span className="gradient-text">Trusted</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {certifications.map((cert, i) => (
              <div
                key={cert.name}
                className={cn(
                  "bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300 reveal",
                  certReveal.visible && "in-view"
                )}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary font-bold text-sm flex items-center justify-center mb-4 font-display">
                  {cert.badge}
                </div>
                <h3 className="font-semibold text-foreground mb-1.5">{cert.name}</h3>
                <p className="text-muted-foreground text-sm">{cert.detail}</p>
                <CheckCircle2 size={16} className="text-primary mt-3" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-background to-teal-50/30 dark:to-teal-950/20">
        <div ref={timelineReveal.ref} className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className={cn("text-center mb-14 reveal", timelineReveal.visible && "in-view")}>
            <Badge className="mb-4 bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300 border-0">Our Journey</Badge>
            <h2 className="font-display text-4xl font-bold text-foreground mb-4">
              Milestones That <span className="gradient-text">Define Us</span>
            </h2>
          </div>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 sm:left-1/2 top-0 bottom-0 w-px bg-border sm:-translate-x-px" />
            <div className="space-y-10">
              {timeline.map((item, i) => (
                <div
                  key={item.year}
                  className={cn(
                    "relative grid sm:grid-cols-2 gap-8 reveal",
                    timelineReveal.visible && "in-view",
                    i % 2 === 0 ? "" : "sm:[&>div:first-child]:order-2 sm:[&>div:last-child]:order-1 sm:[&>div:last-child]:text-right"
                  )}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  {/* Year side */}
                  <div className={cn("pl-20 sm:pl-0", i % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:pl-12")}>
                    <span className="font-display text-3xl font-bold gradient-text">{item.year}</span>
                  </div>
                  {/* Content side */}
                  <div className={cn("pl-20 sm:pl-0", i % 2 === 0 ? "sm:pl-12" : "sm:pr-12")}>
                    <div className="bg-card border border-border rounded-xl p-5 hover:shadow-lg transition-shadow">
                      <h3 className="font-display font-bold text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                  {/* Dot */}
                  <div className="absolute left-8 sm:left-1/2 top-3 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
