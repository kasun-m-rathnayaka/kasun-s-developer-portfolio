import React from "react";

const MagicButton = ({ word }: { word: string }) => {
  return (
    <div>
        <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-full ring ring-blue-900 hover:ring-blue-100 bg-[linear-gradient(110deg,#040C25,45%,#1e2631,55%,#040C25)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          {word}
        </button>
    </div>
  );
};

export default MagicButton;
