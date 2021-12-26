import React from "react";
import style from "./UserFormViaClass.module.css";
import { Input } from "../common/Input/Input";

export class UserFormViaClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
  };

  handleOnChange = (event) => {
    const { value } = event.target;
    this.setState({ name: value });
  };

  render() {
    return (
      <form className={style._} onSubmit={this.handleSubmit}>
        <h2>Class component</h2>
        <Input value={this.state.name || ""} onChange={this.handleOnChange} />
        {this.state.name ? (
          <h3 className={style.userNameTitle}>
            Happy new year, {this.state.name}!
          </h3>
        ) : (
          <h3 className={style.emptyUserName}>Name is not filled</h3>
        )}
      </form>
    );
  }
}
