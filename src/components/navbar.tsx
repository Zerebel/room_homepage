import { NavItem } from "../types/types";
import LogoIcon from "../assets/logo.svg";
import MenuIcon from "../assets/icon-hamburger.svg";
import CloseIcon from "../assets/icon-close.svg";
import { MouseEventHandler, useState } from "react";

export const Navbar = () => {
  const navItems: NavItem[] = [
    {
      name: "home",
      link: "/",
    },
    {
      name: "shop",
      link: "#",
    },
    {
      name: "about",
      link: "#",
    },
    {
      name: "contact",
      link: "#",
    },
  ];

  const Logo = () => (
    <a href="/">
      <img src={LogoIcon} alt="logo" />
    </a>
  );

  const Menu = ({ onClick }: { onClick?: MouseEventHandler }) => {
    return navItems.map((item, index) => (
      <li key={index} className="flex flex-col items-center">
        <a href={item.link} onClick={onClick} className="peer">
          {item.name}
        </a>
        <div className="w-4/6 h-0.5 bg-white invisible peer-hover:visible hidden lg:block"></div>
      </li>
    ));
  };

  const MobileNav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
      <>
        <ul className="flex justify-between items-center px-8 lg:hidden w-full absolute top-12">
          <li>
            <img
              src={MenuIcon}
              alt="menu"
              role="button"
              onClick={() => setMenuOpen(!menuOpen)}
            />
          </li>
          <li>
            <Logo />
          </li>
          <li></li>
        </ul>
        {menuOpen && (
          <div className="absolute top-0 w-full lg:hidden h-svh">
            <div className="py-12 bg-white  flex items-center justify-around">
              <img
                src={CloseIcon}
                alt="close"
                role="button"
                onClick={() => setMenuOpen(false)}
              />
              <ul className="flex gap-8 px-8">
                <Menu onClick={() => setMenuOpen(false)} />
              </ul>
            </div>
            <div
              className="bg-black/50 h-full"
              onClick={() => setMenuOpen(false)}
            ></div>
          </div>
        )}
      </>
    );
  };

  const DesktopNav = () => {
    return (
      <ul className="hidden lg:flex gap-16 px-8 absolute top-16">
        <li className="pt-1">
          <Logo />
        </li>
        <li className="">
          <ul className="flex space-x-8 text-white">
            <Menu />
          </ul>
        </li>
      </ul>
    );
  };

  return (
    <nav>
      <MobileNav />
      <DesktopNav />
    </nav>
  );
};
