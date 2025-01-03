"use client";

import { usePathname } from "next/navigation";
import Navigation from "@/app/_components/Navigation";
import Logo from "@/app/_components/Logo";

function Header() {
  const pathname = usePathname();

  const bgHome =
    pathname !== "/" ? "bg-primary-950 border-b border-primary-900" : "";

  return (
    <header className={`${bgHome} lg:sticky lg:z-50 top-0 px-8 py-5`}>
      <div className="flex justify-between items-center max-w-[100rem] mx-auto">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
