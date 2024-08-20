import { Metadata } from "next";
import { baseUrl } from "./constants";
import { SEOParams } from "@/types";

const defaultKeywords = ["Made in Algeria", "Algeria"];
/**
 * Generates the SEO metadata for a webpage.
 *
 * @param {SEOParams} params - The parameters for generating the SEO metadata.
 * @param {string} params.title - The title of the webpage.
 * @param {string} params.description - The description of the webpage.
 * @param {string} params.imageUrl - The URL of the image for the webpage.
 * @param {string} [params.canonicalUrl] - The canonical URL of the webpage.
 * @param {string[]} [params.keywords] - The keywords for the webpage.
 * @param {string} [params.author="Moncef Aissaoui"] - The author of the webpage.
 * @param {("website" | "article" | "book" | "profile")} [params.type="website"] - The type of the webpage.
 * @param {string} [params.siteName="Selance"] - The name of the website.
 * @param {AlternateURLs} [params.alternates] - The alternate URLs for the webpage.
 * @return {Metadata} The generated SEO metadata.
 */
export function generateSEOMetadata({
  title,
  description,
  imageUrl,
  canonicalUrl,
  keywords,
  author = "Moncef Aissaoui",
  type = "website",
  siteName = "Made in Algeria",
  alternates = {
    canonical: baseUrl,
    languages: {
      "en-US": baseUrl,
    },
  },
}: SEOParams): Metadata {
  const finalKeywords = keywords ? [...defaultKeywords, ...keywords] : defaultKeywords;

  const metadata: Metadata = {
    icons: {
      icon: "/favicon.ico",
      apple: "/apple-icon.png",
    },
    alternates,
    title,
    creator: author,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type,
      locale: "en_US" ,
      siteName,
      url: canonicalUrl || baseUrl,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@Selanceteam",
      images: [imageUrl],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    keywords: finalKeywords.join(", "),
    authors: [{ name: author }],
    category: "Technology",
    other: {
      "google-site-verification": "YOUR_GOOGLE_VERIFICATION_CODE",
    },
  };

  return metadata;
}
