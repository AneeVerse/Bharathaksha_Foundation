import localFont from "next/font/local";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import FloatingActionButton from "@/components/layout/FloatingActionButton";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  metadataBase: new URL("https://www.bharathaksha.org"),
  title: {
    default: "Bharathaksha Foundation | Empowering Education & Healthcare",
    template: "%s | Bharathaksha Foundation",
  },
  description:
    "Bharathaksha Foundation empowers individuals and communities through accessible healthcare and quality education guidance. Join us in making a meaningful difference in society.",
  keywords: ["Bharathaksha Foundation", "NGO", "Education", "Healthcare", "Career Guidance", "Social Empowerment", "India Foundation"],
  authors: [{ name: "Bharathaksha Foundation" }],
  creator: "Bharathaksha Foundation",
  publisher: "Bharathaksha Foundation",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
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
    url: "https://www.bharathaksha.org",
    title: "Bharathaksha Foundation | Empowering Education & Healthcare",
    description: "Empowering individuals through education and healthcare. Join Bharathaksha Foundation in creating a better future.",
    siteName: "Bharathaksha Foundation",
    images: [
      {
        url: "/logo/logo.webp",
        width: 1200,
        height: 630,
        alt: "Bharathaksha Foundation Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bharathaksha Foundation | Empowering Education & Healthcare",
    description: "Empowering individuals through education and healthcare.",
    images: ["/logo/logo.webp"],
  },
  alternates: {
    canonical: "/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.bharathaksha.org/#organization",
      "name": "Bharathaksha Foundation",
      "url": "https://www.bharathaksha.org",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.bharathaksha.org/logo/logo.webp",
        "width": 512,
        "height": 512
      },
      "description": "At Bharathaksha Foundation, we believe in empowering individuals and communities through the twin pillars of education and healthcare.",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer support",
        "email": "info@bharathaksha.org"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://www.bharathaksha.org/#website",
      "url": "https://www.bharathaksha.org",
      "name": "Bharathaksha Foundation",
      "publisher": {
        "@id": "https://www.bharathaksha.org/#organization"
      },
      "inLanguage": "en-US"
    }
  ]
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <NextTopLoader
          color="#0e2f50"
          initialPosition={0.08}
          height={3}
          showSpinner={false}
          easing="ease"
          speed={500}
          shadow="0 0 10px #2299DD,0 0 5px #2299DD"
        />

        {children}
        <FloatingActionButton />
        {/* <Footer/> */}
      </body>
    </html>
  );
}
