"use client";

import { Bars4Icon } from "@heroicons/react/24/solid";
import { useAuth } from "../_lib/AuthContext";
import Image from "next/image";

// A change from Jonas code. Created GuestLink and AuthContext, then wrapped the app's html in layout
// inside AuthProvider and SessionProvider to make it possible to still show the avatar or whatever
// session info in the Navigation component, without making the whole app dynamic.

export default function NavButton({ children, onClick }) {
  const session = useAuth();

  return (
    <div className="grid gap-4 grid-cols-2 ">
      <div className="relative h-9 aspect-square">
        {session?.user?.image && (
          <Image
            className=" object-cover rounded-full"
            src={session.user.image}
            alt={session.user.name}
            fill
            // Important to display google profile images// referrerPolicy="no-referrer"
            referrerPolicy="no-referrer"
          />
        )}
      </div>
      <button className="relative z-[99] h-9 aspect-square" onClick={onClick}>
        <Bars4Icon />
      </button>
      {children}
    </div>
  );
}
