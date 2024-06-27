import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000/"),

  title: "Nurislom | Personal Portfolio",
  authors: {
    name: "Nurislom",
  },

  description:
    "Based in Uzbekistan, I'm a Front-End developer passionate about building a modern web application that users love.",
  openGraph: {
    title: "Nurislom's Personal Portfolio",
    description:
      "Based in Uzbekistan, I'm a Front-End developer passionate about building a modern web application that users love.",
    url: "http://localhost:3000/",
    siteName: "Nurislom",
    images: "/og.png",
    type: "website",
  },
  keywords: ["daily web coding", "nurislom", "dailywebcoding"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />
      </head>
      <body className={spaceGrotesk.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        <script>AOS.init();</script>
      </body>
    </html>
  );
}
