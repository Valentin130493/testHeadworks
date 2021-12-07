import React, { useEffect, useState } from "react";
import { getRandomReceipt } from "../../api/useRecipes";
import { Button } from "@mui/material";
import OneReceipt from "../../components/_common/Receipt/OneReceipt";
import "./Receipt.scss";
import { useDispatch } from "react-redux";
import { actionToFavReceipts } from "../../store/actions/actionToFavReceipts";

interface Meal {
  idMeal: string;
  strMeal: string;
  strInstructions: string;
  strMealThumb: string;
}

const Receipt = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState<Meal | null>(null);
  useEffect(() => {
    getReceipt();
  }, []);

  const getReceipt = async () => {
    let { data } = await getRandomReceipt();
    setState(data?.meals[0] || null);
  };

  const addToFav = () => {
    dispatch(
      actionToFavReceipts({
        id: state?.idMeal,
        title: state?.strMeal,
        imgSrc: state?.strMealThumb,
        description: state?.strInstructions,
      })
    );
    getReceipt();
  };

  return state ? (
    <div className={"main"}>
      <div>
        <OneReceipt
          title={state.strMeal}
          description={state.strInstructions}
          imgSrc={state.strMealThumb}
        />
      </div>

      <div className={"btn_block"}>
        <Button color={"error"} onClick={getReceipt}>
          Skip
        </Button>
        <Button color={"success"} onClick={addToFav}>
          like
        </Button>
      </div>
    </div>
  ) : null;
};

export default Receipt;
