import { Footer } from "@/components/Footer";
import { getLocale } from "next-intl/server";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  return (
    <html lang={locale} className="h-full">
      <body className="flex flex-col min-h-screen">
        {children}
        <Footer />
      </body>
    </html>
  );
}
