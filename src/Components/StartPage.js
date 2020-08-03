import React from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

function StartPage() {
  const classes = useStyles();
  const history = useHistory();
  const [playerOne, setPlayerOne] = React.useState("");
  const [playerTwo, setPlayerTwo] = React.useState("");

  const startGame = async (e) => {
    console.log(playerOne);
    console.log(playerTwo);
    console.log("Game has started");
    history.push("/play", { playerOne: playerOne, playerTwo: playerTwo });
  };

  return (
    <React.Fragment>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "80vh" }}
      >
        <Grid item xs={6}>
          <Typography variant="h3">CHESS & GOMOKU</Typography>
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="outlined-inputPlayerOne"
            label="Player 1"
            variant="outlined"
            value={playerOne}
            className={classes.margin}
            onChange={(e) => setPlayerOne(e.target.value)}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="outlined-inputPlayerTwo"
            label="Player 2"
            variant="outlined"
            value={playerTwo}
            className={classes.margin}
            onChange={(e) => setPlayerTwo(e.target.value)}
          />
        </Grid>
        <Grid item xs={3}>
          <Button
            size="large"
            variant="contained"
            color="primary"
            className={classes.margin}
            onClick={startGame}
          >
            Play
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default StartPage;
