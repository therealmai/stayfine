import ClientOnly from "./components/ClientOnly";
import Modal from "./components/modals/Modal";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import { Inter, Roboto } from "next/font/google";

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
          <Modal actionLabel="Submit" title="Hello Modal" isOpen/>
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
