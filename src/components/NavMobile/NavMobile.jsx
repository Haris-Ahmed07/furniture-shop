import React from "react";
import { navigation } from "../../data.js";

const NavMobile = () => {
  return (
    <nav className="bg-white w-full h-screen shadow-2xl text-primary">
      <ul className="text-center h-full flex flex-col items-center justify-center gap-y-6">
        {navigation.map((item, index) => {
          return (
            <li key={index}>
              <a
                className="text-primary text-xl font-medium capitalize "
                href={item.href}
              >
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavMobile;
