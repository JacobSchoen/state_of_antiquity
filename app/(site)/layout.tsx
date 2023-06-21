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
      <body className="max-w-3xl mx-auto py-10 bg-bisque		">
        <header className="px-4 py-2 flex items-center justify-between bg-rosybrown border-2 border-gray-500 rounded-full">
          <div className="flex items-center gap-5 text-sm text-gray-600">
            {pages.map((page) => (
              <Link
                href={page.route}
                className="text-lg font-bold hover:underline"
              >
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
