import React from 'react';
import PropTypes from 'prop-types';

class Filter extends React.Component {
  render() {
    const { filterPoke, handleFilter } = this.props;
    return (
      <form action="" className="pokemon__filter--container">
        <label htmlFor="filter-pokemon" className="pokemon__filter--label">Search Pokémons by name</label>
        <input onChange={handleFilter} type="text" className="pokemon__filter" value={filterPoke} placeholder="Search your favorite Pokémon" id="filter-pokemon" name="filter-pokemon"/>
      </form>
    )
  }
}

Filter.propTypes = {
  filterPoke: PropTypes.string,
  handleFilter: PropTypes.func.isRequired
}

export default Filter;