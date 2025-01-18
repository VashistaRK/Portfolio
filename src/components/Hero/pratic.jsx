const HeroBgAnimation = () => (
  <div className="w-[600px] h-[500px] relative">
    <svg
      className="absolute"
      width="600"
      height="500"
      viewBox="0 0 600 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main glowing path */}
      <path
        d="M50 250 Q300 50 550 250 T50 250"
        stroke="url(#gradient1)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      >
        <animate
          attributeName="stroke-dasharray"
          from="0,600"
          to="600,0"
          dur="5s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke-dashoffset"
          from="0"
          to="600"
          dur="5s"
          repeatCount="indefinite"
        />
      </path>

      {/* Secondary glowing path */}
      <path
        d="M50 350 Q300 450 550 350 T50 350"
        stroke="url(#gradient2)"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      >
        <animate
          attributeName="stroke-dasharray"
          from="0,600"
          to="600,0"
          dur="7s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke-dashoffset"
          from="0"
          to="600"
          dur="7s"
          repeatCount="indefinite"
        />
      </path>

      {/* Subtle glowing particle */}
      <circle cx="50" cy="250" r="4" fill="#F46737">
        <animateMotion dur="5s" repeatCount="indefinite">
          <mpath xlinkHref="#main-path" />
        </animateMotion>
      </circle>

      {/* Gradient definitions */}
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#945DD6" />
          <stop offset="100%" stopColor="#F46737" />
        </linearGradient>
        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#13ADC7" />
          <stop offset="100%" stopColor="#945DD6" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

export default HeroBgAnimation;
