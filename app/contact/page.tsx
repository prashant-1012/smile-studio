"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message || !form.subject) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitting(false);
    toast.success("Message sent! We'll contact you within 24 hours.", {
      description: `Thank you, ${form.name}. Our team will reach out to ${form.email} shortly.`,
    });
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-teal-50 via-background to-background dark:from-teal-950/40 dark:via-background dark:to-background">
        <div className="absolute inset-0 bg-dental-pattern opacity-50 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center animate-fade-slide-up">
          <Badge className="mb-5 bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300 border-0 px-4 py-1.5">Get in Touch</Badge>
          <h1 className="font-display text-5xl sm:text-6xl font-bold text-foreground mb-5">
            We&apos;d Love to <span className="gradient-text">Hear From You</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Questions, appointment queries, or just want to say hello — our team is here to help.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-3 gap-10 items-start">

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-card border border-border rounded-3xl p-8 lg:p-10">
              <h2 className="font-display text-2xl font-bold text-foreground mb-2">Send Us a Message</h2>
              <p className="text-muted-foreground text-sm mb-8">We respond to all enquiries within 24 hours, Monday to Saturday.</p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-foreground">Full Name *</label>
                    <Input
                      placeholder="Rahul Singhania"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-foreground">Email Address *</label>
                    <Input
                      type="email"
                      placeholder="rahul@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-foreground">Phone Number</label>
                    <Input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-foreground">Subject *</label>
                    <Select value={form.subject} onValueChange={(v) => setForm({ ...form, subject: v })}>
                      <SelectTrigger className="bg-background border-border">
                        <SelectValue placeholder="Select a topic" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="appointment">Appointment Enquiry</SelectItem>
                        <SelectItem value="treatment">Treatment Question</SelectItem>
                        <SelectItem value="pricing">Pricing & EMI</SelectItem>
                        <SelectItem value="emergency">Dental Emergency</SelectItem>
                        <SelectItem value="feedback">Feedback</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-foreground">Message *</label>
                  <Textarea
                    placeholder="Tell us how we can help..."
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="bg-background border-border focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={submitting}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-base"
                >
                  {submitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send size={16} />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Clinic info */}
            <div className="bg-card border border-border rounded-2xl p-7">
              <h3 className="font-display text-lg font-bold text-foreground mb-5">Clinic Information</h3>
              <div className="space-y-5">
                <div className="flex gap-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin size={16} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Address</p>
                    <p className="text-sm text-muted-foreground mt-0.5 leading-relaxed">14, Rosewood Lane,<br />Koramangala, Bangalore — 560034</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone size={16} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Phone</p>
                    <a href="tel:+919840012345" className="text-sm text-muted-foreground hover:text-primary transition-colors mt-0.5 block">+91 98400 12345</a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail size={16} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Email</p>
                    <a href="mailto:hello@smilestudio.in" className="text-sm text-muted-foreground hover:text-primary transition-colors mt-0.5 block">hello@smilestudio.in</a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock size={16} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Hours</p>
                    <p className="text-sm text-muted-foreground mt-0.5">Mon – Sat: 9:00 AM – 7:00 PM</p>
                    <p className="text-sm text-muted-foreground">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="bg-card border border-border rounded-2xl p-7">
              <h3 className="font-display text-lg font-bold text-foreground mb-4">Follow Us</h3>
              <div className="flex gap-3">
                <a href="#" className="flex items-center gap-2 flex-1 p-3 rounded-xl bg-muted hover:bg-primary/10 hover:text-primary transition-colors text-sm font-medium text-muted-foreground">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
                  Instagram
                </a>
                <a href="#" className="flex items-center gap-2 flex-1 p-3 rounded-xl bg-muted hover:bg-primary/10 hover:text-primary transition-colors text-sm font-medium text-muted-foreground">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                  Facebook
                </a>
              </div>
              <a href="#" className="flex items-center gap-2 mt-3 p-3 rounded-xl bg-emerald-100/50 hover:bg-emerald-100 dark:bg-emerald-900/20 dark:hover:bg-emerald-900/40 transition-colors text-sm font-medium text-emerald-700 dark:text-emerald-300 w-full">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.134.558 4.133 1.532 5.87L0 24l6.29-1.508A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.004-1.372l-.359-.214-3.732.895.928-3.628-.235-.372A9.818 9.818 0 012.182 12c0-5.422 4.396-9.818 9.818-9.818 5.422 0 9.818 4.396 9.818 9.818 0 5.422-4.396 9.818-9.818 9.818z"/>
                </svg>
                WhatsApp Us
              </a>
            </div>

            {/* Fake Map */}
            <div className="bg-card border border-border rounded-2xl overflow-hidden">
              <div
                className="relative h-48 flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #e8f4f4 0%, #d4ecec 100%)",
                }}
              >
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(13,110,110,0.3) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(13,110,110,0.3) 1px, transparent 1px)
                    `,
                    backgroundSize: "30px 30px",
                  }}
                />
                <div className="relative flex flex-col items-center">
                  <svg width="36" height="44" viewBox="0 0 36 44" fill="none">
                    <path d="M18 0C9.16 0 2 7.16 2 16C2 28 18 44 18 44C18 44 34 28 34 16C34 7.16 26.84 0 18 0Z" fill="#0d6e6e"/>
                    <circle cx="18" cy="16" r="7" fill="white"/>
                  </svg>
                  <div className="mt-2 bg-white/90 rounded-lg px-3 py-1.5 shadow text-center">
                    <p className="text-xs font-semibold text-teal-800">Smile Studio</p>
                    <p className="text-xs text-teal-600">Koramangala, Bangalore</p>
                  </div>
                </div>
              </div>
              <div className="px-5 py-4">
                <p className="text-sm text-muted-foreground">14, Rosewood Lane, Koramangala</p>
                <Link href="#" className="text-primary text-sm font-medium mt-1 block hover:underline">Get Directions →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
