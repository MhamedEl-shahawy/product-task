import Image from "next/image";
import Link from "next/link";
import { getProduct } from "@/lib/api";
import Header from "@/components/Header";
import StarRating from "@/components/StarRating";

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await getProduct(params.id);

  return (
    <>
      <Header activePage="products" />
      <main className="min-h-screen bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-medium text-[#285f9d] text-center mb-6">
            {product.title}
          </h1>

          <div className="max-w-2xl mx-auto mb-10">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src={product.thumbnail}
                alt={product.title}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-10">
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="w-24">Price:</span>
                <span className="text-[#285f9d] font-medium">
                  ${product.price}
                </span>
              </div>
              <div className="flex items-center">
                <span className="w-24">Rating:</span>
                <StarRating rating={product.rating} />
              </div>
              <div className="flex items-center">
                <span className="w-24">Brand:</span>
                <span className="text-[#285f9d] font-medium hover:underline">
                  {product.brand}
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center">
                <span className="w-48">Discount Percentage:</span>
                <span className="text-[#285f9d] font-medium">
                  {product.discountPercentage}%
                </span>
              </div>
              <div className="flex items-center">
                <span className="w-48">Stock:</span>
                <span className="text-[#285f9d] font-medium">
                  {product.stock}
                </span>
              </div>
              <div className="flex items-center">
                <span className="w-48">Category:</span>
                <span className="text-[#285f9d] font-medium capitalize hover:underline">
                  {product.category}
                </span>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-10">
            <h2 className="text-xl font-medium mb-4">Product Description</h2>
            <p className="text-[#7f7f7f] text-sm leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-medium mb-4">Product Images</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {product.images.slice(0, 4).map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-square rounded-lg overflow-hidden"
                >
                  <Image
                    src={image}
                    alt={`${product.title} - Image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
