import { Manrope } from "next/font/google";
import "./globals.css";
import TanStackProvider from "@/providers/TanStackProvider";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.variable}>
      <body>
        <TanStackProvider>
          <main>{children}</main>
        </TanStackProvider>
      </body>
    </html>
  );
}
