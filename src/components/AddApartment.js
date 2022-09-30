import axios from 'axios';
import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddApartment() {

  const navigate = useNavigate();

  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');

  const updateImage = e => setImage(e.target.value)
  const updateTitle = e => setTitle(e.target.value)
  const updatePrice = e => setPrice(e.target.value)

  const submitForm = e => {
    e.preventDefault();

    const bodyObject = {
      img: image,
      title: title,
      pricePerDay: Number(price)
    };

    // fetch('https://ironbnb-m3.herokuapp.com/apartments', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //     // 'Content-Type': 'application/x-www-form-urlencoded',
    //   },
    //   body: JSON.stringify(bodyObject)
    // })
    //   .then(res => res.json())
    //   .then(json => {
    //     console.log(json);
    //     navigate('/')
    //   })
    //   .catch(err => console.log(err))

    axios.post('https://ironbnb-m3.herokuapp.com/apartments', bodyObject)
      .then(res => {
        console.log(res.data);
        navigate('/')
      })
      .catch(err => console.log(err))

  };

  return (
    <form onSubmit={submitForm}>
      <div className="form-container">
        <label>Image</label>
        <input type="text" value={image} onChange={updateImage}/>
      </div>
      <div className="form-container">
        <label>Title</label>
        <input type="text" value={title} onChange={updateTitle}/>
      </div>
      <div className="form-container">
        <label>Price per Day</label>
        <input type="text" value={price} onChange={updatePrice}/>
      </div>
      <div>
        <button>Create New Apartment</button>
      </div>
    </form>
  );
}

export default AddApartment;

