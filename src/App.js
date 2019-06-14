import React from 'react';
import PokeCard from './components/PokeCard';
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
          const promiseFirst = data.results.map(item=>
            fetch(item.url))
  
          Promise.all(promiseFirst)
            .then(responses => {
              const promiseSecond = responses.map(responses => responses.json())
  
              Promise.all(promiseSecond)
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
        <div className="corner__left--up"></div>
        <div className="corner__right--up"></div>
        <div className="corner__left--down"></div>
        <div className="corner__right--down"></div>
        <header className="pokemon__header">
          <img src="https://cdn.shopify.com/s/files/1/0463/0789/products/1_dd8a036f-e6f6-46f5-9675-c8105885b4db_large.png?v=1468809429" alt="" className="pokemon__header--ball"/>
          <h1 className="pokemon__title">Pokedex</h1>
          <img src="https://cdn.shopify.com/s/files/1/0463/0789/products/1_dd8a036f-e6f6-46f5-9675-c8105885b4db_large.png?v=1468809429" alt="" className="pokemon__header--ball"/>

        </header>
        <form action="" className="pokemon__filter--container">
          <input onChange={this.handleFilter} type="text" className="pokemon__filter" value={filterPoke}/>
        </form>
        <div className="list__container">
          <ul className="pokemon__list">
            {pokeList
              .filter(item => item.name.toLowerCase().includes(filterPoke.toLowerCase()))
              .map(item => 
                <li className="pokemon__item" key={item.id}>
                  <PokeCard item={item}/>
                </li>  
              )
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
