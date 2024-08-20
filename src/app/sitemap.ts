import { baseUrl } from "@/lib/constants";
export default async function sitemap() {


  const routes = ["", "/about"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes];
}
