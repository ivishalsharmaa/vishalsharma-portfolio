import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Vishal Sharma | Full Stack Developer",
  description: "Personal portfolio of Vishal Sharma, an aspiring Full Stack Developer and MERN Stack Developer.",
  keywords: ["Vishal Sharma", "Portfolio", "Full Stack Developer", "MERN Stack", "React", "Next.js"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
      </head>
      <body className="antialiased bg-[#0f172a] text-white selection:bg-purple-500/30">
        <div className="min-h-screen relative selection:bg-cyan-500/30">
          {/* Global Background Elements */}
          <div className="fixed inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-[#0f172a] to-[#0f172a]"></div>
          
          <div className="relative z-10">
            <Navbar />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
