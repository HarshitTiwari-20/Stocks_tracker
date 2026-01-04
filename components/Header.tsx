import Link from "next/dist/client/link";
import Image from "next/image";
import NavItems from "./NavItems";
import { DropDown } from "./DropDown";




interface User {
  id: string;
  name: string;
  email: string;
  image?: string;
}

const Header = async ({ user }: { user?: User }) => {

  return (
    <div>

      <header className=" sticky  top-0 header">
        <div className=" container header-wrapper">
          <Link href="/">
            <Image src="/assets/icons/logo.svg" alt="Logo" width={140} height={40} className=" h-8 w-auto cursor-pointer" />
          </Link>
          <nav className="hidden sm:block">
            <NavItems />
          </nav>
          {user && <DropDown user={user} />}
        </div>

      </header>
    </div>
  )
}

export default Header;