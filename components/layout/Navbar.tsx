"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-border">
      <div className="flex items-center justify-between h-16 px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="JobHuntr"
            width={40}
            height={40}
            className="rounded-[10px]"
          />
          <span className="text-[19px] font-bold text-text-darkest">
            JobHuntr
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/dashboard"
            className="text-sm font-medium text-text-dark hover:text-accent transition-colors"
          >
            Dashboard
          </Link>
          <Link
            href="/find-jobs"
            className="text-sm font-medium text-text-dark hover:text-accent transition-colors"
          >
            Find Jobs
          </Link>
          <Link
            href="/profile"
            className="text-sm font-medium text-text-dark hover:text-accent transition-colors"
          >
            Profile
          </Link>
          <Link
            href="/login"
            className="px-4 py-2 text-sm font-medium text-white rounded-md bg-accent hover:bg-accent-dark transition-colors"
          >
            Start for free
          </Link>
        </nav>

        <button
          type="button"
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-md text-text-dark hover:text-accent hover:bg-surface-secondary transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border">
          <nav className="flex flex-col px-4 py-4 gap-1">
            <Link
              href="/dashboard"
              className="px-4 py-3 text-sm font-medium text-text-dark hover:text-accent hover:bg-surface-secondary rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link
              href="/find-jobs"
              className="px-4 py-3 text-sm font-medium text-text-dark hover:text-accent hover:bg-surface-secondary rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Find Jobs
            </Link>
            <Link
              href="/profile"
              className="px-4 py-3 text-sm font-medium text-text-dark hover:text-accent hover:bg-surface-secondary rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Profile
            </Link>
            <Link
              href="/login"
              className="mt-2 px-4 py-3 text-sm font-medium text-center text-white rounded-md bg-accent hover:bg-accent-dark transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Start for free
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
