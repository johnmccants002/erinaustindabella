import "./globals.css";

export const metadata = {
  title: "Erin Austin | DaBella Placerville",
  description:
    "Connect with Erin Austin, your DaBella representative in Placerville, CA.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
