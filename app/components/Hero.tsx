import { headers } from "next/headers";

import { detectLocale, getTranslations } from "@/lib/i18n";
import { Blob } from "@/app/widgets/Blob";

export async function Hero() {
  const headersList = await headers();
  const { badge, title, description, primaryCta, secondaryCta } = getTranslations(
    detectLocale(headersList.get("accept-language"))
  ).hero;

  return (
    <section className="relative overflow-hidden">
      <Blob className="absolute -left-40 top-10 z-10 h-80 w-80 sm:-left-32 sm:top-6 sm:h-96 sm:w-96" />
      <div className="mx-auto flex min-h-[70vh] max-w-7xl items-center px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-700">
            {badge}
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
          <p className="mt-6 text-lg leading-8 text-zinc-600">{description}</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#book"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-white shadow-sm transition hover:bg-primary/90"
            >
              {primaryCta}
            </a>
            <a
              href="#testimonials"
              className="inline-flex items-center justify-center rounded-md border border-primary px-6 py-3 text-primary transition hover:bg-primary/10"
            >
              {secondaryCta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
