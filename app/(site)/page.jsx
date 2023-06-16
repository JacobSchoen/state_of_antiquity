"use client";
import { getProducts } from "@/sanity/sanity-utils";

import Image from "next/image";
import Link from "next/link";

import getStripe from "../../lib/getStripe";

export default async function Home() {
  const products = await getProducts();

  const handleCheckout = async () => {
    const stripe = await getStripe();

    // let lineItems = products.map((item) => {
    //   return {
    //     price_data: {
    //       currency: "usd",
    //       product_data: {
    //         name: item.name,
    //       },
    //       unit_amount: item.price * 100,
    //     },
    //     adjustable_quantity: {
    //       enabled: true,
    //       minimum: 1,
    //     },
    //     quantity: item.quantity,
    //   };
    // });

    let lineItems = [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "T-shirt",
          },
          unit_amount: 2000,
          tax_behavior: "exclusive",
        },
        adjustable_quantity: {
          enabled: true,
          minimum: 1,
          maximum: 10,
        },
        quantity: 2,
      },
    ];

    console.log(lineItems);

    const res = await fetch("/api/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ lineItems }),
    });

    const data = await res.json();
    stripe.redirectToCheckout({ sessionId: data.session.id });
  };

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
      </div>

      <div className="btn-container">
        <button type="button" className="btn" onClick={handleCheckout}>
          Pay with Stripe
        </button>
      </div>
    </div>
  );
}
