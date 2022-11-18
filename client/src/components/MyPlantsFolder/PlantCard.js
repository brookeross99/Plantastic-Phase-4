import {useState} from 'react'
import {Link} from 'react-router-dom'
import ModalComponent from '../ModalComponent'

const PlantCard = ({name, image, indoor, pet_safe,state, post_id, setUpdateAfterDelete}) => {

  const [openModal, setOpenModal] = useState(false)

     // Deleting a plant post logic:
     function handleDelete(){
      fetch(`/plant_posts/${post_id}`,{
      method: "DELETE",
      })
      .then(setUpdateAfterDelete)
    }

    //open/close modal
    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);
    
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

      <button className= "delete-btn" onClick={handleOpen}>X</button>

      <ModalComponent openModal={openModal} handleDelete={handleDelete} handleClose={handleClose}/>

    </div>
  )
}

export default PlantCard