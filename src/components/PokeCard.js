import React from 'react';
import PropTypes from 'prop-types';

class PokeCard extends React.Component {
  render() {
    const {item} = this.props;
    return(
      <div className="pokemon__card">
        <div className="half__up">
          <img src={item.sprites.front_default} alt={item.name} className="pokemon__card--image"/>
          <p className="pokemon__card--id">ID / {item.id}</p>
        </div>
        <div className="half__down">
          <h2 className="pokemon__card--name">{item.name}</h2>
          <ul className="pokemon__card--types">
            {item.types.map((item, index) =>
              <li className="pokemon__types" key={index}>{item.type.name}</li>
            )}
          </ul>
        </div>
      </div>
    )
  }
}

PokeCard.propTypes = {
  item: PropTypes.object.isRequired
}

export default PokeCard;