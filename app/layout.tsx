import "./globals.css";

import { Footer, NavBar } from "@components";

export const metadata = {
  title: "CarHub",
  description: "Discover the world's best cars!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='relative'>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
