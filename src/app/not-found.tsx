import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="mx-auto grid max-w-2xl place-items-center px-6 py-40 text-center sm:px-10">
      <span className="hud text-gold">Error 404</span>

      <p className="tabular mt-6 text-[clamp(4rem,14vw,9rem)] leading-none text-gold/20">
        404
      </p>

      <h1 className="mt-4 text-[clamp(1.75rem,4vw,2.5rem)] font-semibold tracking-[-0.03em]">
        This route
        <span className="accent"> does not resolve.</span>
      </h1>

      <p className="mt-5 max-w-md text-balance text-muted">
        The page you asked for is not here. It may have been renamed, or the
        link that sent you was wrong.
      </p>

      <Link
        href="/"
        className="group mt-10 inline-flex items-center gap-2 bg-gold px-6 py-3 text-sm font-medium text-canvas transition-transform duration-200 hover:scale-[0.98]"
      >
        <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
        Back home
      </Link>
    </div>
  );
}
