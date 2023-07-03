// import React, { useEffect } from 'react'
// import { useDispatch } from 'react-redux'
// import { showUser } from '../features/userDetailSlice';
// import { useSelector } from 'react-redux';

// const Read = () => {
//     const dispatch = useDispatch();

//     const {users, loading} = useSelector((state)=> state.app )

//     useEffect(()=>{
//         dispatch(showUser())
//     },[])

//     if(loading){
//         return <h2>Loading...</h2>
//     }

//   return (
//     <div>
//         <h2>All Data</h2>
       
//         <div>
//        {users && users.map((ele)=> (
//         <div classNameName="card w-50 mx-auto" >
//         <div classNameName="card-body">
//           <h5 classNameName="card-title">{ele.name}</h5>
//           <h6 classNameName="card-subtitle mb-2 text-muted">{ele.email}</h6>
//           <p classNameName="card-text">Age: {ele.age}</p>
//           <a href="#" classNameName="card-link">View</a>
//           <a href="#" classNameName="card-link">Edit</a>
//           <a href="#" classNameName="card-link">Delete</a>
//         </div>
//       </div>
//        )) }
//         </div>
//     </div>
//   )
// }

// export default Read;

import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { deleteUser, showUser} from '../features/userDetailSlice';
import { useSelector } from 'react-redux';
import CustomModel from './CustomModel';
import { Link } from 'react-router-dom';

const Read = () => {
  const [id, setId] = useState();
  const [showPopup, setShowPopup] = useState(false);
  const[radioData, setRadioData] = useState("")

    const dispatch = useDispatch();
    const {users, loading, searchData} = useSelector((state)=> state.app)

    useEffect(()=>{
        dispatch(showUser())
    },[])
    
if(loading){
    return <h2>Loading...</h2>
}

// const deleteUser = ()=>{

// }
  return (
      <div className='mt-5'>
      {showPopup && <CustomModel id={id} showPopup={showPopup} setShowPopup={setShowPopup}/>}
        <h2 >All Data</h2>
        <input type="radio" class="form-check-input"  name='gender' checked={radioData ===""} onChange={(e)=> setRadioData("")} />
      <label class="form-check-label" for="exampleCheck1">All</label>
      <input type="radio" class="form-check-input"  name='gender' value="Male" checked={radioData ==="Male"}  onChange={(e)=> setRadioData(e.target.value)}/>
    <label class="form-check-label" for="exampleCheck1">Male</label>
    <input type="radio" class="form-check-input"  name='gender' value="Female" checked = {radioData ==="Female"} onChange={(e)=> setRadioData(e.target.value)}/>
    <label class="form-check-label" for="exampleCheck1">Female</label>
        <div>
        {users && 
        
         
          users.filter((ele)=> {
            if(searchData.length === 0){
              return ele;
            }else{
              return ele.name.toLowerCase().includes(searchData.toLowerCase())
            }
          }).filter((ele)=> {
            if (radioData==="Male"){
              return ele.gender === radioData;
            }else if(radioData === "Female"){
              return ele.gender=== radioData
            }else return ele;

            
          })
            .map((ele)=>(
            <div key={ele.id} className="card w-50 mx-auto">
            <div className="card-body">
              <h5 className="card-title">{ele.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{ele.email}</h6>
              <p className="card-text">{ele.gender}</p>
              <button href="#" className="card-link" onClick={()=> [setId(ele.id), setShowPopup(true)]} >View</button>
              <Link to={`/edit/${ele.id}`} className="card-link">Edit</Link>
              <Link onClick={()=> dispatch(deleteUser(ele.id)) } className="card-link">Delete</Link>
            </div>
          </div>
        ))}
        </div>
    </div>
  )
}

export default Read;
