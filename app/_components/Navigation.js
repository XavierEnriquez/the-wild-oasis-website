import { useState } from "react";
import Link from "next/link";
import GuestLink from "./GuestLink";
import NavButton from "./NavButton";

// A change from Jonas code. Created GuestLink and AuthContext, then wrapped the app's html in layout
// inside AuthProvider and SessionProvider to make it possible to still show the avatar or whatever
// session info in the Navigation component, without making the whole app dynamic.

// import { auth } from "../_lib/auth";

export default function Navigation() {
  const [isHidden, setIsHidden] = useState(true);

  // Changed Jonas code. See notes above.
  // const session = await auth();

  return (
    <nav className="z-10 text-xl">
      {/* <ul className="flex gap-16 items-center">
        <li>
          <Link
            href="/cabins"
            className="hover:text-accent-400 transition-colors"
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-accent-400 transition-colors"
          >
            About
          </Link>
        </li>

        <GuestLink />
      </ul> */}
      <menu className="hidden lg:block" id="desktop-menu">
        <ul className="flex gap-12 items-center px-2">
          <li>
            <Link
              href="/cabins"
              className="block rounded-md  px-3 py-2 text-base font-medium hover:bg-primary-900  hover:text-accent-400 transition-colors"
              aria-current="page"
            >
              Cabins
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="block rounded-md px-3 py-2 text-base font-medium  hover:bg-primary-900 hover:text-accent-400 transition-colors"
            >
              About
            </Link>
          </li>
          <GuestLink />
        </ul>
      </menu>
      {/* Mobile menu, show/hide based on menu state.  */}
      <menu className="lg:hidden relative " id="mobile-menu">
        <NavButton onClick={() => setIsHidden(!isHidden)}>
          <ul
            className={`bg-primary-900 ${
              isHidden ? "hidden" : "absolute"
            } top-9 right-9 rounded-md min-w-60 space-y-1 p-8 transition-transform`}
            onClick={() => setIsHidden(!isHidden)}
          >
            <li>
              <Link
                href="/cabins"
                className="block rounded-md  px-3 py-2 text-base font-medium hover:bg-primary-900  hover:text-accent-400 transition-colors"
                aria-current="page"
              >
                Cabins
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block rounded-md px-3 py-2 text-base font-medium  hover:bg-primary-900 hover:text-accent-400 transition-colors"
              >
                About
              </Link>
            </li>
            <GuestLink />
          </ul>
        </NavButton>
      </menu>
    </nav>
  );
}
