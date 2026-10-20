import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { CaseStudy } from "@/lib/types";

/** Grid span is owned by the parent; the card only fills what it is given. */
export function WorkCard({ study }: { study: CaseStudy }) {
  return (
    <Link
      href={`/work/${study.slug}`}
      className="panel group relative flex h-full flex-col bg-elevated/60 p-7 transition-all duration-500 hover:-translate-y-1 hover:bg-elevated md:p-9"
    >
      {/* Wraps rather than forcing the card wide: some statuses are long. */}
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
        <span className="hud text-gold">{study.index}</span>
        <span className="rule-fade hidden flex-1 sm:block" aria-hidden />
        <span className="hud">{study.status}</span>
      </div>

      <h3 className="mt-6 text-[clamp(1.35rem,2.4vw,1.85rem)] font-semibold leading-tight tracking-[-0.025em]">
        {study.title}
      </h3>
      <p className="accent mt-1.5 text-lg">{study.kicker}</p>

      <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
        {study.summary}
      </p>

      <ul className="mt-6 flex flex-wrap gap-1.5">
        {study.stack.slice(0, 5).map((s) => (
          <li
            key={s}
            className="border border-hairline px-2.5 py-1 text-[0.6875rem] text-muted"
          >
            {s}
          </li>
        ))}
        {study.stack.length > 5 && (
          <li className="border border-hairline px-2.5 py-1 text-[0.6875rem] text-muted">
            +{study.stack.length - 5}
          </li>
        )}
      </ul>

      <span className="mt-7 inline-flex items-center gap-1.5 text-sm font-medium text-gold">
        Read the case study
        <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </Link>
  );
}
