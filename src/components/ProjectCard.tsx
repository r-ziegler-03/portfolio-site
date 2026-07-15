import Image from "next/image";
import type { Project } from "@/lib/data";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rounded-lg border border-zinc-200 p-6 dark:border-zinc-800">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="text-lg font-semibold">{project.name}</h3>
        <span className="text-sm text-zinc-500 dark:text-zinc-400">
          {project.period}
        </span>
      </div>

      <div className="mt-2 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
          >
            {tech}
          </span>
        ))}
      </div>

      <p className="mt-4 text-zinc-700 dark:text-zinc-300">
        {project.summary}
      </p>

      <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
        {project.highlights.map((point) => (
          <li key={point} className="flex gap-2">
            <span aria-hidden className="text-zinc-400 dark:text-zinc-600">
              —
            </span>
            <span>{point}</span>
          </li>
        ))}
      </ul>

      {project.youtubeId && (
        <div className="mt-4 aspect-video overflow-hidden rounded-md">
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
              className="relative aspect-video overflow-hidden rounded-md bg-zinc-100 dark:bg-zinc-800"
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

      {project.repoUrl && (
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-sm font-medium text-zinc-900 underline underline-offset-4 dark:text-zinc-100"
        >
          View on GitHub →
        </a>
      )}
    </article>
  );
}
