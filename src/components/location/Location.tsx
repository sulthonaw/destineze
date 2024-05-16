import mapImage from "../../assets/map.png";

interface Benefit {
  title: string;
  description: string;
}

export default function Location() {
  const benefits: Array<Benefit> = [
    {
      title: "Populer di dekatmu",
      description:
        "Tempat pariwisata yang populer dan pasti dikenal semua orang didekatmu",
    },
    {
      title: "Favorit di dekatmu",
      description:
        "Tempat favorit dan disukai semua orang orang di sekitar daerah kamu",
    },
    {
      title: "Ramai di didekatmu",
      description:
        "Spot yang paling ramai dikunjungi para warga sekaligus para wisatawan",
    },
  ];

  return (
    <section className="container py-16">
      <h6 className="mb-5 text-center font-bold tracking-wider text-secondary">
        CARI TEMPAT WISATA
      </h6>
      <h1 className="mb-7 text-center text-3xl font-bold md:text-6xl">
        🗺 • Cari Tempat Wisata Didekatmu
      </h1>
      <p className="mx-auto mb-10 max-w-3xl text-center leading-7">
        Fitur ini memungkinkan kamu untuk mencari tempat wisata atau tempat yang
        sedang populer di daerah kamu dengan begitu kamu akan selalu update dan
        gak kudet lagi 👍🏻
      </p>
      <img src={mapImage} alt="map" className="mb-16 w-full" />
      <ul className="grid grid-cols-2 gap-10 md:grid-cols-3">
        {benefits.map((value: Benefit, index: number) => (
          <li key={index} className="flex gap-4">
            <span className="block aspect-square h-max w-max rounded-full bg-slate-100 p-2">
              🔥
            </span>
            <div>
              <h6 className="mb-2 font-bold md:text-lg">{value.title}</h6>
              <p className="text-sm md:text-base">{value.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
