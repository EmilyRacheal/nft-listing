import React from "react";
import { NewestBox } from "./newest.styles";
import {
  SectionLayout,
  Button,
  PrimaryCard,
} from "../../../components/components";
import { useFetch } from "../../../hooks/useFetchNft";

const Newest = () => {
  const { data } = useFetch();

  return (
    <SectionLayout border={true}>
      <NewestBox>
        <div className="newest-header">
          <p className="header-text">Newest Items</p>
          <div className="header-btn">
            <Button text="View All" bgColor="#13131d" />
          </div>
        </div>

        <div className="newest-card-box">
          {data?.slice(0, 6).map((item) => {
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
      </NewestBox>
    </SectionLayout>
  );
};

export default Newest;
