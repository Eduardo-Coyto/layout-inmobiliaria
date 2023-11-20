import { useState } from "react";
import { GrFormDown, GrLocation, GrFormUp } from "react-icons/gr";

export function SearchLocation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative mb-2 md:mb-0 flex items-center gap-4 border-[1px] rounded-lg py-2 px-3 justify-between cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <GrLocation />
      <div>
        <p>Localización</p>
        <p className="text-sm">Seleciona tu localización</p>
      </div>
      {isOpen ? <GrFormUp /> : <GrFormDown />}

      {isOpen && (
        <div className="absolute top-[70px] bg-white z-50 p-4 rounded-lg shadow-light w-[230px] left-0">
            <p>Montevideo</p>
            <p>Durazno</p>
            <p>Canelones</p>
        </div>
      )}
    </div>
  );
}
