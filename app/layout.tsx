import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ghost AI",
  description: "Real-time collaborative system design workspace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        variables: {
          colorBackground: "oklch(0.145 0 0)",
          colorInputBackground: "oklch(0.205 0 0)",
          colorInputText: "oklch(0.985 0 0)",
          colorPrimary: "oklch(0.488 0.243 264.376)",
          colorText: "oklch(0.985 0 0)",
          colorTextSecondary: "oklch(0.708 0 0)",
          colorDanger: "oklch(0.704 0.191 22.216)",
          borderRadius: "0.625rem",
        },
      }}
    >
      <html
        lang="en"
        className={`dark ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      >
        <body className="min-h-full flex flex-col">{children}</body>
      </html>
    </ClerkProvider>
  );
}
