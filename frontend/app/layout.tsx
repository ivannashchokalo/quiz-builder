import { Montserrat } from "next/font/google";
import "./globals.css";
import TanStackProvider from "@/providers/TanStackProvider";
import { Metadata } from "next";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Quiz Builder",
  description:
    "A full-stack quiz builder application where users can create, manage, and explore custom quizzes with multiple question types.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body>
        <TanStackProvider>
          <main style={{ minHeight: "100vh" }}>{children}</main>
        </TanStackProvider>
      </body>
    </html>
  );
}
