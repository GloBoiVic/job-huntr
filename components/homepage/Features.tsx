const features = [
  {
    title: "Smart Job Matching",
    description:
      "GPT-4o scores every job against your actual skills, experience, and preferences. You see exactly why each role is a match — or isn't.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: "Company Research Agent",
    description:
      "One click and an AI agent browses the company's website, reads their about page, blog, and engineering docs — then builds you a full briefing.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    title: "One-Click Apply",
    description:
      "Every job has a direct apply link. Review the match score, read the dossier, and apply — all without leaving the app.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 2.168a.75.75 0 01.036 1.06L5.58 13.098a.75.75 0 01-1.096.036L2.22 11.256a.75.75 0 011.06-1.06l5.68 5.68 9.322-9.322a.75.75 0 011.06.036z" />
      </svg>
    ),
  },
];

export function Features() {
  return (
    <section className="px-8 py-20 bg-white">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-text-darkest">Everything you need to land the job</h2>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
            JobHuntr handles the research and matching so you can focus on what matters — getting hired.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col gap-4 p-6 bg-surface rounded-2xl border border-border shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent-light text-accent">
                {feature.icon}
              </div>
              <h3 className="text-base font-semibold text-text-primary">{feature.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
