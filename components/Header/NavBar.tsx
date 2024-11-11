"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_ITEMS } from "./constants";
import { Navbox } from "./styles";

const Navbar = (): JSX.Element => {
  const pathname = usePathname();
  const [opened, setOpened] = useState<boolean>(false);

  return (
    <Navbox>
      <ul>
        {NAV_ITEMS.map((item) => {
          const activeItem = pathname === item.path;
          const isChild = !!item.children;
          return (
            <li key={item.id}>
              <Link href={item.path} className={activeItem ? "active" : ""}>
                {item.title}
              </Link>
              {isChild && (
                <ul>
                  {item.children!.map((child) => (
                    <li key={child.id}>
                      <Link href={child.path}>{child.title}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </Navbox>
  );
};

export default Navbar;
