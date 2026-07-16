import Image from "next/image";
import type { Project } from "@/lib/data";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rounded-lg border border-accent/20 p-6 transition-shadow hover:shadow-[0_0_20px_-6px_rgba(34,211,238,0.35)]">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="font-mono text-lg font-semibold text-accent">
          {project.name}
        </h3>
        <span className="font-mono text-xs text-muted">{project.period}</span>
      </div>

      <div className="mt-2 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-accent/30 px-2.5 py-0.5 font-mono text-xs text-accent-soft"
          >
            {tech}
          </span>
        ))}
      </div>

      <p className="mt-4 text-fg/90">{project.summary}</p>

      <ul className="mt-4 space-y-2 text-sm text-muted">
        {project.highlights.map((point) => (
          <li key={point} className="flex gap-2">
            <span aria-hidden className="text-accent/50">
              »
            </span>
            <span>{point}</span>
          </li>
        ))}
      </ul>

      {project.youtubeId && (
        <div className="mt-4 aspect-video overflow-hidden rounded-md border border-accent/20">
          <iframe
            className="h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${project.youtubeId}`}
            title={`${project.name} trailer`}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}

      {project.screenshots && project.screenshots.length > 0 && (
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {project.screenshots.map((src) => (
            <div
              key={src}
              className="relative aspect-video overflow-hidden rounded-md border border-accent/20 bg-fg/5"
            >
              <Image
                src={src}
                alt={`${project.name} screenshot`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      )}

      <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm font-medium">
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline underline-offset-4"
          >
            View on GitHub →
          </a>
        )}
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline underline-offset-4"
          >
            Try the live API →
          </a>
        )}
      </div>
    </article>
  );
}
