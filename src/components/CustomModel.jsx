import React from 'react'
import "./CustomModel.css";
import { useSelector } from 'react-redux';

const CustomModel = ({id, showPopup, setShowPopup}) => {

  const allUsers = useSelector((state)=> state.app.users);

  const singleUser = allUsers.filter((ele)=> ele.id ===id)
  console.log("singleUser", singleUser)

  return (
    <div className='modelBackground'>
        <div className='modelContainer'>
          <button onClick={()=> setShowPopup(false)}>Close</button>
          <h2>{singleUser[0].name}</h2>
          <h2>{singleUser[0].email}</h2>
          <h2>{singleUser[0].age}</h2>
          <h2>{singleUser[0].gender}</h2>
         
        </div>
    </div>
  )
}

export default CustomModel;