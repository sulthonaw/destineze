import { FaLongArrowAltRight } from "react-icons/fa";
import bannerCTA from "../../assets/cta-vector.png";

export default function CTA() {
  return (
    <section className="container mb-20 py-16">
      <div className="group flex cursor-pointer select-none flex-wrap justify-between overflow-hidden rounded-xl bg-primary text-white shadow-2xl hover:border-b-4 hover:border-white active:border-none active:shadow-none">
        <div className="flex max-w-2xl flex-1 flex-col justify-between gap-3 px-10 py-10">
          <h1 className=" text-3xl font-semibold md:text-5xl">
            Masih bingung cari tempat yang cocok? 🤔
          </h1>
          <p className="text-lg opacity-80">
            Tenang, kami mempunyai fitur rekomendasi yang membantu kamu mencari
            tempat berlibur yang tepat dengan menjawab pertanyaan yang kami
            berikan.
          </p>
          <button className="group/btn flex items-center gap-2 text-lg font-semibold">
            <span className="group-hover/btn:underline">Mulai sekarang</span>
            <FaLongArrowAltRight className="transition-all group-hover:translate-x-3 group-hover:scale-150 group-active:scale-90" />
          </button>
        </div>
        <img
          src={bannerCTA}
          alt="cta"
          className="mx-auto w-full md:mx-0 md:w-auto"
        />
      </div>
    </section>
  );
}
