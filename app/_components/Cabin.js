import Image from "next/image";
import TextExpander from "@/app/_components/TextExpander";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";

function Cabin({ cabin }) {
  const { id, name, maxCapacity, regularPrice, discount, image, description } =
    cabin;

  return (
    <div className="flex flex-col lg:grid lg:grid-cols-[3fr_4fr] lg:gap-20 border border-primary-800 overflow-hidden mb-24 rounded-lg">
      <div className="relative h-96 lg:scale-[1.15] lg:-translate-x-3">
        <Image
          src={image}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          alt={`Cabin ${name}`}
        />
      </div>

      <div className="px-2 lg:py-3 lg:px-10 md:pt-10 ">
        <h3 className="text-accent-100 font-black text-4xl lg:text-7xl mb-5 -translate-y-24 translate-x-28 md:-translate-y-32 md:translate-x-96 lg:translate-y-0 lg:translate-x-[-254px] bg-primary-950 p-6 pb-1 lg:w-[150%]">
          Cabin {name}
        </h3>

        <p className="text-lg text-primary-300 mb-10">
          <TextExpander>{description}</TextExpander>
        </p>

        <ul className="flex flex-col gap-4 mb-7">
          <li className="flex gap-3 items-center">
            <UsersIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg">
              For up to <span className="font-bold">{maxCapacity}</span> guests
            </span>
          </li>
          <li className="flex gap-3 items-center">
            <MapPinIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg">
              Located in the heart of the{" "}
              <span className="font-bold">Dolomites</span> (Italy)
            </span>
          </li>
          <li className="flex gap-3 items-center">
            <EyeSlashIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg">
              Privacy <span className="font-bold">100%</span> guaranteed
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Cabin;
