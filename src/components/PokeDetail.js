import React from 'react';
import '../stylesheets/_poke-detail.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class PokeDetail extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      animation: false
    }
    this.getTypeColor = this.getTypeColor.bind(this);
  }

  getTypeColor (type) {
    if (type === 'poison') {
      return 'black';
    } else if (type === 'grass') {
      return 'darkgreen';
    } else if (type === 'fire') {
      return 'red';
    } else if (type === 'flying') {
      return 'lightblue';
    } else if (type === 'water') {
      return 'blue'
    } else if (type === 'bug') {
      return 'green'
    } else if (type === 'normal') {
      return 'pink'
    } else if (type === 'electric') {
      return 'orange'
    }
  }

  componentDidMount() {
    this.setState({ animation: true });
  }

  render() {
    const { pokeList } = this.props;
    if (pokeList.length === 25) {
      const pokemonName = this.props.match.params.name;
      const item = pokeList.find(item => item.name === pokemonName);
      const prevId = item.id -1;
      const prevItem = pokeList.find(item => item.id === prevId);
      const postId = item.id + 1;
      const postItem = pokeList.find(item => item.id === postId);
      return(
        <div className="detail__container">
            <Link className="link__home" to="/">
              <div className="link__home--container"><i className="fas fa-home"></i> Home</div>
            </Link>
          <div className={`detail ${this.state.animation === true ? 'detail__mount' : null}`}>
            <h1 className="detail__name">{item.name}</h1>
            <div className="detail__images--container">
              <div className="detail__images--default">
                <img src={item.sprites.front_default} alt="" className="detail__image"/>
                <img src={item.sprites.back_default} alt="" className="detail__image"/>
              </div>
              <div className="detail__images--shiny">
                <img src={item.sprites.front_shiny} alt="" className="detail__image"/>
                <img src={item.sprites.back_shiny} alt="" className="detail__image"/>
              </div>
            </div>
            <div className="detail__box">
              <div className="detail__data">
                <div className="detail__data--size">
                  <h3 className="detail__text">Height: {item.height}</h3>
                  <h3 className="detail__text">Weight: {item.weight}</h3>
                </div>
                <ul className="detail__abilities">
                  <h3 className="detail__text">Abilities:</h3>
                  {item.abilities.map((ability, index) =>
                    <li className="detail__ability--item" key={index}>{ability.ability.name}</li>
                    )}
                </ul>
                <ul className="detail__types">
                  <h3 className="detail__text">Types:</h3>
                  {item.types.map((type, index) =>
                    <li className="detail__type--item" style={{backgroundColor: `${this.getTypeColor(type.type.name)}`}} key={index}>{type.type.name}</li>
                    )}
                </ul> 
              </div>
              <div className="detail__stats">
                <ul className="detail__stats--list">
                  <h3 className="detail__stats--title">Stats:</h3>
                  {item.stats.map((stat, index) =>
                    <li key={index} className="detail__stats--item">
                      {/* <h4 className="stat__title">{stat.stat.name}: </h4>
                      <progress className="progress__bar" max="100" value={stat.base_stat}></progress> */}
                      <p className="stat__title">{stat.stat.name} :</p>
                      <div className="details__stats-bar--container">
                        <div className="details__stats-bar" style={{ backgroundColor: "#7FDBB6", width: `${stat.base_stat}% `}}>
                          <p className="details__stats--number">{ stat.base_stat }</p>
                          </div>
                        </div>
                    </li>
                    )}
                </ul>          
              </div>
            </div>
          </div>
          <div className="link__chevron--container">
            {item.name === "bulbasaur" ?
              <div className="chevron-space"></div>
            :
              <Link className="link__chevron" to={`/${prevItem.name}`}>
                <i className="fas fa-chevron-circle-left"></i>
              </Link>
            }
            {item.name === "pikachu" ?
              <div className="chevron-space"></div>
            :  
              <Link className="link__chevron" to={`/${postItem.name}`}>
                <i className="fas fa-chevron-circle-right"></i>
              </Link>
            }
          </div>
        </div>
      )
    }
    else {
      return (
      <div className="error-detail">
        <p className="error-detail__text">Catching them all...</p>
        <img className="error-detail__image" src="https://webiconspng.com/wp-content/uploads/2017/09/Pokeball-PNG-Image-11110-300x300.png" alt=""/>
      </div>
      )
    }
  }
}

PokeDetail.propTypes = {
   pokeList: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default PokeDetail;