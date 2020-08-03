import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  button: {
    alignItems: "center",
  },
}));

function Result(props) {
  const classes = useStyles();
  const history = useHistory();

  const restartGame = (e) => {
    console.log("Game has restarted");
    history.push("/");
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
          <Card className={classes.root}>
            <CardContent>
              <Typography variant="h2" align="center">
                Game Over
              </Typography>
            </CardContent>
            <CardMedia
              className={classes.media}
              image="https://st.depositphotos.com/1095822/1378/i/450/depositphotos_13787166-stock-photo-gold-crown.jpg"
              title="Winner"
            />
            <CardContent className={classes.button}>
              <Typography variant="h3" align="center">
                {props.location.state.winner} Won!
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Button
            size="large"
            variant="contained"
            color="primary"
            className={classes.margin}
            onClick={restartGame}
          >
            Play Again
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Result;
