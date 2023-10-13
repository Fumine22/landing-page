"use client";

import { Menu, Transition } from "@headlessui/react";
import { MenuIcon, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface NavMenu {
  id: number;
  href: string;
  name: string;
  children?: NavMenu[];
}

const menuItems: NavMenu[] = [
  { id: 1, href: "#", name: "Home" },
  {
    id: 2,
    href: "#",
    name: "About Us",
  },
  {
    id: 3,
    href: "#",
    name: "Services",
    children: [
      { id: 1, href: "#", name: "Website" },
      { id: 2, href: "#", name: "Application" },
      { id: 3, href: "#", name: "Mobile App" },
      { id: 4, href: "#", name: "AI" },
    ],
  },
  {
    id: 4,
    href: "#",
    name: "Products",
    children: [
      { id: 1, href: "#", name: "Website" },
      { id: 2, href: "#", name: "Application" },
      { id: 3, href: "#", name: "Mobile App" },
      { id: 4, href: "#", name: "AI" },
    ],
  },
  {
    id: 5,
    href: "#",
    name: "Blogs",
    children: [
      { id: 1, href: "#", name: "Blog 1" },
      { id: 2, href: "#", name: "Blog 2" },
      { id: 3, href: "#", name: "Blog 3" },
      { id: 4, href: "#", name: "Blog 4" },
    ],
  },
  { id: 6, href: "#", name: "Contact Us" },
];

function MenuItemMobile({ href, name, children }: NavMenu) {
  return (
    <li className="py-1.5 px-5">
      <Link href={href}>{name}</Link>
      {children && children.length > 0 && (
        <ul>
          {children.map((child) => (
            <li key={child.id} className="text-[13px] px-5">
              <Link href={child.href}>{child.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

function MenuItem({ href, name }: NavMenu) {
  return (
    <li>
      <Link
        href={href}
        className={`font-medium hover:text-[#3DBAD5] focus:text-[#3DBAD5] ${
          name == "Home" ? "text-[#3DBAD5]" : "text-[#434242]"
        } py-[35px] px-[25px]`}
      >
        {name}
      </Link>
    </li>
  );
}

const NavBar = () => {
  const [isShowing, setIsShowing] = useState(false);
  return (
    <nav>
      <Menu>
        <div className="container">
          <div className="flex justify-between items-center mx-auto py-3">
            {/* Logo */}
            <div className="flex flex-col">
              <Link href="#">
                <Image
                  src="https://logos-download.com/wp-content/uploads/2017/05/Blue_Air_logo_logotype-700x281.png"
                  alt="logo"
                  width={135}
                  height={50}
                />
              </Link>

              <p className="text-xs text-center text-[#0165B2]">
                Blue Air Fly High
              </p>
            </div>

            {/* NavMenu */}
            <div>
              <div className="lg:hidden">
                <div className="flex">
                  <Menu.Button
                    onClick={() => setIsShowing((isShowing) => !isShowing)}
                    className="text-[#434242]"
                  >
                    <MenuIcon className="w-9 h-9" />
                  </Menu.Button>
                </div>

                <Transition
                  show={isShowing}
                  enter="transition ease-in-out duration-300 transform"
                  enterFrom="translate-x-3/4"
                  enterTo="translate-x-0"
                  leave="transition ease-in-out duration-300 transform"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-3/4"
                  className="fixed z-10 right-0 left-[25%] md:left-[75%] top-0 bottom-0 h-[100vh] bg-[#383939]"
                >
                  <div className="flex flex-col">
                    <div className="flex justify-between items-start bg-[#3dbad5] p-[13px] text-[#fff]">
                      <Menu.Button onClick={() => setIsShowing(false)}>
                        <MenuIcon />
                      </Menu.Button>

                      <Menu.Button onClick={() => setIsShowing(false)}>
                        <X />
                      </Menu.Button>
                    </div>

                    <div className="text-[#fff]">
                      <ul>
                        {menuItems.map((item) => (
                          <MenuItemMobile key={item.id} {...item} />
                        ))}
                      </ul>
                    </div>
                  </div>
                </Transition>
              </div>

              <div className="hidden lg:flex">
                <ul className="flex gap-6 text-[#434242]">
                  {menuItems.map((item) => (
                    <MenuItem key={item.id} {...item} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Menu>
    </nav>
  );
};

export default NavBar;
