import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navbar/page";
import Footer from "./footer/page";
import { ToastContainer } from "react-toastify";
import Whatsapp from "./components/Whatsapp/Whatsapp";
import Script from "next/script";
import { ClerkProvider } from "@clerk/nextjs";
import {ToastProvider} from './components/providers/toaster-provider'
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mozisha",

  description:
    "Unlocking African Talents for Global Success. Welcome to Mozisha, Your Gateway to Premium Talents to Supercharge Business Growth.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <meta
            name="google-site-verification"
            content="Lp0VRsvcy7dFnbasOW4pGobR46Xvy1MA-T7cL2eCbGU"
          />
          <link rel="icon" href="/favicon.png" />

          <Script
            type="text/javascript"
            src="https://embed.tawk.to/65a10fc60ff6374032bf4458/1hjuisdne"
            async
          />
        </head>
        <body className={inter.className}>
          <NavBar />
          <ToastProvider/>
          {children}
          <Whatsapp />
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
