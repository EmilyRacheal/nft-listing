import React from "react";
import { ExploreBox } from "./explore.styles";
import {
  SectionLayout,
  Button,
  PrimaryCard,
} from "../../../components/components";
import { useFetch } from "../../../hooks/useFetchNft";

const Explore = () => {
  const { data } = useFetch();

  return (
    <SectionLayout border={true}>
      <ExploreBox>
        <div className="explore-header">
          <p className="header-text">Explore Product</p>
          <div className="header-btn">
            <Button text="Filter" />
          </div>
        </div>

        <div className="explore-card-box">
          {data?.slice(6, 16).map((item) => {
            return (
              <PrimaryCard
                name={item?.contract.name}
                img={item.contract.openSea.imageUrl}
                price={item.contract.openSea.floorPrice}
                address={item.contract.address}
                desc={item.contract.openSea.description}
              />
            );
          })}
        </div>
      </ExploreBox>
    </SectionLayout>
  );
};

export default Explore;
