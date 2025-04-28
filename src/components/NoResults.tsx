import Image from "next/image";

export default function NoResults() {
  return (
    <div className="flex flex-col items-center mt-10">
      <Image
        src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0670919f-e533-4243-b005-eecbe0293c30"
        alt=""
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
