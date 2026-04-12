import { cn } from '@/lib/utils'

/**
 * Logo — two layered rounded squares with a filled overlap region.
 *
 * Updated design (200×200 viewBox):
 *   - Back square:   path-based rounded rect, stroke only
 *   - Front square:  path-based rounded rect, stroke only
 *   - Overlap fill:  specific path-based intersection region, filled
 */
export const Logo = ({ className }: { className?: string }) => {
    return (
        <svg
            className={cn('size-7 w-7', className)}
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clipPath="url(#clip0_logo)">
                {/* Back square */}
                <path
                    d="M105 35H55C43.9543 35 35 43.9543 35 55V105C35 116.046 43.9543 125 55 125H105C116.046 125 125 116.046 125 105V55C125 43.9543 116.046 35 105 35Z"
                    stroke="currentColor"
                    strokeWidth="10"
                />
                {/* Front square */}
                <path
                    d="M145 75H95C83.9543 75 75 83.9543 75 95V145C75 156.046 83.9543 165 95 165H145C156.046 165 165 156.046 165 145V95C165 83.9543 156.046 75 145 75Z"
                    stroke="currentColor"
                    strokeWidth="10"
                />
                {/* Overlap fill */}
                <path
                    d="M80 94C80 85.7157 86.7157 79 95 79H120V105C120 113.284 113.284 120 105 120H80V94Z"
                    fill="currentColor"
                />
            </g>
            <defs>
                <clipPath id="clip0_logo">
                    <rect width="200" height="200" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}

/**
 * LogoStroke — same path-based composition but the overlap region
 * is an outline (stroke) instead of a solid fill.
 */
export const LogoStroke = ({ className }: { className?: string }) => {
    return (
        <svg
            className={cn('size-7 w-7', className)}
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clipPath="url(#clip0_logo_stroke)">
                {/* Back square */}
                <path
                    d="M105 35H55C43.9543 35 35 43.9543 35 55V105C35 116.046 43.9543 125 55 125H105C116.046 125 125 116.046 125 105V55C125 43.9543 116.046 35 105 35Z"
                    stroke="currentColor"
                    strokeWidth="10"
                />
                {/* Front square */}
                <path
                    d="M145 75H95C83.9543 75 75 83.9543 75 95V145C75 156.046 83.9543 165 95 165H145C156.046 165 165 156.046 165 145V95C165 83.9543 156.046 75 145 75Z"
                    stroke="currentColor"
                    strokeWidth="10"
                />
                {/* Overlap stroke */}
                <path
                    d="M80 94C80 85.7157 86.7157 79 95 79H120V105C120 113.284 113.284 120 105 120H80V94Z"
                    stroke="currentColor"
                    strokeWidth="2"
                />
            </g>
            <defs>
                <clipPath id="clip0_logo_stroke">
                    <rect width="200" height="200" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}