import Link from "next/link";
import Container from "@/components/ui/Container";

export default function NotFound() {
  return (
    <Container className="py-20">
      <div className="mx-auto max-w-lg text-center">
        <h1 className="text-6xl font-extrabold text-gray-900">404</h1>
        <p className="mt-4 text-lg text-gray-600">
          The page you are looking for does not exist or may have been moved.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/"
            className="rounded-lg bg-primary-700 px-6 py-3 text-sm font-medium text-white hover:bg-primary-600"
          >
            Go Home
          </Link>
          <Link
            href="/generators"
            className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Browse Generators
          </Link>
        </div>
      </div>
    </Container>
  );
}
