type StoreButtonsProps = {
  appStoreUrl?: string;
  playStoreUrl?: string;
  className?: string;
};

export function StoreButtons({
  appStoreUrl,
  playStoreUrl,
  className = "",
}: StoreButtonsProps) {
  if (!appStoreUrl && !playStoreUrl) return null;

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {appStoreUrl && (
        <a
          href={appStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 rounded-xl bg-ink px-4 py-2.5 text-surface transition hover:bg-ink/90"
          aria-label="Download on the App Store"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
            <path d="M16.365 1.43c0 1.14-.493 2.23-1.292 3.033C14.23 5.3 13.02 5.9 11.76 5.77c-.07-1.16.45-2.32 1.2-3.1.8-.82 2.1-1.42 3.405-1.24zM20.7 17.47c-.5 1.14-.74 1.65-1.39 2.66-.9 1.4-2.17 3.14-3.75 3.16-1.4.02-1.76-.9-3.67-.89-1.9.02-2.3.91-3.7.89-1.58-.02-2.79-1.59-3.7-3-1.85-2.86-3.24-8.08-1.36-11.62.94-1.77 2.62-2.9 4.43-2.93 1.65-.03 3.21 1.1 3.67 1.1.45 0 2.3-1.36 3.88-1.16.66.03 2.52.27 3.71 2.02-3.25 1.76-2.72 6.36.88 7.77z" />
          </svg>
          <span className="text-left leading-tight">
            <span className="block text-[10px] opacity-70">Download on the</span>
            <span className="block text-sm font-semibold">App Store</span>
          </span>
        </a>
      )}
      {playStoreUrl && (
        <a
          href={playStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 rounded-xl border border-line bg-surface px-4 py-2.5 text-ink transition hover:border-purple/30"
          aria-label="Get it on Google Play"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
            <path
              fill="#EA4335"
              d="M3.6 2.2c-.3.2-.5.5-.5.9v17.8c0 .4.2.7.5.9l9.7-9.8L3.6 2.2z"
            />
            <path
              fill="#FBBC04"
              d="M16.1 14.7 13.3 12l-9.7 9.8c.2.1.4.2.6.2.3 0 .6-.1.9-.3l10.9-6.3-.1-.7z"
            />
            <path
              fill="#4285F4"
              d="M20.7 10.7 16.1 8l-2.8 4 2.8 2.7 4.6-2.6c.8-.5.8-1.3 0-1.4z"
            />
            <path
              fill="#34A853"
              d="M13.3 12 16.1 8 5.1 1.7C4.8 1.5 4.5 1.5 4.2 1.6L13.3 12z"
            />
          </svg>
          <span className="text-left leading-tight">
            <span className="block text-[10px] text-muted">Get it on</span>
            <span className="block text-sm font-semibold">Google Play</span>
          </span>
        </a>
      )}
    </div>
  );
}
