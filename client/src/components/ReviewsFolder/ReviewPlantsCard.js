import React from 'react'
import {Link} from "react-router-dom";

const ReviewPlantsCard = ({ comment, id, setUpdateReviews, image, setUpdateAfterDelete }) => {

  function handleDelete(){
    fetch(`/reviews/${id}`, {
      method: 'DELETE',
    })
    .then(setUpdateAfterDelete)

  }
  
  return (
    <div className="review-card plant-card">
      <img src={image} alt={id} />
      <h3>{comment}</h3>
      <button className= "delete-btn" onClick={handleDelete} >🗑️</button>
      <Link to={`/reviews/${id}`}>
      <button className= "edit-btn">Edit</button>
      </Link>
    </div>
  )
}

export default ReviewPlantsCard