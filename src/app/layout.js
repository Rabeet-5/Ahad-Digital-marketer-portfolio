import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body  className={poppins.className}>
        {children}
      </body>
    </html>
  );
}