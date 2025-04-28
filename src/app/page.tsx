import Image from "next/image";
import { Suspense } from "react";
import { searchProducts } from "@/lib/api";
import SearchBar from "@/components/SearchBar";
import ProductCard from "@/components/ProductCard";

export default async function Home({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  const query = searchParams.q || "";
  const products = query ? await searchProducts(query) : null;

  return (
    <main className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Search Products</h1>

        <SearchBar />

        {query && (
          <div className="mt-8">
            <p className="text-gray-600 mb-4">
              Found {products?.total || 0} results for "{query}"
            </p>

            {products?.products.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-xl text-gray-600">
                  No products found. Try a different search term.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products?.products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
