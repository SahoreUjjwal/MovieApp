import React from "react";
import MovieCard from "./MovieCard";
export default class MovieList extends React.Component{
    constructor(){
        super();
        this.state={
            movies:[{
                title:"The Avengers",
                plot:"superhero movie",
                price:89,
                rating:8.9,
                stars:3,
                fav:false,
                addCart:false
            },
            {
                title:"The Avengers",
                plot:"superhero movie",
                price:89,
                rating:8.9,
                stars:3,
                fav:false,
                addCart:false
            },
            {
                title:"The Avengers",
                plot:"superhero movie",
                price:89,
                rating:8.9,
                stars:3,
                fav:false,
                addCart:false
            },
            {
                title:"The Avengers",
                plot:"superhero movie",
                price:89,
                rating:8.9,
                stars:3,
                fav:false,
                addCart:false
            }]        
        }
    }
    addStars=(movie)=>{
        //there are two ways to set state
        //first
        // this.setState({
        //     stars:this.state.stars + 0.5
        // });
        //Second - Used when previous state value is required
        const mid = this.state.movies.indexOf(movie);
        const {movies} = this.state;
        movies[mid].stars +=0.5;
        this.setState({
            movies:movies
        })
        
    }
    decreaseStars(movie){
        // this.setState({
        //     stars:this.state.stars - 0.5
        // });

        const mid = this.state.movies.indexOf(movie);
        const {movies} = this.state;
        movies[mid].stars -=0.5;
        this.setState({
            movies:movies
        })
    }
    toggleFavourite(){
        this.setState({
            fav:!this.state.fav
        })
    }
    toggleCart(){
        this.setState({
            addCart:!this.state.addCart
        })
    }
   
    render(){
        const {movies} = this.state;
        return(<>
            {movies.map((movie)=>(<MovieCard movie={movie} addStars = {this.addStars} decreaseStars={this.decreaseStars.bind(this)}/>))}
            {/*addStars and decreaseStars are declared diffrently to demonstrate two different methods of passing a function */}
        </>     
    )}
}