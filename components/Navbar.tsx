import { Link } from "@/i18n/routing";
import { auth, signOut } from "@/auth";
import Image from "next/image";
import { NavMenu } from "@/components/NavbarMenu";
import { getTranslations } from "next-intl/server";
import LangChangeButton from "./LangChangeButton";

const Navbar = async () => {
  const session = await auth();
  const t = await getTranslations("Navbar");

  return (
    <header className="px-5 py-3 bg-orange-400 shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <div className="flex items-center">
            <Image
              src="/icon.png"
              alt="SurveyNest"
              width={60}
              height={30}
              className="bg-transparent"
            />
            <span className="text-white font-bold text-2xl ml-2">
              SurveyNest
            </span>
          </div>
        </Link>
        <div className="flex  mt-2">
          <NavMenu />
        </div>
        <div>
          <LangChangeButton />
        </div>
        <div className="flex items-center gap-5 text-black">
          {session && session?.user ? (
            <>
              <Link href="/dashboard">
                <span className="max-sm:hidden">{t("Dashboard")}</span>
              </Link>

              <form
                action={async () => {
                  "use server";

                  await signOut({ redirectTo: "/" });
                }}
              >
                <button type="submit">
                  <span className="max-sm:hidden">{t("Logout")}</span>
                </button>
              </form>
              <Link href={`/user/${session?.id}`}>
                <span>{session?.user?.name}</span>
              </Link>
            </>
          ) : (
            <Link href="/signin">
              <button className="px-4 py-2 rounded-xl bg-black text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-black">
                {t("SignIn")}
              </button>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
