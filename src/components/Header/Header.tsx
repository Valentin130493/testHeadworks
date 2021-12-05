import React, { useState } from "react";
import "./Header.scss";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../router/routes";

const Header = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState("");

  const chooseReceipt = () => {
    setActive("receipt");
    navigate(ROUTES.RECEIPT);
  };
  const chooseFavourites = () => {
    setActive("fav");
    navigate(ROUTES.FAVOURITE);
  };

  return (
    <>
      <header className={"layout__header"}>
        <div className={"buttons_block"}>
          <Button
            id={"receipt"}
            size={"small"}
            color={active === "receipt" ? "primary" : "secondary"}
            variant="contained"
            onClick={chooseReceipt}
          >
            Random dish
          </Button>
          <Button
            id={"fav"}
            size={"small"}
            color={active === "fav" ? "primary" : "secondary"}
            variant="contained"
            onClick={chooseFavourites}
          >
            Favourites
          </Button>
        </div>
      </header>
    </>
  );
};

export default Header;
