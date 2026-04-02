import "./globals.css";

export const metadata = {
  title: "Erin Austin | DaBella Sacramento",
  description:
    "Connect with Erin Austin, your DaBella representative in Sacramento, CA.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
