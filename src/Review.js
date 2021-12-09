import React from 'react';
import StarRating from './Stars';

export default class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        User: props.user,
        rating: props.rating,
        content: props.content
    }
}
  render() {
      return (
        <div className="card w-100">
          <div className="card-header bg-secondary text-white">
            Username: David
            <br/>
            Rating:<StarRating/>
          </div>
          <div className="card-body">
            This Movie is Awesome!
          </div>
        </div>
      );
  }
}