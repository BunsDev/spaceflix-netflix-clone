import React from "react";
import Movie from "./movie";

class MovieRow extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {

        let { name, movies } = this.props;
        let movieItems = [];

        for (let [title, details] of movies) {
            let movieItem = (
                <Movie key={details.id} title={title} details={details} />
            )
            movieItems.push(movieItem)
        }



        return (
            <main className="movie-row-main">
                <h2 className="genre-title" >{name}</h2>
                {movieItems}
            </main>
        )
    }

}

export default MovieRow;