import { Inter, DM_Serif_Display } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
