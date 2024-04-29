import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "./Provider";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cheer Me",
  description: "Get financial support and encouragement through a Stripe-powered platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./assets/icon.ico" />
        <link rel="keywords" href="Cheer Me, financial support, encouragement, Stripe" />
      </head>
      <body className={inter.className}>
        <Provider>
        {children}
        </Provider>
      </body>
    </html>
  );
}
