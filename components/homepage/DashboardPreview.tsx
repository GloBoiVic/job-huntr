import Image from "next/image";

export function DashboardPreview() {
  return (
    <section className="px-4 sm:px-6 md:px-8 pb-12 sm:pb-16 md:pb-20">
      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-2xl border border-border overflow-hidden shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]">
          <Image
            src="/images/dashboard-demo.png"
            alt="JobHuntr dashboard preview"
            width={1200}
            height={675}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}
