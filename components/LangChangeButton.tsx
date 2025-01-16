"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { ChangeEvent, useTransition } from "react";

export default function LangChan() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };
  return (
    <label className="py-2 rounded-xl bg-orange-400 border-black text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-black">
      <p className="sr-only">Change language</p>
      <select
        defaultValue={localActive}
        className="bg-transparent py-2"
        onChange={onSelectChange}
        disabled={isPending}
      >
        <option value="en">English</option>
        <option value="pl">Polish</option>
      </select>
    </label>
  );
}
