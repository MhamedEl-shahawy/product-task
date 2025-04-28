import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#292759] text-white py-14 px-[120px]">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-8">
            <Image
              src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/321510aa-9ce2-43f2-8ea5-56c7747c9a92"
              alt="NHC Logo"
              width={31}
              height={32}
            />
            <Image
              src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/eaef4ed2-288a-4c04-b98e-e7e979be32c5"
              alt="Vision 2030 Logo"
              width={48}
              height={32}
            />
          </div>
          <p className="font-['Abel'] text-sm leading-6">
            All rights reserved © 2022 - Developed and operated by National
            Housing
          </p>
        </div>
      </div>
    </footer>
  );
}
