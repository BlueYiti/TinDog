import { cn } from "../../utils/cn";
import googlePlay from "../../assets/stores/google_play.png";
import appStore from "../../assets/stores/app_store.png";

interface DownloadBadgeProps {
  store: "google-play" | "app-store";
  className?: string;
}

export function DownloadBadge({ store, className }: DownloadBadgeProps) {
  const isGoogle = store === "google-play";
  const label = isGoogle ? "Google Play" : "App Store";
  const href = isGoogle
    ? "https://play.google.com/store"
    : "https://www.apple.com/app-store/";
  const src = isGoogle ? googlePlay : appStore;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-block transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/50 rounded-lg",
        className
      )}
      aria-label={`Download on ${label}`}
    >
      <img
        src={src}
        alt={`${label} download badge`}
        className="h-12 md:h-14 w-auto rounded-2xl"
        loading="lazy"
      />
    </a>
  );
}