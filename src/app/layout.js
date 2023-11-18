import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home | Anime List Website",
  description: "Indonesian Anime Liist Webste",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {/* This children conain the website content */}
        {children}
      </body>
    </html>
  );
}
