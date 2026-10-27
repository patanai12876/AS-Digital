import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "AS Digital | Digital Services & Professional Training in Lahore",
  description:
    "AS Digital helps businesses grow with digital services and offers practical digital marketing training in Lahore and live online.",
  openGraph: {
    title: "AS Digital | Digital Services & Professional Training",
    description:
      "Explore digital services for your business and practical training courses with AS Digital in Lahore.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${montserrat.variable}`}
    >
      <body>{children}<FloatingWhatsApp /></body>
    </html>
  );
}
