import { techIcons } from "../data/techIcons";

/**
 * A technology pill: brand logo (when known) + name. Logos use the brand's own
 * colour, softened with a saturation filter so they read as somewhat coloured
 * rather than fully vibrant. `className` supplies the pill styling so the same
 * badge fits both the Skills grid and the project cards.
 */
export default function TechBadge({ name, className = "" }) {
  const icon = techIcons[name];
  const src = icon
    ? `https://cdn.simpleicons.org/${icon.slug}${icon.color ? `/${icon.color}` : ""}`
    : null;

  return (
    <span className={`inline-flex items-center gap-1.5 ${className}`}>
      {src && (
        <img
          src={src}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="h-3.5 w-3.5 shrink-0 [filter:saturate(0.7)]"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      )}
      {name}
    </span>
  );
}
