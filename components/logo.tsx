import { cn } from '@/lib/utils'

/**
 * Logo — two layered rounded squares with a filled overlap region.
 *
 * The design mirrors the reference SVG (200×200 viewBox):
 *   - Back square:   x=40 y=40  w=100 h=100 rx=22  stroke only
 *   - Front square:  x=80 y=80  w=100 h=100 rx=22  stroke only
 *   - Overlap fill:  x=80 y=80  w=60  h=60  rx=18  filled
 */
export const Logo = ({ className }: { className?: string }) => {
    return (
        <svg
            className={cn('size-7 w-7', className)}
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Back square — outline only */}
            <rect
                x="40"
                y="40"
                width="100"
                height="100"
                rx="22"
                stroke="currentColor"
                strokeWidth="12"
            />

            {/* Front square — outline only */}
            <rect
                x="80"
                y="80"
                width="100"
                height="100"
                rx="22"
                stroke="currentColor"
                strokeWidth="12"
            />

            {/* Overlap fill — solid square where the two frames intersect */}
            <rect
                x="80"
                y="80"
                width="60"
                height="60"
                rx="18"
                fill="currentColor"
            />
        </svg>
    )
}

/**
 * LogoStroke — same two-square composition but the overlap region
 * is an outline instead of a fill (for lighter / outlined contexts).
 */
export const LogoStroke = ({ className }: { className?: string }) => {
    return (
        <svg
            className={cn('size-7 w-7', className)}
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Back square */}
            <rect
                x="40"
                y="40"
                width="100"
                height="100"
                rx="22"
                stroke="currentColor"
                strokeWidth="12"
            />

            {/* Front square */}
            <rect
                x="80"
                y="80"
                width="100"
                height="100"
                rx="22"
                stroke="currentColor"
                strokeWidth="12"
            />

            {/* Overlap region — stroke only variant */}
            <rect
                x="80"
                y="80"
                width="60"
                height="60"
                rx="18"
                stroke="currentColor"
                strokeWidth="2"
            />
        </svg>
    )
}