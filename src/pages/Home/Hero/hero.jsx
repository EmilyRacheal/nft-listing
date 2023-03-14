import React from "react";
import { HeroContainer } from "./hero.styles";
import { SectionLayout, Button } from "../../../components/components";
import HeroImg from "../../../assets/nft-hero.png";

const Hero = () => {
  return (
    <SectionLayout>
      <HeroContainer>
        <div className="herobox">
          <div className="content">
            <p className="head-text">
              Discover Digital Art, Collect and Sell Your Specific NFTs.
            </p>

            <p className="sub-text">
              Partner with one of the world’s largest retailers to showcase your
              brand and products.
            </p>

            <div className="action-btn">
              <div className="btn">
                <Button
                  height="50px"
                  text="Get Started"
                  hoverBg="transparent"
                />
              </div>

              <div className="btn1">
                <Button
                  height="50px"
                  text="Create"
                  bgColor="#13131d"
                  hoverBg="#58d0ea"
                />
              </div>
            </div>
          </div>
          <div className="bg-img">
            <img src={HeroImg} />
          </div>
        </div>
      </HeroContainer>
    </SectionLayout>
  );
};

export default Hero;
