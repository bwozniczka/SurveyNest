'use server'

import { signIn } from "@/auth";
import { headers } from 'next/headers';
import { signUpSchema } from "@/schemas/authSchemas";
import { z } from "zod";

async function getBaseUrl() {
    const headersList = await headers();
    const proto = headersList.get('x-forwarded-proto') || 'http';
    const host = headersList.get('host') || 'localhost:3000';
    return `${proto}://${host}`;
}

export async function registerUser(firstName: string, lastName: string, email: string, password: string) {
    try {

        const baseUrl = await getBaseUrl();
        const response = await fetch(`${baseUrl}/api/database/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ firstName, lastName, email, password }),
        });

        const responseData = await response.json();

        if (!response.ok) {
            return {
                success: false,
                message: responseData.message || 'Registration failed',
                status: response.status
            };
        }

        return {
            success: true,
            message: 'Registration successful',
            ...responseData
        };
    } catch (error) {
        console.error('Registration error:', error);
        return {
            success: false,
            message: error instanceof Error ? error.message : 'Registration failed'
        };
    }
}

export async function handleCredentialsSignIn(email: string, password: string) {
    await signIn("credentials", {
        email: email,
        password: password,
        redirectTo: "/dashboard"
    });
}

export async function handleGoogleSignIn() {
    await signIn("google", { redirectTo: "/dashboard" });
}

export async function handleFacebookSignIn() {
    await signIn("facebook", { redirectTo: "/dashboard" });
}

export async function handleGithubSignIn() {
    await signIn("github", { redirectTo: "/dashboard" });
}
