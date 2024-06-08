import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next App",
  description: "Next.js starter app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <Navbar />
          {/* main navigation bar if we want to create separate pages bar then we can do it inside pages */}
          {/* <h1>This is the Main Tag</h1> */}
          {/* children will have all the code that we had written */}
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
