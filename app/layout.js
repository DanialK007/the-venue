import Head from "next/head";
import "./globals.css";

export const metadata = {
  title: "The Venue - Restaurant",
  description:
    "The Venue is a restaurant that offers a variety of different types of food and services. The restaurant is designed to be flexible and flexible enough to accommodate any number of different types of restaurant items and to be flexible enough to accommodate any number of different types of restaurant items and to be flexible enough to accommodate any number of different types of restaurant items and to be flexible enough to accommodate any numbe.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>{/* Import Google Fonts via link tag */}</Head>
      <body className="antialiased myFont">{children}</body>
    </html>
  );
}
