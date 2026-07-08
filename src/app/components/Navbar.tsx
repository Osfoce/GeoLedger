"use client";

import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import SignupModal from "./SignupModal";

export default function Navbar() {
  const [active, setActive] = useState<string>("Home");
  const [showModal, setShowModal] = useState<boolean>(false);

  const navItems: string[] = [
    "Home",
    "About",
    "Features",
    "How it Works",
    "Docs",
    "Community",
  ];

  return (
    <div className="p-3">
      <div className="flex justify-around items-center gap-4 text-white/50">

        {/* LOGO */}
        <div className="flex items-center gap-0.5 cursor-pointer">
          <img
            src="null"
            alt="GeoLedger Logo"
            className="h-15 w-20 object-contain"
          />
        </div>

        {/* NAV ITEMS */}
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

        {/* RIGHT SECTION */}
        <div className="flex flex-row items-center gap-6 cursor-pointer">
          <FaGithub className="text-2xl" />

          {/* SIGN UP BUTTON */}
          <div
            onClick={() => setShowModal(true)}
            className="border-[0.9px] border-white/50 rounded-lg"
          >
            <h2 className="text-green-600 text-sm font-bold py-1 px-4">
              Sign UP
            </h2>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {showModal && <SignupModal onClose={() => setShowModal(false)} />}
    </div>
  );
}