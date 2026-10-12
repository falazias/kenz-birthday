import { ExternalLink, MapPin } from "lucide-react";
import { cn } from "cn";
import { MAPS_URL, STREET } from "@/lib/party";

export function AddressLink({ className }: { className?: string }) {
  return (
    <a
      href={MAPS_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-start gap-2 text-left font-semibold underline decoration-rink decoration-2 underline-offset-4 transition-colors hover:text-rink",
        className,
      )}
    >
      <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden />
      <span>
        {STREET}
        <span className="mt-0.5 flex items-center gap-1 font-heading text-sm text-current">
          Google Maps
          <ExternalLink className="size-3.5" aria-hidden />
        </span>
      </span>
    </a>
  );
}

export function MapsButton({ className }: { className?: string }) {
  return (
    <a
      href={MAPS_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      <MapPin className="size-4" aria-hidden />
      Open in Google Maps
    </a>
  );
}
