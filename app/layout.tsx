import { Inter, DM_Serif_Display } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-sans",
});

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"], // Only available in weight 400
  display: "swap",
  variable: "--font-heading",
});

import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { PERSONAL_DATA_QUERY, SOCIAL_DATA_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";

export const metadata: Metadata = {
  title: "Aniket Raj - Software Developer Portfolio",
  description:
    "Professional portfolio of Aniket Raj, a Software Developer and trainer with expertise in JavaScript, React, Node.js, Python and more.",
  keywords:
    "software developer, software engineer,app developer,trainer, web developer, JavaScript, React, Node.js, full stack developer",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personalData = await client.fetch(PERSONAL_DATA_QUERY);
  const socialData = await client.fetch(SOCIAL_DATA_QUERY);
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
              name: "Aniket Raj",
              url: "https://aniketraj.online/",
              image: "/profile-pic.png",
              jobTitle: "Full Stack Developer",
              worksFor: {
                "@type": "Organization",
                name: "LearnBie",
              },
              sameAs: [
                "https://www.linkedin.com/in/aniket-raj-1549881a3",
                "https://github.com/exewhyz",
                "https://twitter.com/exwhyzed_op",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                email: "aniketraj.xyz+work@gmail.com",
                telephone: "+91 8840390107",
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${dmSerifDisplay.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
              <Header />
              {children}
              <Footer personalData={personalData} socialData={socialData}/>
            </SidebarInset>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
