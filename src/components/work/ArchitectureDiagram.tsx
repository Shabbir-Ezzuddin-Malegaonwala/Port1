import { ChevronDown } from "lucide-react";
import type { ArchitectureLayer } from "@/lib/types";

type Props = {
  caption: string;
  layers: ArchitectureLayer[];
};

/** Inline SVG-free diagram: stacked layers of labelled nodes. Scales to phone width. */
export function ArchitectureDiagram({ caption, layers }: Props) {
  return (
    <figure className="panel overflow-hidden bg-elevated/50 p-6 md:p-9">
      <div className="space-y-2">
        {layers.map((layer, i) => (
          <div key={layer.label}>
            <div className="grid gap-3 border border-hairline bg-canvas/60 p-4 md:grid-cols-[132px_1fr] md:items-center md:gap-5 md:p-5">
              <p className="hud text-gold">{layer.label}</p>
              <ul className="flex flex-wrap gap-2">
                {/* Node labels repeat across layers by design, so key on position. */}
                {layer.nodes.map((node, n) => (
                  <li
                    key={`${node}-${n}`}
                    className="border border-hairline bg-elevated px-3 py-1.5 text-[0.8125rem] text-ink/85"
                  >
                    {node}
                  </li>
                ))}
              </ul>
            </div>

            {i < layers.length - 1 && (
              <div className="flex justify-center py-1" aria-hidden>
                <ChevronDown className="size-4 text-gold/50" />
              </div>
            )}
          </div>
        ))}
      </div>

      <figcaption className="mt-6 border-t border-hairline pt-5 text-sm text-muted">
        {caption}
      </figcaption>
    </figure>
  );
}
