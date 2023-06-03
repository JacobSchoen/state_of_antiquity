import { getProducts } from "@/sanity/schemas/sanity-utils"

export default async function Home() {
  const products = await getProducts();

  return (
    <div>{products.map((product) => (
      <div key={product._id}>
        {product.name}
        </div>
    ))}</div>
  )
}
