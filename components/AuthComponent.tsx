import { signIn } from "@/auth";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { signInSchema, signUpSchema } from "@/schemas/authSchemas";

export default function AuthComponent() {
  const t = useTranslations("AuthPage");
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">{t("SignIn")}</TabsTrigger>
          <TabsTrigger value="password">{t("SignUp")}</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>{t("TitleSignIn")}</CardTitle>
              <CardDescription>{t("DescriptionSignIp")}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input id="email" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">{t("Password")}</Label>
                <Input id="password" type="password" />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button className="hover:bg-orange-400 hover:text-black text-white w-full">
                {t("SignIn")}
              </Button>
            </CardFooter>
            <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-neutral-500 dark:before:border-neutral-600 dark:after:border-neutral-600">
              Or
            </div>
            <div className="flex justify-center gap-8 my-4">
              <form
                action={async () => {
                  "use server";
                  await signIn("google", { redirectTo: "/dashboard" });
                }}
              >
                <Button
                  variant="outline"
                  className="w-17 h-17 flex items-center justify-center hover:bg-orange-300"
                >
                  <Image
                    src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/google.svg"
                    alt="Google"
                    width={24}
                    height={24}
                  />
                </Button>
              </form>
              <form
                action={async () => {
                  "use server";
                  await signIn("facebook", { redirectTo: "/dashboard" });
                }}
              >
                <Button
                  variant="outline"
                  className="w-17 h-17 flex items-center justify-center hover:bg-orange-300 "
                >
                  <Image
                    src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/facebook.svg"
                    alt="facebook"
                    width={24}
                    height={24}
                  />
                </Button>
              </form>
              <form
                action={async () => {
                  "use server";
                  await signIn("github", { redirectTo: "/dashboard" });
                }}
              >
                <Button
                  variant="outline"
                  className="w-17 h-17 flex items-center justify-center hover:bg-orange-300"
                >
                  <Image
                    src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg"
                    alt="github"
                    width={24}
                    height={24}
                  />
                </Button>
              </form>
            </div>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle>{t("TitleSignUp")}</CardTitle>
              <CardDescription>{t("DescriptionSignUp")}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">{t("Password")}</Label>
                <Input id="new" type="password" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password_2">{t("ConfirmPassword")}</Label>
                <Input id="password2" type="password" />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button className="hover:bg-orange-400 hover:text-black text-white w-full">
                {t("SignUp")}
              </Button>
            </CardFooter>
            <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-neutral-500 dark:before:border-neutral-600 dark:after:border-neutral-600">
              Or
            </div>
            <div className="flex justify-center gap-8 my-4">
              <form
                action={async () => {
                  "use server";
                  await signIn("google", { redirectTo: "/dashboard" });
                }}
              >
                <Button
                  variant="outline"
                  className="w-17 h-17 flex items-center justify-center hover:bg-orange-300"
                >
                  <Image
                    src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/google.svg"
                    alt="Google"
                    width={24}
                    height={24}
                  />
                </Button>
              </form>
              <Button
                variant="outline"
                className="w-17 h-17 flex items-center justify-center hover:bg-orange-300"
              >
                <Image
                  src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/facebook.svg"
                  alt="Facebook"
                  width={24}
                  height={24}
                  className="bg-blue"
                />
              </Button>
              <form
                action={async () => {
                  "use server";
                  await signIn("github", { redirectTo: "/dashboard" });
                }}
              >
                <Button
                  variant="outline"
                  className="w-17 h-17 flex items-center justify-center hover:bg-orange-300"
                >
                  <Image
                    src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg"
                    alt="github"
                    width={24}
                    height={24}
                  />
                </Button>
              </form>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
