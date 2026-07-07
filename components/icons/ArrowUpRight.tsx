/**
 * Inline "open in new / external" arrow.
 * Replaces the U+2197 (↗) glyph, which some mobile browsers render as a
 * colour emoji. Sized in `em` so it tracks the surrounding text and inherits
 * colour via `currentColor`.
 */
export default function ArrowUpRight({
    className,
}: {
    className?: string;
}) {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 18 18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className={className}
            style={{ verticalAlign: "-0.05em" }}
        >
            <path d="M5 13 13 5" />
            <path d="M6 5h7v7" />
        </svg>
    );
}
