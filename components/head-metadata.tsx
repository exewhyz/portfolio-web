import Head from "next/head";
import React from "react";

interface HeadMetadataProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
}

export function HeadMetadata({
  title = "Aniket Raj - Full Stack Developer Portfolio",
  description = "Professional portfolio of Aniket Raj, a Full Stack Developer and trainer with expertise in JavaScript, React, Node.js, Python and more.",
  keywords = "full stack developer, software developer, software engineer, trainer, web developer, JavaScript, React, Node.js, NextJs, Python, MongoDB, SQL",
  ogImage = "/profile-pic.png",
}: HeadMetadataProps): React.ReactElement {
  return (
    <Head>
      {/* Essential Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Aniket Raj" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://aniketraj.online/" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://aniketraj.online/" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* ATS Compatibility */}
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
    </Head>
  );
}
