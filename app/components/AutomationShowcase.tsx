import { headers } from "next/headers";

import { detectLocale, getTranslations } from "@/lib/i18n";

export async function AutomationShowcase() {
  const headersList = await headers();
  const locale = detectLocale(headersList.get("accept-language"));
  const { badge, heading, intro, exampleLabel, examples } = getTranslations(locale).automation;

  return (
    <section className="border-t border-zinc-100 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            {badge}
          </p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{heading}</h2>
          <p className="mt-4 text-lg text-zinc-600">{intro}</p>
        </div>
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {examples.map((example) => (
            <div
              key={example.title}
              className="flex h-full flex-col rounded-2xl border border-zinc-200 bg-zinc-50 p-6 shadow-sm"
            >
              <div className="flex items-center gap-3 text-sm font-medium text-primary">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                  ⚡
                </span>
                {exampleLabel}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-zinc-900">{example.title}</h3>
              <p className="mt-3 text-sm text-zinc-600">{example.description}</p>
              <ul className="mt-6 space-y-3 text-sm text-zinc-600">
                {example.outcomes.map((outcome) => (
                  <li key={outcome} className="flex gap-2">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
