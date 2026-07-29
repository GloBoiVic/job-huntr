import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  return (
    <header className="flex items-center justify-between w-full h-16 px-6 bg-white border-b border-border">
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
      <nav className="flex items-center gap-6">
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
    </header>
  );
}
