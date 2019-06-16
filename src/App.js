import React from 'react';
import PokeList from './components/PokeList';
import Header from './components/Header';
import Filter from './components/Filter';
import Frame from './components/Frame';
import {getPokemons} from './services/GetPokemons';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokeList: JSON.parse(localStorage.getItem('pokeList')) || [],
      filterPoke: ''
    };
    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(event) {
    const currentValue = event.currentTarget.value;
    this.setState({filterPoke : currentValue})
  }
  

  componentDidMount() {
    if (this.state.pokeList.length === 0) {
      getPokemons()
        .then(data => {
          const promiseUrl = data.results.map(item=>
            fetch(item.url))
  
          Promise.all(promiseUrl)
            .then(responses => {
              const promiseResults = responses.map(responses => responses.json())
  
              Promise.all(promiseResults)
                .then(data => {
                  this.setState({pokeList: data});
                  localStorage.setItem('pokeList', JSON.stringify(data));
                })
            })
        })
    }
  }

  render() {
    const { pokeList, filterPoke } = this.state;

    return (
      <div className="container">
        <Frame />
        <Header />
        <Filter handleFilter={this.handleFilter} filterPoke={filterPoke} />
        <div className="list__container">
          {pokeList.length === 0 ?
            <p className="loading__text">Cargando...</p>
          :
            <PokeList pokeList={pokeList} filterPoke={filterPoke} />
          }
        </div>
      </div>
    );
  }
}

export default App;
