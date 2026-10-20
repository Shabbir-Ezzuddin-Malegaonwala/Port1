/**
 * Ambient background. Gold behaves like a practical light source in a film
 * frame, not a glow effect — one soft pool from above, one low fill.
 * Server component, so no JS ships for it.
 */
export function Aurora() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden
    >
      <div
        className="absolute -top-[30rem] left-1/2 size-[68rem] -translate-x-1/2 opacity-[0.07] blur-[160px]"
        style={{
          background:
            "radial-gradient(circle, rgb(var(--gold-rgb)) 0%, transparent 62%)",
        }}
      />
      <div
        className="absolute -left-80 bottom-0 size-[46rem] opacity-[0.05] blur-[150px]"
        style={{
          background:
            "radial-gradient(circle, rgb(var(--gold-rgb)) 0%, transparent 65%)",
        }}
      />
    </div>
  );
}
