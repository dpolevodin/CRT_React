import React from "react";
import style from "./TimerDisplay.module.css";

export class TimerDisplay extends React.Component {
  componentWillUnmount() {
    return this.props.callBack();
  }

  render() {
    return <span className={style.display}>{this.props.timer}</span>;
  }
}
