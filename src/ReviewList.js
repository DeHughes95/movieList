import React from 'react';
import Review from './Review';

let e = React.createElement;

export default class Movie extends React.Component {

  render() {
    return e(
    'div', {class: 'container'},
    e(Review, {}, null),
    e(Review, {}, null),
    e(Review, {}, null)
    );
  }

}