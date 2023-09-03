import React from "react";

function Navbar() {
  return (
    <div className="h-[80px] bg-slate-200 w-screen flex items-center justify-between px-32">
      <p className="text-4xl font-extrabold">MoviesHere</p>
      <p className="text-2xl font-medium cursor-pointer">Favorites</p>
    </div>
  );
}

export default Navbar;
