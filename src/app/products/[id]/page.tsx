import Image from "next/image";
import Link from "next/link";
import { getProduct } from "@/lib/api";
import Header from "@/components/Header";

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
          <Link
            href="/"
            className="inline-flex items-center text-[#285f9d] hover:underline mb-8"
          >
            ← Back to search
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src={product.thumbnail}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, index) => (
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

            <div className="space-y-6">
              <h1 className="text-3xl font-medium text-[#285f9d]">
                {product.title}
              </h1>
              <p className="text-[#7f7f7f]">{product.description}</p>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Price:</span>
                  <span className="text-[#285f9d] font-medium">
                    ${product.price}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Discount:</span>
                  <span className="text-[#285f9d] font-medium">
                    {product.discountPercentage}%
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Stock:</span>
                  <span className="text-[#285f9d] font-medium">
                    {product.stock}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Category:</span>
                  <span className="text-[#285f9d] font-medium capitalize">
                    {product.category}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Brand:</span>
                  <span className="text-[#285f9d] font-medium">
                    {product.brand}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
