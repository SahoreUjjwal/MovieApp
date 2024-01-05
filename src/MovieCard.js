import React from "react";

export default class MovieCard extends React.Component{
    constructor(){
        super();
        this.state={
            title:"The Avengers",
            plot:"superhero movie",
            price:89,
            rating:8.9,
            stars:3,
            fav:false,
            addCart:false
        }
    }
    //if it is a normmal function then binding would be needed on calling 
    //if it is an arrow function then no binding is needed.
    addStars=()=>{
        //there are two ways to set state
        //first
        // this.setState({
        //     stars:this.state.stars + 0.5
        // });
        //Second - Used when previous state value is required
        this.setState((prevState)=>{
            if(prevState.stars<5)
            {
                return{
                    stars:prevState.stars+0.5
                }
            }
           return;
        })
    }
    decreaseStars(){
        // this.setState({
        //     stars:this.state.stars - 0.5
        // });

        this.setState((prevState)=>{
            if(prevState.stars >0)
            {
                return{
                    stars:prevState.stars-0.5
                }
            }
            return;
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
        let {title,plot,price,rating,stars,fav,addCart} = this.state;
        return (
            <>
                <div className ="main">
                    <div className="movie-card">
                        <div className="left">
                            <img src="https://th.bing.com/th/id/OIP.iAsDFqwmY2RZZVAt9kiojwHaLH?rs=1&pid=ImgDetMain" alt="poster"/>
                        </div>
                        <div className ="right">
                            <div className="title">{title}</div>
                            <div className = "plot">{plot}</div>
                            <div className="price">Rs. {price}</div>
                            <div className="footer">                                
                                    <div className="rating">{rating}</div>
                                    <div className="star-dis">
                                            <img onClick={this.decreaseStars.bind(this)} className = "str-btn" src ="https://cdn-icons-png.flaticon.com/128/10308/10308996.png" alt="decrease"/>
                                            <img  className="stars" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="stars"/>
                                            <img onClick={this.addStars} className = "str-btn" src ="https://cdn-icons-png.flaticon.com/128/992/992651.png" alt="increase"/>
                                            <span>{stars}</span>
                                    </div>
                                    {/*fav ?  <button onClick={this.toggleFavoutite.bind(this)} className="unfavourite-btn">
                                        Unfavourite
                                    </button>:<button onClick={this.toggleFavoutite.bind(this)} className="favourite-btn">
                                        Favourite
                                     </button>*/}
                                    <button onClick={this.toggleFavourite.bind(this)} className={fav?"unfavourite-btn":"favourite-btn"}>
                                        {fav?'unfavourite':'favourite'}
                                    </button>

                                    <button onClick={this.toggleCart.bind(this)} className="cart-btn">
                                        {addCart?"Remove":"Add to cart"}
                                    </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )        
    }
}