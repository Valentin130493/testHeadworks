import React from "react";
import { useSelector } from "react-redux";
import { Receipt } from "../../store/reducers/favReceiptReducer";
import FavReceipt from "../../components/_common/FavReceipt/FavReceipt";
import "./Favourites.scss";

const Favourites = () => {
  const { receipts } = useSelector((state: any) => state.fav);

  return (
    <div className={"fav__maim"}>
      {receipts.length === 0
        ? null
        : receipts.map((item: Receipt, index: number) => {
            return (
              <FavReceipt
                key={index}
                imgSrc={item.imgSrc}
                description={item.description}
                title={item.title}
              />
            );
          })}
    </div>
  );
};

export default Favourites;
