import type React from "react";
import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

const CANONICAL_LOGIN_URL =
  process.env.NEXT_PUBLIC_BASE_URL ||
  "https://nbs-authportal.netlify.app";
const SITE_DOMAIN = "nbs-authportal.netlify.app";
const SITE_BRAND = "National Benefit Services";

export const metadata: Metadata = {
  metadataBase: new URL(CANONICAL_LOGIN_URL),
  title: {
    default: "National Benefit Services - Login",
    template: "%s | National Benefit Services",
  },
  keywords: [
    "National Benefit Services",
    "National Benefit Services Orthi Development Corporation",
    "National Benefit Services Aloha Care",
    "national benefit services login",
    "national benefit services llc",
    "national benefit services hawaii",
    "national benefit services hsa",
    "national benefit services utah",
    "national benefit services fsa login",
    "NBS Orthi Development Corporation login",
    "NBS Aloha Care login",
    "NBS benefits",
    "NBS login",
    "NBS employee benefits",
    "NBS portal",
    "benefits portal login",
    "employee benefits login",
    "secure benefits login",
    "FSA login",
    "HSA login",
    "COBRA login",
    "reimbursement account",
    "participant portal",
    "employer portal",
    "dependent care",
    "health benefits",
    "handshake authentication",
  ],
  description: `${SITE_BRAND} – Secure client login for the employee benefits portal. Access your account, manage your FSA, HSA, COBRA, and dependent care benefits.`,
  authors: [{ name: SITE_BRAND }],
  creator: SITE_BRAND,
  publisher: SITE_BRAND,
  applicationName: SITE_BRAND,
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "National Benefit Services - Login",
    description: `${SITE_BRAND} – Secure client login for the employee benefits portal. Access your FSA, HSA, COBRA, and dependent care benefits.`,
    siteName: SITE_BRAND,
    url: CANONICAL_LOGIN_URL,
    images: [
      {
        url: "/Nbs banner_new.png",
        width: 1200,
        height: 630,
        alt: `${SITE_BRAND} - Employee Benefits Portal`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "National Benefit Services - Login",
    description: `${SITE_BRAND} – Secure client login for the employee benefits portal. Access your FSA, HSA, COBRA, and dependent care benefits.`,
    images: ["/Nbs banner_new.png"],
  },
  category: "Business",
  alternates: {
    canonical: CANONICAL_LOGIN_URL,
    languages: {
      "en-US": CANONICAL_LOGIN_URL,
    },
  },
  other: {
    "geo.region": "US",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#254650",
};

// Schema.org Structured Data
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_BRAND,
  url: CANONICAL_LOGIN_URL,
  logo: `${CANONICAL_LOGIN_URL}/Nbs%20banner_new.png`,
  description:
    "National Benefit Services provides secure access to FSA, HSA, COBRA, and dependent care benefits through our employee benefits portal.",
  sameAs: [],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Support",
    availableLanguage: ["en"],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_BRAND,
  url: CANONICAL_LOGIN_URL,
  description:
    "National Benefit Services sign in portal. Login to manage your FSA, HSA, COBRA, and dependent care benefits.",
  potentialAction: {
    "@type": "SearchAction",
    target: `${CANONICAL_LOGIN_URL}?search={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I login to my National Benefit Services account?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Visit the National Benefit Services login page and enter your username and password to access your benefits portal.",
      },
    },
    {
      "@type": "Question",
      name: "What is FSA login and how do I access it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "FSA (Flexible Spending Account) login allows you to manage your health and dependent care reimbursement accounts through the National Benefit Services portal.",
      },
    },
    {
      "@type": "Question",
      name: "How do I reset my National Benefit Services password?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Click the forgot password link on the login page and follow the required verification steps to reset your password.",
      },
    },
    {
      "@type": "Question",
      name: "What benefits can I manage through this portal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can manage FSA (health and dependent care), HSA, COBRA continuation coverage, and other employee benefits through your secure National Benefit Services account.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: CANONICAL_LOGIN_URL,
    },
  ],
};

const jsonLd = [organizationSchema, websiteSchema, faqSchema, breadcrumbSchema];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <meta name="description" content={`${SITE_BRAND} – Secure client login for the employee benefits portal. Access your FSA, HSA, COBRA, and dependent care benefits.`} />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#254650" />
        <link rel="canonical" href={CANONICAL_LOGIN_URL} />
      </head>
      <body className={`${geist.className} font-sans antialiased`}>
        {jsonLd.map((schema, idx) => (
          <script
            key={idx}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        {children}
        <Analytics />
      </body>
    </html>
  );
}