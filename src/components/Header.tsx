import Link from "next/link";
import Image from "next/image";

type HeaderProps = {
  activePage: "products" | "about";
};

export default function Header({ activePage }: HeaderProps) {
  return (
    <header className="w-full h-20 bg-[#d9d9d9]">
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center">
        <Image
          src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2eb464fc-a170-452d-a67c-8927e867d327"
          alt="Company Logo"
          width={58}
          height={60}
          className="mr-10"
        />
        <nav className="flex gap-8">
          <Link
            href="/"
            className={`font-['Abel'] text-base leading-5 ${
              activePage === "products"
                ? "text-[#285f9d] border-b-2 border-[#285f9d]"
                : "text-black"
            }`}
          >
            Products
          </Link>
          <Link
            href="/about"
            className={`font-['Abel'] text-base leading-5 ${
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
