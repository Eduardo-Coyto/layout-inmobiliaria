import { hookPropertyMap } from "next/dist/server/require-hook";
import { PropertyProps } from "./Property.types";
import { formatPrice } from "@/utils/formatPrice";
import { TfiLocationPin } from "react-icons/tfi";
import {
  LiaBathSolid,
  LiaBedSolid,
  LiaRulerCombinedSolid,
  LiaStarSolid,
} from "react-icons/lia";
import Image from "next/image";
import { Form } from "../Form";

export function Property(props: PropertyProps) {
  const { house } = props;
  const {
    id,
    price,
    location,
    star,
    bedrooms,
    bathroom,
    meters,
    description,
    image,
  } = house;
  return (
    <main className="max-w-5xl mx-auto">
      <div className="grid md:grid-cols-[70%,1fr] my-3 py-5">
        <div className="px-6">
          <h1 className="text-3xl mb-4 text-secondary flex justify-between">
            <span>House {id}</span>
            <span className="font-semibold">{formatPrice(price)}</span>
          </h1>
          <div className="flex gap-5 my-4">
            <h2 className="flex gap-3 text-xl items-center">
              <TfiLocationPin />
              {location}
            </h2>
            <div className="flex items-center px-2 py-1 rounded-lg bg-secondary text-white">
              <LiaStarSolid />
              <span className="ml-1 font-semibold">{star}</span>
            </div>
          </div>
          <Image
            src={`/assets/properties/${image}`}
            alt={`Casa en ${location}`}
            width={1200}
            height={1200}
            className="w-full h-auto rounded-2xl"
            priority
          />
          <div className="gap-4 lg:flex mt-4">
            <div className="flex items-center justify-center px-2 py-1 my-1 rounded-lg bg-slate-300">
              <LiaBedSolid />
              <span className="ml-2">{bedrooms}</span>
            </div>
            <div className="flex items-center justify-center px-2 py-1 my-1 rounded-lg bg-slate-300">
              <LiaBathSolid />
              <span className="ml-2">{bathroom}</span>
            </div>
            <div className="flex items-center justify-center px-2 py-1 my-1 rounded-lg bg-slate-300">
              <LiaRulerCombinedSolid />
              <span className="ml-2">{meters}</span>
            </div>
          </div>
          <div className="my-3">{description}</div>
        </div>
        <Form />
      </div>
    </main>
  );
}
