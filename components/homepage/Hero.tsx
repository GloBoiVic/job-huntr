import Link from "next/link";

export function Hero() {
  return (
    <section className="flex flex-col items-center justify-center px-8 pt-24 pb-16 text-center">
      <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-medium rounded-full bg-accent-light text-accent">
        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
        AI-Powered Job Matching
      </div>
      <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight text-text-darkest">
        Stop searching.
        <br />
        <span className="text-accent">Start getting matched.</span>
      </h1>
      <p className="max-w-xl mt-6 text-lg text-text-secondary">
        JobHuntr finds jobs, scores them against your profile, and researches every company — so you
        just click apply.
      </p>
      <div className="flex items-center gap-4 mt-10">
        <Link
          href="/login"
          className="px-6 py-3 text-sm font-medium text-white rounded-lg bg-accent hover:bg-accent-dark transition-colors"
        >
          Get Started Free
        </Link>
        <Link
          href="/find-jobs"
          className="px-6 py-3 text-sm font-medium rounded-lg border border-border text-text-primary hover:bg-surface-secondary transition-colors"
        >
          Find Your First Match
        </Link>
      </div>
    </section>
  );
}
