import type { Metadata } from "next";
import { Fraunces, Nunito } from "next/font/google";
import { bakery, getSiteUrl } from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const description =
  "Home bakery in Thornhill, Ontario. Custom buttercream cakes, weekly challah and babka, cookies, and private cake decorating classes. Order by Instagram DM.";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "The Pink Penguin Bakery | Thornhill custom cakes and weekly bakes",
    template: "%s | The Pink Penguin Bakery",
  },
  description,
  applicationName: bakery.name,
  authors: [{ name: bakery.name }],
  keywords: [
    "Thornhill bakery",
    "custom cakes Vaughan",
    "challah Thornhill",
    "babka Toronto",
    "cake decorating class",
    "Pink Penguin Bakery",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "The Pink Penguin Bakery",
    description,
    url: "/",
    siteName: bakery.name,
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Pink Penguin Bakery",
    description,
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Bakery",
  name: bakery.name,
  description,
  image: `${getSiteUrl()}/media/logo.png`,
  url: getSiteUrl(),
  email: bakery.email,
  servesCuisine: "Bakery",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Thornhill",
    addressRegion: "ON",
    addressCountry: "CA",
  },
  areaServed: {
    "@type": "City",
    name: "Thornhill",
  },
  sameAs: [bakery.instagram, bakery.facebook, bakery.threads],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Pink Penguin Bakery menu",
    itemListElement: [
      { "@type": "Offer", price: "10", priceCurrency: "CAD", itemOffered: { "@type": "Product", name: "Plain challah" } },
      { "@type": "Offer", price: "10", priceCurrency: "CAD", itemOffered: { "@type": "Product", name: "Sesame challah" } },
      { "@type": "Offer", price: "12", priceCurrency: "CAD", itemOffered: { "@type": "Product", name: "Raisin challah" } },
      { "@type": "Offer", price: "18", priceCurrency: "CAD", itemOffered: { "@type": "Product", name: "Cinnamon babka" } },
      { "@type": "Offer", price: "18", priceCurrency: "CAD", itemOffered: { "@type": "Product", name: "Chocolate babka" } },
      { "@type": "Offer", price: "10", priceCurrency: "CAD", itemOffered: { "@type": "Product", name: "Babka balls" } },
      { "@type": "Offer", price: "36", priceCurrency: "CAD", itemOffered: { "@type": "Product", name: "Cupcakes, dozen" } },
      { "@type": "Offer", price: "5", priceCurrency: "CAD", itemOffered: { "@type": "Product", name: "Mini cake" } },
      { "@type": "Offer", price: "26", priceCurrency: "CAD", itemOffered: { "@type": "Product", name: "The Sweet Start bundle" } },
      { "@type": "Offer", price: "68", priceCurrency: "CAD", itemOffered: { "@type": "Product", name: "The Friday Faves bundle" } },
      { "@type": "Offer", price: "70", priceCurrency: "CAD", itemOffered: { "@type": "Product", name: "The Treat and Twist bundle" } },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA" className={`${fraunces.variable} ${nunito.variable} h-full antialiased`}>
      <body className="min-h-full bg-cream text-ink">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
