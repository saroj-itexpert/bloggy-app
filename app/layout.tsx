import {Sora} from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable:  "--font-sora",
  subsets: ["latin"],


})

export const metadata = {
  title: "Bloggy- Read Write Learn",
  description: "Read Write Learn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>{metadata?.title}</title>
        <meta>{metadata?.description}</meta> 
      </head>
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
