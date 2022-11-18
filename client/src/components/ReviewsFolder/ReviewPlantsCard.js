import { useState } from 'react'
import {Link} from "react-router-dom"
import ModalComponent from '../ModalComponent'

const ReviewPlantsCard = ({ comment, id, image, setUpdateAfterDelete }) => {

  const [openModal, setOpenModal] = useState(false)

  function handleDelete(){
    fetch(`/reviews/${id}`, {
      method: 'DELETE',
    })
    .then(setUpdateAfterDelete)
  }

    //open/close modal
    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);
  
  return (
    <div className="review-card plant-card">
      <img src={image} alt={id} />
      <h3>{comment}</h3>

      <Link to={`/reviews/${id}`}>
      <button className= "edit-btn">Edit</button>
      </Link>

      <button className= "delete-btn" onClick={handleOpen}>X</button>

      <ModalComponent openModal={openModal} handleDelete={handleDelete} handleClose={handleClose}/>

    </div>
  )
}

export default ReviewPlantsCard