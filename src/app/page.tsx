"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import ProductCard from "@/components/ProductCard";
import NoResults from "@/components/NoResults";
import Spinner from "@/components/Spinner";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

interface SearchResults {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

function SearchResultsComponent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const query = searchParams.get("q") || "";

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [results, setResults] = useState<SearchResults | null>(null);
  const [searchQuery, setSearchQuery] = useState(query);

  useEffect(() => {
    async function fetchResults() {
      if (!query) {
        setResults(null);
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://dummyjson.com/products/search?q=${encodeURIComponent(query)}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch results");
        }

        const data = await response.json();
        setResults(data);
      } catch (err) {
        setError("An error occurred while fetching results. Please try again.");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchResults();
  }, [query]);

  const handleSearch = (newQuery: string) => {
    setSearchQuery(newQuery);

    const params = new URLSearchParams();
    if (newQuery) params.set("q", newQuery);
    router.push(`/?${params.toString()}`);
  };

  return (
    <div className="w-full max-w-[975px] mx-auto">
      <h2 className="text-[#285f9d] text-lg font-medium font-['Inter'] mb-6 text-center">
        Search products by keyword
      </h2>

      <div className="relative">
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          onSubmit={() => handleSearch(searchQuery)}
          disabled={isLoading}
        />
      </div>

      {query && (
        <div className="mt-8">
          <p className="text-black text-base font-['Inter']">
            Total results count:{" "}
            <span className="text-[#285f9d] font-bold">
              {isLoading ? "..." : results?.total || 0}
            </span>
          </p>

          {isLoading ? (
            <div className="mt-12">
              <Spinner size="lg" />
            </div>
          ) : error ? (
            <div className="mt-8 text-center text-red-500 font-['Inter']">
              {error}
            </div>
          ) : results?.products.length === 0 ? (
            <NoResults />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 justify-items-center">
              {results?.products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header activePage="products" />

      <main className="flex-1 flex flex-col items-center pt-[120px] pb-16 px-4">
        <Suspense fallback={<Spinner size="lg" />}>
          <SearchResultsComponent />
        </Suspense>
      </main>
    </div>
  );
}
