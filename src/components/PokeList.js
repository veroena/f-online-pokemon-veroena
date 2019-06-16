import React from 'react';
import PokeCard from './PokeCard';
import PropTypes from 'prop-types';

class PokeList extends React.Component {
  render() {
    const { pokeList, filterPoke } = this.props;
    const filteredList = pokeList.filter(item => item.name.toLowerCase().includes(filterPoke.toLowerCase()))
    return (
      <React.Fragment>
        {filteredList.length === 0 ?
          <div className="filter-error__container">
            <p className="filter-error__text">Ningún Pokémon coincide con la búsqueda</p>
            <img className="filter-error__image" src="https://cdn.mobilesyrup.com/wp-content/uploads/2018/06/sad-pikachu.jpg" alt="sad pikachu"/>
          </div>
          :
          <ul className="pokemon__list">
            {filteredList.map(item => 
              <li className="pokemon__item" key={item.id}>
                <PokeCard item={item}/>
              </li>  
            )}
            </ul>
        }
      </React.Fragment>
    )
  }
}

PokeList.propTypes = {
  pokeList: PropTypes.arrayOf(PropTypes.object).isRequired,
  filterPoke: PropTypes.string  
}

export default PokeList;