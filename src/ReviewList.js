import React from 'react';
import Review from './Review';

export default class Movie extends React.Component {

  render() {
    return (
    <div className="container">
      <Review />
    </div>
    );
  }
}