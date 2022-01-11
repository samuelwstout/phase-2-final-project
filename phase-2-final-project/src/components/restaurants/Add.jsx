import React from 'react';
import AddCard from './AddCard';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';

const useStyles = makeStyles({
  submitForm: {
    marginTop: 30,
    marginLeft: 320,
  }
  });

const Add = () => {
    const classes = useStyles();
    
return (
        <div>
       <List className={classes.submitForm} component="nav" aria-label="secondary mailbox folders">
            <AddCard />
        </List>
        </div>
    )
}

export default Add;
