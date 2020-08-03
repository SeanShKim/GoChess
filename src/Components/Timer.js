import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import { requirePropFactory } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const Timer = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const [seconds, setSeconds] = useState(props.seconds);
  const [timerIsActive, setTimerIsActive] = useState(true);
  const [playerOneActive, setPlayerOneActive] = useState(true);

  const reset = () => {
    setSeconds(props.seconds);
    setTimerIsActive(true);
    setPlayerOneActive(!playerOneActive);
  };

  useEffect(() => {
    if (seconds === 0) {
      if (!playerOneActive) {
        history.push("/result", { winner: props.playerOne });
      } else {
        history.push("/result", { winner: props.playerTwo });
      }
    }
    let currentTime = null;
    if (timerIsActive) {
      currentTime =
        seconds > 0 &&
        setInterval(() => {
          setSeconds(seconds - 1);
        }, 1000);
    } else if (!timerIsActive && seconds !== 0) {
      clearInterval(currentTime);
    }
    return () => clearInterval(currentTime);
  }, [timerIsActive, seconds]);

  return (
    <div className={classes.root}>
      <Button variant="outlined" color="primary">
        0{Math.floor(seconds / 60)}:
        {seconds % 60 < 10 ? "0" + (seconds % 60) : seconds % 60}
      </Button>
      <Button variant="outlined" color="secondary" onClick={reset}>
        reset
      </Button>
      <Button variant="outlined" color="primary">
        {playerOneActive ? props.playerOne : props.playerTwo}
      </Button>
    </div>
  );
};

export default Timer;
