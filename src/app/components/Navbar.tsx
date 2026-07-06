
"use client";
import { FaGithub } from "react-icons/fa";

export default function Navbar() {
    return (

     
        <div className="flex justify-around items-center gap-4 p-4 text-black/50">

{/* LOG */}
           <div className="flex items-center gap-0.5 cursor-pointer">
  <img
    src="./logs.png"
    alt="GeoLedger Logo"
    className="h-15 w-20 object-contain"
  />
</div>

<div className="flex flex-row items-center gap-20 cursor-pointer">
{/* NAV */}
<div className="flex flex-row gap-6 items-center ">
<nav>Home</nav>
<nav>About</nav>
<nav>Features</nav>
<nav>How it Works</nav>
<nav>Docs</nav>
<nav>Roadmap</nav>
<nav>Community</nav>
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