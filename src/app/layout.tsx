import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/shared/NavBar";
import { inter } from "@/lib/Fonts";
import Footer from "@/components/shared/Footer";
import FitLogProvider from "@/contexts/FitLogContext";
import { ToastContainer } from "react-toastify";



export const metadata: Metadata = {
  title: "FitLog",
  description: "Stay Fit, Stay Healthy",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme ='black'
      className={`h-full antialiased`} >
      <body className={`${inter.className} min-h-full flex flex-col`} >
        <FitLogProvider>

        {/* Navbar */}
        <NavBar />

        <main>{children}</main>

        {/* Footer */}
          <Footer />
          
        </FitLogProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
