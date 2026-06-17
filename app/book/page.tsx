"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { CheckCircle2, ArrowRight, ArrowLeft, Calendar as CalIcon, Clock, User, Clipboard } from "lucide-react";
import { cn } from "@/lib/utils";

const SERVICES = [
  { id: "cleaning", name: "Teeth Cleaning", duration: "45–60 mins", icon: "🪥" },
  { id: "whitening", name: "Teeth Whitening", duration: "60–90 mins", icon: "✨" },
  { id: "implants", name: "Dental Implants", duration: "2–3 appointments", icon: "🦷" },
  { id: "braces", name: "Braces & Aligners", duration: "Ongoing", icon: "😬" },
  { id: "rootcanal", name: "Root Canal", duration: "60–90 mins", icon: "💉" },
  { id: "extraction", name: "Tooth Extraction", duration: "30–45 mins", icon: "🔧" },
  { id: "pediatric", name: "Pediatric Dentistry", duration: "30–45 mins", icon: "👶" },
  { id: "cosmetic", name: "Cosmetic Dentistry", duration: "Varies", icon: "💎" },
  { id: "crown", name: "Crown & Bridge", duration: "2 visits", icon: "👑" },
  { id: "emergency", name: "Emergency Care", duration: "Walk-in", icon: "🚨" },
];

const TIME_SLOTS = [
  { time: "9:00 AM", booked: false },
  { time: "10:00 AM", booked: true },
  { time: "11:00 AM", booked: false },
  { time: "12:00 PM", booked: false },
  { time: "1:00 PM", booked: true },
  { time: "2:00 PM", booked: false },
  { time: "3:00 PM", booked: true },
  { time: "4:00 PM", booked: false },
  { time: "5:00 PM", booked: false },
  { time: "6:00 PM", booked: true },
];

const STEPS = [
  { id: 1, label: "Service", icon: Clipboard },
  { id: 2, label: "Date", icon: CalIcon },
  { id: 3, label: "Time", icon: Clock },
  { id: 4, label: "Details", icon: User },
  { id: 5, label: "Confirm", icon: CheckCircle2 },
];

function generateRef() {
  return "SS-" + Math.random().toString(36).substr(2, 6).toUpperCase();
}

