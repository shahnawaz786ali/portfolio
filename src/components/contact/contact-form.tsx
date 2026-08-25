"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { FloatingInput, FloatingTextarea } from "./floating-field";

const projectTypes = [
  "Web Application",
  "SaaS Platform",
  "Backend / API Development",
  "Frontend Development",
  "Deployment / DevOps",
  "Existing Application Improvement",
  "Other",
];

const budgetRanges = ["Under $2,000", "$2,000 – $5,000", "$5,000 – $15,000", "$15,000+", "Not sure yet"];

const selectClasses =
  "w-full rounded-xl border border-border bg-background/60 px-4 py-3.5 text-sm text-foreground outline-none transition-all duration-200 focus:border-accent focus:shadow-[0_0_0_4px_var(--accent-soft)]";
const labelClasses = "text-sm font-medium";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      company: String(formData.get("company") || ""),
      projectType: String(formData.get("projectType") || ""),
      budget: String(formData.get("budget") || ""),
      message: String(formData.get("message") || ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <div className="glass-panel relative overflow-hidden p-6 sm:p-8">
      <div className="ambient-glow -right-16 -top-16 size-64 bg-purple/20" aria-hidden />
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex flex-col items-center justify-center px-6 py-16 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.1 }}
            >
              <CheckCircle2 className="size-12 text-accent" />
            </motion.div>
            <h3 className="mt-5 text-xl font-semibold">Message Sent</h3>
            <p className="mt-2 max-w-sm text-sm text-muted">
              Thanks for reaching out — I&apos;ll get back to you as soon as possible.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative space-y-6"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <FloatingInput id="name" name="name" required />
              <FloatingInput id="email" name="email" type="email" required />
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <FloatingInput id="company" name="company" />
              <div className="space-y-2">
                <label htmlFor="projectType" className={labelClasses}>
                  Project Type <span className="text-accent">*</span>
                </label>
                <select id="projectType" name="projectType" required defaultValue="" className={selectClasses}>
                  <option value="" disabled>
                    Select a project type
                  </option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="budget" className={labelClasses}>
                Budget Range <span className="text-muted font-normal">(optional)</span>
              </label>
              <select id="budget" name="budget" defaultValue="" className={selectClasses}>
                <option value="">Prefer not to say</option>
                {budgetRanges.map((range) => (
                  <option key={range} value={range}>
                    {range}
                  </option>
                ))}
              </select>
            </div>

            <FloatingTextarea id="message" name="message" required />

            {status === "error" ? (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-start gap-2 rounded-xl border border-red-500/30 bg-red-500/5 px-4 py-3 text-sm text-red-500"
              >
                <AlertCircle className="mt-0.5 size-4 shrink-0" />
                {errorMessage}
              </motion.div>
            ) : null}

            <motion.button
              type="submit"
              disabled={status === "loading"}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple via-blue to-purple bg-[length:200%_100%] px-6 py-3.5 text-sm font-medium text-accent-foreground shadow-[0_0_0_1px_rgba(255,255,255,0.08)] transition-shadow duration-300 hover:shadow-[var(--shadow-glow-purple)] disabled:opacity-60 sm:w-auto"
            >
              {status === "loading" ? <Loader2 className="size-4 animate-spin" /> : null}
              {status === "loading" ? "Sending..." : "Send Message"}
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
