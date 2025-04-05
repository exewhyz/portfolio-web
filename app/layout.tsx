import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";

const inter = Inter({ subsets: ["latin"] });

import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Aniket Raj - Software Developer Portfolio",
  description:
    "Professional portfolio of Aniket Raj, a Software Developer and trainer with expertise in JavaScript, React, Node.js, Python and more.",
  keywords:
    "software developer, software engineer,app developer,trainer, web developer, JavaScript, React, Node.js, full stack developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ATS Compatibility Meta Tags */}
        <meta name="format-detection" content="telephone=yes" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />

        {/* Structured Data for Rich Results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "Person",
              name: "John Doe",
              url: "https://www.yourdomain.com/",
              image: "/profile-image.jpg",
              jobTitle: "Software Engineer",
              worksFor: {
                "@type": "Organization",
                name: "Example Inc.",
              },
              sameAs: [
                "https://www.linkedin.com/in/johndoe/",
                "https://github.com/johndoe",
                "https://twitter.com/johndoe",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                email: "johndoe@example.com",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
              <Header />
              {children}
              <Footer />
            </SidebarInset>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
