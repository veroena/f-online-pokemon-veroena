import React from 'react';
import Home from './components/Home';
import PokeDetail from './components/PokeDetail';
import { getPokemons } from './services/GetPokemons';
import { Route, Switch } from 'react-router-dom';

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
        <Switch>
          <Route exact path="/" render={() => (<Home  
            filterPoke={filterPoke}
            pokeList={pokeList}
            handleFilter={this.handleFilter}
            />) }
          />
          <Route path="/:name" render={props => (<PokeDetail
            match={props.match}
            pokeList={pokeList}
          />)} />
        </Switch>
      </div>
    );
  }
}

export default App;
