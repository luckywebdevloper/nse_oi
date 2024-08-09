import {
  Navbar,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarContent,
} from "@nextui-org/navbar";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { Image } from "@chakra-ui/react";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <div>
        <Navbar
          className=" sticky top-0"
          style={{ background: "white" }}
          onMenuOpenChange={setIsMenuOpen}
        >
          <NavbarContent>
            <NavbarMenuToggle
              className="sm:hidden"
              style={{ background: "transparent" }}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            />
            <NavbarBrand>
              <Link to={"/"}>
                <Image
                  src={logo}
                  display={"block"}
                  className="sm:h-[60px] h-[40px] "
                />
              </Link>
            </NavbarBrand>
          </NavbarContent>
        </Navbar>
      </div>
    </>
  );
};

export default Header;
