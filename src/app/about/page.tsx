import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Image
            src="/logo.png"
            alt="Company Logo"
            width={200}
            height={80}
            className="mx-auto mb-8"
          />
          <h1 className="text-4xl font-bold mb-4">About Our Company</h1>
          <p className="text-xl text-gray-600">
            Leading the way in product innovation and customer satisfaction
          </p>
        </div>

        <div className="prose prose-lg mx-auto">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          <h2>Our Mission</h2>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>

          <h2>Our Values</h2>
          <ul>
            <li>Quality First</li>
            <li>Customer Satisfaction</li>
            <li>Innovation</li>
            <li>Integrity</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
