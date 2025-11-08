import { headers } from "next/headers";

import { detectLocale, getTranslations } from "@/lib/i18n";

export async function ChatbotService() {
  const headersList = await headers();
  const { title, description, features, cta, stepsHeading, steps } =
    getTranslations(detectLocale(headersList.get("accept-language"))).chatbot;

  return (
    <section className="border-t border-zinc-100 bg-zinc-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-8 w-8"
                aria-hidden="true"
              >
                <path d="M12 3c-4.97 0-9 3.582-9 8 0 2.244 1.056 4.27 2.77 5.688-.178 1.007-.687 2.21-1.69 3.214a.75.75 0 0 0 .53 1.28c1.786-.015 3.316-.588 4.438-1.283A10.78 10.78 0 0 0 12 20c4.97 0 9-3.582 9-8s-4.03-9-9-9Zm-3.25 7a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Zm4.25 1.25a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0ZM9 15.25a.75.75 0 0 1 .75-.75c1.15 0 2.034-.052 2.78-.152.747-.1 1.32-.26 1.84-.466a.75.75 0 0 1 .56 1.39c-.65.26-1.34.437-2.16.55-.822.112-1.79.178-3.02.178A.75.75 0 0 1 9 15.25Z" />
              </svg>
            </div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
            <p className="mt-4 text-lg text-zinc-600">{description}</p>
            <div className="mt-6 space-y-4 text-zinc-600">
              {features.map((feature) => (
                <div key={feature} className="flex gap-3">
                  <div className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" aria-hidden="true" />
                  <p>{feature}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <a
                href="#book"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-white shadow-sm transition hover:bg-primary/90"
              >
                {cta}
              </a>
            </div>
          </div>
          <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-zinc-900">{stepsHeading}</h3>
            <ol className="mt-6 space-y-4 text-zinc-600">
              {steps.map((step) => (
                <li key={step.title}>
                  <span className="font-medium text-zinc-900">{step.title}:</span> {step.description}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
