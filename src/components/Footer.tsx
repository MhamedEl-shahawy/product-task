import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#292759] text-white py-12 px-6 md:px-[120px]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col py-2  md:flex-row justify-between items-center border-t  bd-gray-20 gap-6 md:gap-0">
          <div className="flex items-center gap-8">
            <Image src="/NHC.svg" alt="NHC Logo" width={31} height={32} />
            <Image
              src="/vision2030-logo.svg"
              alt="Vision 2030 Logo"
              width={48}
              height={32}
            />
          </div>
          <p className="font-['Abel'] text-sm leading-6 text-center md:text-right">
            All rights reserved © 2022 - Developed and operated by National
            Housing
          </p>
        </div>
      </div>
    </footer>
  );
}
