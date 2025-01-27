import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import { headers } from 'next/headers';

const prisma = new PrismaClient();

async function getBaseUrl() {
  const headersList = await headers();
  const proto = headersList.get('x-forwarded-proto') || 'http';
  const host = headersList.get('host') || 'localhost:3000';
  return `${proto}://${host}`;
}

async function findOrCreateUser(profile: { email: string, name: string }) {
  const { email, name } = profile;

  let user = await prisma.appUser.findUnique({
    where: { email },
  });

  if (!user) {
    user = await prisma.appUser.create({
      data: {
        email,
        first_name: name.split(" ")[0],
        last_name: name.split(" ")[1] || "",
        password: "",
      },
    });
  }

  return user;
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.AUTH_FACEBOOK_ID,
      clientSecret: process.env.AUTH_FACEBOOK_SECRET,
    }),
    CredentialsProvider({
      async authorize(credentials) {
        const baseUrl = await getBaseUrl()
        const res = await fetch(`${baseUrl}/api/database/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(credentials),
        });

        const user = await res.json();
        if (res.ok && user) {
          return user;
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/signin",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.AUTH_SECRET,
  jwt: {
    maxAge: 60 * 60 * 24 * 30,
  },
  callbacks: {
    async signIn({ user, profile }) {
      try {
        if (user.email != null && user.name != null) {
          await findOrCreateUser({
            email: user.email,
            name: user.name,
          });
        }

        return true;
      } catch (err) {
        console.error("Error during sign-in callback:", err);
        return false;
      }
    },
    async jwt({ token, user }) {
      if (user) {
        const dbUser = await prisma.appUser.findUnique({
          where: { email: user.email },
        });

        if (dbUser) {
          token.id = dbUser.id;
          token.email = dbUser.email;
          token.name = dbUser.first_name + " " + dbUser.last_name;
        }
      }

      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.email = token.email as string;
        session.user.name = token.name as string;
      }

      return session;
    },
  },
});
