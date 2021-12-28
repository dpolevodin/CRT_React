import style from "./Button.module.css";
import cc from "classcat";

export const Button = ({ children, round, OnClick }) => {
  const buttonStyle = cc([style._, { [style.round]: round }]);
  return (
    <button className={buttonStyle} onClick={OnClick}>
      {children}
    </button>
  );
};
