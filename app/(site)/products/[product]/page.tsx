import { getProduct } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
  params: { product: string };
};

export default async function Project({ params }: Props) {
  const slug = params.product;
  const product = await getProduct(slug);

  return (
    <div>
      <header className="flex items-center justify-between">
        <h1 className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-5xl drop-shadow font-extrabold">
          {product.name}
        </h1>
      </header>

      <div className="text-lg text-gray-700 mt-5">
        <PortableText value={product.details} />
      </div>

      {/* <Image
        src={product.image[0]}
        alt={product.name}
        width={1920}
        height={1080}
        className="mt-10 border-2 border-gray-700 object-cover rounded-xl"
      /> */}
    </div>
  );
}
