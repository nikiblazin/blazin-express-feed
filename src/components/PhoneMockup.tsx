
import { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import { BottomNavigation } from "./phone/BottomNavigation";
import Index from "../pages/Index"; // Importing the feed page

const PhoneMockup = () => {
  return (
    <div className="w-[320px] h-[640px] bg-black rounded-3xl shadow-lg overflow-hidden relative">
      <div className="absolute inset-0 z-0">
        <Index /> {/* Render full-screen TikTok-style feed inside mockup */}
      </div>
    </div>
  );
};

export default PhoneMockup;
