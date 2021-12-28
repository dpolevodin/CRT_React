import style from "./Input.module.css";
import cc from "classcat";

export const Input = ({ value, onChange, short, placeholder }) => {
  const inputClass = cc([style._, { [style.short]: short }]);
  return (
    <input
      className={inputClass}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};
