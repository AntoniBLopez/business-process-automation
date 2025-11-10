import { headers } from "next/headers";
import { BsStars } from "react-icons/bs";

import { detectLocale, getTranslations } from "@/lib/i18n";

export async function VideoShowcase() {
  const headersList = await headers();
  const { heading, description, promptLabel, prompt } = getTranslations(
    detectLocale(headersList.get("accept-language"))
  ).videoShowcase;

  return (
    <section id="video-showcase" className="border-t border-zinc-100 bg-secondary py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="flex items-center gap-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <BsStars className="h-6 w-6" />
              </span>
              <span>{heading}</span>
            </h2>
            <p className="mt-4 text-zinc-600">{description}</p>
            <div className="mt-6 rounded-lg border border-zinc-200 bg-zinc-50 p-4">
              <span className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                {promptLabel}
              </span>
              <p className="mt-2 text-base font-medium text-zinc-700">“{prompt}”</p>
            </div>
          </div>
          <div>
            <div className="overflow-hidden rounded-xl border border-zinc-200 bg-zinc-900/80 shadow-lg">
              <video
                src="/showcase.mp4"
                // poster="/showcase-second4.png"
                controls
                playsInline
                className="block w-full"
                aria-label={heading}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
