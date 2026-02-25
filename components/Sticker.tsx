export default function Sticker() {
  const points = [];
  const numPoints = 24;
  const outerRadius = 48;
  const innerRadius = 40;
  const centerX = 50;
  const centerY = 50;

  for (let i = 0; i < numPoints * 2; i++) {
    const radius = i % 2 === 0 ? outerRadius : innerRadius;
    const angle = (i * Math.PI) / numPoints;
    const x = centerX + radius * Math.sin(angle);
    const y = centerY - radius * Math.cos(angle);
    points.push(`${x.toFixed(2)},${y.toFixed(2)}`);
  }

  const polygonPoints = points.join(' ');

  return (
    <a
      href="https://www.gog.com/en/game/empire_earth_gold_edition"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50 group hover:scale-105 transition-transform duration-200"
      aria-label="Contribute to the project"
    >
      <div className="relative w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center rotate-12 group-hover:rotate-6 transition-transform duration-200 drop-shadow-xl">
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-empire-red-light">
          <polygon
            points={polygonPoints}
            fill="currentColor"
            stroke="white"
            strokeWidth="3"
            strokeLinejoin="round"
          />
        </svg>
        <div className="relative z-10 text-white font-black text-center leading-tight tracking-tight flex flex-col items-center justify-center">
          <span className="block text-xs sm:text-sm drop-shadow-md uppercase transform -skew-x-6">Buy</span>
          <span className="block text-base sm:text-lg drop-shadow-md uppercase transform -skew-x-6">EE!</span>
        </div>
      </div>
    </a>
  );
}
