import logo from "../../assets/logo.png";

interface FooterMenu {
  head: string;
  items: Array<string>;
}
export default function Footer() {
  const menus: Array<FooterMenu> = [
    {
      head: "Tentang",
      items: [
        "Tentang Kami",
        "Blog",
        "Karir",
        "Pekerjaan",
        "Berita",
        "Galeri",
        "Afiliasi",
      ],
    },
    {
      head: "Support",
      items: [
        "Kontak Kami",
        "Online Chat",
        "Whatsapp",
        "Telegram",
        "Tiket",
        "Call Center",
        "Bantuan",
      ],
    },
    {
      head: "FAQ",
      items: [
        "Akun",
        "Organisir",
        "Order",
        "Pembayaran",
        "Pengembalian",
        "Copyright",
        "Bahasa",
      ],
    },
  ];
  return (
    <>
      <footer className="container mb-10 py-5">
        <div className="mb-10 grid grid-cols-6 gap-5">
          <div className="col-span-6 md:col-span-3 md:pe-32">
            <img src={logo} alt="logo" className="mb-2" />
            <h1 className="mb-2 text-2xl font-bold">Destinize</h1>
            <p className="text-sm text-slate-500">
              Destinize adalah website atau layanan aplikasi yang membantu kamu
              memilih atau merekomendasikan tempat yang dijuluki ‘hidden gems’
              agar lebih dikenal dan ramai{" "}
              <span className="font-semibold text-blue-500 hover:cursor-pointer hover:underline">
                Baca Selengkapnya
              </span>
            </p>
          </div>
          {menus.map((value: FooterMenu, index: number) => (
            <div key={index} className="col-span-2 md:col-span-1">
              <h1 className="mb-5 text-xl font-semibold">{value.head}</h1>
              <ul className="*:mb-3 *:text-sm *:text-slate-500">
                {value.items.map((value: string, index: number) => (
                  <li key={index} className="cursor-pointer hover:underline">
                    {value}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-6 gap-5 text-slate-500 *:text-sm">
          <p className="col-span-6 md:col-span-3">
            © 2021-2022, All Rights Reserved
          </p>
          <div className="col-span-6 flex flex-wrap justify-between gap-5 md:col-span-3 ">
            <p>Tentang Kami</p>
            <p>Kontak</p>
            <p>Privasi & Policy</p>
            <p>Sitemap</p>
            <p>Panduan Penggunaan</p>
          </div>
        </div>
      </footer>
      <div className="bg-primary py-2 text-center text-sm text-white">
        designed ui by{" "}
        <span className="font-semibold italic">SYAUQIZAIDAN K. K</span>
      </div>
    </>
  );
}
