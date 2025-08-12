import { useState, useEffect } from 'react';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import CardList from '../components/CardList';
import './App.css';

function App() {
  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.cypress.io/users')
      .then((response) => response.json())
      .then((users) => setRobots(users));
  }, []);

  const handleSearchChage = (event) => {
    setSearchField(event.target.value);
  };

  const filterRobots = () => {
    return robots.filter((robots) =>
      robots.name.toLowerCase().includes(searchField.toLowerCase())
    );
  };

  return (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <SearchBox
        searchfield={searchField}
        searchChange={(e) => handleSearchChage(e)}
      />
      <Scroll>
        <CardList robots={filterRobots()} />
      </Scroll>
    </div>
  );
}

export default App;
