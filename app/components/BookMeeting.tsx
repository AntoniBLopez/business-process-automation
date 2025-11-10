import { headers } from "next/headers";

import { detectLocale, getTranslations } from "@/lib/i18n";

export async function BookMeeting() {
  const headersList = await headers();
  const { heading, description, trouble } = getTranslations(
    detectLocale(headersList.get("accept-language"))
  ).calendly;

  const calendlyUrl =
    process.env.NEXT_PUBLIC_CALENDLY_URL ||
    "https://calendly.com/antonilopezdev/30min/intro-call?hide_landing_page_details=1&hide_gdpr_banner=1";

  return (
    <section id="book" className="border-t border-zinc-100 bg-secondary py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{heading}</h2>
          <p className="mt-4 text-zinc-600">{description}</p>
        </div>
        <div className="mx-auto mt-10 max-w-3xl">
          <div className="overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm">
            <iframe
              title="Schedule a call"
              src={calendlyUrl}
              width="100%"
              height="720"
              className="h-[920px] w-full"
              frameBorder="0"
              loading="lazy"
            />
          </div>
          <p className="mt-4 text-center text-sm text-zinc-500">
            {trouble.prefix}{" "}
            <a href={calendlyUrl} className="underline underline-offset-2">
              {trouble.linkLabel}
            </a>{" "}
            {trouble.suffix}
          </p>
        </div>
      </div>
    </section>
  );
}
