import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { Container } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


const useStyles = makeStyles(() => ({
  backgroundColor: {
    backgroundColor: "#8f0606",
    height: "140px",
  },
  logo: {
    marginLeft: -100,
  },
  text: {
    marginLeft: 210,
    marginBottom: 25,
    fontFamily: "DejaVu Sans Mono, monospace",
    fontSize: "18px",
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
}));


const NavBar = () => {

  const classes = useStyles(); //Styling

  return (
    <div>
      <AppBar position="static" className={classes.backgroundColor}>
        <Container>
          <Toolbar>
            <Button className={classes.logo} color="inherit" component={ Link } to='/'> <img src="DiscoverDeepDish.png"></img></Button>
            <p className={classes.text}>Resource for discovering high-quality, authentic Chicago-style deep dish pizza.</p>
            <Button className={classes.map}color="inherit" component={ Link } to='/'>Map</Button>
            <Button className={classes.list} color="inherit" component={ Link } to='/list'>List</Button>
            <Button className={classes.add} color="inherit" component={ Link } to='/add'>Add</Button>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
export default NavBar;