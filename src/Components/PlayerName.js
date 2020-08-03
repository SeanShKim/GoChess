import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.text.primary,
  },
  wrapIcon: {
    verticalAlign: "bottom",
    display: "inline-flex",
  },
}));

function PlayerName(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      {/* <Paper elevation={3}>
        <Grid container>
          <Grid item xs={6} align="center">
            <PersonIcon />
          </Grid>
          <Grid item xs={6}>
            <Typography>Player1: {props.playerOne}</Typography>
          </Grid>
        </Grid>
        <Divider />
        <Grid container>
          <Grid item xs={6} align="center">
            <PersonIcon />
          </Grid>
          <Grid item xs={6}>
            <Typography>Player2: {props.playerTwo}</Typography>
          </Grid>
        </Grid>
      </Paper> */}
      <Paper elevation={3}>
        <Grid container className={classes.root} spacing={3}>
          <Grid item xs align="center" display="flex">
            <Typography variant="h6">
              <PersonIcon fontSize="large" className={classes.wrapIcon} />
              {props.playerOne}
            </Typography>
          </Grid>
        </Grid>
        <Divider />
        <Grid container>
          <Grid item xs align="center" display="flex">
            <Typography variant="h6">
              <PersonIcon fontSize="large" className={classes.wrapIcon} />
              {props.playerTwo}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </React.Fragment>
  );
}

export default PlayerName;
