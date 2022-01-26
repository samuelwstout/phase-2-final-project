import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { Container } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
  map: {
    left: 169,
    top: -30,
  },
  list: {
    left: 105,
    top: 0,
  },
  add: {
    left: 40,
    top: 30,
  },
  backgroundColor: {
    backgroundColor: "#8f0606",
    height: "140px",
  },
  deepdish: {
    marginLeft: -90,
  },
  text: {
    marginLeft: 240,
    marginBottom: 25,
    fontFamily: "DejaVu Sans Mono, monospace",
    fontSize: "18px"
  }
  
}));

export default function NavBar() {
  const classes = useStyles();

  return (
   
    <div className={classes.root}>
      <AppBar position="static" className={classes.backgroundColor}>
      <Container>
        <Toolbar>
        <Button className={classes.deepdish} color="inherit" component={ Link } to='/'> <img src="DiscoverDeepDish.png"></img></Button>
          <p className={classes.text}>Community-driven resource for discovering high-quality, authentic Chicago-style deep dish pizza around the world.</p>
          <Button className={classes.map}color="inherit" component={ Link } to='/'>Map</Button>
          <Button className={classes.list} color="inherit" component={ Link } to='/list'>List</Button>
          <Button className={classes.add} color="inherit" component={ Link } to='/add'>Add</Button>
        </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
