import { useParams } from 'react-router-dom';

import { useEffect, useState } from 'react';

import axios from 'axios';

function ApartmentDetails(){

  const { apartmentId } = useParams();

  const [apartmentObject, setApartmentObject] = useState(null);

  useEffect(() => {
    // fetch(`https://ironbnb-m3.herokuapp.com/apartments/${apartmentId}`)
    //   .then(res => res.json())
    //   .then(json => setApartmentObject(json));

    axios.get(`https://ironbnb-m3.herokuapp.com/apartments/${apartmentId}`)
      .then(res => setApartmentObject(res.data))
      .catch(err => console.log(err))

  }, [apartmentId])

  return (
    <div>
      { apartmentObject ? (
        <div>
          <img src={apartmentObject.img} alt={apartmentObject.title} height={100}/>
          <h2>{apartmentObject.title}</h2>
          <p>Price: {apartmentObject.pricePerDay}</p>
        </div>
      ) : (
        <p>loading...</p>
      ) }
    </div>
  );
}

export default ApartmentDetails;