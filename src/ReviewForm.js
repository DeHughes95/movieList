import React from 'react';
import StarRating from './Stars';

export default class ReviewForm extends React.Component {
  state = {
      user: '',
      content: '',
      rating: 0,
      reviews: []
  };

  setUser = (e) => {
    this.setState({user: e.target.value});
  };

  setContent = (e) => {
    this.setState({content: e.target.value});
  };

  addReview = () => {
    let {reviews, review} = this.state; 
    reviews.push(review); 
    this.setState({review: review});
  };

  render() {
    return (
      <form>
        <input 
              type="text"
              placeholder='Username'
              onChange={this.setUser}
            />
            <input 
              type="text"
              placeholder='Review'
              onChange={this.setContent}
            />
          <button className="btn btn-primary" onClick={this.addReview}> Submit </button>
      </form>
    );
  }
}