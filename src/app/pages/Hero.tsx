

export default function Hero() {
    return (
        <>
        <div className="flex justify-around  gap-6 items-center p-8">

    {/* Left */}
    <div>
        {/* Heading */}
       <div className="inline-flex items-center gap-2 rounded-lg border border-gray-500/50 px-3 py-2">
  <img src="" alt="" className="h-4 w-4" />

  <p className="text-xs font-bold">
    Built on Stellar <span className="text-green-600">•</span> Secure • Transparent • Immutable
  </p>
</div>

<div className="text-6xl font-extrabold leading-tight">
  <p>The Future of</p>
  <p>Land Ownership</p>
  <p>
    is <span className="text-green-800">On-Chain</span>
  </p>
</div>

<div>
    <p className="text-sm font-semibold">GeoLedger is a decentralized land registry platform built on Stellar. We make make land ownership secure, transparent, and verifiable for everyone.</p>
</div>

<div className="flex flex-row gap-3 items-center">

</div>

    </div>

    {/* Right */}
<img
  src="/map2.png"
  alt="GeoLedger Network Map"
  className="w-fit h-auto object-contain"
/>
</div>
        </>
    )
}

