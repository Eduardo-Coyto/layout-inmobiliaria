import { useState } from "react";
import { GrFormDown, GrTag, GrFormUp } from "react-icons/gr";

export function SearchPriceRange() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative mb-2 md:mb-0 flex items-center gap-4 border-[1px] rounded-lg py-2 px-3 justify-between cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <GrTag />
      <div>
        <p>Localización</p>
        <p className="text-sm">Seleciona tu rango de precios</p>
      </div>
      {isOpen ? <GrFormUp /> : <GrFormDown />}

      {isOpen && (
        <div className="absolute top-[70px] bg-white z-50 p-4 rounded-lg shadow-light w-[230px] left-0">
          <p>Cualquier rango</p>
          <p>20000 - 50000</p>
          <p>50000 - 85000</p>
          <p>85000 - 150000</p>
          <p>+ 150000</p>
        </div>
      )}
    </div>
  );
}
