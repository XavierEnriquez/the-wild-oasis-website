import SideNavigation from "@/app/_components/SideNavigation";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col md:flex-row h-full gap-6 lg:gap-12">
      <SideNavigation />
      <div className="py-1">{children}</div>
    </div>
    // <div className="grid md:grid-cols-[16rem_1fr] h-full gap-12">
    //   <SideNavigation />
    //   <div className="py-1">{children}</div>
    // </div>
  );
}
