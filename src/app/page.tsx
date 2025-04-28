import Image from "next/image";
import { Suspense } from "react";
import { searchProducts } from "@/lib/api";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import ProductCard from "@/components/ProductCard";
import NoResults from "@/components/NoResults";

export default async function Home({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  const query = searchParams.q || "";
  const products = query ? await searchProducts(query) : null;

  return (
    <>
      <Header activePage="products" />
      <main className="min-h-screen bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <SearchBar />

          {query && (
            <div className="mt-8">
              <p className="text-base">
                Total results count:{" "}
                <span className="text-[#285f9d] font-bold">
                  {products?.total || 0}
                </span>
              </p>

              {products?.products.length === 0 ? (
                <NoResults />
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 justify-items-center">
                  {products?.products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </>
  );
}
