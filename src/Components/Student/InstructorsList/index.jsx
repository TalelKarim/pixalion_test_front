import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Cards from '../../Cards';
import './style.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import UserAvatar from '../../Avatars/UserAvatar';
import { Loader } from '../../../utils/Atoms'
export default function Instructors() {
  const [instructorsList, setInstructorsList] = useState([])
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [dataLoaded, setDataLoaded] = useState(false)
  let menuRef = useRef()  
 
  const handleSearch = async () => {
     try {
       setLoading(true)
       const { data } = await axios.get(`http://localhost:5000/user/filter?search=${search}&isInstructor=true`);
       setLoading(false)
       setSearchResult(data)
     }
     catch(error){
     console.log('error')
    }
  }   
    axios.get("http://localhost:5000/user/check?isInstructor=true")
    .then((response) =>{ 
      setDataLoaded(true)
      setInstructorsList(response.data.filteredUsers)
     })
    .catch((err) => console.log(err.stack))
  
   useEffect(() => {
     document.addEventListener('mousedown', (event) => {
       if(!menuRef.current.contains(event.target)){
         setOpen(false);
       }
     })
   })
  
  return ( <div className="container">
       {
             dataLoaded ? <div className='List'>
             <div className="input-group rounded">
         <input type="search" className="form-control" placeholder="Find your instructor..." aria-label="Search" 
           value={search}
           onChange={(e) => {setSearch(e.target.value)
                  setOpen(true)
                  handleSearch()
           }}
            aria-describedby="search-addon" />
         <span className="input-group-text border-0"
           id="search-addon"
           onClick={() => {handleSearch()
                          setOpen(true) }}
           >
               <FontAwesomeIcon 
                             className= "dropicon"
                             icon={faMagnifyingGlass}
                              />  </span>
       </div>
          { open ? <div ref={menuRef} className="avatarContainer">
               {
                 loading  ? (
                       <Loader />
                 ): (
                   searchResult.map((ele) => {
                     return  <UserAvatar
                         photo={ele.imageUrl}
                         name = {ele.firstName + ' ' + ele.lastName}
                         mail = {ele.mail}
                     />
                   })
                 )
               }
           
          </div> : null }
                { instructorsList.map((ele) => {
                  return <Cards img={ele.imageUrl} 
                  name ={ ele.firstName + ' ' + ele.lastName}
                  domain = {ele.speciality}
                  mail = {ele.mail} />
                })}
           </div> : <Loader />
}
  </div> 
  )
}
