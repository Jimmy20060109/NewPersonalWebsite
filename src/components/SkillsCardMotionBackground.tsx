import { useId } from 'react'
import './SkillsCardMotionBackground.css'

type Snippet = {
  text: string
  top: string
  left?: string
  right?: string
  size?: number
  variant?: 'fine' | 'medium' | 'bold' | 'glyph'
  rotate?: number
}

// Math + code-flavoured snippets, scattered like blueprint annotations.
// Order doesn't matter — they're absolutely positioned.
const snippets: Snippet[] = [
  { text: 'Σ = π', top: '6%', right: '10%', size: 13, variant: 'medium' },
  { text: '∫{…}', top: '9%', left: '24%', size: 13, variant: 'fine' },
  { text: '{function()}  Σᵢ = ∫ r²dx', top: '12%', left: '36%', size: 14, variant: 'bold' },
  { text: '{…}  ..}', top: '20%', left: '28%', size: 12, variant: 'fine' },
  { text: 'π', top: '28%', left: '16%', size: 30, variant: 'glyph' },
  { text: 'bitwise (¬c)', top: '26%', right: '18%', size: 12, variant: 'medium' },
  { text: 'πᵢ = (x², x³)', top: '34%', right: '4%', size: 12, variant: 'medium' },
  { text: 'Σ ⌐ ≤ p̄', top: '78%', left: '4%', size: 12, variant: 'medium' },
  { text: '{…}\nfunction()', top: '60%', left: '6%', size: 12, variant: 'fine' },
  { text: '{function()}', top: '70%', left: '32%', size: 14, variant: 'bold' },
  { text: 'M = Σⱼ!', top: '86%', left: '40%', size: 13, variant: 'medium' },
  { text: '{…}', top: '74%', right: '22%', size: 12, variant: 'fine' },
  { text: 'Π ⌐ Σ', top: '86%', right: '38%', size: 13, variant: 'medium' },
  { text: 'Σ = π', top: '4%', left: '60%', size: 12, variant: 'fine' },
  { text: '∂ƒ/∂x', top: '52%', right: '8%', size: 12, variant: 'medium' },
]

const ratio = Math.sqrt(3) // isometric horizontal-to-vertical ratio (≈1.732)

const rhombus = (cx: number, cy: number, h: number) =>
  `${cx},${cy - h} ${cx + h * ratio},${cy} ${cx},${cy + h} ${cx - h * ratio},${cy}`

// Build an "isometric box" outline — top rhombus + visible left & right faces.
const isoBox = (cx: number, cy: number, h: number, depth: number) => ({
  top: rhombus(cx, cy, h),
  left: `${cx - h * ratio},${cy} ${cx - h * ratio},${cy + depth} ${cx},${cy + h + depth} ${cx},${cy + h}`,
  right: `${cx + h * ratio},${cy} ${cx + h * ratio},${cy + depth} ${cx},${cy + h + depth} ${cx},${cy + h}`,
})

