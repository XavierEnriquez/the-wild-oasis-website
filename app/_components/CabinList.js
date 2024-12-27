// import { unstable_noStore as noStore } from "next/cache";

// The noStore function was used to optout a component from caching, noStore was deprecated as of nextjs 15.
// The connection() function is now recomended.
import { connection } from "next/server";

import { getCabins } from "@/app/_lib/data-service";
import CabinCard from "@/app/_components/CabinCard";

async function CabinList({ filter }) {
  // noStore(); // Deprecated. Use connection() as of nextjs.15
  await connection();

  const cabins = await getCabins();

  if (!cabins.length) return null;

  // let displayedCabins;
  // if (filter === "all") displayedCabins = cabins;
  // if (filter === "small")
  //   displayedCabins = cabins.filter((cabin) => cabin.maxCapacity <= 3);
  // if (filter === "medium")
  //   displayedCabins = cabins.filter(
  //     (cabin) => cabin.maxCapacity >= 4 && cabin.maxCapacity <= 7
  //   );
  // if (filter === "large")
  //   displayedCabins = cabins.filter((cabin) => cabin.maxCapacity >= 8);

  // Other option to if statments
  const displayedCabins =
    {
      all: cabins,
      small: cabins.filter((cabin) => cabin.maxCapacity <= 3),
      medium: cabins.filter(
        (cabin) => cabin.maxCapacity >= 4 && cabin.maxCapacity <= 7
      ),
      large: cabins.filter((cabin) => cabin.maxCapacity >= 8),
    }[filter] || cabins; // Default to showing all cabins if the filter is invalid

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {displayedCabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}

export default CabinList;
