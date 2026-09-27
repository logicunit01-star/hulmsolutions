import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "Thank You | Hulm Solutions" },
  description: "Thank you for contacting Hulm Solutions.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/thank-you/" },
};

export default function ThankYouPage() {
  return (
    <section className="mx-auto flex min-h-[65vh] max-w-3xl flex-col items-center justify-center px-6 py-20 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Message received</p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">Thank you for contacting Hulm</h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
        Our team will review your details and get back to you. If you are ready to explore HulmPOS now, you can also start the free trial.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <a className="rounded-full bg-slate-950 px-6 py-3 font-semibold text-white" href="https://app.hulmsolutions.com/Register">
          Start free trial
        </a>
        <Link className="rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-800" href="/">
          Return home
        </Link>
      </div>
    </section>
  );
}
