import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import MobileNav from "../features/navigation/MobileNav";
import Nav from "@/features/navigation/Nav";
import Toggle from "@/features/navigation/Toggle";
import { useAppDispatch } from "@/store/store";
import { getJobs } from "@/store/features/jobSlice";
import MainHeader from "@/components/header/MainHeader";

const Root = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getJobs());
  }, []);

  const savedTheme = localStorage.getItem("theme") || "light";
  const [theme, setTheme] = useState<string>(savedTheme);
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  function handleThemeSwitch() {
    setTheme(theme === "dark" ? "light" : "dark");
    console.log(theme)
    setIsOpen(false);
    localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
  }

  return (
    <main className="relative flex h-full lg:min-h-screen w-screen flex-col bg-off-white lg:bg-white lg:p-0 dark:bg-zinc-900">
      <Nav onClick={() => setIsOpen(false)} themeHandler={handleThemeSwitch} theme={theme}/>
      <MobileNav isOpen={isOpen} onClick={() => setIsOpen(false)} themeHandler={handleThemeSwitch} theme={theme}/>
      <Toggle isOpen={isOpen} onClick={() => setIsOpen((isOpen) => !isOpen)} />
      <MainHeader />
      <div className="lg:h-[calc(100vh-108px)]  rounded-md bg-off-white lg:ml-80 lg:overflow-x-hidden dark:bg-zinc-800">
        <Outlet />
      </div>
    </main>
  );
};

export default Root;
