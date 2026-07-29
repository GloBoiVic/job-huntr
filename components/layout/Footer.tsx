import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-white">
      <div className="max-w-[1440px] mx-auto px-8 py-12">
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-3">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.png" alt="JobHuntr" width={32} height={32} className="rounded-[8px]" />
              <span className="text-lg font-bold text-text-darkest">JobHuntr</span>
            </Link>
            <p className="text-sm text-text-muted max-w-xs">
              AI-powered job hunting assistant. Find, score, and research jobs — all in one place.
            </p>
          </div>
          <div className="flex gap-12">
            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-semibold text-text-primary">Product</h4>
              <Link href="/find-jobs" className="text-sm text-text-secondary hover:text-accent transition-colors">
                Find Jobs
              </Link>
              <Link href="/dashboard" className="text-sm text-text-secondary hover:text-accent transition-colors">
                Dashboard
              </Link>
              <Link href="/profile" className="text-sm text-text-secondary hover:text-accent transition-colors">
                Profile
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-semibold text-text-primary">Legal</h4>
              <span className="text-sm text-text-secondary">Privacy Policy</span>
              <span className="text-sm text-text-secondary">Terms of Service</span>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-border">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} JobHuntr. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
