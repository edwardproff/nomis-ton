"use client";

import {Inter} from "next/font/google";
import "./globals.css";
import {TonConnectUIProvider} from "@tonconnect/ui-react";

const inter = Inter({subsets: ["latin"]});

const manifestUrl = 'https://raw.githubusercontent.com/ton-community/tutorials/main/03-client/test/public/tonconnect-manifest.json'

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={inter.className}>
    <TonConnectUIProvider manifestUrl={manifestUrl}>
      {children}
    </TonConnectUIProvider>
    </body>
    </html>
  );
}
