import { headers } from "next/headers";

import { APP_CONFIG } from "@/config";
import { detectLocale, getTranslations } from "@/lib/i18n";

export async function Footer() {
  const headersList = await headers();
  const { notice } = getTranslations(detectLocale(headersList.get("accept-language"))).footer;

  return (
    <footer className="border-t border-zinc-100 py-8 text-center text-sm text-zinc-500">
      <div className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-4">
        <a href={`mailto:${APP_CONFIG.email}`} className="hover:text-zinc-700">
          {APP_CONFIG.email}
        </a>
        <span className="hidden h-4 w-px bg-zinc-200 sm:block" aria-hidden="true" />
        <a href={`tel:${APP_CONFIG.phoneNumber}`} className="hover:text-zinc-700">
          {APP_CONFIG.phoneNumber}
        </a>
      </div>
      <p className="mt-4">
        © {new Date().getFullYear()} {APP_CONFIG.companyName}. {notice}
      </p>
    </footer>
  );
}
