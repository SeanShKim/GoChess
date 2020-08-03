import React from "react";
import GoBoard from "./GoBoard";
import Chess from "./Chess";
import Grid from "@material-ui/core/Grid";
import Timer from "./Timer";
import PlayerName from "./PlayerName";

function GamePage(props) {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <PlayerName
            playerOne={props.location.state.playerOne}
            playerTwo={props.location.state.playerTwo}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Timer
            seconds={30}
            playerOne={props.location.state.playerOne}
            playerTwo={props.location.state.playerTwo}
          />
          <Chess />
        </Grid>
        <Grid item xs={12} md={6}>
          <Timer
            seconds={60}
            playerOne={props.location.state.playerOne}
            playerTwo={props.location.state.playerTwo}
          />
          <GoBoard />
        </Grid>
      </Grid>
    </div>
  );
}

export default GamePage;
