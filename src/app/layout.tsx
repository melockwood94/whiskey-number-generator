import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.css'
import "./globals.css";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rogue Numbers",
  description: "A silly little web app for generating and tracking numbers used to try to win a bottle of whiskey.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
