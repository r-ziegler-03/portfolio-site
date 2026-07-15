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
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Ross Ziegler
          </h1>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            CS grad (Chapman, &apos;26) building data systems with an eye for
            game design. I like turning raw event data into a story — whether
            that&apos;s a database schema, a query, or a level a player
            actually wants to finish.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-sm font-medium">
            <a
              href={contact.resumeUrl}
              className="rounded-full bg-zinc-900 px-5 py-2.5 text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
            >
              Resume
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-zinc-300 px-5 py-2.5 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:hover:bg-zinc-900"
            >
              GitHub
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-zinc-300 px-5 py-2.5 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:hover:bg-zinc-900"
            >
              LinkedIn
            </a>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-3xl px-6 py-16">
          <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
          <div className="mt-8 space-y-6">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>

        <section id="interests" className="mx-auto max-w-3xl px-6 py-16">
          <h2 className="text-2xl font-semibold tracking-tight">
            Why games and data
          </h2>
          <div className="mt-6 space-y-4 text-zinc-700 dark:text-zinc-300">
            <p>
              I spent my capstone as the level designer on{" "}
              <span className="font-medium text-zinc-900 dark:text-zinc-100">
                Wizard King
              </span>
              , which meant thinking constantly about the line between a
              level that&apos;s hard and a level that&apos;s frustrating — the
              exact moment a player decides to quit instead of trying again.
            </p>
            <p>
              That question stuck with me, so the{" "}
              <span className="font-medium text-zinc-900 dark:text-zinc-100">
                Game Analytics Database
              </span>{" "}
              project was my attempt to actually measure it: I planted a
              ragequit mechanic into simulated match data — the odds of
              abandoning a match scale with repeated deaths to the same
              ability — and then wrote the SQL to recover that pattern from
              the data alone, without ever telling the query it was there. It
              found it: a 2.6x higher quit rate on repeat deaths.
            </p>
            <p>
              Same underlying question — where does a player give up, and
              why — approached first as a designer, then as a data person.
              That combination is what I want to keep building on.
            </p>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-3xl px-6 py-16">
          <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            Best reached at{" "}
            <a
              href={`mailto:${contact.email}`}
              className="font-medium underline underline-offset-4"
            >
              {contact.email}
            </a>
            , or through{" "}
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-4"
            >
              LinkedIn
            </a>
            .
          </p>
        </section>
      </main>
      <footer className="mx-auto w-full max-w-3xl px-6 py-10 text-sm text-zinc-500 dark:text-zinc-400">
        © {new Date().getFullYear()} Ross Ziegler
      </footer>
    </>
  );
}
