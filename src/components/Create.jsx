import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createUser } from '../features/userDetailSlice';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const [user, setUsers] = useState();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const getUserData = (e)=> {
            setUsers({...user, [e.target.name]: e.target.value})
            console.log(user)
        }
    
    const handleSubmit = (e)=> {
      e.preventDefault();
      console.log(user);
        dispatch(createUser(user));
        navigate('/read')

    }

    return (
    <div>
        <h2 className='my-2'>Create data</h2>
        <form class="w-50 mx-auto my-5" onSubmit={handleSubmit}>
  <div class="mb-3 ">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="text" class="form-control" name='name'  onChange={getUserData}/>
   
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" name='email'onChange={getUserData} />
    
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Age</label>
    <input type="number" class="form-control" name='age' onChange={getUserData}/>
  </div>
 
  <div class="mb-3">
    <input type="radio" class="form-check-input"  name='gender' value="Male" onChange={getUserData}/>
    <label class="form-check-label" for="exampleCheck1">Male</label>
  </div>
  <div class="mb-3">
    <input type="radio" class="form-check-input" name='gender' value="Female" onChange={getUserData}/>
    <label class="form-check-label" for="exampleCheck1">Female</label>
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Create;