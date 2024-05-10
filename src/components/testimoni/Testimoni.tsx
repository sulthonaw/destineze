import { FaStar } from "react-icons/fa6";

export default function Testimoni() {
  const urlProfile: string =
    "https://images.unsplash.com/photo-1714925298789-9cf7192d89c0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <section className="container py-16">
      <h6 className="mb-5 text-center font-bold tracking-wider text-primary">
        TESTIMONI DESTINEZE
      </h6>
      <h1 className="mb-5 text-center text-5xl font-bold">
        💬 • Apa Kata Mereka Tentang Kami
      </h1>
      <p className="mx-auto mb-16 max-w-3xl text-center">
        Penasaran apa saja review dari pengguna yang memakai aplikasi dan
        website Destinize buat nentuin kemana liburan mereka selanjutnya? Yuk
        cek dibawah!
      </p>
      <div className="grid grid-cols-3 gap-10">
        {Array.from({ length: 3 }).map((_: unknown, index: number) => (
          <article key={index} className="rounded-lg border p-5 shadow-lg">
            <img
              src={urlProfile}
              alt="profile"
              className="mx-auto mb-5 aspect-square h-40 w-40 rounded-full object-cover"
            />
            <p className="mb-5 text-center text-slate-500">
              Destinize membantu saya Mencari spot tempat wisata baru di
              Indonesia dengan Mudah
            </p>
            <div className="mx-auto mb-5 flex justify-center gap-2 text-xl">
              {Array.from({ length: 5 }).map((_: unknown, index: number) => (
                <FaStar key={index} className="fill-yellow-600" />
              ))}
            </div>
            <h6 className="mb-4 text-center font-semibold text-primary">
              Uthonn
            </h6>
            <p className="text-center font-bold">CTO at SpaceX</p>
          </article>
        ))}
      </div>
    </section>
  );
}
