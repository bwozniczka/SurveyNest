"use client";

import { Highlight } from "./ui/hero-highlight";

export function Hero() {
  return (
    <div className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-dark max-w-5xl leading-relaxed lg:leading-snug text-center mx-auto overflow-x-auto">
      Revolutionize Your Surveys with SurveyNest{" "}
      <Highlight className="text-black dark:text-white block">
        Innovative, Fast, and User-Friendly!
      </Highlight>
    </div>
  );
}
