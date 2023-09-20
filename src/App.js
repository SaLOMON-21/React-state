import React, { Component } from 'react';
import React, { useState } from 'react';
import './App.css';
import MovieList from './MovieList';
import Filter from './Filter';
//importer react routeur d'abord.
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'; 


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'Ogiden Emma',
        bio: 'bon developper',
        imgSrc: 'url-to-image.jpg',
        profession: 'senior Developer',
      },
      show: false,
      timeInterval: 0,
    };
  }

  componentDidMount() {
    // calcule l'intervale de temps depuis le composant a ete monte
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        timeInterval: prevState.timeInterval + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    // supprime l'intervalle depuis le composant a ete demonte
    clearInterval(this.intervalId);
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  render() {
    const { person, show, timeInterval } = this.state;

    return (
      <div className="App">
        <button onClick={this.toggleShow}>
          Toggle Profile
        </button>

        {show && (
          <div>
            <h1>{person.fullName}</h1>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt={person.fullName} />
            <p>Profession: {person.profession}</p>
          </div>
        )}

        <p>Time Interval since Mount: {timeInterval} seconds</p>
      </div>
    );
  }
}

// Ici j'ai ajouté la fonction de du react hooks.
function App() {
  const [movies, setMovies] = useState([
    // Initialize with some movie data
  ]);

  const handleFilter = ({ title, rating }) => {

  };

  return (
    <div className="app">
      <h1>My Movie App</h1>
      <Filter onFilter={handleFilter} />
      <MovieList movies={movies} />
    </div>
  );
}
// pitie Mr Cisse

// voici le project react routeur ci-dessous, merci Mr Cisse.

//  Defini le routeur
const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={HomePage} />
        <Route path="/movie/:id" component={MovieDescriptionPage} />
      </div>
    </Router>
  );
};
//  Creer composents
const HomePage = () => {
  // faire la liste de video avec un boutom de lien
  return (
    <div>
      <Link to="/movie/1">Movie 1</Link>
      <Link to="/movie/2">Movie 2</Link>
      {}
    </div>
  );
};
const MovieDescriptionPage = (props) => {
  // Extrait l'ID du film  du parametre de l'url 
  const { id } = props.match.params;

  // ajputer la description du film ici
  return (
    <div>
      <h2>Movie {id} Description</h2>
      {/* love and peace */}
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default App;




