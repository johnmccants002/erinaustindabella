import "./globals.css";

const title = "Erin Austin | DaBella Placerville";
const description =
  "Connect with Erin Austin, your DaBella representative in Placerville, CA.";

export const metadata = {
  title,
  description,
  icons: {
    icon: "/dabella.svg",
    shortcut: "/dabella.svg",
    apple: "/dabella.svg",
  },
  openGraph: {
    title,
    description,
    type: "website",
    images: [
      {
        url: "/dabella.svg",
        width: 262,
        height: 57,
        alt: "DaBella logo with Erin Austin contact preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/dabella.svg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
