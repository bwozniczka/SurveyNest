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

export default function SignIn() {
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
              <Button>{t("SignIn")}</Button>
            </CardFooter>
            <hr className="border-t-2 border-gray-300 mb-3" />
            <div className="flex justify-center gap-8 my-4">
              <form
                action={async () => {
                  "use server";
                  await signIn("google", { redirectTo: "/dashboard" });
                }}
              >
                <Button
                  variant="outline"
                  className="w-17 h-17 flex items-center justify-center"
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
                className="w-17 h-17 flex items-center justify-center"
              >
                <Image
                  src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/facebook.svg"
                  alt="Facebook"
                  width={24}
                  height={24}
                />
              </Button>
              <Button
                variant="outline"
                className="w-17 h-17 flex items-center justify-center"
              >
                <Image
                  src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/linkedin.svg"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                />
              </Button>
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
              <Button>{t("SignUp")}</Button>
            </CardFooter>
            <hr className="border-t-2 border-gray-300 mb-3" />
            <div className="flex justify-center gap-8 my-4">
              <form
                action={async () => {
                  "use server";
                  await signIn("google", { redirectTo: "/dashboard" });
                }}
              >
                <Button
                  variant="outline"
                  className="w-17 h-17 flex items-center justify-center"
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
                className="w-17 h-17 flex items-center justify-center"
              >
                <Image
                  src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/facebook.svg"
                  alt="Facebook"
                  width={24}
                  height={24}
                  className="bg-blue"
                />
              </Button>
              <Button
                variant="outline"
                className="w-17 h-17 flex items-center justify-center"
              >
                <Image
                  src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/linkedin.svg"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                />
              </Button>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
