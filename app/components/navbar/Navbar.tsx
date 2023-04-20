'use client'

import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import BurgerMenu from "./BurgenMenu";

const Navbar = () => {
  return (
    <div className=" w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="
            flex
            flex-row
            items-center
            justify-between
            gap-3
            md:gap-0
          ">
            <Logo />
            <Search />
            <BurgerMenu />
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Navbar;