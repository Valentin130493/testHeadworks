import React from "react";
import placeholder from "../../../assets/svg/Placeholder.svg";
import "./OneReceipt.scss";

interface Props {
  imgSrc?: string;
  title?: string;
  description?: string;
}

const OneReceipt: React.FC<Props> = ({ imgSrc, title, description }) => {
  return (
    <section className={"receipt"}>
      <img
        className={"receipts_img"}
        src={imgSrc === "" ? placeholder : imgSrc}
        alt={"Dish"}
      />
      <h3 className={"title"}> {title}</h3>
      <p className={"description"}>{description?.substr(0, 1500)}</p>
    </section>
  );
};

export default OneReceipt;
