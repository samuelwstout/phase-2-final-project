import React, {useState} from 'react'; 
import { finalURL } from './Globals';

const AddCard = () => {
  
  const [addCardData, setAddCardData] = useState({
  name: '',
  location: '',
  reviews: '',
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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="name"
        value={addCardData.name}
        onChange={handleChange}
      />
       <input
        type="text"
        id="location"
        value={addCardData.location}
        onChange={handleChange}
      />
       <input
        type="text"
        id="reviews"
        value={addCardData.reviews}
        onChange={handleChange}
      />
       <input type="submit" value="Submit" />
    </form>
  )
}

export default AddCard;