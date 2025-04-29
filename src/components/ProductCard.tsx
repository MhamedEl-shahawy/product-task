import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="w-[301px] h-[312px] bg-white rounded-[10px] shadow-[0px_4px_13px_rgba(0,0,0,0.08)] overflow-hidden">
      <div className="relative h-[150px] mx-2 mt-2 ">
        <Image
          src={product.thumbnail}
          alt={product.title}
          fill
          className="object-cover rounded-[10px]"
          sizes="284px"
          priority
        />
      </div>
      <div className="p-3 flex flex-col gap-1.5">
        <h3 className="text-[#285f9d] text-xl font-medium font-['Inter'] leading-6 line-clamp-1">
          {product.title}
        </h3>
        <p className="text-[#7f7f7f] text-base line-clamp-2 font-['Inter'] leading-[19px] min-h-[38px]">
          {product.description}
        </p>
        <div className="w-full flex justify-between items-center gap-3">
          <p className="text-black text-base font-['Inter'] leading-[19px]">
            Price :{" "}
            <span className="text-[#285f9d] font-medium">${product.price}</span>
          </p>
          <Link
            href={`/products/${product.id}`}
            className="inline-block w-[85px] h-10 bg-[#285f9d] text-white text-base rounded-[5px] text-center leading-10 mt-3 font-['Inter'] hover:bg-[#1d4673] transition-colors"
          >
            More
          </Link>
        </div>
      </div>
    </div>
  );
}
