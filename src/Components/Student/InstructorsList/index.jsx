import React, { useContext, useEffect, useRef, useState } from 'react';
import axios from 'axios';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import UserAvatar from '../../Avatars/UserAvatar';
import { Loader } from '../../../utils/style/Atoms';
import Pagination from './pagination';
import Container from './container';
import { userContext } from '../../../utils/context/user';

export default function Instructors() {
  const [instructorsList, setInstructorsList] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [open, setOpen] = useState(false);
  const [dataLoaded, setDataLoaded] = useState(false);

  const { user, setUser } = useContext(userContext);

  /// pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemPerPage] = useState(9);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = instructorsList.slice(indexOfFirstItem, indexOfLastItem);

  //change page
  const paginateItems = (pageNumber) => setCurrentPage(pageNumber);
  let menuRef = useRef();

  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };

  const handleSearch = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `http://localhost:5000/user/filter?search=${search}&isInstructor=true`,
        config
      );
      setLoading(false);
      setSearchResult(data);
    } catch (error) {
      console.log('error');
    }
  };

  useEffect(() => {
    axios
      .get('http://localhost:5000/user/check?isInstructor=true', config)
      .then((response) => {
        setDataLoaded(true);
        setInstructorsList(response.data.filteredUsers);
      })
      .catch((err) => console.log(err.stack));
  }, []);

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
        <div className="List">
          <div className="input-group rounded">
            <input
              type="search"
              className="form-control"
              placeholder="Find your instructor..."
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
              <FontAwesomeIcon className="dropicon" icon={faMagnifyingGlass} />{' '}
            </span>
          </div>
          {open ? (
            <div ref={menuRef} className="avatarContainer">
              {loading ? (
                <Loader />
              ) : (
                searchResult.map((ele) => {
                  return (
                    <UserAvatar
                      photo={ele.imageUrl}
                      name={ele.firstName + ' ' + ele.lastName}
                      mail={ele.mail}
                    />
                  );
                })
              )}
            </div>
          ) : null}
          <Container instructorsList={currentItems} />
          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={instructorsList.length}
            paginateItems={paginateItems}
          />
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}
