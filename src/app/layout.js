import { DM_Sans } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Navbar";

const dm_sans = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Home | Anime List Website",
  description: "Indonesian Anime Liist Webste",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${dm_sans.className} bg-color-dark`}>
        <NavBar />
        {/* This children conain the website content */}
        {children}
      </body>
    </html>
  );
}
