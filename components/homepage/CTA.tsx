import Link from "next/link";

export function CTA() {
  return (
    <section className="px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 bg-background">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col items-center text-center p-6 sm:p-8 md:p-12 rounded-2xl bg-gradient-to-br from-accent to-[#4A2EC5]">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Ready to stop searching and start matching?
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-white/80 max-w-lg">
            Create your free account, set up your profile, and let AI find your next role — in under 5 minutes.
          </p>
          <Link
            href="/login"
            className="mt-6 sm:mt-8 px-6 py-3 text-sm font-medium rounded-lg bg-white text-accent hover:bg-white/90 transition-colors"
          >
            Get Started Free
          </Link>
        </div>
      </div>
    </section>
  );
}
