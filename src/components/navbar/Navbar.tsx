import Logo from "../../assets/logo.png";
import { LuSearch } from "react-icons/lu";
import { SlGlobe } from "react-icons/sl";
import { FaCaretDown } from "react-icons/fa6";
import { GrLocation } from "react-icons/gr";
import { useEffect, useState } from "react";

const Menu = () => {
  const menus: Array<string> = [
    "Gunung",
    "Pantai",
    "Kuliner",
    "Outbond",
    "Sejarah",
    "Edukasi",
    "Romantis",
    "Alam",
  ];

  return (
    <div className="container py-3">
      <div className="no-scrollbar flex snap-x items-center gap-5 overflow-x-auto">
        {menus.map((menu: string, index: number) => (
          <div
            key={index}
            className="flex snap-start items-center gap-2 text-slate-500"
          >
            <p>{menu}</p>
            <FaCaretDown />
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Navbar() {
  const [stickyClass, setStickyClass] = useState<string>("relative");

  const stickNavbar = () => {
    if (window !== undefined) {
      const windowHeight = window.scrollY;
      windowHeight > 0.1
        ? setStickyClass("sticky top-0 left-0 right-0 z-50 pb-2 drop-shadow")
        : setStickyClass("relative");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  return (
    <header className={`${stickyClass} w-full bg-white transition-all`}>
      <div className="container flex flex-wrap items-center justify-between gap-5 py-4">
        <div className="flex gap-2">
          <div>
            <img src={Logo} alt="logo" />
          </div>
          <p className="font-bold">Destineze</p>
        </div>
        <div className="flex max-w-xl flex-1 items-center gap-4 rounded-full bg-slate-100 px-5 py-3">
          <LuSearch />
          <input
            type="text"
            className="w-full min-w-20 bg-transparent focus:outline-none"
            placeholder="Cari apapun disini..."
          />
        </div>
        <div className="flex items-center gap-2 text-slate-600">
          <SlGlobe />
          <p className="hidden lg:block">Bahasa Indonesia</p>
          <FaCaretDown />
        </div>
        <div className="flex items-center gap-2">
          <div>
            <div className="aspect-square rounded-full border bg-secondary/10 p-3">
              <GrLocation className="text-2xl text-primary" />
            </div>
          </div>
          <div className="hidden md:block">
            <span className="text-sm">Lokasi</span>
            <div className="flex items-center gap-2 font-semibold text-primary">
              <p>Indonesia, Yogyakarta</p>
              <FaCaretDown />
            </div>
          </div>
        </div>
      </div>
      <hr />
      <Menu />
    </header>
  );
}
