import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'


const GlobalPlantCard = ({setUpdateReviews, id, plant_name, image,indoor, pet_safe, state, username, reviews, my_user_id}) => {

  //map through the comments
  const renderGlobalReviews = reviews.map((review) => {
  return(
    //need to show associated username
  <p className="comments" key={review.review.id}>🍃 {review.review.comment} - {review.user.username}  </p>
  )
})

const noReviewsYet = 'Be the first Plantastic reviewer!'

const [errors, setErrors] = useState([]);
const [comment, setComment] = useState("")
const history = useHistory();
const handleComments = (e) => {
  setComment(e.target.value)
}

//POST REQUEST to submit new review
const handleCommentSubmit = (e) => {
  e.preventDefault();
  const formData = {
    comment: comment,
    user_id: my_user_id,
    plant_post_id: id
  }
// console.log(formData)

  fetch(`/reviews`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData)
  })
  .then((res) => {
    if (res.ok) {
      res.json().then((userData) => {
        history.push(`/globalPlants`)
        setUpdateReviews(userData)
        setComment('')
      });
    } else {
      res.json().then((err) => setErrors(err.errors))
    }
  })
}

//render errors to to display on page
const formErrorMsg = errors.map((err) => (
  <p key={err}>{err}</p>
  ))


  return (
    <div className="globalPlant-card plant-card">
      <h3>{plant_name}</h3>
      <img src={image} alt={plant_name} />
      <p className='globalUsername'><span>Created By: </span>{username}</p>
      <p>{indoor ? "Indoor Plant🏠" : "Outdoor Plant🌞"}</p>
      <p>{pet_safe ? "Pet Safe ✅" : "Unsafe for Pets🚫"}</p>
      <p>Location: {state}</p>
    
      <h4>Reviews</h4>
      <div className="review-list">
      {renderGlobalReviews.length > 0 ? renderGlobalReviews : noReviewsYet} 
      </div>
      

      <form className="review-form" onSubmit={handleCommentSubmit}>
      <h4>Add Review</h4>
        <div className="review-input">
          <textarea value={comment} placeholder="Add a review..." onChange={handleComments}></textarea>
          <button className='submit-btn'>Submit</button>
        </div>
      </form>
      <ul>{formErrorMsg}</ul>
  </div>
  
  )
}

export default GlobalPlantCard

