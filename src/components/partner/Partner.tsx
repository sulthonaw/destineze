import qantasLogo from "../../assets/logo-qantas.png";

export default function Partner() {
  return (
    <section className="container -mt-36 overflow-hidden py-16">
      <div className="flex flex-wrap items-center justify-around gap-10">
        {Array.from({ length: 5 }).map((_: unknown, index: number) => (
          <div key={index} className="w-40 md:w-52">
            <img src={qantasLogo} alt="qantas" className="grayscale" />
          </div>
        ))}
      </div>
    </section>
  );
}
