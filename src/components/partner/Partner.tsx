import qantasLogo from "../../assets/logo-qantas.png";

export default function Partner() {
  return (
    <section className="container -mt-36 py-16">
      <div className="grid grid-cols-5 place-content-center">
        {Array.from({ length: 5 }).map((_: unknown, index: number) => (
          <div key={index} className="[&>img]:h-8">
            <img src={qantasLogo} alt="qantas" className="grayscale" />
          </div>
        ))}
      </div>
    </section>
  );
}
