import { AlternateURLs } from "next/dist/lib/metadata/types/alternative-urls-types";

export type SEOParams = {
  title: string;
  description: string;
  imageUrl: string;
  canonicalUrl?: string;
  keywords?: string[];
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  type?: "website" | "article" | "book" | "profile";
  siteName?: string;
  alternates?: AlternateURLs;
};
