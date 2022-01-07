import React from 'react';
import AddCard from './AddCard';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }));

const Add = () => {
    const classes = useStyles();
    
return (
        <div>
       <List component="nav" aria-label="secondary mailbox folders">
            <AddCard />
        </List>
        </div>
    )
}

export default Add;
