import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Transition,
} from "@headlessui/react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

interface FAQ {
  title: string;
  description?: string | null;
}

export default function FAQ() {
  const faqs: Array<FAQ> = [
    {
      title: "Bagaimana cara membuat akun?",
      description:
        "Ikuti langkah-langkah pendaftaran di aplikasi untuk membuat akun baru.",
    },
    {
      title: "Bagaimana cara masuk (login) ke akun saya?",
      description:
        "Gunakan email dan kata sandi yang telah Anda daftarkan untuk masuk ke akun.",
    },
    {
      title: "Bagaimana cara mengganti kata sandi?",
      description:
        "Di bagian pengaturan akun, Anda dapat menemukan opsi untuk mengganti kata sandi.",
    },
    {
      title: "Bagaimana cara menghapus akun saya?",
      description:
        "Kunjungi pengaturan akun dan cari opsi untuk menghapus akun secara permanen.",
    },
    {
      title: "Bagaimana cara mengatur preferensi dan notifikasi?",
      description:
        "Pergi ke menu pengaturan untuk mengonfigurasi preferensi dan notifikasi.",
    },
    {
      title: "Apa yang harus dilakukan jika lupa kata sandi?",
      description:
        "Gunakan opsi reset kata sandi di layar masuk untuk membuat kata sandi baru.",
    },
    {
      title: "Bagaimana cara menggunakan fitur [nama fitur]?",
      description:
        "Cari panduan penggunaan lengkap untuk fitur tersebut di menu bantuan.",
    },
    {
      title: "Apa yang harus dilakukan jika mengalami masalah teknis?",
      description:
        "Hubungi tim dukungan pelanggan melalui email atau telepon untuk bantuan.",
    },
    {
      title: "Apakah ada biaya yang terkait dengan menggunakan aplikasi?",
      description:
        "Aplikasi ini gratis untuk penggunaan dasar, namun fitur premium mungkin berbayar.",
    },
    {
      title: "Bagaimana cara menghubungi tim dukungan pelanggan?",
      description:
        "Anda dapat menghubungi tim dukungan melalui email di support@example.com.",
    },
    {
      title:
        "Apakah aplikasi ini tersedia di platform lain (iOS, Android, web)?",
      description: "Ya, aplikasi ini tersedia di iOS, Android, dan versi web.",
    },
    {
      title: "Apakah aplikasi ini aman untuk digunakan?",
      description:
        "Kami mengimplementasikan langkah-langkah keamanan untuk melindungi data pengguna.",
    },
    {
      title: "Bagaimana cara memperbarui aplikasi?",
      description:
        "Periksa toko aplikasi Anda untuk memperbarui aplikasi ke versi terbaru.",
    },
    {
      title: "Bagaimana cara mengakses data atau riwayat saya?",
      description: "Anda dapat mengakses data pribadi Anda di pengaturan akun.",
    },
    {
      title: "Bagaimana cara memberikan umpan balik atau saran?",
      description:
        "Kami senang menerima umpan balik dari pengguna. Kirim saran Anda ke feedback@example.com.",
    },
  ];
  return (
    <section className="container py-16">
      <div className="mb-14 flex justify-between">
        <div>
          <h6 className="mb-4 font-bold tracking-wider text-primary">
            FREQUENTLY ASKED QUESTION
          </h6>
          <h1 className="text-3xl font-bold md:text-5xl">
            🤔• Pertanyaan yang Sering Diajukan
          </h1>
        </div>
        <button className="btn group flex items-center gap-5 text-primary md:text-lg">
          <span className="group-hover:underline">Lihat Semua</span>
          <FaLongArrowAltRight className="transition-all group-hover:translate-x-3 group-hover:scale-125" />
        </button>
      </div>
      <div>
        {faqs.slice(0, 6).map((value: FAQ, index: number) => (
          <Disclosure key={index} as={"div"} className={"border *:px-6 *:py-4"}>
            <DisclosureButton className="group flex w-full items-center justify-between text-start font-bold hover:bg-tertiary/10 data-[open]:border-l-4 data-[open]:border-primary data-[hover]:bg-tertiary/10 data-[open]:bg-slate-50 data-[open]:text-secondary">
              <p>{value.title}</p>
              <div className="rounded-full p-2 group-data-[open]:bg-primary group-data-[open]:text-white group-data-[hover]:outline group-data-[hover]:outline-primary">
                <FaChevronDown className="-rotate-90 transition-all group-data-[open]:rotate-0" />
              </div>
            </DisclosureButton>
            <Transition
              enter="duration-200 ease-out"
              enterFrom="opacity-0 -translate-y-6"
              enterTo="opacity-100 translate-y-0"
            >
              <DisclosurePanel className="py-2 text-slate-700 data-[open]:bg-slate-50">
                {value.description}
              </DisclosurePanel>
            </Transition>
          </Disclosure>
        ))}
      </div>
    </section>
  );
}
