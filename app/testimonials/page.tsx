"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ArrowRight } from "lucide-react";
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

const reviews = [
  {
    name: "Arjun Kapoor",
    rating: 5,
    treatment: "Teeth Whitening",
    date: "March 2025",
    text: "I had always been self-conscious about my smile, but Dr. Aanya changed everything. The whitening procedure was completely painless, and the results were stunning — three shades whiter in a single session! The clinic feels more like a luxury spa than a dental office. Absolutely worth every rupee.",
    highlight: "Three shades whiter in one session!",
    avatar: "https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?w=80&q=80",
  },
  {
    name: "Meera Iyer",
    rating: 5,
    treatment: "Dental Implants",
    date: "January 2025",
    text: "After losing a tooth in an accident, I was terrified about implants. Dr. Rohan walked me through every step with such patience. The implant looks and feels completely natural — I keep forgetting it's not my original tooth! Smile Studio truly lives up to its name.",
    highlight: "Can't tell it's not my original tooth",
    avatar: "https://images.unsplash.com/photo-1463335361701-e90f4c5045d0?w=80&q=80",
  },
  {
    name: "Rahul Singhania",
    rating: 4,
    treatment: "Braces (Clear Aligners)",
    date: "February 2025",
    text: "I'm three months into my aligner treatment and the progress is already visible. Dr. Aanya is meticulous about every adjustment. The clinic is spotless, the staff is wonderful, and the online appointment system makes scheduling a breeze. Would have given 5 stars but the waiting area gets a bit busy on weekends.",
    highlight: "Visible progress in just 3 months",
    avatar: "https://images.unsplash.com/photo-1670110531916-41045e83cb0a?w=80&q=80",
  },
  {
    name: "Sunita Krishnamurthy",
    rating: 5,
    treatment: "Root Canal Treatment",
    date: "December 2024",
    text: "Everyone dreads root canals, but I can honestly say I felt almost nothing. Dr. Aanya's technique is exceptional — she numbed the area so well that I barely knew what was happening. The post-procedure care instructions were detailed and the follow-up call the next day was a lovely touch. Highly recommend!",
    highlight: "Felt almost nothing during the procedure",
    avatar: "https://images.unsplash.com/photo-1674278882093-3870ef98e826?w=80&q=80",
  },
  {
    name: "Vikram Nambiar",
    rating: 5,
    treatment: "Pediatric Dentistry",
    date: "April 2025",
    text: "Took my 6-year-old here for her first dental visit and I was worried she'd be scared. Ms. Priya was absolutely magical with her — showed her all the tools, let her sit in the chair, made it a fun adventure. My daughter actually asked when she can go back! This team understands kids.",
    highlight: "My daughter asked when she can go back!",
    avatar: "https://images.unsplash.com/photo-1663560454891-9bdbdaaed84d?w=80&q=80",
  },
  {
    name: "Deepa Raghunathan",
    rating: 4,
    treatment: "Dental Crown",
    date: "March 2025",
    text: "Had a cracked molar that needed a crown. Dr. Aanya recommended a zirconia crown and the shade matching was perfect — you genuinely cannot tell it apart from my natural teeth. The procedure took two visits as expected, both smooth. The clinic's EMI option made the cost very manageable.",
    highlight: "Shade matching is perfect",
    avatar: "https://images.unsplash.com/photo-1526392195523-1f40e4e78117?w=80&q=80",
  },
];

const ratingBreakdown = [
  { stars: 5, count: 4, pct: 67 },
  { stars: 4, count: 2, pct: 33 },
  { stars: 3, count: 0, pct: 0 },
  { stars: 2, count: 0, pct: 0 },
  { stars: 1, count: 0, pct: 0 },
];

function StarRating({ rating, size = 14 }: { rating: number; size?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={size}
          className={i < rating ? "text-amber-400" : "text-muted"}
          fill={i < rating ? "currentColor" : "none"}
        />
      ))}
    </div>
  );
}