export default function BookPage() {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", phone: "", email: "", notes: "" });
  const [bookingRef] = useState(generateRef());

  const service = SERVICES.find((s) => s.id === selectedService);
  const today = new Date();

  const canProceed = () => {
    if (step === 1) return !!selectedService;
    if (step === 2) return !!selectedDate;
    if (step === 3) return !!selectedTime;
    if (step === 4) return !!(form.name && form.phone && form.email);
    return true;
  };

  const formatDate = (d?: Date) =>
    d
      ? d.toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long", year: "numeric" })
      : "";

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-10 overflow-hidden bg-gradient-to-br from-teal-50 via-background to-background dark:from-teal-950/40 dark:via-background dark:to-background">
        <div className="absolute inset-0 bg-dental-pattern opacity-40 pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center animate-fade-slide-up">
          <Badge className="mb-4 bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300 border-0 px-4 py-1.5">Online Booking</Badge>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-3">
            Book Your <span className="gradient-text">Appointment</span>
          </h1>
          <p className="text-muted-foreground">Complete the steps below — it takes less than 2 minutes.</p>
        </div>
      </section>

      {/* Step Indicator */}
      <div className="sticky top-16 z-30 bg-background/80 backdrop-blur-md border-b border-border py-4">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between">
            {STEPS.map((s, i) => (
              <div key={s.id} className="flex items-center flex-1">
                <div className="flex flex-col items-center">
                  <div
                    className={cn(
                      "w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300",
                      step > s.id
                        ? "bg-primary text-primary-foreground"
                        : step === s.id
                        ? "bg-primary text-primary-foreground ring-4 ring-primary/20"
                        : "bg-muted text-muted-foreground"
                    )}
                  >
                    {step > s.id ? <CheckCircle2 size={16} /> : s.id}
                  </div>
                  <span className={cn("text-xs mt-1 hidden sm:block font-medium", step >= s.id ? "text-primary" : "text-muted-foreground")}>
                    {s.label}
                  </span>
                </div>
                {i < STEPS.length - 1 && (
                  <div className={cn("flex-1 h-0.5 mx-2 transition-all duration-300", step > s.id ? "bg-primary" : "bg-border")} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Step Content */}
      <section className="py-12 pb-24 min-h-[60vh]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">

          {/* Step 1 — Select Service */}
          {step === 1 && (
            <div className="animate-fade-slide-up">
              <h2 className="font-display text-2xl font-bold text-foreground mb-2">What treatment are you looking for?</h2>
              <p className="text-muted-foreground text-sm mb-7">Select one service to continue.</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {SERVICES.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSelectedService(s.id)}
                    className={cn(
                      "flex items-center gap-4 p-4 rounded-2xl border text-left transition-all duration-200 hover:shadow-md",
                      selectedService === s.id
                        ? "border-primary bg-primary/5 ring-2 ring-primary/20 shadow-md"
                        : "border-border bg-card hover:border-primary/40"
                    )}
                  >
                    <span className="text-2xl">{s.icon}</span>
                    <div>
                      <p className="font-semibold text-foreground text-sm">{s.name}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{s.duration}</p>
                    </div>
                    {selectedService === s.id && (
                      <CheckCircle2 size={18} className="text-primary ml-auto shrink-0" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2 — Select Date */}
          {step === 2 && (
            <div className="animate-fade-slide-up">
              <div className="flex items-center gap-3 mb-2">
                <Image src="/icons/calendar_4357519.png" alt="" width={32} height={32} className="object-contain shrink-0" />
                <h2 className="font-display text-2xl font-bold text-foreground">Choose your preferred date</h2>
              </div>
              <p className="text-muted-foreground text-sm mb-7">We are open Monday to Saturday, 9 AM – 7 PM.</p>
              <div className="flex justify-center">
                <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    disabled={(date) => {
                      const d = new Date(date);
                      d.setHours(0, 0, 0, 0);
                      const t = new Date(today);
                      t.setHours(0, 0, 0, 0);
                      return d < t || d.getDay() === 0;
                    }}
                    className="rounded-xl"
                  />
                </div>
              </div>
              {selectedDate && (
                <div className="mt-5 flex items-center gap-2 p-3.5 bg-primary/5 border border-primary/20 rounded-xl text-primary text-sm font-medium">
                  <CalIcon size={16} />
                  {formatDate(selectedDate)} selected
                </div>
              )}
            </div>
          )}

          {/* Step 3 — Select Time */}
          {step === 3 && (
            <div className="animate-fade-slide-up">
              <h2 className="font-display text-2xl font-bold text-foreground mb-2">Pick a time slot</h2>
              <p className="text-muted-foreground text-sm mb-7">
                Available slots for {formatDate(selectedDate)}. Greyed slots are already booked.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {TIME_SLOTS.map((slot) => (
                  <button
                    key={slot.time}
                    disabled={slot.booked}
                    onClick={() => setSelectedTime(slot.time)}
                    className={cn(
                      "px-4 py-3 rounded-xl border text-sm font-medium transition-all duration-200",
                      slot.booked
                        ? "border-border bg-muted text-muted-foreground cursor-not-allowed line-through"
                        : selectedTime === slot.time
                        ? "border-primary bg-primary text-primary-foreground ring-2 ring-primary/20 shadow"
                        : "border-border bg-card text-foreground hover:border-primary/50 hover:bg-primary/5"
                    )}
                  >
                    {slot.time}
                    {slot.booked && <span className="block text-xs text-muted-foreground no-underline" style={{ textDecoration: "none" }}>Booked</span>}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 4 — Patient Details */}
          {step === 4 && (
            <div className="animate-fade-slide-up">
              <h2 className="font-display text-2xl font-bold text-foreground mb-2">Your details</h2>
              <p className="text-muted-foreground text-sm mb-7">We&apos;ll use this to confirm your appointment.</p>
              <div className="bg-card border border-border rounded-2xl p-7 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-foreground">Full Name *</label>
                    <Input
                      placeholder="Rahul Singhania"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-foreground">Phone *</label>
                    <Input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-foreground">Email Address *</label>
                  <Input
                    type="email"
                    placeholder="rahul@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-foreground">Additional Notes</label>
                  <Textarea
                    placeholder="Any specific concerns, allergies, or information we should know..."
                    rows={3}
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    className="resize-none"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 5 — Confirmation */}
          {step === 5 && (
            <div className="animate-fade-slide-up text-center">
              <div className="w-20 h-20 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={40} className="text-emerald-500" />
              </div>
              <h2 className="font-display text-3xl font-bold text-foreground mb-2">Appointment Confirmed!</h2>
              <p className="text-muted-foreground mb-8">
                We&apos;ve received your booking. Our team will call you within 2 hours to confirm.
              </p>

              {/* Booking card */}
              <div className="bg-card border border-border rounded-2xl p-7 text-left max-w-md mx-auto mb-6">
                <div className="flex items-center justify-between mb-5 pb-4 border-b border-border">
                  <p className="text-sm text-muted-foreground">Booking Reference</p>
                  <Badge className="bg-primary/10 text-primary border-0 font-mono text-sm font-bold">{bookingRef}</Badge>
                </div>
                <div className="space-y-3.5">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{service?.icon}</span>
                    <div>
                      <p className="text-xs text-muted-foreground">Service</p>
                      <p className="font-semibold text-foreground text-sm">{service?.name}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 flex items-center justify-center">
                      <CalIcon size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Date</p>
                      <p className="font-semibold text-foreground text-sm">{formatDate(selectedDate)}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 flex items-center justify-center">
                      <Clock size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Time</p>
                      <p className="font-semibold text-foreground text-sm">{selectedTime}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 flex items-center justify-center">
                      <User size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Patient</p>
                      <p className="font-semibold text-foreground text-sm">{form.name}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 justify-center">
                <Button
                  variant="outline"
                  className="border-primary/30 text-primary hover:bg-primary/5"
                  onClick={() => alert("Calendar integration coming soon!")}
                >
                  <CalIcon size={16} className="mr-2" /> Add to Calendar
                </Button>
                <Button
                  onClick={() => {
                    setStep(1);
                    setSelectedService(null);
                    setSelectedDate(undefined);
                    setSelectedTime(null);
                    setForm({ name: "", phone: "", email: "", notes: "" });
                  }}
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Book Another Appointment
                </Button>
              </div>
            </div>
          )}

          {/* Navigation */}
          {step < 5 && (
            <div className="flex items-center justify-between mt-10 pt-6 border-t border-border">
              <Button
                variant="outline"
                onClick={() => setStep((s) => s - 1)}
                disabled={step === 1}
                className="border-border"
              >
                <ArrowLeft size={16} className="mr-2" /> Back
              </Button>
              <Button
                onClick={() => setStep((s) => s + 1)}
                disabled={!canProceed()}
                className="bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-40"
              >
                {step === 4 ? "Confirm Booking" : "Continue"} <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
