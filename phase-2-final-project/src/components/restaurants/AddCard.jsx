import React, {useState} from 'react'; 
import { makeStyles } from '@material-ui/core/styles';
import { finalURL } from './Globals';

const useStyles = makeStyles({
  form: {
display: 'flex',
flexDirection: 'column',
width: '400px',
marginLeft: 40,
  },
  input: {
    width: 700,
    marginBottom: 8,
  },
 
  submitButton: {
    position: "absolute",
    top: 145,
    left: 365,
  }
  });

const AddCard = ({handleAddToList}) => {

  const classes = useStyles();
  
  const [addCardData, setAddCardData] = useState({
  name: '',
  phone: '',
  linkToGoogleMaps: '',
  website: '',

});

  const handleChange = (e) => {
    setAddCardData({
      ...addCardData, [e.target.id]: e.target.value});
  }


  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   fetch((finalURL), {
  //    method: "POST",
  //    headers: {
  //      "Content-Type":"application/json"
  //    },
  //    body: JSON.stringify(addCardData),
  //  });
 
  // }


  return (
    <form className={classes.form} onSubmit={e => handleAddToList(e, addCardData)} >
      <input 
        className={classes.input}
        type="text"
        id="name"
        value={addCardData.name}
        placeholder='name'
        name='name'
        aria-label='name'
        onChange={handleChange}
      />
       <input
       className={classes.input}
        type="text"
        id="phone"
        value={addCardData.phone}
        placeholder='phone'
        name='phone'
        aria-label='phone'
        onChange={handleChange}
      />
        <input
        className={classes.input}
        type="text"
        id="linkToGoogleMaps"
        value={addCardData.linkToGoogleMaps}
        placeholder='link to Google Maps'
        name='link to Google Maps'
        aria-label='link to Google Maps'
        onChange={handleChange}
      />
          <input
          className={classes.input}
        type="text"
        id="website"
        placeholder='website'
        name='website'
        aria-label='website'
        value={addCardData.website}
        onChange={handleChange}
      />
       <input className={classes.submitButton} type="submit" value="Submit" />
    </form>
  )
}

export default AddCard;
