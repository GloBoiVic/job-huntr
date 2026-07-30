const testimonials = [
  {
    quote:
      "I used to spend hours reading job descriptions and researching companies. JobHuntr does all of that in seconds. The match scores are scarily accurate.",
    name: "Sarah Chen",
    role: "Frontend Engineer",
  },
  {
    quote:
      "The company research dossier alone saved me hours per application. I walk into every interview knowing exactly what they're looking for.",
    name: "Marcus Rivera",
    role: "Full Stack Developer",
  },
  {
    quote:
      "Applied to 12 jobs in one week. Got 4 callbacks. Before JobHuntr I was sending 2-3 apps a week and hearing nothing back.",
    name: "Aisha Patel",
    role: "Backend Engineer",
  },
];

export function Testimonials() {
  return (
    <section className="px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-darkest">Loved by developers</h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-text-secondary">
            Join developers who are landing more interviews with less effort.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col gap-4 p-5 sm:p-6 bg-surface rounded-2xl border border-border shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]"
            >
              <p className="text-sm text-text-primary leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-border">
                <div className="w-8 h-8 rounded-full bg-accent-light text-accent flex items-center justify-center text-xs font-semibold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-medium text-text-primary">{t.name}</p>
                  <p className="text-xs text-text-muted">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
