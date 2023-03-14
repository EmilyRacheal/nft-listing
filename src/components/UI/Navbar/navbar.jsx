import React, { useState } from "react";
import { NavbarBox } from "./navbar.styles";
import { Logo, Input, Button, Icon } from "../../components";
import { menuData } from "../../../utils/menuData";
import { BiSearch } from "react-icons/bi";
import { BsBell, BsSun } from "react-icons/bs";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import MobileMenu from "./mobileMenu";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleToggleMenu = () => {
    setMenu((prev) => !prev);
  };

  return (
    <NavbarBox>
      {menu && <MobileMenu toggle={handleToggleMenu} />}
      <div className="nav-parent">
        <div className="nav-menu">
          <div className="logo">
            <Logo />
          </div>

          <ul className="menu-list">
            {menuData.map((item) => {
              return (
                <li className="menu" key={item.id}>
                  {item.name}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="search">
          <div className="input-box">
            <Input placeholder="search" type="text">
              <BiSearch color="#acacac" />
            </Input>
          </div>

          <div className="connect-btn">
            <Button text="Connect" height="35px" />
          </div>

          <div className="icon-box">
            <Icon border={true}>
              <BsBell color="#acacac" />
            </Icon>
          </div>

          <div className="icon-box">
            <Icon border={true}>
              <BsSun color="#acacac" />
            </Icon>
          </div>
        </div>

        <HiOutlineMenuAlt3
          color="#58d0ea"
          size={35}
          className="menu-icon"
          onClick={handleToggleMenu}
        />
      </div>
    </NavbarBox>
  );
};

export default Navbar;
