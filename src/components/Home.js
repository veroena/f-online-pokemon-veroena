import React from 'react';
import PokeList from './PokeList';
import Frame from './Frame';
import Header from './Header';
import Filter from './Filter';
import PropTypes from 'prop-types';

class Home extends React.Component{
  render() {
    const { handleFilter, filterPoke, pokeList} = this.props;
    return(
      <React.Fragment>
        <Frame />
        <Header />
        <Filter handleFilter={handleFilter} filterPoke={filterPoke} />
        <div className="list__container">
          {pokeList.length === 0 ?
            <p className="loading__text">Loading...</p>
          :
            <PokeList pokeList={pokeList} filterPoke={filterPoke} />
          }
        </div>
      </React.Fragment>
    )
  }
}

Home.propTypes = {
  handleFilter: PropTypes.func.isRequired,
  filterPoke: PropTypes.string,
  pokeList: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Home;