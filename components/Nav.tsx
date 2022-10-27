import Link from "next/link";
import React, { useEffect, useState } from "react";
import ButtonDark from "./ButtonDark";
import ButtonLight from "./ButtonLight";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";

type Props = {};

const Nav = ({}: Props) => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  const Menus: any[] = [
    {
      name: "I",
      dis: "translate-y-0",
      rounded: "first",
      goTo: "1",
    },
    {
      name: "II",
      dis: "translate-y-16",
      rounded: "false",
      goTo: "2",
    },
    {
      name: "III",
      dis: "translate-y-32",
      rounded: "false",
      goTo: "3",
    },
    {
      name: "IV",
      dis: "translate-y-48",
      rounded: "false",
      goTo: "4",
    },
    {
      name: "V",
      dis: "translate-y-64",
      rounded: "last",
      goTo: "5",
    },
  ];

  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return <ButtonLight onclick={() => setTheme("light")} />;
    } else {
      return <ButtonDark onclick={() => setTheme("dark")} />;
    }
  };

  const [active, setActive] = useState(0);

  return (
    <>
      <div className="bg-transparent max-w-[10rem] px-6 rounded-t-xl fixed top-2/4 -translate-y-[50%] right-10 z-20 text-white">
        <ul className="flex flex-col relative">
          <span
            className={`bg-[#F08000]/70 duration-700 ${Menus[active].dis} h-16 w-16 absolute z-0 top-0 rounded-full`}
          ></span>
          {Menus.map((menu, i) => (
            <Link href={`/#${menu.goTo}`} key={i}>
              <li
                className={`h-16 w-16 bg-black text-white flex items-center justify-center cursor-pointer ${
                  menu.rounded == "first" && "rounded-t-full"
                } ${menu.rounded == "last" && "rounded-b-full"}`}
                onClick={() => setActive(i)}
              >
                <span className="z-30 font-nanum">{menu.name}</span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
      {renderThemeChanger()}
    </>
  );
};

export default Nav;
