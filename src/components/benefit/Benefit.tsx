import benefitImage from "../../assets/benefit.png";

interface Benefit {
  title: string;
  description: string;
}

export default function Benefit() {
  const benefits: Array<Benefit> = [
    {
      title: "Cari tempat yang kamu mau",
      description:
        "Temukan destinasi selanjutnya yang akan kamu kunjungi dengan Destinize",
    },
    {
      title: "Isi data dan konfirmasi pembayaran",
      description: "Tulis dan lengkapi data kamu untuk keperluan data booking",
    },
    {
      title: "Tinggal masuk dan enjoy!",
      description:
        "Kamu bisa langsung masuk dan enjoy liburan kamu tanpa hambatan",
    },
  ];

  return (
    <section className="container flex flex-col flex-wrap items-center justify-between gap-5 py-16 lg:flex-row">
      <div className="flex-1">
        <h6 className="mb-5 font-semibold text-primary">RESERVASI TEMPAT</h6>
        <h1 className="mb-16 text-3xl font-bold md:text-5xl">
          Gak mau ngantri? reservasi aja! 🤙🏻
        </h1>
        <ul>
          {benefits.map((value: Benefit, index: number) => (
            <li key={index} className="mb-16 flex max-w-md gap-5">
              <span className="block aspect-square h-max w-max rounded-lg bg-orange-200 p-2 text-2xl">
                🚀
              </span>
              <div>
                <h6 className="mb-2 text-lg font-semibold">{value.title}</h6>
                <p>{value.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1">
        <img src={benefitImage} alt="benefit" />
      </div>
    </section>
  );
}
