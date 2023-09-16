import React, { Component } from 'react';
import './App.css';

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

export default App;
