import React from "react";
import { CardBox, BidderImg } from "./card.styles";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { Modal } from "../components";
import { MdOutlineMoreHoriz } from "react-icons/md";
import { primaryCardData } from "../../utils/primaryCardData";
import useModal from "../../hooks/useModal";

const PrimaryCard = ({ img, name, bid, price, desc, address }) => {
  const { isVisible, toggleModal } = useModal();

  return (
    <CardBox onClick={toggleModal}>
      <Modal
        isVisible={isVisible}
        hideModal={toggleModal}
        img={img}
        name={name}
        price={price}
        address={address}
        desc={desc}
      />

      <div className="card-img">
        <img src={img} alt="" className="img" />
      </div>

      <div className="bid-list">
        <div className="bid-img-box">
          {primaryCardData.map((item) => {
            const calcLeft = item.id * 13;
            return (
              <BidderImg
                src={item.img}
                key={item.id}
                left={item.id === 1 ? "0px" : String(calcLeft) + "px"}
              />
            );
          })}

          <p className="bid-text">11+ Place Bit</p>
        </div>

        <MdOutlineMoreHoriz color="#acacac" size={18} />
      </div>

      <div className="card-content">
        <p className="name">{name}</p>

        <p className="bid">Highest bid 5/10</p>

        <div className="price-box">
          <p className="price">{price || "0.3452wETH"}</p>

          <BsFillSuitHeartFill color="#f7971e" size={20} />
        </div>
      </div>
    </CardBox>
  );
};

export default PrimaryCard;
