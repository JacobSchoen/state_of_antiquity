import { getProducts } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const products = await getProducts();

  return (
    <div>
      <h1 className="text-7xl font-extrabold">
        Hello I&apos;m
        <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
          Devin
        </span>
      </h1>
      <p className="mt-3 text-xl text-grey-600">
        Hello everyone! check out my Products!
      </p>
      <h2 className="mt-24 font-bold text-gray-700 text-3xl">My Products</h2>
      <div className="mt-5 grid grid-cols-1 md:rid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <Link
            href={`/products/${product.slug}`}
            key={product._id}
            className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition"
          >
            {/* {product.image && (
              <Image
                src={product.image[0]}
                alt={product.name}
                width={750}
                height={300}
                className="object-cover rounded-lg border border-gray-500"
              />
            )} */}

            <div className="mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
              {product.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
