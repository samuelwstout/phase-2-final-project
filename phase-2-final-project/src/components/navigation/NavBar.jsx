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
  listAndAdd: {
    left: 490,
  },
  logo: {
    left: 490,
  },
  backgroundColor: {
    backgroundColor: "#8f0606"
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
   
    <div className={classes.root}>
      <AppBar position="static" className={classes.backgroundColor}>
      <Container>
        <Toolbar>
          <Button className={classes.logo}color="inherit" component={ Link } to='/'>Map</Button>
          <Button className={classes.listAndAdd} color="inherit" component={ Link } to='/list'>List</Button>
          <Button className={classes.listAndAdd} color="inherit" component={ Link } to='/add'>Add</Button>
        </Toolbar>
        </Container>
      </AppBar>
     
    </div>
  );
}
