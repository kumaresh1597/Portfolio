import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kumaresan M | Backend & Cloud Engineer",
  description: "Backend and cloud engineer with 2+ years building production Node.js, AWS, and IoT systems. Based in Bangalore, open to remote.",
  keywords: ["Backend Engineer", "Node.js", "AWS", "DICOM", "IoT", "Raspberry Pi", "Cloud Engineer", "Bangalore"],
  openGraph: {
    title: "Kumaresan M | Backend & Cloud Engineer",
    description: "Production backend systems — AWS pipelines, DICOM imaging, IoT edge devices.",
    url: "https://portfolio-olive-ten-46.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased selection:bg-indigo-500/30`}>
        <ThemeProvider defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
