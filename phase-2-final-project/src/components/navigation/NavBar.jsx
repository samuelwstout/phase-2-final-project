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
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
   
    <div className={classes.root}>
      <AppBar position="static">
      <Container>
        <Toolbar>
          <Button color="inherit" component={ Link } to='/'>Search</Button>
          <Button color="inherit" component={ Link } to='/map'>Map</Button>
          <Button color="inherit" component={ Link } to='/add'>Add</Button>
        </Toolbar>
        </Container>
      </AppBar>
     
    </div>
  );
}
