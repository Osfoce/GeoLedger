

export default function Hero() {
    return (
        <>
        <div className="flex justify-around  gap-6 items-center">

    {/* Left */}
    <div>
        {/* Heading */}
       <div className="border-[0.9px] boreder-gray/50 rounded-lg py-1 px-2">
<p className="text-xs font-bold"><img src="" alt="" />
Built on Stellar <span className="text-green-600">.</span> Secure . Transparent . Immutable
</p>
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

