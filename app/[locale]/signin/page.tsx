import { signIn } from "@/auth";
import { useTranslations } from "next-intl";

export default function SignIn() {
  const t = useTranslations("SignIn");
  return (
    <div>
      <h1>{t("title")}</h1>
      <form
        action={async () => {
          "use server";
          await signIn("google", { redirectTo: "/dashboard" });
        }}
      >
        <button className="px-4 py-2 rounded-xl bg-black text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-black">
          Sing In
        </button>
      </form>
    </div>
  );
}
