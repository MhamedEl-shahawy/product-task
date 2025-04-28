import Link from "next/link";
import Image from "next/image";

type HeaderProps = {
  activePage: "products" | "about";
};

export default function Header({ activePage }: HeaderProps) {
  return (
    <header className="w-full h-20 bg-[#d9d9d9] px-6">
      <div className="max-w-7xl mx-auto h-full flex items-center">
        <div className="mr-10">
          <Image
            src="/company_logo.svg"
            alt="Company Logo"
            width={58}
            height={60}
            priority
          />
        </div>
        <nav className="flex gap-8">
          <Link
            href="/"
            className={`font-['Abel'] text-base leading-5 py-1 ${
              activePage === "products"
                ? "text-[#285f9d] border-b-2 border-[#285f9d]"
                : "text-black"
            }`}
          >
            Products
          </Link>
          <Link
            href="/about"
            className={`font-['Abel'] text-base leading-5 py-1 ${
              activePage === "about"
                ? "text-[#285f9d] border-b-2 border-[#285f9d]"
                : "text-black"
            }`}
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
