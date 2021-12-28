import React from "react";
import style from "./Timer.module.css";
import { Button } from "../common/Button/Button";
import { Input } from "../common/Input/Input";
import { TimerDisplay } from "./components/TimerDisplay";

export class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 0,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.timer = this.timer.bind(this);
    this.handleClickStop = this.handleClickStop.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState({ timer: value });
  }

  timer() {
    if (this.state.timer) {
      this.setState({ timer: this.state.timer - 1 });
    }
  }

  handleClick() {
    const intervalId = setInterval(this.timer, 1000);
    this.setState({ intervalId: intervalId });
  }

  handleClickStop() {
    clearInterval(this.state.intervalId);
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  render() {
    return (
      <>
        <div className={style.inputWrapper}>
          <Input
            short
            placeholder="Enter the count of seconds"
            onChange={this.handleChange}
            value={this.state.timer || ""}
          />
        </div>

        <div className={style.buttonWrapper}>
          <Button round OnClick={this.handleClick}>
            START
          </Button>
          <Button round danger OnClick={this.handleClickStop}>
            STOP
          </Button>
        </div>

        {this.state.timer > 0 && <TimerDisplay timer={this.state.timer} />}
      </>
    );
  }
}
