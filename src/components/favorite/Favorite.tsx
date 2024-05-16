import { FaLongArrowAltRight } from "react-icons/fa";

export default function Favorite() {
  const url: string =
    "https://images.unsplash.com/photo-1501179691627-eeaa65ea017c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <section className="container py-16">
      <div className="mb-16 flex items-center justify-between">
        <div>
          <h6 className="mb-2 text-sm font-bold text-primary">
            DESTINASI FAVORITE
          </h6>
          <h1 className="text-3xl font-bold md:text-5xl">
            ✈ • Temukan Destinasi Favoritmu{" "}
          </h1>
        </div>
        <button className="btn group flex items-center gap-5 text-lg text-primary">
          <span className="group-hover:underline">Lihat Semua</span>
          <FaLongArrowAltRight className="transition-all group-hover:translate-x-3 group-hover:scale-125" />
        </button>
      </div>
      <div className="grid grid-cols-4 gap-5">
        {Array.from({ length: 4 }).map((_: unknown, index: number) => (
          <div
            key={index}
            className="group relative col-span-2 aspect-[3/4] w-full cursor-pointer overflow-hidden rounded-lg shadow-2xl hover:outline hover:outline-slate-200 lg:col-span-1"
          >
            <img
              src={url}
              alt="poster"
              className="h-full w-full object-cover brightness-90 grayscale transition-all group-hover:brightness-105 group-hover:grayscale-0"
            />
            <div className="absolute bottom-0 left-0 w-1/2 rounded-tr-lg border-r-4 border-transparent bg-white/70 p-4 backdrop-blur-sm transition-all group-hover:bottom-3 group-hover:right-0 group-hover:w-2/3 group-hover:rounded-br-lg group-hover:border-slate-100">
              <h2 className="text-lg font-extrabold">Raja Ampat</h2>
              <p className="text-sm text-slate-700">Bali</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
