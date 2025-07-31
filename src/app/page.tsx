import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-theme(spacing.16))] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
          Welcome to the Spiritual Events Platform
        </h1>
        <p className="mt-3 text-xl text-white-300">
          Connecting devotees through events and seamless donations.
        </p>
        <div className="mt-8 flex justify-center">
          <Button className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-md text-lg font-medium">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
}
