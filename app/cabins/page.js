import { Suspense } from "react";
import CabinList from "../_components/CabinList";
import Spinner from "../_components/Spinner";
// import Counter from "../_components/Counter";
import Filter from "../_components/Filter";
// import ReservationReminder from "../_components/ReservationReminder";

// nextjs function revalidate. Is used to revalidate (re-fech) the cached data in the component. In seconds.
export const revalidate = 3600;

export const metadata = {
  title: "Cabins",
};

// Converted to async function and awaited searchParams per nextjs warning error
export default async function Page({ searchParams }) {
  const { capacity } = await searchParams;

  const filter = capacity ?? "all";

  // Notice the CabinList component is inside a nextjs Suspense component.
  // This is because CabinList is optout of caching therefore needs to be rendered after it has finished fetching.
  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Luxurious yet cozy cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature&apos;s beauty in your own little
        home away from home. The perfect spot for a peaceful, calm vacation.
        Welcome to paradise.
      </p>

      <div className="flex justify-end mb-8">{<Filter />}</div>

      <Suspense fallback={<Spinner />} key={filter}>
        <CabinList filter={filter} />
        {/* <ReservationReminder /> */}
      </Suspense>
    </div>
  );
}
