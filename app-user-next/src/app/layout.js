import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NHPL Customer Portal",
  description: "Luxury Travel, Hotels, and Dining SuperApp",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://unpkg.com/@phosphor-icons/web" async></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
