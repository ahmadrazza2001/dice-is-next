import { Inter } from "next/font/google";
import "../utils/scss/globals.scss";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/footer/Footer";
// import ClientSideProviderTest from "@/components/clientSideProviderTest";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dice Is Next",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <ClientSideProviderTest> */}
        <div className="main-content">
          <Navbar />
          {children}
          <Footer />
        </div>
        {/* </ClientSideProviderTest> */}
      </body>
    </html>
  );
}
