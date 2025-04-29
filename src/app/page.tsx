import Image from "next/image";
import { Suspense } from "react";
import { searchProducts } from "@/lib/api";
import SearchBar from "@/components/SearchBar";
import ProductCard from "@/components/ProductCard";
import Header from "@/components/Header";
import NoResults from "@/components/NoResults";
import Footer from "@/components/Footer";

export default async function Home({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  const query = searchParams?.q ?? "";
  const products = !!query ? await searchProducts(query) : null;

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header activePage="products" />

      <main className="flex-1 flex flex-col items-center pt-[120px] pb-16 px-4">
        <div className="w-full max-w-[995px] mx-auto">
          <h2 className="text-[#285f9d] text-lg font-medium font-['Inter'] mb-6 text-center">
            Search products by keyword
          </h2>

          <SearchBar />

          {!!query && (
            <div className="mt-8">
              <p className="text-black text-base font-['Inter']">
                Total results count:{" "}
                <span className="text-[#285f9d] font-bold">
                  {products?.total || 0}
                </span>
              </p>

              {products?.products.length === 0 ? (
                <NoResults />
              ) : (
                <div className="grid w-full  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 justify-items-center">
                  {products?.products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
