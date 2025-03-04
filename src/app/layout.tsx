import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/ui/navbar";
import WebsiteMounted from "@/lib/isMounted";
import { ThemeProvider } from "@/provider/theme-provider";
import Footer from "@/components/ui/footer";
import { siteConfigs } from "@/config/site";

const interSans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: "200",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: siteConfigs.name,
    template: `%s | ${siteConfigs.name}`,
  },
  description: siteConfigs.description,
  authors: siteConfigs.authors,
  keywords: siteConfigs.keywords.join(", "),
  manifest: siteConfigs.manifest,
  creator: siteConfigs.creator,
  openGraph: siteConfigs.openGraph,
  publisher: siteConfigs.publisher,
  icons: siteConfigs.icons,
  referrer: "origin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interSans.variable} antialiased text-[#fafafa] bg-[#0C0C0C] relative text-sm sm:text-base  max-h-svh`}
      >
        <WebsiteMounted>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <div className="max-w-9xl mx-auto lg:px-11 px-6 pb-8 pt-3">
              <Navbar />
                <main>
                    {children}
                </main>
              <Footer />
            </div>
          </ThemeProvider>
        </WebsiteMounted>
      </body>
    </html>
  );
}
