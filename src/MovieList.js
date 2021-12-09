import React from "react";
import Movie from "./Movie";


export default class MovieList extends React.Component {
    render() {

        let movieOne = {
            title: "The Dark Knight",
            releaseYear: "2008",
            image: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
            synopsis: "With the help of allies Lt. Jim Gordon (Gary Oldman) and DA Harvey Dent (Aaron Eckhart), Batman (Christian Bale) has been able to keep a tight lid on crime in Gotham City. But when a vile young criminal calling himself the Joker (Heath Ledger) suddenly throws the town into chaos, the caped Crusader begins to tread a fine line between heroism and vigilantism.",
            starring: ['Christian Bale, ', 'Heath Ledger, ', 'Aaron Eckhart, ', 'Michael Caine'],
            director: "Christopher Nolan",
            rating: 5
        };

        let movieTwo = {
            title: "Spirited Away",
            releaseYear: "2001",
            image: "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
            synopsis: "10-year-old Chihiro (Daveigh Chase) moves with her parents to a new home in the Japanese countryside. After taking a wrong turn down a wooded path, Chihiro and her parents discover an amusement park with a stall containing an assortment of food. To her surprise, Chihiro's parents begin eating and then transform into pigs. In this supernatural realm, Chihiro encounters a host of characters and endures labor in a bathhouse for spirits, awaiting a reunion with her parents.",
            starring: [ 'Daveigh Chase, ', 'Suzanne Pleshette, ', 'Jason Marsden, ', 'Susan Egan'],
            director: ['Hayao Miyazaki, ', 'Kirk Wise'],
            rating: 4
        };

        let movieThree = {
            title: "Night at the Museum",
            releaseYear: "2006",
            image: "https://m.media-amazon.com/images/M/MV5BMTQyOTM4MDMxN15BMl5BanBnXkFtZTcwODg5NTQzMw@@._V1_.jpg",
            synopsis: "A newly recruited night security guard at the Museum of Natural History discovers that an ancient curse causes the animals and exhibits on display to come to life and wreak havoc.",
            starring: ['Ben Stiller, ', 'Carla Gugino, ', 'Ricky Gervais, ', 'Dick Van Dyke, '],
            director: "Shawn Levy",
            rating: 3
        };

        return (
            <div className="container">
            <Movie {...movieOne} />
            <Movie {...movieTwo} />
            <Movie {...movieThree} />
            </div>
        );
    }
}