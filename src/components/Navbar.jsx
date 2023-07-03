import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchUser } from '../features/userDetailSlice';

const Navbar = () => {
  const allUsers = useSelector((state)=> state.app.users)

  // const[searchData, setSearchData] = useState("");

  // const dispatch = useDispatch();

  const [searchData, setSearchData] = useState("");
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(searchUser(searchData))
  },[searchData])

  // useEffect(()=>{
  //   dispatch(searchUser(searchData))
  // }, [searchData])

  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <Link to="/" class="navbar-brand" >Logo</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to ="/" class="nav-link active" aria-current="page" >Create Post</Link>
        </li>
        <li class="nav-item">
          <Link to ="/read" class="nav-link" >All Post ({allUsers.length})</Link>
        </li>
           
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=> setSearchData(e.target.value)}
        // onChange={(e)=> setSearchData(e.target.value)} 
        
        />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar;