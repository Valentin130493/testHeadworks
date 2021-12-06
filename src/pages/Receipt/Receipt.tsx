import React, { useEffect } from "react";
import { getRandomReceipt } from "../../api/useRecipes";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { actionGetRandomReceipt } from "../../store/actions/actionGetRandomReceipt";
import { ApplicationState } from "../../store";
import OneReceipt from "../../components/_common/Receipt/OneReceipt";
import "./Receipt.scss";
import { RECEIPT } from "../../store/reducers/randomReceiptReducer";

const Receipt = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getReceipt();
  }, []);

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

  const receiptData = useSelector<ApplicationState>((state) => state.random);

  const addToFav = () => {};

  return (
    <div className={"main"}>
      <OneReceipt
        title={receiptData?.title}
        description={receiptData?.description}
        imgSrc={receiptData?.imgSrc}
      />
      <div className={"buttons_block"}>
        <Button onClick={getRandomReceipt}> Skip</Button>
        <Button onClick={addToFav}> like</Button>
      </div>
    </div>
  );
};

export default Receipt;
