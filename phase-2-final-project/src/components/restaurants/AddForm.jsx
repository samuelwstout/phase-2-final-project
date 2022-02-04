import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';


const useStyles = makeStyles({

form: {
  display: 'flex',
  flexDirection: 'column',
  width: '400px',
  marginLeft: 380,
  marginTop: 50,
 
  },
  input: {
    width: 700,
    marginBottom: 8,
    color: "white",
  },

  submitButton: {
    position: "absolute",
    top: 475,
    left: 710,
    backgroundColor: "#f0f0f0", 
    '&:hover': {
      backgroundColor: "#8f0606",
    }
  },
  formHeading: {
    marginLeft: 490,
    marginTop: 60,
    color: "#f0f0f0",
    fontFamily: "DejaVu Sans Mono, monospace",
    fontSize: "18px"
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

        <InputBase
          classes={{ input: 'input'}}
          className={classes.input}
          type="text"
          id="name"
          value={name}
          placeholder='restaurant name'
          name='name'
          aria-label='name'
          onChange={handleChange}
        />
        <InputBase
          className={classes.input}
          type="text"
          id="city"
          value={city}
          placeholder='city'
          name='city'
          aria-label='city'
          onChange={handleChange}
        />
        <InputBase
        className={classes.input}
          type="text"
          id="phone"
          value={phone}
          placeholder='phone'
          name='phone'
          aria-label='phone'
          onChange={handleChange}
        />
          <InputBase
          className={classes.input}
          type="text"
          id="linkToGoogleMaps"
          value={linkToGoogleMaps}
          placeholder='link to Google Maps'
          name='link to Google Maps'
          aria-label='link to Google Maps'
          onChange={handleChange}
        />
            <InputBase
            className={classes.input}
          type="text"
          id="website"
          placeholder='website'
          name='website'
          aria-label='website'
          value={website}
          onChange={handleChange}
        />
        <Button classes={classes.button} className={classes.submitButton}  type="submit" value="Submit">Submit</Button>
      </form>
  </div>
  )
}

export default AddForm;
