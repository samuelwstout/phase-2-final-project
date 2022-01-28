import React from 'react'; 
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({

form: {
  display: 'flex',
  flexDirection: 'column',
  width: '400px',
  marginLeft: 380,
  marginTop: 50

  },
  input: {
    width: 700,
    marginBottom: 8,
  },
 
  submitButton: {
    position: "absolute",
    top: 430,
    left: 710,
  },
  formHeading: {
    marginLeft: 510,
    marginTop: 60,
  }
  });

const AddForm = ({
  handleChange,
  handleSubmit,
  name,
  city,
  phone,
  linkToGoogleMaps,
  website

}) => {
  const classes = useStyles();

  return (
    <div>
    <h3 className={classes.formHeading}>Please submit recommendations if you would like!</h3>
    <form className={classes.form} onSubmit={handleSubmit} >
      <input 
        className={classes.input}
        type="text"
        id="name"
        value={name}
        placeholder='restaurant name'
        name='name'
        aria-label='name'
        onChange={handleChange}
      />
       <input 
        className={classes.input}
        type="text"
        id="city"
        value={city}
        placeholder='city'
        name='city'
        aria-label='city'
        onChange={handleChange}
      />
       <input
       className={classes.input}
        type="text"
        id="phone"
        value={phone}
        placeholder='phone'
        name='phone'
        aria-label='phone'
        onChange={handleChange}
      />
        <input
        className={classes.input}
        type="text"
        id="linkToGoogleMaps"
        value={linkToGoogleMaps}
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
        value={website}
        onChange={handleChange}
      />
       <input className={classes.submitButton} type="submit" value="Submit" />
    </form>
    </div>
  )
}

export default AddForm;
