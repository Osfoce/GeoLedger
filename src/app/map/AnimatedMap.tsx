
export default function AnimatedMap() {
  return (
    <div className="relative flex items-center justify-center w-full h-[500px]">

      {/* Background glow */}
      <div className="absolute w-96 h-96 rounded-full bg-green-500/10 blur-3xl" />

      <svg
        viewBox="0 0 700 500"
        className="w-full max-w-2xl"
      >
        {/* Connection lines */}
        <line x1="150" y1="120" x2="350" y2="180"
          className="stroke-green-500/40"
          strokeWidth="2"
        />

        <line x1="350" y1="180" x2="520" y2="120"
          className="stroke-green-500/40"
          strokeWidth="2"
        />

        <line x1="350" y1="180" x2="250" y2="330"
          className="stroke-green-500/40"
          strokeWidth="2"
        />

        <line x1="350" y1="180" x2="470" y2="340"
          className="stroke-green-500/40"
          strokeWidth="2"
        />

        {/* Pins */}

        <circle cx="150" cy="120" r="8" fill="#22c55e" />

        <circle cx="350" cy="180" r="10" fill="#22c55e" />

        <circle cx="520" cy="120" r="8" fill="#22c55e" />

        <circle cx="250" cy="330" r="8" fill="#22c55e" />

        <circle cx="470" cy="340" r="8" fill="#22c55e" />

      </svg>

    </div>
  );
}