interface BlobProps {
  className?: string;
  colorClassName?: string;
}

export function Blob({ className = "", colorClassName = "bg-primary/20" }: BlobProps) {
  return (
    <div
      className={`pointer-events-none select-none overflow-hidden ${className}`.trim()}
      aria-hidden="true"
    >
      <div className={`h-full w-full rounded-full ${colorClassName}`} />
    </div>
  );
}
