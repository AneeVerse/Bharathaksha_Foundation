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
  title: "Bharathaksha Foundation",
  description:
    "At Bharathaksha Foundation, we believe in empowering individuals and communities through the twin pillars of education and healthcare. Established with a vision to make a meaningful difference in society, our foundation focuses on providing comprehensive career guidance and accessible healthcare services to those in need.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
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
        <FloatingActionButton/>
        {/* <Footer/> */}
      </body>
    </html>
  );
}
