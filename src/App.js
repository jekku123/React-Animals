import './App.css';
import { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import About from './pages/About';
import Home from './pages/Home';
import List from './pages/List';
import ScrollButton from './ui/ScrollTop';

import { SearchContextProvider } from './context/SearchContext';
import { animalsData, birdsData } from './data/animalsList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animals: [],
      birds: [],
    };
    this.removeHandler = this.removeHandler.bind(this);
    this.likesHandler = this.likesHandler.bind(this);
    this.addHandler = this.addHandler.bind(this);
  }

  componentDidMount() {
    this.setState({
      animals: JSON.parse(localStorage.getItem('animals')) || animalsData,
      birds: JSON.parse(localStorage.getItem('birds')) || birdsData,
    });
  }

  componentDidUpdate(prevProps) {
    if (this.state.animals !== prevProps.animals) {
      localStorage.setItem('animals', JSON.stringify(this.state.animals));
    }
    if (this.state.birds !== prevProps.birds) {
      localStorage.setItem('birds', JSON.stringify(this.state.birds));
    }
  }

  removeHandler(name, list) {
    const updatedList = this.state[list].filter(
      (animal) => animal.name !== name
    );
    this.setState({
      [list]: updatedList,
    });
  }

  likesHandler(name, value, list) {
    const updatedList = this.state[list].map((card) => {
      if (card.name === name) {
        return {
          ...card,
          likes: card.likes + Number(value),
        };
      }
      return card;
    });

    this.setState({
      [list]: updatedList,
    });
  }

  addHandler(name, list) {
    if (name.length > 0) {
      if (!this.state[list].some((card) => card.name === name)) {
        this.setState({
          [list]: [{ name: name.toLowerCase(), likes: 0 }, ...this.state[list]],
        });
      }
    }
  }

  render() {
    return (
      <>
        <SearchContextProvider>
          <BrowserRouter>
            <Header
              animals={this.state.animals}
              birds={this.state.birds}
              addHandler={this.addHandler}
            />
            <Routes>
              <Route index element={<Home />} />
              <Route
                path='/animals'
                element={
                  <List
                    title='animals'
                    cards={this.state.animals}
                    removeCard={this.removeHandler}
                    handleLikes={this.likesHandler}
                  />
                }
              />
              <Route
                path='/birds'
                element={
                  <List
                    title='birds'
                    cards={this.state.birds}
                    removeCard={this.removeHandler}
                    handleLikes={this.likesHandler}
                  />
                }
              />
              <Route path='/about' element={<About />} />
            </Routes>
            <ScrollButton />
          </BrowserRouter>
        </SearchContextProvider>
      </>
    );
  }
}

export default App;
