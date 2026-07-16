import { Nav } from "@/components/Nav";
import { ProjectCard } from "@/components/ProjectCard";
import { projects, contact } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <section
          id="top"
          className="mx-auto max-w-3xl px-6 py-20 sm:py-28"
        >
          <p className="font-mono text-xs tracking-widest text-accent/70">
            {"// PORTFOLIO_v1"}
          </p>
          <h1 className="mt-2 font-mono text-4xl font-semibold tracking-tight text-accent sm:text-5xl">
            Ross Ziegler
          </h1>
          <p className="mt-4 text-lg text-muted">
            CS grad (Chapman, &apos;26) building data systems with an eye for
            game design. I like turning raw event data into a story, whether
            that&apos;s a database schema, a query, or a level a player
            actually wants to finish.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 font-mono text-sm">
            <a
              href={contact.resumeUrl}
              className="rounded border border-accent bg-accent/10 px-5 py-2.5 text-accent transition-colors hover:bg-accent/20"
            >
              Resume
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded border border-accent/30 px-5 py-2.5 text-fg/90 transition-colors hover:border-accent/60"
            >
              GitHub
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded border border-accent/30 px-5 py-2.5 text-fg/90 transition-colors hover:border-accent/60"
            >
              LinkedIn
            </a>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-3xl px-6 py-16">
          <h2 className="font-mono text-sm tracking-widest text-accent/70">
            {"[ PROJECTS ]"}
          </h2>
          <div className="mt-8 space-y-6">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>

        <section id="interests" className="mx-auto max-w-3xl px-6 py-16">
          <h2 className="font-mono text-sm tracking-widest text-accent/70">
            {"[ WHY GAMES AND DATA ]"}
          </h2>
          <div className="mt-6 space-y-4 text-fg/90">
            <p>
              I spent my capstone as the level designer on{" "}
              <span className="font-medium text-accent-soft">
                Wizard King
              </span>
              , which meant thinking constantly about the line between a
              level that&apos;s hard and a level that&apos;s frustrating: the
              exact moment a player decides to quit instead of trying again.
            </p>
            <p>
              That question stuck with me, so the{" "}
              <span className="font-medium text-accent-soft">
                Game Analytics Database
              </span>{" "}
              project was my attempt to actually measure it: I planted a
              ragequit mechanic into simulated match data (the odds of
              abandoning a match scale with repeated deaths to the same
              ability) and then wrote the SQL to recover that pattern from
              the data alone, without ever telling the query it was there. It
              found it: a 2.6x higher quit rate on repeat deaths.
            </p>
            <p>
              Same underlying question (where does a player give up, and
              why) approached first as a designer, then as a data person.
              That combination is what I want to keep building on.
            </p>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-3xl px-6 py-16">
          <h2 className="font-mono text-sm tracking-widest text-accent/70">
            {"[ CONTACT ]"}
          </h2>
          <p className="mt-4 text-fg/90">
            Best reached at{" "}
            <a
              href={`mailto:${contact.email}`}
              className="font-medium text-accent underline underline-offset-4"
            >
              {contact.email}
            </a>
            , or through{" "}
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-accent underline underline-offset-4"
            >
              LinkedIn
            </a>
            .
          </p>
        </section>
      </main>
      <footer className="mx-auto w-full max-w-3xl px-6 py-10 font-mono text-xs text-muted">
        © {new Date().getFullYear()} Ross Ziegler
      </footer>
    </>
  );
}
