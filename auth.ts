import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Facebook from "next-auth/providers/facebook";
import GitHub from "next-auth/providers/github";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google, Facebook, GitHub],
  pages: {
    signIn: "/signin",
  },
});
