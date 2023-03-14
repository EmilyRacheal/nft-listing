import React from "react";
import { MobileMenuBox } from "./mobileMenu.styles";
import { menuData } from "../../../utils/menuData";
import { Input, Button, Icon } from "../../components";
import { BiSearch } from "react-icons/bi";
import { BsBell, BsSun } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

const MobileMenu = ({ toggle }) => {
  return (
    <MobileMenuBox>
      <div className="menu-body">
        <div className="close-btn">
          <AiOutlineClose size={30} color="#58d0ea" onClick={toggle} />
        </div>

        <div>
          <ul className="menu-list">
            {menuData.map((item) => {
              return (
                <li className="menu" key={item.id}>
                  {item.name}
                </li>
              );
            })}
          </ul>

          <div className="icon-pack">
            <div className="">
              <Icon border={true}>
                <BsBell color="#acacac" />
              </Icon>
            </div>

            <div className="">
              <Icon border={true}>
                <BsSun color="#acacac" />
              </Icon>
            </div>
          </div>

          <div className="input-pack">
            <Input placeholder="search" type="text">
              <BiSearch color="#acacac" />
            </Input>
          </div>

          <div className="connect-btn">
            <Button text="Connect" height="45px" />
          </div>
        </div>
      </div>
    </MobileMenuBox>
  );
};

export default MobileMenu;
