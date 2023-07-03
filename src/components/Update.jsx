// import React, { useEffect, useState } from 'react'
// import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
// import { useNavigate, useParams } from 'react-router-dom';
// import { updateUser } from '../features/userDetailSlice';

// const Update = () => {

//     const navigate = useNavigate();

//     const {id} = useParams();

//     const {users, loading} = useSelector((state)=> state.app);
//     const [updateDate, setUpdateData] = useState();

//     const dispatch = useDispatch();

//     useEffect(()=>{
//         if(id){
//             const singleUser = users.filter((ele)=> ele.id === id);
//             setUpdateData(singleUser[0]);
//         }
//     }, [])

    
//     const newData = (e)=> {
//         setUpdateData({...updateDate, [e.target.name]: e.target.value});
//     }
    
//     console.log(updateDate)

// const handleUpdate = (e)=> {
//     e.preventDefault();
//     dispatch(updateUser(updateDate))
//     navigate('/read')
// }

//   return (
//     <div>
//         <h2 className='my-2'>Edit the data</h2>
//         <form class="w-50 mx-auto my-5" 
//         onSubmit={handleUpdate}
//         >
//   <div class="mb-3 ">
//     <label for="exampleInputEmail1" class="form-label">Name</label>
//     <input type="text" class="form-control" name='name' value={updateDate && updateDate.name} onChange={newData}
//     //  onChange={getUserData}
//      />
   
//   </div>
//   <div class="mb-3">
//     <label for="exampleInputEmail1" class="form-label">Email address</label>
//     <input type="email" class="form-control" name='email' value={updateDate && updateDate.email} onChange={newData}
//     // onChange={getUserData} 
//     />
    
//   </div>
//   <div class="mb-3">
//     <label for="exampleInputPassword1" class="form-label">Age</label>
//     <input type="number" class="form-control" name='age' value={updateDate && updateDate.age}  onChange={newData}
//     // onChange={getUserData}
//     />
//   </div>
 
//   <div class="mb-3">
//     <input type="radio" class="form-check-input"  name='gender' value="Male" checked={updateDate && updateDate.gender === "Male"} onChange={newData}
//     // onChange={getUserData}
//     />
//     <label class="form-check-label" for="exampleCheck1">Male</label>
//   </div>
//   <div class="mb-3">
//     <input type="radio" class="form-check-input" name='gender' value="Female" checked = {updateDate && updateDate.gender === "Female"} onChange={newData}
//     // onChange={getUserData}
//     />
//     <label class="form-check-label" for="exampleCheck1">Female</label>
//   </div>

//   <button type="submit" class="btn btn-primary">Submit</button>
// </form>
//     </div>
//   )
// }

// export default Update;

import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateUser } from '../features/userDetailSlice';



const Update = () => {
    const {id} = useParams();

    const {users, loading} = useSelector((state)=> state.app)
    
    const[updateData, setUpdateData] = useState();
    
    const dispatch = useDispatch();

    const navigate = useNavigate();

    useEffect(()=> {
            const singleUser = users.filter((ele)=> ele.id === id);
            setUpdateData(singleUser[0])
        },[])

        console.log(updateData);

const newData = (e)=> {
    setUpdateData({...updateData, [e.target.name]: e.target.value})
}

const handleUpdate = (e)=> {
    e.preventDefault();
    dispatch(updateUser(updateData));
    navigate('/read')
}

  return (
    <div>
        <h2 className='my-2'>Edit the Data</h2>
        <form class="w-50 mx-auto my-5" 
        onSubmit={handleUpdate}
        >
  <div class="mb-3 ">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="text" class="form-control" name='name'  value={updateData && updateData.name} onChange={newData}
    // onChange={getUserData}
    />
   
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" name='email' value={updateData && updateData.email} onChange={newData}
    // onChange={getUserData} 
    />
    
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Age</label>
    <input type="number" class="form-control" name='age' value={updateData && updateData.age} onChange={newData}
    // onChange={getUserData}
    />
  </div>
 
  <div class="mb-3">
    <input type="radio" class="form-check-input"  name='gender' value="Male" checked={updateData && updateData.gender === "Male"} onChange={newData}
    // onChange={getUserData}
    />
    <label class="form-check-label" for="exampleCheck1">Male</label>
  </div>
  <div class="mb-3">
    <input type="radio" class="form-check-input" name='gender' value="Female"  checked={updateData && updateData.gender ==="Female"} onChange={newData}
    // onChange={getUserData}
    />
    <label class="form-check-label" for="exampleCheck1">Female</label>
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Update;

