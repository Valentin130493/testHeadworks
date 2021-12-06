import React from "react";
import placeholder from "../../../assets/svg/Placeholder.svg";

interface Props {
  imgSrc?: string;
  title?: string;
  description?: string;
}

const OneReceipt: React.FC<Props> = ({ imgSrc, title, description }) => {
  return (
    <>
      <section className={"receipt"}>
        <img src={imgSrc === "" ? imgSrc : placeholder} alt={"Dish"} />
        <h3 className={"title"}> {title}</h3>
        <p className={"description"}>{description}</p>
      </section>
    </>
  );
};

export default OneReceipt;
