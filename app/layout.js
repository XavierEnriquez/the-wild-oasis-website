// import Logo from "@/app/_components/Logo";
// import Navigation from "@/app/_components/Navigation";

import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

import "@/app/_styles/globals.css";
import "react-day-picker/dist/style.css";
import Header from "@/app/_components/Header";
import { ReservationProvider } from "@/app/_components/ReservationContext";
import { SessionProvider } from "next-auth/react";
import { AuthProvider } from "@/app/_lib/AuthContext";

export const metadata = {
  title: {
    template: "%s / The Wild Oasis",
    default: "The Wild Oasis | Welcome",
  },
  description:
    "Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests",
};

// A change from Jonas code. Created GuestLink and AuthContext, then wrapped the app's html in layout
// inside AuthProvider and SessionProvider to make it possible to still show the avatar or whatever
// session info in the Navigation component, without making the whole app dynamic.

export default function RootLayout({ children }) {
  return (
    <SessionProvider>
      <AuthProvider>
        <html lang="en">
          <body
            className={`${josefin.className} antialiased bg-primary-950 text-primary-100 h-screen flex flex-col relative`}
          >
            <Header />

            <div className="flex-1  grid">
              <main className="mx-auto w-full max-w-[100rem] p-2 lg:p-8 ">
                <ReservationProvider>{children}</ReservationProvider>
              </main>
            </div>
          </body>
        </html>
      </AuthProvider>
    </SessionProvider>
  );
}
