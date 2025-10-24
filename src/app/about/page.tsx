import Education from "./_components/education";
import TechStack from "./_components/tech-stack";

export default function Page() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-8 sm:py-12 lg:py-16">
      <div className="w-full space-y-8 sm:space-y-12">
        <TechStack />
        <Education />
      </div>
    </section>
  );
};
