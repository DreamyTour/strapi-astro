"use client";

import * as React from "react";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu as MenuIcon, X as CloseIcon } from "lucide-react";

export default function Menu({ data }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="w-full">
      {/* Desktop: sin cambios */}
      <div className="hidden md:block">
        <NavigationMenu className="w-full mx-auto py-4">
          <NavigationMenuList className="max-w-7xl px-4 gap-4">
            {data.menuItems.map((menu) => (
              <NavigationMenuItem key={menu.id}>
                <NavigationMenuTrigger>{menu.link.label}</NavigationMenuTrigger>
                {menu.item.length > 0 && (
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {menu.item.map((sub) => (
                        <li key={sub.id}>
                          <NavigationMenuLink asChild>
                            <a
                              href={sub.url || "#"}
                              target={sub.isExternal ? "_blank" : "_self"}
                              rel={
                                sub.isExternal
                                  ? "noopener noreferrer"
                                  : undefined
                              }
                              className="block p-2 hover:bg-primary rounded"
                            >
                              {sub.label}
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Mobile: hamburguesa a partir de <md */}
      <div className="md:hidden w-full max-w-7xl mx-auto px-4 flex justify-between items-center py-2">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 rounded-md focus:outline-none focus:ring"
        >
          {mobileOpen ? (
            <CloseIcon className="w-6 h-6" />
          ) : (
            <MenuIcon className="w-6 h-6" />
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden w-full bg-white shadow-lg">
          <ul className="flex flex-col gap-2 max-w-7xl mx-auto px-4 py-4">
            {data.menuItems.map((menu) => (
              <li key={menu.id}>
                <details>
                  <summary className="cursor-pointer py-2 font-medium hover:text-primary">
                    {menu.link.label}
                  </summary>
                  {menu.item.length > 0 && (
                    <ul className="pl-4 mt-2 flex flex-col gap-1">
                      {menu.item.map((sub) => (
                        <li key={sub.id}>
                          <a
                            href={sub.url || "#"}
                            target={sub.isExternal ? "_blank" : "_self"}
                            rel={
                              sub.isExternal ? "noopener noreferrer" : undefined
                            }
                            className="block py-1 px-2 rounded hover:bg-primary hover:text-white"
                          >
                            {sub.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </details>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
