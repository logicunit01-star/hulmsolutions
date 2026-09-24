import Link from "next/link";
import { Container } from "@/components/ui/container";

export type LegalSection = {
  heading: string;
  paragraphs?: React.ReactNode[];
  items?: React.ReactNode[];
};

type LegalPageProps = {
  eyebrow: string;
  title: string;
  effectiveDate: string;
  introduction: React.ReactNode;
  sections: LegalSection[];
};

export function LegalPage({
  eyebrow,
  title,
  effectiveDate,
  introduction,
  sections,
}: LegalPageProps) {
  return (
    <article className="bg-white">
      <header className="border-b border-emerald-950/10 bg-[#f4faf7] py-16 sm:py-20">
        <Container className="max-w-4xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#1b7f70]">
            {eyebrow}
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-[#152825] sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-sm text-zinc-600">Effective date: {effectiveDate}</p>
          <div className="mt-7 max-w-3xl text-base leading-7 text-zinc-700 sm:text-lg">
            {introduction}
          </div>
        </Container>
      </header>

      <Container className="max-w-4xl py-14 sm:py-20">
        <div className="space-y-12">
          {sections.map((section) => (
            <section key={section.heading} aria-labelledby={section.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-")}>
              <h2
                id={section.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
                className="text-2xl font-semibold tracking-tight text-[#152825]"
              >
                {section.heading}
              </h2>

              {section.paragraphs?.map((paragraph, index) => (
                <p key={index} className="mt-4 text-base leading-7 text-zinc-700">
                  {paragraph}
                </p>
              ))}

              {section.items && (
                <ul className="mt-5 list-disc space-y-3 pl-6 text-base leading-7 text-zinc-700 marker:text-[#25a18e]">
                  {section.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <aside className="rounded-2xl border border-[#25a18e]/20 bg-[#f4faf7] p-6 text-sm leading-6 text-zinc-700 sm:p-8">
            <h2 className="text-xl font-semibold text-[#152825]">Contact Hulm Solutions</h2>
            <address className="mt-4 space-y-1 not-italic">
              <p>C-27, Block 14, Gulistan-e-Johar, Karachi, Pakistan</p>
              <p>
                Email: <Link className="font-medium text-[#1b7f70] hover:underline" href="mailto:info@hulmsolutions.com">info@hulmsolutions.com</Link>
              </p>
              <p>
                Phone: <Link className="font-medium text-[#1b7f70] hover:underline" href="https://wa.me/923391119259">+92 339 111 9259</Link>
              </p>
            </address>
          </aside>
        </div>
      </Container>
    </article>
  );
}
