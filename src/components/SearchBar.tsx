"use client";

import Image from "next/image";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  disabled?: boolean;
}

export default function SearchBar({
  value,
  onChange,
  onSubmit,
  disabled = false,
}: SearchBarProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!disabled) {
      onSubmit();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search keyword"
        className={`w-full h-[50px] px-4 pr-12 rounded-lg bg-[#f3f3f3] border border-[#006483] text-sm text-black placeholder:text-[#7f7f7f] font-['Inter'] ${
          disabled ? "opacity-70" : ""
        }`}
        disabled={disabled}
      />
      <button
        type="submit"
        className={`absolute right-4 top-1/2 -translate-y-1/2 ${
          disabled ? "opacity-70 cursor-not-allowed" : ""
        }`}
        aria-label="Search"
        disabled={disabled}
      >
        <Image src="/Search.svg" alt="" width={24} height={24} />
      </button>
    </form>
  );
}
