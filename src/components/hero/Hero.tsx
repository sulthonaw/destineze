import travellerImage from "../../assets/traveller.png";
import islandImage from "../../assets/Island.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoIosPlay } from "react-icons/io";

export default function Hero() {
  return (
    <section className="container flex flex-col items-center gap-12 py-10 sm:gap-5 lg:flex-row lg:items-start">
      <div className="flex-1">
        <span className="mb-5 block w-max rounded-full bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">
          ✈ • Explore the wonderful indonesia!
        </span>
        <h1 className="mb-8 text-5xl font-extrabold xl:text-7xl">
          Liburan & nikmati <span className="text-primary">tempat baru</span>
          <span className="flex flex-wrap gap-2">
            <span>di indonesia</span>
            ️<img src={islandImage} alt="island" className="w-10 md:w-16" />
          </span>
        </h1>
        <p className="mb-8">
          Destinize membuat kamu selalu update terkait tempat liburan baru di
          Indonesia dengan mengikuti perkembangan para influencer di sosial
          media ✨
        </p>
        <div className="flex gap-3 ">
          <button className="btn group flex items-center gap-2 bg-primary text-white shadow-[0_20px_35px_rgba(68,117,242,0.21)] hover:shadow-primary/35 hover:outline hover:outline-white">
            <span>Mulai sekarang</span>
            <FaLongArrowAltRight className="transition-all group-hover:translate-x-2 group-hover:-rotate-45 group-hover:scale-125" />
          </button>
          <button className="btn group flex items-center gap-2">
            <div className="rounded-full border border-primary bg-white p-4 shadow-[0_20px_35px_rgba(68,117,242,0.21)] transition-all group-hover:border-transparent group-hover:outline group-hover:outline-primary ">
              <IoIosPlay className="fill-primary transition-all group-hover:scale-150" />
            </div>
            <span className="transition-all group-hover:translate-x-3">
              Putar Demo
            </span>
          </button>
        </div>
      </div>
      <div className="flex-1">
        <img src={travellerImage} alt="traveller" />
      </div>
    </section>
  );
}
