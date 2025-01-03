import SubmitButton from "@/app/_components/SubmitButton";
import { updateBooking } from "@/app/_lib/actions";
import { auth } from "@/app/_lib/auth";
import { getBooking, getBookings, getCabin } from "@/app/_lib/data-service";

export default async function Page({ params }) {
  const { bookingId } = await params;

  // Check if user is logged-in
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  //  get the IDs of all bookings made by the user.
  const guestBookings = await getBookings(session.user.guestId);
  const guestBookingIds = guestBookings.map((booking) => booking.id);

  // Throw an error if the booking does not belong to the user.
  if (!guestBookingIds.includes(Number(bookingId)))
    throw new Error("No matching bookings");

  const { numGuest, observations, cabinId } = await getBooking(bookingId);

  const { maxCapacity } = await getCabin(cabinId);

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Edit Reservation #{bookingId}
      </h2>

      <form
        action={updateBooking}
        className="bg-primary-900 py-6 px-4 md:px-6 lg:py-8 lg:px-12 text-lg flex gap-6 flex-col"
      >
        <input type="hidden" value={bookingId} name="bookingId" />

        <div className="space-y-2">
          <label htmlFor="numGuest">How many guests?</label>
          <select
            name="numGuest"
            id="numGuest"
            defaultValue={numGuest}
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
            required
          >
            <option value="" key="">
              Select number of guests...
            </option>
            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="observations">
            Anything we should know about your stay?
          </label>
          <textarea
            name="observations"
            defaultValue={observations}
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
          />
        </div>

        <div className="flex justify-end items-center gap-6">
          <SubmitButton pendingLabel="Updating...">
            Update reservation
          </SubmitButton>
        </div>
      </form>
    </div>
  );
}
