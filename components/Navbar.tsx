import Link from "next/link";
import { auth, signOut, signIn } from "@/auth";
import Image from "next/image";
import { NavMenu } from "@/components/NavbarMenu";

const Navbar = async () => {
  const session = await auth();

  return (
    <header className="px-5 py-3 bg-orange-400 shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <div className="flex items-center">
            <Image
              src="/icon.png"
              alt="SurveyNest"
              width={100}
              height={50}
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
        <div className="flex items-center gap-5 text-black">
          {session && session?.user ? (
            <>
              <Link href="/dashboard">
                <span className="max-sm:hidden">Dashboard</span>
              </Link>

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

              <Link href={`/user/${session?.id}`}>
                <span>{session?.user?.name}</span>
              </Link>
            </>
          ) : (
            <form
              action={async () => {
                "use server";
                await signIn("google");
              }}
            >
              <button className="px-4 py-2 rounded-xl bg-black text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-black">
                Sing In
              </button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
