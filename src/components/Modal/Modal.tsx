import React, { ChangeEvent, useState } from "react";
import "./Modal.scss";
import closeCircle from "../../assets/svg/circle.svg";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { actionAddCustomReceipt } from "../../store/actions/actionToFavReceipts";

interface Props {
  close: () => void;
}

const Modal: React.FC<Props> = ({ close }) => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    title: "",
    description: "",
  });

  const inputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const addCustom = () => {
    dispatch(
      actionAddCustomReceipt({
        title: state.title,
        description: state.description,
        imgSrc: "",
      })
    );
    close();
  };
  return (
    <div className={"modal-back"}>
      <div className={"base-modal"}>
        <div className={"base-modal-wrapper"}>
          <div className={"base-modal__header"}>
            <div className={"first"}>
              <input
                name={"title"}
                className={"input"}
                placeholder={"Title"}
                value={state.title}
                onChange={(event) => {
                  inputChange(event);
                }}
              />
              <img src={closeCircle} onClick={close} alt={"closeCircle"} />
            </div>
            <div className={"second"}>
              <input
                name={"description"}
                className={"input"}
                placeholder={"Description"}
                value={state.description}
                onChange={(event) => {
                  inputChange(event);
                }}
              />
              <Button color={"secondary"} variant={"text"} onClick={addCustom}>
                Add
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
