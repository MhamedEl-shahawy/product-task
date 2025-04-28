import Image from "next/image";

export default function NoResults() {
  return (
    <div className="flex flex-col items-center mt-10">
      <Image
        src="/no_result.svg"
        alt="no result"
        width={156}
        height={161}
        className="mb-2"
      />
      <p className="text-[#7f7f7f] text-base text-center leading-[27px]">
        No results for your search!
        <br />
        Try another keyword
      </p>
    </div>
  );
}
