"use client";

import { useAuth } from "../_lib/AuthContext";
import Image from "next/image";
import Link from "next/link";

// A change from Jonas code. Created GuestLink and AuthContext, then wrapped the app's html in layout
// inside AuthProvider and SessionProvider to make it possible to still show the avatar or whatever
// session info in the Navigation component, without making the whole app dynamic.

export default function GuestLink() {
  const session = useAuth();

  return (
    <li>
      {session?.user?.image ? (
        <Link
          href="/account"
          className="hover:text-accent-400 transition-colors flex justify-between items-center gap-4"
        >
          <span>Guest area</span>
          <Image
            className="h-8 rounded-full"
            src={session.user.image}
            alt={session.user.name}
            width="30"
            height="30"
            referrerPolicy="no-referrer"
          />
        </Link>
      ) : (
        <Link
          href="/account"
          className="hover:text-accent-400 transition-colors"
        >
          Guest area
        </Link>
      )}
    </li>
  );
}
