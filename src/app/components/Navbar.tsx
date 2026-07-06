"use client";

import { useState } from "react";
import { FaGithub } from "react-icons/fa";

export default function Navbar() {

  const [active, setActive] = useState("Home");

const navItems = [
  "Home",
  "About",
  "Features",
  "How it Works",
  "Docs",
  "Community",
];
    return (

     <div className="p-3">
        <div className="flex justify-around items-center gap-4  text-white/50 border-[0.9px] rounded-2xl">

{/* LOG */}
           <div className="flex items-center gap-0.5 cursor-pointer">
  <img
    src=""
    alt="GeoLedger Logo"
    className="h-15 w-20 object-contain"
  />
</div>

{/* NAVBar ITEMS */}
<div className="flex flex-row gap-6 items-center text-sm font-bold">
  {navItems.map((item) => (
    <div
      key={item}
      onClick={() => setActive(item)}
      className="relative cursor-pointer"
    >
      <span
        className={`transition-all duration-300 ${
          active === item
            ? "text-green-500"
            : "text-white/50 hover:text-green-500"
        }`}
      >
        {item}
      </span>

      {active === item && (
        <span className="absolute left-1/2 -bottom-2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-green-500"></span>
      )}
    </div>
  ))}
</div>


<div className="flex flex-row items-center gap-6 cursor-pointer">

<div>
<FaGithub className="text-2xl" />
</div>

<div className="border-[0.9px] border-green-950 rounded-lg">
<h2 className="text-green-600 py-1 px-4">Connet Wallet</h2>
</div>

</div>

</div>

           </div>
    
    )
}