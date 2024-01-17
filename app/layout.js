import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navbar/page";
import Footer from "./footer/page";
import { ToastContainer } from "react-toastify";
import Whatsapp from "./components/Whatsapp/Whatsapp";
import Head from "next/head";
import Script from "next/script";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mozisha",

  description:
    "Unlocking African Talents for Global Success. Welcome to Mozisha, Your Gateway to Premium Talents to Supercharge Business Growth.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta
          name="google-site-verification"
          content="Lp0VRsvcy7dFnbasOW4pGobR46Xvy1MA-T7cL2eCbGU"
        />
        <link rel="icon" href="/favicon.png" />

        {/* Move the Tawk.to script here */}
        <Script
          type="text/javascript"
          src="https://embed.tawk.to/65a10fc60ff6374032bf4458/1hjuisdne"
          async
        />

        {/* <!-- HTML Meta Tags --> */}
        <title>Mozisha</title>
        <meta
          name="description"
          content="Unlocking African Talents for Global Success. Welcome to Mozisha, Your Gateway to Premium Talents to Supercharge Business Growth."
        />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://mozisha.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Mozisha" />
        <meta
          property="og:description"
          content="Unlocking African Talents for Global Success. Welcome to Mozisha, Your Gateway to Premium Talents to Supercharge Business Growth."
        />
        <meta property="og:image" content="" />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="mozisha.com" />
        <meta property="twitter:url" content="https://mozisha.com/" />
        <meta name="twitter:title" content="Mozisha" />
        <meta
          name="twitter:description"
          content="Unlocking African Talents for Global Success. Welcome to Mozisha, Your Gateway to Premium Talents to Supercharge Business Growth."
        />
        <meta name="twitter:image" content="" />

        {/* <!-- Meta Tags Generated via https://www.opengraph.xyz --></meta> */}
      </head>

      <body className={inter.className}>
        <NavBar />
        {children}
        <Whatsapp />
        <Footer />
      </body>
    </html>
  );
}
