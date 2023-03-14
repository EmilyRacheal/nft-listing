import * as React from "react";
import { createPortal } from "react-dom";
import {
  SModalOverlay,
  SModalWrapper,
  SModal,
  BidderImg,
} from "./modal.styles";
import { Button } from "../components";
import { AiOutlineClose } from "react-icons/ai";
import { primaryCardData } from "../../utils/primaryCardData";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { formatString } from "../../utils/formatString";

const Modal = ({ isVisible, hideModal, name, price, desc, img, address }) => {
  const handleOpenLink = () => {
    window.open(`https://opensea.io/collection/${formatString(name)}`);
  };

  return isVisible
    ? createPortal(
        <React.Fragment>
          <SModalOverlay />
          <SModalWrapper
            aria-modal={true}
            aria-hidden={true}
            tabIndex={-1}
            role="dialog"
          >
            <SModal>
              <div className="header-title">
                <p className="title">{`Created ${name} on Feb 2023`}</p>
                <AiOutlineClose
                  size={40}
                  color="#fff"
                  onClick={hideModal}
                  className="icon"
                />
              </div>
              <div className="modal-content">
                <img src={img} alt="" className="modal-img" />

                <div className="bid-list">
                  <div className="bid-img-box">
                    {primaryCardData.map((item) => {
                      const calcLeft = item.id * 16;
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
                </div>

                <div className="card-content">
                  <p className="name">{name}</p>

                  <p className="bid">{address}</p>

                  <div className="price-box">
                    <p className="price">{price || "0.3452wETH"}</p>

                    <BsFillSuitHeartFill color="#58d0ea" size={20} />
                  </div>
                </div>

                <p className="description">{desc}</p>
              </div>

              <div className="modal-footer">
                <Button
                  height="50px"
                  width="160px"
                  text="Purchase Here"
                  onClick={handleOpenLink}
                />
              </div>
            </SModal>
          </SModalWrapper>
        </React.Fragment>,
        document.body
      )
    : null;
};

export default Modal;
