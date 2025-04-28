"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (query) params.set("q", query);
    router.push(`/?${params.toString()}`);
  };

  return (
    <div className="w-full max-w-[739px] mx-auto">
      <h2 className="text-[#285f9d] text-lg font-medium mb-2">
        Search products by keyword
      </h2>
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search keyword"
          className="w-full h-[50px] px-4 pr-12 rounded-lg bg-[#f3f3f3] border border-[#006483] text-sm"
        />
        <button
          type="submit"
          className="absolute right-4 top-1/2 -translate-y-1/2"
          aria-label="Search"
        >
          <Image src="/Search.svg" alt="search icon" width={24} height={24} />
        </button>
      </form>
    </div>
  );
}
