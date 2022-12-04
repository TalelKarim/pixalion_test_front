import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import CourseAvatar from '../Avatars/CourseAvater';
import { Loader } from '../../utils/Atoms';
import CourseCard from '../coursecard';
import AddCourse from '../Instructor/addcourse';
import Container from './container';
import Pagination from './pagination';
import { userContext } from '../../utils/context/user';
import { useContext } from 'react';

export default function Courses() {
  const [coursesList, setcoursesList] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [open, setOpen] = useState(false);
  const [dataLoaded, setDataLoaded] = useState(false);

  /// pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemPerPage] = useState(9);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = coursesList.slice(indexOfFirstItem, indexOfLastItem);

  const {user, setUser} = useContext(userContext)


    const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
  //change page
  const paginateItems = (pageNumber) => setCurrentPage(pageNumber);

  let menuRef = useRef();

  const handleSearch = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `http://localhost:5000/course/filter?search=${search}`, config
      );
      setLoading(false);
      setSearchResult(data);
    } catch (error) {
      console.log(error);
    }
  };
 
   useEffect(() => { axios
    .get('http://localhost:5000/course', config)
    .then((response) => {
      setDataLoaded(true);
      setcoursesList(response.data);
    })
    .catch((err) => console.log(err.stack));}, [])
 

  useEffect(() => {
    document.addEventListener('mousedown', (event) => {
      if (!menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    });
  });

  return (
    <div className="container">
      {dataLoaded ? (
        <div className="ListCourses">
          <div className="input-group rounded">
            <input
              type="search"
              className="form-control"
              placeholder="Search course by name or date ..."
              aria-label="Search"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setOpen(true);
                handleSearch();
              }}
              aria-describedby="search-addon"
            />
            <span
              className="input-group-text border-0"
              id="search-addon"
              onClick={() => {
                handleSearch();
                setOpen(true);
              }}
            >
              <FontAwesomeIcon className="dropicon" icon={faMagnifyingGlass} />
            </span>
            <div className="addCourse">
              <AddCourse />
            </div>
          </div>

          {open ? (
            <div ref={menuRef} className="avatarContainercourse">
              {loading ? (
                <Loader />
              ) : (
                searchResult.map((ele) => {
                  return (
                    <CourseAvatar
                      photo={ele.imageUrl}
                      name={ele.Name}
                      category={ele.Category}
                    />
                  );
                })
              )}
            </div>
          ) : null}
          {/* <Container>
            { coursesList.map((ele) => {
                 return <CourseCard
                 name={ele.Name}
                 category = {ele.Category}
                 description = {ele.Description}
                 photo = {ele.imageUrl}
                 date = {ele.Date}
                />
             })}
         </Container> */}
          <Container coursesList={currentItems} />
          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={coursesList.length}
            paginateItems={paginateItems}
          />
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}
