import React from 'react';
import '../stylesheets/_poke-detail.scss';
// import PropTypes from 'prop-types';

class PokeDetail extends React.Component{
  render() {
    const { pokeList } = this.props;
    const pokemonName = this.props.match.params.name;
    const item = pokeList.find(item => item.name === pokemonName);
    return(
      <div className="detail__container">
        <div className="detail">
          <h1 className="detail__name">{item.name}</h1>
          <div className="detail__images--container">
            <img src={item.sprites.front_default} alt="" className="detail__image--front"/>
            <img src={item.sprites.back_default} alt="" className="detail__image--back"/>
            <img src={item.sprites.front_shiny} alt="" className="detail__image--front"/>
            <img src={item.sprites.back_shiny} alt="" className="detail__image--back"/>
          </div>
          <div className="detail__box">
            <div className="detail__left">
              <h3 className="detail__text">Height: {item.height}</h3>
              <h3 className="detail__text">Weight: {item.weight}</h3>
              <ul className="detail__abilities">
                <h3 className="detail__text">Abilities:</h3>
                {item.abilities.map((ability, index) =>
                  <li key={index}>{ability.ability.name}</li>
                  )}
              </ul>
              <ul className="detail__types">
                <h3 className="detail__text">Types:</h3>
                {item.types.map((type, index) =>
                  <li key={index}>{type.type.name}</li>
                  )}
              </ul> 
            </div>
            <div className="detail__right">
              <ul className="detail__stats">
                <h3 className="detail__stats">Stats:</h3>
                {item.stats.map((stat, index) =>
                  <li key={index}>
                    <p className="stat__title">{stat.stat.name} :</p>
                    <div className="details__stats-bar--container">
                      <div className="details__stats-bar" style={{ backgroundColor: "#055B10", width: `${stat.base_stat}% `}}>
                        <span className="details__stats--number">{ stat.base_stat }</span>
                        </div>
                      </div>
                  </li>
                  )}
              </ul>          
            </div>
          </div>
        </div>
      </div>
    )
  }
}

// PokeDetail.propTypes = {
//   handleFilter: PropTypes.func.isRequired,
//   filterPoke: PropTypes.string,
//   pokeList: PropTypes.arrayOf(PropTypes.object).isRequired
// }

export default PokeDetail;