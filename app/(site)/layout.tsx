import Link from "next/link";
import "../globals.css";
import { getPages } from "@/sanity/sanity-utils";

export const metadata = {
  title: "State of Antiquity",
  description: "Website for State of Antiquity",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pages = [
    { name: "State Of  Antiquity", route: "/" },
    { name: "About", route: "/about" },
    { name: "Shop", route: "/shop" },
    { name: "Blog", route: "/blog" },
  ];

  return (
    <html lang="en">
      <body className="max-w-3xl mx-auto py-10">
        <header className="flex items-center justify-between">
          <Link
            href="/"
            className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 bg-clip-text text-transparent text-lg font-bold"
          >
            State of Antiquity
          </Link>

          <div className="flex items-center gap-5 text-sm text-gray-600">
            {pages.map((page) => (
              <Link href={page.route} className="hover:underline">
                {page.name}
              </Link>
            ))}
          </div>
        </header>

        <main className="py-20">{children}</main>
      </body>
    </html>
  );
}
