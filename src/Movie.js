import React from 'react';
import StarRating from './Stars';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';

export default class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            releaseYear: props.releaseYear,
            image: props.image,
            synopsis: props.synopsis,
            starring: props.starring,
            director: props.director,
            rating: props.rating
        }
    }

    render() {
        return (
            <div className="card w-75">
                <div className="card-header bg-dark text-white">
                    {this.props.title} ({this.props.releaseYear}) <StarRating aRating={this.props.rating}/>
                </div>
                <div className="card-body">
                    <img src={this.props.image} width="300"/>
                    <br/> 
                    <b>Synopsis:</b> {this.props.synopsis} 
                    <br/>
                    <b>Starring:</b> {this.props.starring}
                    <br/>
                    <b>Directed By: </b>{this.props.director}
                </div>
                <div className='card-footer'>
                    Leave a text Review:
                    <ReviewForm/>
                    <ReviewList/>
                </div>
            </div>
        );
    }
}
