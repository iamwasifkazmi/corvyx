import Image from "next/image";

type LogoProps = {
  className?: string;
  size?: number;
  priority?: boolean;
};

/** Transparent Corvyx mark — no black box */
export function Logo({ className = "", size = 40, priority = false }: LogoProps) {
  return (
    <Image
      src="/logo/logo-clear.png"
      alt="Corvyx"
      width={size}
      height={size}
      priority={priority}
      className={`h-auto w-auto object-contain ${className}`}
      style={{ width: size, height: size }}
    />
  );
}

export function LogoMark({
  className = "",
  size = 40,
  priority = false,
  showWordmark = true,
}: LogoProps & { showWordmark?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Logo size={size} priority={priority} className="shrink-0" />
      {showWordmark && (
        <span className="font-display text-[1.5rem] tracking-[-0.02em] text-ink">
          Corvyx
        </span>
      )}
    </span>
  );
}
