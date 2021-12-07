import React from "react";
import placeholder from "../../../assets/svg/Placeholder.svg";
import "./FavReceipt.scss";

interface Props {
  imgSrc?: string;
  title?: string;
  description?: string;
}

const FavReceipt: React.FC<Props> = ({ imgSrc, title, description }) => {
  return (
    <section className={"fav__receipt"}>
      <img
        className={"fav__receipts_img"}
        src={imgSrc === "" ? placeholder : imgSrc}
        alt={"Dish"}
      />
      <h3 className={"fav__title"}> {title}</h3>
      <p className={"fav__description"}>{description?.substr(0, 1500)}</p>
    </section>
  );
};

export default FavReceipt;
