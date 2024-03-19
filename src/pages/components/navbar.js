import { Button, BorderlessButton } from "../button";
import { MdNightlight } from "react-icons/md";
import { MdLogin } from "react-icons/md";
import { BsPersonFillAdd } from "react-icons/bs";
import { IoHome } from "react-icons/io5";
import { BsBookHalf } from "react-icons/bs";
import { RiNewspaperLine } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";
import { cn } from "../cn";
import { MainMenu, MenuLink } from "./link";

export const NavBar = () => {
  const [menuState, setMenuState] = useState(false);
  const newRef = useRef(null);
  // useEffect(() => {
  //   document.addEventListener("mousedown", handleOutsideClick);
  //   return () => {
  //     document.removeEventListener("mousedown", handleOutsideClick);
  //   };
  // }),
  //   [];
  // const handleOutsideClick = (e) => {
  //   if (newRef.current && !newRef.current.contains(e.target)) {
  //     setMenuState(false);
  //     console.log(window.innerWidth);
  //   }
  // };
  return (
    <nav
      className="w-full py-3 px-8 bg-primary-100 flex justify-between font-medium text-lg"
      ref={newRef}
    >
      <button className="max-w-fit py-2 px-6 flex items-center justify-center rounded-lg border-2 border-solid border-primary-400 bg-white">
        EliteAppMakers <span className="rotate-90">&mdash;</span> Nela
      </button>
      <div className="hidden gap-2 ">
        <BorderlessButton icon={<IoHome />} text={"Home"} />
        <BorderlessButton icon={<RiNewspaperLine />} text={"Blog"} />
        <BorderlessButton icon={<BsBookHalf />} text={"Docs"} />
      </div>
      <div className="relative hidden items-center justify-center gap-4">
        <button className="max-w-fit p-2.5 rounded-xl hover:bg-gray-100">
          <MdNightlight className="w-8 h-8 text-primary-600 -rotate-45" />
        </button>
        <Button
          text={"Login"}
          icon={<MdLogin className="w-6 h-6" />}
          className="hidden "
        />
        <Button
          text={"Register"}
          icon={<BsPersonFillAdd className="w-6 h-6 text-white" />}
          className={
            "hidden border-2 border-solid border-white bg-primary-500 text-white "
          }
        />
        <button
          onClick={() => setMenuState(!menuState)}
          className="max-w-fit p-2 flex rounded-lg bg-primary-200 "
        >
          <RxDashboard className="w-8 h-8 text-primary-600" />
        </button>
      </div>
      <div
        className={cn(
          "absolute w-96 p-3 top-20 right-4 rounded-lg bg-primary-200 hidden",
          {
            hidden: !menuState,
          }
        )}
      >
        <div className="w-full p-2 grid grid-cols-2 gap-y-4 justify-between rounded-lg bg-primary-100">
          <MenuLink Icon={IoHome} href={"/home"} text={"Home"} />
          <MenuLink Icon={RiNewspaperLine} href={"/about"} text={"Blog"} />
          <MenuLink Icon={BsBookHalf} href={"/"} text={"Docs"} />
          <MenuLink Icon={MdLogin} href={"/"} text={"Login"} />
          <MenuLink Icon={BsPersonFillAdd} href={"/"} text={"Register"} />
        </div>
      </div>
      {/* New Nav Bar */}
      <div className="relative flex gap-2 items-center justify-center">
        <ul
          className={cn({
            "lg:static absolute lg:w-full w-80 top-16 lg:top-0 px-4 -right-4 lg:right-0 flex flex-col lg:flex-row lg:gap-8 text-center rounded-lg lg:rounded-none divide-y-2 lg:divide-y-0 divide-zinc-950 bg-primary-400 lg:bg-transparent":
              menuState,
            "static hidden lg:flex gap-8": !menuState,
          })}
        >
          <li>
            <MainMenu text={"Home"} href={"/home"} />
          </li>
          <li>
            <MainMenu text={"Blog"} href={"/blog"} />
          </li>
          <li>
            <MainMenu text={"Docs"} href={"/docs"} />
          </li>
        </ul>
        <button
          className="flex lg:hidden"
          onClick={() => setMenuState(!menuState)}
        >
          <AiOutlineMenu className={cn("w-8 h-8", { hidden: menuState })} />
          <AiOutlineClose className={cn("w-8 h-8", { hidden: !menuState })} />
        </button>
      </div>
    </nav>
  );
};
