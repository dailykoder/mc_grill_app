import Link from "next/link";

export default function Footer() {
  return (
    <footer className="container mx-auto mb-4 px-6 md:px-10">
      <div className="flex flex-col gap-4 sm:items-center sm:justify-center lg:flex-row lg:items-stretch lg:justify-between">
        <div className="flex items-center justify-center gap-2 text-xl font-bold">
          <h2 className="text-red-500">김밥볼</h2>
          <h2 className="text-2xl font-bold">MC GRILL BOWL</h2>
        </div>
        <div>
          <p className="text-muted-foreground text-sm">
            © 2025 MC Grill. All rights reserved.
          </p>
        </div>
        <div className="flex gap-2">
          <Link
            href="/privacy-policy"
            className="text-muted-foreground text-sm"
          >
            Privacy Policy
          </Link>
          <Link href="/tos" className="text-muted-foreground text-sm">
            Terms of Service
          </Link>
          <Link href="/careers" className="text-muted-foreground text-sm">
            Careers
          </Link>
        </div>
      </div>
    </footer>
  );
}
