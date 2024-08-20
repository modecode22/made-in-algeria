import { Ubuntu_Mono } from "next/font/google";
import { cn } from "@/lib/utils";
import '@/styles/globals.css';
const ubuntuMono = Ubuntu_Mono({ subsets: ["latin"], weight: ["400", "700"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(ubuntuMono.className)}>{children}</body>
    </html>
  );
}
