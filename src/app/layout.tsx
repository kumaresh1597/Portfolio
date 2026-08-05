import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kumaresan M | Backend Engineer · Node.js · AWS · SaaS",
  description: "Backend engineer with 2+ years building production SaaS platforms, AWS pipelines, multi-tenant HIPAA architecture, and IoT edge systems. Based in Bangalore, open to remote.",
  keywords: ["Backend Engineer", "Node.js", "AWS", "DICOM", "IoT", "Raspberry Pi", "Cloud Engineer", "Bangalore", "TypeScript", "GraphQL", "Apollo GraphQL", "FastAPI", "SaaS", "multi-tenant", "HIPAA", "LLM", "Gemini", "Inngest", "Redis", "SQLAlchemy"],
  openGraph: {
    title: "Kumaresan M | Backend Engineer · Node.js · AWS · SaaS",
    description: "Full-stack SaaS engineer — multi-tenant radiology platform, HIPAA auth architecture, real-time AI pipelines, IoT edge devices.",
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
