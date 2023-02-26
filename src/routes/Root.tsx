import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import MobileNav from "../features/navigation/MobileNav";
import Nav from "@/features/navigation/Nav";
import Toggle from "@/features/navigation/Toggle";
import { StarIcon } from "@heroicons/react/24/solid";
import { useAppDispatch } from "@/store/store";
import { getJobs } from "@/store/features/jobSlice";
import MainHeader from "@/components/header/MainHeader";

const Root = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getJobs());
  }, []);

  return (
    <main className="relative flex min-h-screen w-screen flex-col bg-off-white lg:bg-white lg:p-0">
      <Nav />
      <MobileNav isOpen={isOpen} onClick={() => setIsOpen(false)} />
      <Toggle isOpen={isOpen} onClick={() => setIsOpen((isOpen) => !isOpen)} />
      <MainHeader />
      <div className="h-[calc(100vh-108px)] max-h-full rounded-tl-[3rem] bg-off-white lg:ml-80 lg:overflow-x-hidden">
        <Outlet />
      </div>
    </main>
  );
};

export default Root;
