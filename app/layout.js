import "./globals.css";

export const metadata = {
  title: "The Venue - Restaurant",
  description:
    "The Venue is a versatile restaurant offering a variety of food and services designed to accommodate diverse dining needs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased myFont`}>
        {children}
      </body>
    </html>
  );
}