"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import type { ReactNode } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/Button";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { contactDetails } from "@/lib/constants";
import { contactFormSchema, type ContactFormValues } from "@/lib/validations";

export function Contact() {
  const [submitState, setSubmitState] = useState<{
    type: "idle" | "success" | "error";
    message: string;
  }>({
    type: "idle",
    message: "",
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = handleSubmit(async (values) => {
    setSubmitState({ type: "idle", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        setSubmitState({
          type: "error",
          message: result.message ?? "Unable to send your request right now.",
        });
        return;
      }

      reset();
      setSubmitState({
        type: "success",
        message: "Thanks. Our team will contact you shortly.",
      });
    } catch {
      setSubmitState({
        type: "error",
        message: "Network error. Please try again in a moment.",
      });
    }
  });

  return (
    <SectionWrapper id="contact" className="bg-surface">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Contact us
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Let&apos;s build the right battery and backup solution for your site
          </h2>
          <p className="text-lg leading-8 text-muted">
            Share your requirement and our team will guide you on the best-fit
            product, capacity, and deployment approach.
          </p>

          <div className="space-y-4 rounded-[2rem] border border-[color:var(--border)] bg-white p-6 shadow-card">
            <ContactLine icon={Phone} label="Phone" value={contactDetails.phone} href={`tel:${contactDetails.phone}`} />
            <ContactLine icon={Mail} label="Email" value={contactDetails.email} href={`mailto:${contactDetails.email}`} />
            <ContactLine icon={MapPin} label="Address" value={contactDetails.address} />
            <ContactLine icon={Clock3} label="Hours" value={contactDetails.hours} />
          </div>
        </div>

        <div className="shadow-soft rounded-[2rem] border border-[color:var(--border)] bg-white p-8">
          <form className="space-y-5" onSubmit={onSubmit} noValidate>
            <Field
              label="Full name"
              error={errors.name?.message}
              input={
                <input
                  {...register("name")}
                  className={inputClasses}
                  placeholder="Your full name"
                  autoComplete="name"
                />
              }
            />

            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label="Email"
                error={errors.email?.message}
                input={
                  <input
                    {...register("email")}
                    type="email"
                    className={inputClasses}
                    placeholder="you@company.com"
                    autoComplete="email"
                  />
                }
              />
              <Field
                label="Phone"
                error={errors.phone?.message}
                input={
                  <input
                    {...register("phone")}
                    type="tel"
                    className={inputClasses}
                    placeholder="+91 98765 43210"
                    autoComplete="tel"
                  />
                }
              />
            </div>

            <Field
              label="Requirement details"
              error={errors.message?.message}
              input={
                <textarea
                  {...register("message")}
                  className={`${inputClasses} min-h-36 resize-y`}
                  placeholder="Tell us about your energy use case, expected backup time, or installation needs."
                />
              }
            />

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Inquiry"}
              </Button>
              <p className="text-sm text-muted">
                Protected by validation and request throttling.
              </p>
            </div>

            {submitState.type !== "idle" ? (
              <p
                className={`rounded-2xl px-4 py-3 text-sm ${
                  submitState.type === "success"
                    ? "bg-green-50 text-green-700"
                    : "bg-red-50 text-red-700"
                }`}
              >
                {submitState.message}
              </p>
            ) : null}
          </form>
        </div>
      </div>

      <div className="mt-10 overflow-hidden rounded-[2rem] border border-[color:var(--border)] shadow-card">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.6!2d76.0883519!3d10.5209488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7ed77b014b7d1%3A0x594202c455434ca3!2sDion%20Power%20Solutions%20LLP!5e0!3m2!1sen!2sin!4v1750850000000!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Dion Power Solutions LLP location"
        />
      </div>
    </SectionWrapper>
  );
}

const inputClasses =
  "w-full rounded-2xl border border-[color:var(--border)] bg-surface px-4 py-3 text-base text-foreground outline-none ring-0 placeholder:text-muted focus:border-primary";

function Field({
  label,
  error,
  input,
}: {
  label: string;
  error?: string;
  input: ReactNode;
}) {
  return (
    <label className="block space-y-2">
      <span className="text-sm font-semibold text-foreground">{label}</span>
      {input}
      {error ? <span className="text-sm text-red-600">{error}</span> : null}
    </label>
  );
}

function ContactLine({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-surface text-primary">
        <Icon size={18} />
      </div>
      <div>
        <p className="text-sm font-semibold text-foreground">{label}</p>
        <p className="mt-1 text-sm leading-6 text-muted">{value}</p>
      </div>
    </>
  );

  if (href) {
    return (
      <a href={href} className="flex items-start gap-4 hover:text-primary">
        {content}
      </a>
    );
  }

  return <div className="flex items-start gap-4">{content}</div>;
}
