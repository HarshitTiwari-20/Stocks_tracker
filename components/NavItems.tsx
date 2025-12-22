"use client"

import { NAV_ITEMS } from "@/lib/const"
import Link from "next/link"
import { usePathname } from "next/navigation"

const NavItems = () => {
  const Pathname: string = usePathname()
  const isActive = (path: string) => {
    if (path === '/') return Pathname === '/';
    return Pathname === path;
  }

  return (
    <ul className=" flex flex-col sm:flex-row p-2 gap-3 sm:gap-10 font-medium text-sm">
      {NAV_ITEMS.map(({ href, label }) => (
        <li key={href}>
          <Link href={href} className={`hover:text-blue-300 transition-colors ${
            isActive(href) ? 'text-gray-100':''
          }`}>
            {label}

          </Link>
        </li>
      ))}

    </ul>
  )
}

export default NavItems