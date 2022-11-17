import React from 'react'
import {Link} from 'react-router-dom'

const PlantCard = ({name, image, indoor, pet_safe,state, post_id, setUpdateAfterDelete}) => {

     // Deleting a brew logic:
     function handleDeleteClick(){
      fetch(`/plant_posts/${post_id}`,{
      method: "DELETE",
      })
      .then(setUpdateAfterDelete)
    }

    
  return (
    <div className="plant-card myPlant-card">
      <h3>{name}</h3>
      <img src={image} alt={name} />
      <p>{indoor ? "Indoor Plant 🏠" : "Outdoor Plant 🌞"}</p>
      <p>{pet_safe ? "Pet Safe ✅" : "Unsafe for Pets 🚫"}</p>
      <p>Location: {state} </p>
      <Link to={`myPlants/${post_id}`}>
        <button className= "edit-btn">Edit</button>
      </Link>
      <button className= "delete-btn" onClick={handleDeleteClick}>🗑️</button>

    </div>
  )
}

export default PlantCard