import { headers } from "next/headers";

import { detectLocale, getTranslations } from "@/lib/i18n";

export async function Testimonials() {
  const headersList = await headers();
  const { heading, description, items } = getTranslations(
    detectLocale(headersList.get("accept-language"))
  ).testimonials;

  return (
    <section id="testimonials" className="border-t border-zinc-100 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{heading}</h2>
          <p className="mt-4 text-zinc-600">{description}</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {items.map((testimonial) => (
            <figure key={testimonial.quote} className="rounded-xl border border-zinc-200 p-6 shadow-sm">
              <blockquote className="text-zinc-700">“{testimonial.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-zinc-500">{testimonial.attribution}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
