import React from 'react';
import StarRating from './Stars';
import ReviewList from './ReviewList';


let e = React.createElement;

export default class Movie extends React.Component {
    render() {
        return e(
        'div', {class: "card w-75"},
        e('div', {class: 'card-header bg-dark text-white'},
            'Movie Title'),
        e('div', {class: 'card-body'},
            'Movie Content'),
        e('div', {class: 'card-footer'},
            <StarRating/>,
            e(ReviewList, {}, null)
            )
        );
    }
}
