import React from 'react';

class Frame extends React.Component {
  render() {
    return (
      <div className="frame">
        <div className="corner__left--up"></div>
        <div className="corner__right--up"></div>
        <div className="corner__left--down"></div>
        <div className="corner__right--down"></div>
      </div>
    )
  }
}

export default Frame;