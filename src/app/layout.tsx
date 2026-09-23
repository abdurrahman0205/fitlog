import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/shared/NavBar";
import { inter } from "@/fonts/Fonts";



export const metadata: Metadata = {
  title: "FitLog",
  description: "Stay Fit, Stay Healthy",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`} >
      <body className= {`${inter.className} min-h-full flex flex-col`} >
        
        {/* Navbar */}
        <NavBar />
        
        <main>{children}</main>


      </body>
    </html>
  );
}
