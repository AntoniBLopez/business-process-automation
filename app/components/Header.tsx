import Link from "next/link";
import { headers } from "next/headers";

import { APP_CONFIG } from "@/config";
import { detectLocale, getTranslations } from "@/lib/i18n";

export async function Header() {
  const headersList = await headers();
  const locale = detectLocale(headersList.get("accept-language"));
  const t = getTranslations(locale);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-100 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="/" className="text-lg font-semibold text-zinc-900">
          <span>{APP_CONFIG.companyName}</span>
          <span className="ml-2 text-sm font-normal text-zinc-500">{APP_CONFIG.founderName}</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-zinc-600 sm:flex">
          <a href="#testimonials" className="transition hover:text-primary">
            {t.testimonials.heading}
          </a>
          <a href="#book" className="transition hover:text-primary">
            {t.calendly.heading}
          </a>
        </nav>
        <Link
          href="#book"
          className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-primary/90"
        >
          {t.hero.primaryCta}
        </Link>
      </div>
    </header>
  );
}
