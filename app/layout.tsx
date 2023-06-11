import HomeHeader from "@/components/HomeHeader";
import HomeFooter from "@/components/HomeFooter";
import "./globals.css";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"], weight: "500" });

export const metadata = {
  title: "Aniyo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={raleway.className}>
        <header>
          <HomeHeader />
        </header>

        <main className=" text-center">{children}</main>

        <footer>
          <HomeFooter />
        </footer>
      </body>
    </html>
  );
}
