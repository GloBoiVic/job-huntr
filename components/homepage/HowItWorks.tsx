const steps = [
  {
    step: "1",
    title: "Set up your profile",
    description: "Fill in your skills, experience, and preferences. Upload your resume and let AI extract the details.",
  },
  {
    step: "2",
    title: "Find jobs instantly",
    description: "Enter a job title and location. Adzuna finds matching roles and GPT-4o scores each one against your profile.",
  },
  {
    step: "3",
    title: "Research & apply",
    description: "Click into any job to see the match breakdown. Hit Research Company for a full AI-generated dossier — then apply with one click.",
  },
];

export function HowItWorks() {
  return (
    <section className="px-8 py-20 bg-background">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-text-darkest">How it works</h2>
          <p className="mt-4 text-lg text-text-secondary">
            Three steps from signup to application.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((item) => (
            <div key={item.step} className="flex flex-col items-center text-center gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent text-white text-lg font-semibold">
                {item.step}
              </div>
              <h3 className="text-base font-semibold text-text-primary">{item.title}</h3>
              <p className="text-sm text-text-secondary max-w-xs leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
