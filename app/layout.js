import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navbar/page";
import Footer from "./footer/page";
import { ToastContainer } from "react-toastify";
import Whatsapp from "./components/Whatsapp/Whatsapp";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mozisha",
  description:
    "Mozisha, a welcoming home for talents to achieve their full potential",
};

export default function RootLayout({ children }) {


  

  return (
    <html lang="en">
      <ToastContainer autoClose={2000} />
      <head>
        <link rel='icon' href='/favicon.png'/>
      </head>
        <body className={inter.className}>
          <NavBar />

          {children}
       <Whatsapp/>
          <Footer />
        </body>
    </html>
  );
}
