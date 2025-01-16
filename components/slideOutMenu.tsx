import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { auth, signOut } from "@/auth";
import { Link } from "@/i18n/routing";
import LangChangeButton from "./LangChangeButton";

export default async function SlideOutMenu() {
  const session = await auth();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="px-4 py-2 rounded-xl bg-black text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-black">
          Twoje konto
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Witaj {session?.user?.name}!</SheetTitle>
          <hr className="border-t-10 border-gray-300"></hr>
        </SheetHeader>
        <div className="flex flex-col gap-4 items-start py-5">
          <Link href="/dashboard">
            <button className="px-4 py-2 w-full rounded-xl bg-orange-400 border-slate-950 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 hover:border-black">
              <span>Panel użytkownika</span>
            </button>
          </Link>
          <LangChangeButton />
          <form
            action={async () => {
              "use server";
              await signOut({ redirectTo: "/" });
            }}
          >
            <button className="px-4 py-2 w-full rounded-xl bg-orange-400 border-slate-950 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 hover:border-black">
              <span>Wyloguj się</span>
            </button>
          </form>
        </div>
      </SheetContent>
    </Sheet>
  );
}
