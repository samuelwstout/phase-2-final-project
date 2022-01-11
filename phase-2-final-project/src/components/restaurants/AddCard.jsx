import React, {useState} from 'react'; 
import { finalURL } from './Globals';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  form: {
    marginTop: 20,
    marginLeft: 50,
    
  },
  input: {
    width: 700,
    marginBottom: 8,
  },
 
  submitButton: {
    position: "absolute",
    top: 145,
    left: 370,
  }
  });

const AddCard = () => {

  const classes = useStyles();
  
  const [addCardData, setAddCardData] = useState({
  name: '',
  phone: '',
  linkToGoogleMaps: '',
  website: '',

});
  const handleChange = (e) => {
    setAddCardData({
      ...addCardData,
      [e.target.id]: e.target.value,
    });
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch((finalURL), {
  method: "POST",
  headers: {
    "Content-Type":"application/json"
  },
    body: JSON.stringify(addCardData),
    });
  }

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <input 
        className={classes.input}
        type="text"
        id="name"
        value={addCardData.name}
        placeholder='name'
        onChange={handleChange}
      />
       <input
       className={classes.input}
        type="text"
        id="phone"
        value={addCardData.phone}
        placeholder='phone'
        onChange={handleChange}
      />
        <input
        className={classes.input}
        type="text"
        id="linkToGoogleMaps"
        value={addCardData.linkToGoogleMaps}
        placeholder='link to Google Maps'
        onChange={handleChange}
      />
          <input
          className={classes.input}
        type="text"
        id="website"
        placeholder='website'
        value={addCardData.website}
        onChange={handleChange}
      />
       <input className={classes.submitButton} type="submit" value="Submit" />
    </form>
  )
}

export default AddCard;