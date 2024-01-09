import React from "react";
import MovieCard from "./MovieCard";
export default function MovieList(props){
        const {movies,addStars,decreaseStars,toggleCart,toggleFavourite} = props;
        return(<>
            {movies.map((movie)=>(<MovieCard movie={movie} addStars = {addStars} decreaseStars={decreaseStars} toggleCart={toggleCart} toggleFavourite={toggleFavourite}/>))}
            {/*addStars and decreaseStars are declared diffrently to demonstrate two different methods of passing a function */}
        </>    ) 
    
}