const SkillsCardMotionBackground = () => {
  const rawId = useId()
  const uid = rawId.replace(/[^a-zA-Z0-9]/g, '')
  const isoPatternId = `scb-iso-${uid}`
  const fadeMaskId = `scb-fade-${uid}`

  // Decorative "architectural" iso blocks scattered for visual interest.
  const blocks = [
    isoBox(120, 280, 38, 38),
    isoBox(700, 130, 30, 30),
    isoBox(80, 110, 22, 22),
  ]

  return (
    <div className="skills-card-bg" aria-hidden="true">
      {/* Warm light source bleeding in from upper-left */}
      <div className="skills-card-bg__glow" />

      {/* Vertical line "scaffolding" hint on the far left */}
      <div className="skills-card-bg__rule skills-card-bg__rule--left" />

      <svg
        className="skills-card-bg__svg"
        viewBox="0 0 800 400"
        preserveAspectRatio="xMidYMid slice"
        role="presentation"
        focusable="false"
      >
        <defs>
          {/* Tile of crossed lines forms a continuous isometric grid. */}
          <pattern
            id={isoPatternId}
            x="0"
            y="0"
            width="48"
            height="27.7128"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 0 0 L 48 27.7128 M 0 27.7128 L 48 0"
              stroke="currentColor"
              strokeWidth="0.5"
              fill="none"
              opacity="0.55"
            />
          </pattern>

          {/* Soft radial mask so the grid intensifies in the centre and
              fades toward the edges, mimicking the spotlight in the mockup. */}
          <radialGradient id={fadeMaskId} cx="50%" cy="50%" r="65%">
            <stop offset="0%" stopColor="#fff" stopOpacity="1" />
            <stop offset="65%" stopColor="#fff" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0.25" />
          </radialGradient>

          <mask id={`scb-mask-${uid}`} maskUnits="userSpaceOnUse">
            <rect width="800" height="400" fill={`url(#${fadeMaskId})`} />
          </mask>
        </defs>

        <g mask={`url(#scb-mask-${uid})`}>
          <rect
            x="0"
            y="0"
            width="800"
            height="400"
            fill={`url(#${isoPatternId})`}
            className="skills-card-bg__iso-fill"
          />

          {/* Bold framed isometric squares stacked at the centre */}
          <g className="skills-card-bg__frames">
            <polygon
              points={rhombus(400, 200, 110)}
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              opacity="0.75"
            />
            <polygon
              points={rhombus(400, 200, 78)}
              fill="none"
              stroke="currentColor"
              strokeWidth="0.9"
              opacity="0.55"
            />
            <polygon
              points={rhombus(400, 200, 46)}
              fill="none"
              stroke="currentColor"
              strokeWidth="0.7"
              opacity="0.4"
            />
          </g>

          {/* Auxiliary iso blocks (3D-looking) */}
          <g className="skills-card-bg__blocks" opacity="0.55">
            {blocks.map((b, i) => (
              <g key={`b${i}`}>
                <polygon
                  points={b.left}
                  fill="currentColor"
                  fillOpacity="0.06"
                  stroke="currentColor"
                  strokeWidth="0.6"
                />
                <polygon
                  points={b.right}
                  fill="currentColor"
                  fillOpacity="0.12"
                  stroke="currentColor"
                  strokeWidth="0.6"
                />
                <polygon
                  points={b.top}
                  fill="currentColor"
                  fillOpacity="0.18"
                  stroke="currentColor"
                  strokeWidth="0.7"
                />
              </g>
            ))}
          </g>
        </g>

        {/* Circuit / PCB trace pattern down the right edge */}
        <g className="skills-card-bg__circuit" opacity="0.55">
          <path
            d="M 760 30 L 760 70 L 720 70 L 720 110 L 770 110 L 770 150 L 740 150
               M 750 190 L 750 230 L 780 230 L 780 270 L 730 270 L 730 310 L 770 310 L 770 360"
            stroke="currentColor"
            strokeWidth="0.6"
            fill="none"
          />
          {[
            [760, 30],
            [770, 110],
            [740, 150],
            [750, 190],
            [780, 230],
            [730, 270],
            [770, 360],
          ].map(([x, y], i) => (
            <circle
              key={`pad${i}`}
              cx={x}
              cy={y}
              r="2"
              fill="currentColor"
              fillOpacity="0.7"
            />
          ))}
        </g>
      </svg>

      {/* Math / code annotations */}
      <div className="skills-card-bg__text-layer">
        {snippets.map((s, i) => (
          <span
            key={`s${i}`}
            className={`skills-card-bg__snippet skills-card-bg__snippet--${
              s.variant ?? 'medium'
            }`}
            style={{
              top: s.top,
              left: s.left,
              right: s.right,
              fontSize: `${s.size ?? 13}px`,
              transform: s.rotate ? `rotate(${s.rotate}deg)` : undefined,
            }}
          >
            {s.text}
          </span>
        ))}
      </div>

      {/* Subtle inner darkening overlay so titles & button stay readable */}
      <div className="skills-card-bg__overlay" />
    </div>
  )
}

export default SkillsCardMotionBackground
