'use client';

import Foot from "@/components/Foot";
import Navbar from "@/components/Navbar";
import Treat from "@/components/Treat";

export default function Treatment() {
  return (
    <main className="relative">
      <Navbar />
      <Treat />
      <Foot/>
    </main>
  );
}
