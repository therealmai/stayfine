import ClientOnly from "./components/ClientOnly";
import RegisterModal from "./components/modals/RegisterModal";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import { Inter, Roboto } from "next/font/google";
import ToasterProvider from "./providers/ToasterProvider";

// Instantiate Font
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "StayFine",
  description: "Airbnb inspired",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientOnly>
          <ToasterProvider/>
          <RegisterModal/>
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
