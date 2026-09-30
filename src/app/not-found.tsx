import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <main className="py-24 sm:py-28 lg:py-32 min-h-screen">
      <Container className="text-center">
        <h1 className="text-6xl sm:text-7xl font-bold text-white mb-6">404</h1>
        <p className="text-xl text-gray-400 mb-8">Page not found</p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl hover:from-cyan-500 hover:to-blue-500 transition-all"
        >
          <ArrowLeft className="h-5 w-5" />
          Back to Home
        </Link>
      </Container>
    </main>
  );
}