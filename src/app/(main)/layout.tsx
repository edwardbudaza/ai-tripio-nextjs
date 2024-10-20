import {
  ClerkProvider
} from '@clerk/nextjs';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/react"

import "../globals.css";
import Header from '@/components/custom/Header';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Tripio",
  description: "Unlock Your Dream Journey with AI: Custom Plans in Seconds",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Header />
          {children}
           <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
