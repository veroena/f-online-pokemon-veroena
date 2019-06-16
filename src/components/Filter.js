import React from 'react';
import PropTypes from 'prop-types';

class Filter extends React.Component {
  render() {
    const { filterPoke, handleFilter } = this.props;
    return (
      <form action="" className="pokemon__filter--container">
        <label htmlFor="" className="pokemon__filter--label">Busca pokemons por el nombre</label>
        <input onChange={handleFilter} type="text" className="pokemon__filter" value={filterPoke} placeholder="Busca tu Pokémon favorito"/>
      </form>
    )
  }
}

Filter.propTypes = {
  filterPoke: PropTypes.string,
  handleFilter: PropTypes.func.isRequired
}

export default Filter;