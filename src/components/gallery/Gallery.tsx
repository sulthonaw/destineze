import { FaLongArrowAltRight } from "react-icons/fa";
import { FaPlay } from "react-icons/fa6";

export default function Gallery() {
  const url = {
    bromo:
      "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ocean:
      "https://images.unsplash.com/photo-1439405326854-014607f694d7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    kawah:
      "https://images.unsplash.com/photo-1576078137358-d330f3642834?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };

  return (
    <section className="container py-16">
      <div className="mb-10 flex items-center justify-between">
        <div>
          <h6 className="mb-5 font-bold tracking-wider text-primary">
            MENGENAL DESTINEZE
          </h6>
          <h1 className="text-6xl font-bold">
            🖼• Galeri Pariwisata & Blog Travel
          </h1>
        </div>
        <button className="btn group flex items-center gap-5 text-lg text-primary">
          <span className="group-hover:underline">Lihat Semua</span>
          <FaLongArrowAltRight className="transition-all group-hover:translate-x-3 group-hover:scale-125" />
        </button>
      </div>
      <div className="mb-10 grid grid-cols-12 gap-5">
        <article className="col-span-3 h-max w-full max-w-72 overflow-hidden rounded-lg bg-white shadow-lg">
          <img
            src={url.bromo}
            alt="bromo"
            className="aspect-[4/3] w-full object-cover"
          />
          <div className="mb-4 px-4 py-4">
            <span className="mb-3 block text-slate-500">26 DESEMBER 2021</span>
            <h5 className="mb-4 text-lg font-semibold">
              Tips naik gunung Bromo Biar gak capek cyin 😥😛
            </h5>
            <p className="mb-4 text-slate-600">
              Jadi gini gann, anda tau bromo? yaaa gunung kann!
            </p>
            <button className="">Baca Selengkapnya...</button>
          </div>
        </article>
        <div
          className="group col-span-9 grid cursor-pointer place-content-center overflow-hidden rounded-lg bg-cover bg-center"
          style={{ backgroundImage: `url("${url.ocean}")` }}
        >
          <div className="aspect-square rounded-full bg-primary p-4 text-white transition-all group-hover:scale-150 group-active:scale-95">
            <FaPlay />
          </div>
        </div>
      </div>
      <div
        className="group relative w-full cursor-pointer overflow-hidden rounded-lg bg-cover bg-bottom p-5 text-white transition-all duration-700 hover:bg-center"
        style={{ backgroundImage: `url("${url.kawah}")` }}
      >
        <span className="absolute bottom-0 left-0 right-0 top-0 hidden bg-black/50 group-hover:block"></span>
        <div className="relative">
          <h1 className="mb-4 mt-16 text-xl font-bold">
            Tips meminum air kawah biar lidah melepuh 😁
          </h1>
          <p className="mb-4 max-w-xl">
            Lidah melepuh? why nott, kawah bukan untuk dilihat kawan.. tapi
            untuk di minum.. rasakan kepanasan yang brutal 🔥
          </p>
          {["Google", "Trending", "Baru"].map(
            (value: string, index: number) => (
              <span key={index} className="me-4 text-sm font-semibold">
                {value}
              </span>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
