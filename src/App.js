import { Component } from "react";
import MovieList from "./MovieList";
import Navbar from "./Navbar";
class App extends Component {

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
            addCart:false,
            isAdded:false
        },
        {
            title:"The Avengers",
            plot:"superhero movie",
            price:89,
            rating:8.9,
            stars:3,
            fav:false,
            addCart:false,
            isAdded:false
        },
        {
            title:"The Avengers",
            plot:"superhero movie",
            price:89,
            rating:8.9,
            stars:3,
            fav:false,
            addCart:false,
            isAdded:false
        },
        {
            title:"The Avengers",
            plot:"superhero movie",
            price:89,
            rating:8.9,
            stars:3,
            fav:false,
            addCart:false,
            isAdded:false
        }],
      cartCount:0        
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
    if(movies[mid].stars>0)
    {
        movies[mid].stars +=0.5;
        this.setState({
            movies:movies
        })  
    }
    
}
decreaseStars(movie){
    // this.setState({
    //     stars:this.state.stars - 0.5
    // });

    const mid = this.state.movies.indexOf(movie);
    const {movies} = this.state;
    if(movies[mid].stars>0)
    {
        movies[mid].stars -=0.5;
        this.setState({
            movies:movies
        })
    }   
}
toggleFavourite=(movie)=>{
    const mid = this.state.movies.indexOf(movie);
    const {movies} = this.state;
    movies[mid].fav =!movies[mid].fav 
    this.setState({
        movies:movies
    })
}
toggleCart=(movie)=>{
    const mid = this.state.movies.indexOf(movie);
    const {movies} = this.state;
    if(movies[mid].isAdded)
    {
      movies[mid].addCart =!movies[mid].addCart 
      movies[mid].isAdded=!movies[mid].isAdded ;
      this.setState({
        movies:movies,
        cartCount:this.state.cartCount-1
    })
    }
    else{
      movies[mid].addCart =!movies[mid].addCart 
      movies[mid].isAdded=!movies[mid].isAdded;
      this.setState({
        movies:movies,
        cartCount:this.state.cartCount+1
    })
    }
   
    
}
  
  render(){
      return (
        <>
          <Navbar cartCount={this.state.cartCount}/>
          <MovieList movies={this.state.movies} 
                addStars={this.addStars} 
                decreaseStars={this.decreaseStars.bind(this)} 
                toggleCart={this.toggleCart} 
                toggleFavourite = {this.toggleFavourite}/>
        </>
    );
  }
  
}

export default App;
