import type { Metadata } from "next";
import { Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Add the weights you need
  display: 'swap',
  variable: '--font-source-serif', // Optional: for CSS variable access
});

export const metadata: Metadata = {
  title: "Ascension in Body",
  description: "A Guide to Unlocking Your Essence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={sourceSerif.className}>
      <body
        className='bg-[#E0958B] text-[#630185]'
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
