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
    <form onSubmit={handleSubmit} className="relative w-full">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search keyword"
        className="w-full h-[50px] px-4 pr-12 rounded-lg bg-[#f3f3f3] border border-[#006483] text-sm text-black placeholder:text-[#7f7f7f] font-['Inter']"
      />
      <button
        type="submit"
        className="absolute right-4 top-1/2 -translate-y-1/2"
        aria-label="Search"
      >
        <Image src="/Search.svg" alt="" width={24} height={24} />
      </button>
    </form>
  );
}
