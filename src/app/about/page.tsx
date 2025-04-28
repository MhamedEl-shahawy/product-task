import Header from "@/components/Header";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <Header activePage="about" />
      <main className="min-h-screen bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex justify-center mb-16">
            <Image
              src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e1071df3-9a34-455d-8074-f384b75f3b10"
              alt="NHC Logo"
              width={242}
              height={250}
            />
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-[#285f9d] text-base leading-[31px] mb-4">
                About NHC National Housing Company
              </h2>
              <p className="font-['Abel'] text-base leading-[31px]">
                NHC was established in 2016 under Royal Decree No. 7262, on
                8/2/1437 AH to be the investment arm of the initiatives and
                programs of the Ministry of Municipal and Rural Affairs and
                Housing in the real estate, residential and commercial
                sectors...
              </p>
            </section>

            <section>
              <h2 className="text-base leading-[31px] mb-4">
                National Housing Strategy
              </h2>
              <p className="font-['Abel'] text-base leading-[31px]">
                The NHC Strategy aims for the Company to be an enabler of the
                real estate supply system by empowering the private sector to
                develop the real estate market...
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
