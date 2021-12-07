import React, { useState } from "react";
import "./Header.scss";
import Button from "@mui/material/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../../router/routes";
import Modal from "../Modal/Modal";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [active, setActive] = useState("");
  const [close, setClose] = useState(false);

  const chooseReceipt = () => {
    setActive("receipt");
    navigate(ROUTES.RECEIPT);
  };
  const chooseFavourites = () => {
    setActive("fav");
    navigate(ROUTES.FAVOURITE);
  };
  const handleClose = () => {
    setClose(!close);
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
        {location.pathname === "/fav" && (
          <Button variant={"text"} color={"secondary"} onClick={handleClose}>
            Add custom dish
          </Button>
        )}
        {close && <Modal close={handleClose} />}
      </header>
    </>
  );
};

export default Header;
