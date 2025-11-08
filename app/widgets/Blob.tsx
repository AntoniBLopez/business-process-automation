interface BlobProps {
  className?: string;
  innerClassName?: string;
}

const DEFAULT_INNER =
  "bg-primary/50 opacity-80 blur-[120px] shadow-[0_0_200px_120px_rgba(37,99,235,0.35)]";

export function Blob({ className = "", innerClassName = DEFAULT_INNER }: BlobProps) {
  return (
    <div className={`pointer-events-none select-none ${className}`.trim()} aria-hidden="true">
      <div className={`h-full w-full rounded-full ${innerClassName}`} />
    </div>
  );
}
