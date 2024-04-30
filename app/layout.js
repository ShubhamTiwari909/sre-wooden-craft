import Footer from "@/components/Footer";
import "./globals.css";
import Header from "@/components/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="mt-24">
        {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
