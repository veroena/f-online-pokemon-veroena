import React from 'react';

class Header extends React.Component {
  render() {
    return(
      <header className="pokemon__header">
        <img src="https://webiconspng.com/wp-content/uploads/2017/09/Pokeball-PNG-Image-11110-300x300.png" alt="pokeball" className="pokemon__header--ball"/>
        <h1 className="pokemon__title">Pokedex</h1>
        <img src="https://webiconspng.com/wp-content/uploads/2017/09/Pokeball-PNG-Image-11110-300x300.png" alt="pokeball" className="pokemon__header--ball"/>
      </header>
    )
  }
}

export default Header;