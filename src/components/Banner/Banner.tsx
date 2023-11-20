import { FloatedSearch } from "../FloatedSearch";

export function Banner() {
  return (
    <div className="container relative mx-auto">
      <div className="pt-20 md:pt-0 min-h-[80vh] bg-banner bg-cover bg-center rounded-3xl relative flex flex-col items-center md:justify-center">
        <div className="max-w-3xl text-center text-white">
          <h2 className="text-5xl font-semibold">
            Descubre tu vivienda ieal para tu familia en Uruguay
          </h2>
          <p className="mt-2 text-xl md:mt-8">Más de 50 años de experiencia avalan nuestra trayerctoria</p>
        </div>
        <FloatedSearch />
      </div>
    </div>
  );
}
