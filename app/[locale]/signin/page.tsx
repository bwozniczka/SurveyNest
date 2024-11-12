import AuthComponent from "@/components/AuthComponent";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function SignIn() {
  const session = await auth();
  if (session) {
    if (session) {
      redirect("/dashboard");
    }
  }
  return <AuthComponent />;
}
