import Link from "next/link";

type Props = {
  params: { name: string };
};

export default async function Page({ params }: Props) {
  return (
    <div>
      <h1 className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
        {params.name}
      </h1>
      <div className="flex items-center gap-5 text-sm text-gray-600">
        <Link href={"/studioShop"} className="hover:underline">
          For the Studio
        </Link>
        <Link href={"/paintingShop"} className="hover:underline">
          For Paintings
        </Link>
      </div>

      {/* <div className="mt-5 grid grid-cols-1 md:rid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <Link
            href={`/products/${product.slug}`}
            key={product._id}
            className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition"
          >
            {product.images && (
              <Image
                src={product.images[0]}
                alt={product.name}
                width={750}
                height={300}
                className="object-cover rounded-lg border border-gray-500"
              />
            )}

            <div className="mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
              {product.name}
            </div>
          </Link>
        ))}
        </div> */}
    </div>
  );
}
