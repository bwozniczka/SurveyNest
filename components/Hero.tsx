"use client";

import { useTranslations } from "next-intl";
import { Highlight } from "./ui/hero-highlight";

export function Hero() {
  const t = useTranslations("Hero");
  return (
    <div className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-dark max-w-5xl leading-relaxed lg:leading-snug text-center mx-auto overflow-x-auto">
      {t("title")}{" "}
      <Highlight className="text-black dark:text-white block">
        {t("highlight")}
      </Highlight>
    </div>
  );
}
