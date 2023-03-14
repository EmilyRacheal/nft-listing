import React from "react";
import { SectionLayout, Logo, Icon } from "../../components";
import { FooterBox } from "./footer.styles";
import {
  linksDataOne,
  linksDataTwo,
  soldData,
} from "../../../utils/footerData";
import { FiFacebook, FiTwitter, FiLinkedin } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <SectionLayout border={true} bgColor="#24243557">
      <FooterBox>
        <div className="footer-parent">
          <div className="footer-item">
            <Logo />

            <div className="item-1">
              <p className="item1-text">
                Created with the collaboration of over 60 of the world's best
                Nuron Artists.
              </p>
            </div>
          </div>

          <div className="footer-item">
            <h2 className="item-title">Altura</h2>

            <div className="item1">
              <ul className="item-list">
                {linksDataOne.map((item) => {
                  return (
                    <li className="list" key={item.id}>
                      {item.name}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="footer-item">
            <h2 className="item-title">Information</h2>

            <div className="item1">
              <ul className="item-list">
                {linksDataTwo.map((item) => {
                  return (
                    <li className="list" key={item.id}>
                      {item.name}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="footer-item">
            <h2 className="item-title">Recent Sold</h2>

            <div className="item1">
              <ul className="item-list">
                {soldData.map((item) => {
                  return (
                    <li className="sold-box" key={item.id}>
                      <img src={item.img} alt="" className="sold-img" />

                      <div className="sold-content">
                        <p className="name">{item.name}</p>
                        <p className="price">{item.price}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-cc">
          <div className="cc-text-box">
            <p className="cc-text">©2022 Altura, Inc. All rights reserved.</p>
            <div className="cc-menu-box">
              <p className="cc-menu">Terms</p>
              <li className="cc-menu">Privacy Policy</li>
            </div>
          </div>

          <div className="footer-socials">
            <div className="social">
              <Icon border={true}>
                <FiFacebook color="#acacac" />
              </Icon>
            </div>
            <div className="social">
              <Icon border={true}>
                <FiTwitter color="#acacac" />
              </Icon>
            </div>
            <div className="social">
              <Icon border={true}>
                <FaInstagram color="#acacac" />
              </Icon>
            </div>
            <div className="social">
              <Icon border={true}>
                <FiLinkedin color="#acacac" />
              </Icon>
            </div>
          </div>
        </div>
      </FooterBox>
    </SectionLayout>
  );
};

export default Footer;
