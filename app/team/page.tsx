"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
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

const staff = [
  {
    name: "Dr. Rohan Mehta",
    role: "Associate Dentist",
    qual: "BDS, Diploma in Implantology",
    avatar: "https://plus.unsplash.com/premium_photo-1672922646298-3afc6c6397c9?w=600&q=80",
    bio: "Dr. Rohan joined Smile Studio in 2019 and specialises in dental implants and oral surgery. His calm, methodical approach makes him a favourite with patients undergoing complex or multi-stage procedures.",
    funFact: "Certified in advanced implantology from the ITI (International Team for Implantology), Geneva.",
    specialty: "Implants & Oral Surgery",
  },
  {
    name: "Ms. Priya Nair",
    role: "Senior Dental Hygienist",
    qual: "Diploma in Dental Hygiene, 8 years exp.",
    avatar: "https://plus.unsplash.com/premium_photo-1661606291719-baf88140760c?w=600&q=80",
    bio: "Priya leads all preventive care at Smile Studio — thorough cleanings, patient education sessions, and periodontal health assessments. Her warm, patient manner puts first-time visitors instantly at ease.",
    funFact: "Runs Smile Studio's free quarterly school dental screening programme across 6 schools in Koramangala.",
    specialty: "Preventive Care & Hygiene",
  },
  {
    name: "Ms. Kavya Reddy",
    role: "Patient Coordinator",
    qual: "B.Com, Certified Healthcare Administration",
    avatar: "https://plus.unsplash.com/premium_photo-1702599106171-149621362015?w=600&q=80",
    bio: "Kavya is the warm first face you see at Smile Studio. She manages appointments, insurance queries, and ensures every patient journey — from first booking to follow-up call — is seamless and stress-free.",
    funFact: "Fluent in Kannada, Telugu, Hindi, and English. No patient ever feels lost or unheard!",
    specialty: "Patient Experience",
  },
];

export default function TeamPage() {
  const heroReveal = useReveal();
  const leadReveal = useReveal();
  const staffReveal = useReveal();

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-teal-50 via-background to-background dark:from-teal-950/40 dark:via-background dark:to-background">
        <div className="absolute inset-0 bg-dental-pattern opacity-50 pointer-events-none" />
        <div ref={heroReveal.ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className={cn("reveal", heroReveal.visible && "in-view")}>
            <Badge className="mb-5 bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300 border-0 px-4 py-1.5">The People Behind Your Smile</Badge>
            <h1 className="font-display text-5xl sm:text-6xl font-bold text-foreground mb-5">
              Meet Our <span className="gradient-text">Team</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Every smile we create is the result of a talented, passionate team working together — skilled clinicians, caring support staff, and people who genuinely love what they do.
            </p>
          </div>
        </div>
      </section>

      {/* Lead Doctor */}
      <section className="py-24 overflow-hidden">
        <div ref={leadReveal.ref} className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className={cn("mb-10 reveal", leadReveal.visible && "in-view")}>
            <Badge className="mb-2 bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300 border-0">Founder & Lead Dentist</Badge>
          </div>
          <div className={cn("grid lg:grid-cols-5 gap-10 bg-card border border-border rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-teal-900/10 transition-all duration-500 reveal", leadReveal.visible && "in-view")} style={{ transitionDelay: "100ms" }}>
            <div className="lg:col-span-2 relative">
              <Image
                src="https://plus.unsplash.com/premium_photo-1661778976948-0cbf766dc0e8?w=600&q=80"
                alt="Dr. Aanya Sharma"
                width={600}
                height={700}
                className="w-full h-72 lg:h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-teal-900/30 to-transparent" />
            </div>
            <div className="lg:col-span-3 p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex flex-wrap gap-2 mb-5">
                <Badge className="bg-primary/10 text-primary border-0">Prosthodontist</Badge>
                <Badge className="bg-accent/15 text-accent border-0">12 Years Experience</Badge>
                <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300 border-0">Founder</Badge>
              </div>
              <h2 className="font-display text-4xl font-bold text-foreground mb-1">Dr. Aanya Sharma</h2>
              <p className="text-primary font-medium mb-6">BDS, MDS — Prosthodontics · Manipal College of Dental Sciences</p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Dr. Aanya Sharma founded Smile Studio in 2012 with a singular mission: to deliver hospital-grade dental care with the personalised warmth of a family practice. Her 12 years of experience span cosmetic dentistry, implantology, and complex oral rehabilitation.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Her gentle technique, meticulous attention to aesthetics, and ability to put even the most anxious patients at ease have earned her a reputation as one of Bangalore&apos;s most trusted prosthodontists.
              </p>
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {[
                  "IDA Karnataka Branch Member",
                  "ISO 9001:2015 Certified Practice",
                  "AACD Associate Member",
                  "DCI Registered: KA-DCI-2012-4471",
                ].map((c) => (
                  <div key={c} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {c}
                  </div>
                ))}
              </div>
              <div className="p-4 bg-primary/5 border border-primary/15 rounded-xl">
                <p className="text-sm text-muted-foreground italic">
                  <span className="font-semibold text-foreground not-italic">Specialty note: </span>
                  Dr. Aanya&apos;s particular expertise lies in full-mouth rehabilitation — transforming severely damaged or aesthetically compromised smiles through a combination of implants, crowns, and veneers planned to the millimetre.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Staff */}
      <section className="py-16 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-teal-50/30 dark:to-teal-950/20 pointer-events-none" />
        <div ref={staffReveal.ref} className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className={cn("mb-12 reveal", staffReveal.visible && "in-view")}>
            <Badge className="mb-3 bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300 border-0">Supporting Team</Badge>
            <h2 className="font-display text-3xl font-bold text-foreground">The Experts Behind the Scenes</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-7">
            {staff.map((member, i) => (
              <div
                key={member.name}
                className={cn(
                  "group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-teal-900/10 hover:-translate-y-2 transition-all duration-400 reveal",
                  staffReveal.visible && "in-view"
                )}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                {/* Avatar */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                    <p className="text-foreground text-sm font-medium">{member.funFact}</p>
                  </div>
                </div>

                <div className="p-6">
                  <Badge className="bg-primary/10 text-primary border-0 text-xs mb-3">{member.specialty}</Badge>
                  <h3 className="font-display text-xl font-bold text-foreground mb-0.5">{member.name}</h3>
                  <p className="text-primary text-sm font-medium mb-1">{member.role}</p>
                  <p className="text-muted-foreground text-xs mb-4">{member.qual}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground">
                      <span className="text-accent font-medium">Fun fact: </span>
                      {member.funFact}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 relative overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-cross-pattern opacity-10" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-3">Ready to Meet the Team in Person?</h2>
          <p className="text-teal-100 mb-7">Book an appointment and experience the Smile Studio difference for yourself.</p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-teal-50 font-semibold">
            <Link href="/book">Book an Appointment <ArrowRight size={16} className="ml-2" /></Link>
          </Button>
        </div>
      </section>
    </>
  );
}
