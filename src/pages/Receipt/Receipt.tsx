import React, { useEffect, useState } from "react";
import { getRandomReceipt } from "../../api/useRecipes";
import placeholder from "../../assets/svg/Placeholder.svg";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { actionGetRandomReceipt } from "../../store/actions/actionGetRandomReceipt";

const Receipt = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getReceipt();
  }, []);

  const receiptData: any = useSelector<any>((state) => state.random);

  const getReceipt = async () => {
    let data = await getRandomReceipt();
    dispatch(
      actionGetRandomReceipt({
        id: data.idMeal,
        title: data.strMeal,
        imgSRC: data.strImageSource,
        description: data.strInstructions,
      })
    );
  };

  return (
    <div className={"main"}>
      <section className={"receipt"}>
        <img src={placeholder} alt={"Dish"} />
        {receiptData && <h3 className={"title"}>{receiptData.title}</h3>}
        <p className={"description"}>{}</p>
        <div className={"buttons_block"}>
          <Button onClick={getReceipt}> Skip</Button>
        </div>
      </section>
    </div>
  );
};

export default Receipt;
