"use client"

import { signIn } from "@/auth";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { registerUser, handleCredentialsSignIn, handleGoogleSignIn, handleFacebookSignIn, handleGithubSignIn } from "@/app/actions/auth";
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
  const router = useRouter();
  const t = useTranslations("AuthPage");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userExist, setUserExist] = useState(false);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await handleCredentialsSignIn(email, password);
    } catch (error) {
      console.error("SignIn error:", error);
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert(t("PasswordsDoNotMatch"));
      return;
    }

    if (!email || !password) {
      alert(t("PleaseEnterAllFields"));
      return;
    }

    try {
      const result = await registerUser(firstName, lastName, email, password);
      if (result.success) {
        await handleCredentialsSignIn(email, password);
      } else {
        setUserExist(true)
      }
    } catch (error) {
      console.error("Error during sign-up:", error);
    }
  };

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
                <Label htmlFor="signin-email">Email</Label>
                <Input
                  id="signin-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="signin-password">{t("Password")}</Label>
                <Input
                  id="signin-password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button
                className="hover:bg-orange-400 hover:text-black text-white w-full"
                onClick={handleSignIn}
              >
                {t("SignIn")}
              </Button>
            </CardFooter>
            <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-neutral-500 dark:before:border-neutral-600 dark:after:border-neutral-600">
              Or
            </div>
            <div className="flex justify-center gap-8 my-4">
              <Button
                variant="outline"
                className="w-17 h-17 flex items-center justify-center hover:bg-orange-300"
                onClick={() => handleGoogleSignIn()}
              >
                <Image
                  src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/google.svg"
                  alt="Google"
                  width={24}
                  height={24}
                />
              </Button>
              <Button
                variant="outline"
                className="w-17 h-17 flex items-center justify-center hover:bg-orange-300"
                onClick={() => handleFacebookSignIn()}
              >
                <Image
                  src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/facebook.svg"
                  alt="facebook"
                  width={24}
                  height={24}
                />
              </Button>
              <Button
                variant="outline"
                className="w-17 h-17 flex items-center justify-center hover:bg-orange-300"
                onClick={() => handleGithubSignIn()}
              >
                <Image
                  src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg"
                  alt="github"
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
                <Label htmlFor="email">First name</Label>
                <Input
                  id="firstName"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="email">Last name</Label>
                <Input
                  id="lastName"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {userExist ? <p>User already exists</p> : null}
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">{t("Password")}</Label>
                <Input
                  id="new"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password_2">{t("ConfirmPassword")}</Label>
                <Input
                  id="password2"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button
                className="hover:bg-orange-400 hover:text-black text-white w-full"
                onClick={handleSignUp}
              >
                {t("SignUp")}
              </Button>
            </CardFooter>
            <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-neutral-500 dark:before:border-neutral-600 dark:after:border-neutral-600">
              Or
            </div>
            <div className="flex justify-center gap-8 my-4">
              <Button
                variant="outline"
                className="w-17 h-17 flex items-center justify-center hover:bg-orange-300"
                onClick={() => handleGoogleSignIn()}
              >
                <Image
                  src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/google.svg"
                  alt="Google"
                  width={24}
                  height={24}
                />
              </Button>
              <Button
                variant="outline"
                className="w-17 h-17 flex items-center justify-center hover:bg-orange-300"
                onClick={() => handleFacebookSignIn()}
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
                className="w-17 h-17 flex items-center justify-center hover:bg-orange-300"
                onClick={() => handleGithubSignIn()}
              >
                <Image
                  src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg"
                  alt="github"
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