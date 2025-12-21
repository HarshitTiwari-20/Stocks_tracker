import Link from "next/dist/client/link";
import Image from "next/image";

const Header = () => {

  return (
    <header className=" sticky top-0 header">
      <div className=" container header-wrapper">
        <Link href="/">
          <Image src="/assets/icons/logo.svg" alt="Logo" width={140} height={40} className=" h-8 w-auto cursor-pointer" />

        </Link>
      </div>
    </header>
  )
}

export default Header;