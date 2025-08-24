const HeroBgAnimation = () => (
  <div className="w-[600px] h-[500px] flex justify-center items-center">
    <svg
      width="600"
      height="500"
      viewBox="0 0 600 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Define main circular path */}
      <path
        id="mainPath"
        d="M300,250
           m-200,0
           a200,200 0 1,0 400,0
           a200,200 0 1,0 -400,0"
        stroke="url(#gradient1)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeDasharray="1260"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="0"
          to="1260"
          dur="6s"
          repeatCount="indefinite"
        />
      </path>

      {/* Moving glowing particle */}
      <circle r="6" fill="#F46737">
        <animateMotion dur="6s" repeatCount="indefinite" rotate="auto">
          <mpath xlinkHref="#mainPath" />
        </animateMotion>
      </circle>

      {/* Second path for variation */}
      <path
        id="secondaryPath"
        d="M300,250
           m-150,0
           a150,150 0 1,0 300,0
           a150,150 0 1,0 -300,0"
        stroke="url(#gradient2)"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeDasharray="942"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="0"
          to="942"
          dur="9s"
          repeatCount="indefinite"
        />
      </path>

      {/* Second particle */}
      <circle r="4" fill="#13ADC7">
        <animateMotion dur="9s" repeatCount="indefinite" rotate="auto">
          <mpath xlinkHref="#secondaryPath" />
        </animateMotion>
      </circle>

      {/* Gradients */}
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
