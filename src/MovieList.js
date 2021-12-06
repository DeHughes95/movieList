import React from "react";
import Movie from "./Movie";

let e = React.createElement;

export default class MovieList extends React.Component {
    render() {
        return e(
            'div', {class: 'container'},
            e(Movie, {}, null),
            e(Movie, {}, null),
            e(Movie, {}, null),
        );
    }
}