import React from 'react';
import StarRating from './Stars';

let e = React.createElement;

export default class Review extends React.Component {
  render() {
      return e(
      'div', {class: "card w-75"},
      e('div', {class: 'card-header bg-secondary text-white'},
        'Username and Date'),
      e('div', {class: 'card-body'},
        'Text Review'),
      e('div', {class: 'card-footer'},
          'Review content')
          //e(<StarRating/>, {}, null),
      );
  }
}