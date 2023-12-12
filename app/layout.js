import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navbar/page";
import Footer from "./footer/page";
import { ToastContainer } from "react-toastify";
import {  AuthProvider } from "./context/Context";
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
      {/* <AuthProvider> */}
        <body className={inter.className}>
          <NavBar />

          {children}

          <Footer />
        </body>
      {/* </AuthProvider> */}
    </html>
  );
}
