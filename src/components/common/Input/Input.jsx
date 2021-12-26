import style from "./Input.module.css";

export const Input = ({ value, onChange }) => {
  return (
    <input
      className={style._}
      placeholder="Enter your name"
      value={value}
      onChange={onChange}
    />
  );
};
