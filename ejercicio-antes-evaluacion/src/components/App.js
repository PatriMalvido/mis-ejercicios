import '../styles/App.scss';
import { Route, Switch, UseRouteMatch, Link } from 'react-router-dom/cjs/react-router-dom.min'; 
import callToApi from '../components/services/callToApi';
//import LocalStorage from '../components/services/LocalStorage';
import { useState, useEffect } from 'react';
import UserList from './UserList';
import Filters from './Filters';
import UserDetail from './UserDetail';

function App() {
  
  const [users, setUsers] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [genderFilter, setGenderFilter] = useState('all');
  const [ageFilter, setAgeFilter] = useState('');
  const [citiesFilter, setCitiesFilter] = useState([]);

  useEffect(() => {
    callToApi().then((data) => setUsers(data));
  }, []);

  //Eventos---------------------------

  const handleFilter = (data) => {
    if (data.key === 'name') {
      setNameFilter(data.value);
    } else if (data.key === 'gender') {
      setGenderFilter(data.value);
    } else if (data.key === 'age') {
      setAgeFilter(data.value);
    } else if (data.key === 'location') {
      if (data.checked === true) {
        const newCitiesFilter = [...citiesFilter];
        newCitiesFilter.push(data.value);
        setCitiesFilter(newCitiesFilter);
      } else {
        const newCitiesFilter = citiesFilter.filter((city) => {
          return city !== data.value;
        });
        setCitiesFilter(newCitiesFilter);
      }
    }
  };

  //-Render--------------------------------------

  const filteredUsers = users
    .filter((user) => {
      return user.name
        .toLocaleLowerCase()
        .includes(nameFilter.toLocaleLowerCase());
    })
    .filter((user) => {
      // if (genderFilter === 'all'){
      //   return true;
      // } else {
      //   return user.gender === genderFilter;
      // }
      return genderFilter === 'all' ? true : user.gender === genderFilter;
    })
    .filter((user) => {
      return ageFilter === '' ? true : user.age.toString() === ageFilter;
    })
    .filter((user) => {
      // if (citiesFilter.length===0){
      //   return true;
      // } else {
      //   return citiesFilter.includes(user.city);
      // }
      return citiesFilter.length === 0 ? true : citiesFilter.includes(user.city);
    });

  const getCities = () => {
    return users.map((user) => user.city);
  };

  const renderUserDetail = (props) => {
    const userId = props.match.params.userId;
    const foundUser = users.find((user) => {
      return user.id === userId;
    });
    if (foundUser !== undefined) {
      return <UserDetail user={foundUser} />;
    }
  };

  const renderHome = () => {
    return (
      <>
        <Filters cities={getCities()} handleFilter={handleFilter} />
        <UserList users={filteredUsers} />
      </>
    );
  };

  //-----------------------------------------

  return (
    <div>
      <h1>Litado de personas</h1>

      <Switch>
        <Route exact path="/" render={renderHome} />
        <Route path="/user/:userId" render={renderUserDetail} />
      </Switch>
    </div>
  );
}

export default App;
