import { useState } from "react";
import { Input } from "../common/Input/Input";
import style from "./UserFormViaFunction.module.css";

export const UserFormViaFunction = () => {
  const [name, setName] = useState(null);

  const handleOnChange = (event) => {
    const { value } = event.target;
    setName(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form className={style._} onSubmit={handleSubmit}>
      <h2>Functional component</h2>
      <Input
        value={name || ""}
        onChange={handleOnChange}
        placeholder="Enter your name"
      />
      {name ? (
        <h3 className={style.userNameTitle}>Happy new year, {name}!</h3>
      ) : (
        <h3 className={style.emptyUserName}>Name is not filled</h3>
      )}
    </form>
  );
};