export default function TestimonialsPage() {
  const summaryReveal = useReveal();
  const reviewsReveal = useReveal();

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-amber-50/50 via-background to-background dark:from-amber-950/20 dark:via-background dark:to-background">
        <div className="absolute inset-0 bg-dental-pattern opacity-50 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center animate-fade-slide-up">
          <Badge className="mb-5 bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300 border-0 px-4 py-1.5">What Patients Say</Badge>
          <h1 className="font-display text-5xl sm:text-6xl font-bold text-foreground mb-5">
            Real Stories, <span className="gradient-text">Real Smiles</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Don&apos;t take our word for it. Here&apos;s what our patients say about their experience at Smile Studio.
          </p>
        </div>
      </section>

      {/* Rating Summary */}
      <section className="py-16 overflow-hidden">
        <div ref={summaryReveal.ref} className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className={cn("grid md:grid-cols-3 gap-8 bg-card border border-border rounded-3xl p-8 lg:p-10 reveal", summaryReveal.visible && "in-view")}>
            {/* Overall score */}
            <div className="flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-border pb-8 md:pb-0 md:pr-8">
              <p className="font-display text-7xl font-bold gradient-text mb-2">4.9</p>
              <StarRating rating={5} size={20} />
              <p className="text-muted-foreground text-sm mt-3">Based on 6 reviews</p>
            </div>

            {/* Breakdown bars */}
            <div className="md:col-span-2 flex flex-col justify-center gap-3">
              {ratingBreakdown.map((row) => (
                <div key={row.stars} className="flex items-center gap-3">
                  <span className="text-sm text-muted-foreground w-4 text-right">{row.stars}</span>
                  <Star size={12} className="text-amber-400" fill="currentColor" />
                  <div className="flex-1 h-2.5 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-amber-400 rounded-full transition-all duration-1000"
                      style={{ width: summaryReveal.visible ? `${row.pct}%` : "0%" }}
                    />
                  </div>
                  <span className="text-sm text-muted-foreground w-6">{row.count}</span>
                </div>
              ))}
              {/* Google badge */}
              <div className="mt-4 flex items-center gap-3 p-3 bg-muted/50 rounded-xl border border-border">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm">
                  <svg width="16" height="16" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground">Google Reviews</p>
                  <p className="text-xs text-muted-foreground">4.9 · 6 reviews</p>
                </div>
                <Badge className="ml-auto bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300 border-0 text-xs">Verified</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Review Cards */}
      <section className="py-8 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-amber-50/20 dark:to-amber-950/10 pointer-events-none" />
        <div ref={reviewsReveal.ref} className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <div
                key={review.name}
                className={cn(
                  "bg-card border border-border rounded-2xl p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col reveal",
                  reviewsReveal.visible && "in-view"
                )}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <StarRating rating={review.rating} />
                  <span className="text-xs text-muted-foreground">{review.date}</span>
                </div>

                {/* Highlight quote */}
                <div className="bg-primary/5 border-l-2 border-primary rounded-r-lg px-4 py-2.5 mb-4">
                  <p className="text-primary text-sm font-medium italic">&ldquo;{review.highlight}&rdquo;</p>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-5">
                  {review.text}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full overflow-hidden">
                      <Image
                        src={review.avatar}
                        width={80}
                        height={80}
                        alt={review.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">{review.name}</p>
                      <Badge className="bg-teal-100/60 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300 border-0 text-xs mt-0.5">
                        {review.treatment}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-r from-primary to-teal-700">
        <div className="absolute inset-0 bg-cross-pattern opacity-10" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-4xl font-bold text-white mb-4">Join Our Growing Family of Happy Smiles</h2>
          <p className="text-teal-100 text-lg mb-8">Experience the Smile Studio difference yourself. Book your appointment today.</p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-teal-50 font-semibold px-8">
            <Link href="/book">Book Your Appointment <ArrowRight size={16} className="ml-2" /></Link>
          </Button>
        </div>
      </section>
    </>
  );
}
