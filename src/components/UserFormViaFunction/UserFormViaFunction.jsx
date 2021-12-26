import { useState } from "react";
import { Input } from "../common/Input/Input";
import style from "./UserFormViaFunction.module.css";

export const UserFormViaFunction = () => {
  const [name, setName] = useState(null);

  const displayEnteredName = (name) => {
    return <h2 className={style.userNameTitle}>Your name: {name}</h2>;
  };

  const handleOnChangeInput = (event) => {
    const { value } = event.target;
    setName(value);
  };

  return (
    <form className={style._}>
      <Input value={name || ""} onChange={handleOnChangeInput} />
      {name && displayEnteredName(name)}
    </form>
  );
};
