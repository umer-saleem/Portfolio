import "./globals.css"; // make sure this import exists
import Script from "next/script";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Umer Saleem",
  description: "AI & Data Science Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className="bg-white text-gray-900">
        {children}

        {/* ✅ Google Analytics Script */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-NQYCM6V4ZT"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NQYCM6V4ZT');
          `}
        </Script>
      </body>
    </html>
  );
}
