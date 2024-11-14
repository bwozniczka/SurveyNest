import { getTranslations } from "next-intl/server";
import { auth, signOut } from "@/auth";

export default async function Dashboard() {
  const t = await getTranslations("Dashboard");
  const session = await auth();

  return (
    <>
      {session && session.user ? (
        <div>
          <h1>{t("title")}</h1>
          <p>Dashboard page</p>
          <form
            action={async () => {
              "use server";

              await signOut({ redirectTo: "/" });
            }}
          >
            <button type="submit">
              <span className="max-sm:hidden">Logout</span>
            </button>
          </form>
        </div>
      ) : (
        <div>
          <h1 className="text-3xl text-red-700">unauthorized</h1>
        </div>
      )}
    </>
  );
}
