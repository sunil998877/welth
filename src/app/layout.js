import { ClerkProvider } from '@clerk/nextjs';
import './globals.css';
import { Inter } from "next/font/google";
import Header from '@/components/header';
import Footer from '@/components/footer';


const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({children}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
        <link rel="icon" href="/logo-sm.png" sizes="any" />
        </head>
        <body className={`${inter.className}`}>
          <Header />
          <main >{children}</main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
