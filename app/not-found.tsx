"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 text-center">
      <h1 className="text-7xl font-extrabold text-[#00B5B8]">404</h1>
      <h2 className="text-2xl md:text-3xl mt-4 font-semibold">
        Page Not Found
      </h2>
      <p className="text-[#777] mt-2 max-w-md">
        Sorry, the page you're looking for doesn’t exist or has been moved.
      </p>

      <Link
        href="/"
        className="mt-6 inline-flex items-center gap-2 bg-gradient-to-r from-[#00B5B8] to-[#4CD964] text-black font-medium px-5 py-3 rounded-lg transition hover:opacity-90"
      >
        <ArrowLeft size={18} />
        Back to Home
      </Link>
    </div>
  );
}
