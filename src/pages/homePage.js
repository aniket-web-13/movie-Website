import { Component } from "react";


import { MovieInfo } from "../components/movieFunc";
import { Navbar } from "../components/nav";
// import { series } from "../components/shared/movieData";



export class Home extends Component {
    
    // constructor() {
    //     super();
    //     this.state = {
    //         series: series,
    //         cartCount:0,
    //     }
    //     console.log(cartCount)
    // }


    // bookMarkAdd = (season) => {
    //     const {series} = this.state;
    //     const seriesId = series.indexOf(season);

    //     series[seriesId].isInCart = !series[seriesId].isInCart;

    //     if (series[seriesId].isInCart) {
    //         this.state.cartCount = this.state.cartCount +1
    //     } else {
    //         this.state.cartCount = this.state.cartCount -1
    //     }

    //     this.setState({
    //         series
    //     })        
    // }

/*

    // for increasing rating button
    increase = () => {
        if (this.state.star < 5) {
            this.setState((prevState) => ({
                star: prevState.star + 1
            }));
        }
    };

    // for decreasing rating button
    decrease = () => {
        if (this.state.star > 0) {
            this.setState((prevState) => ({
                star: prevState.star - 1
            }));
        }
    };

 */
    
    render() {        
        return (
            <>
                <Navbar />
                <MovieInfo />
            </>
        )
    }
}





// export function Home() {
 
//     return (
//         <>
//             <Navbar />
//             <MovieInfo />
//         </>
//     )
// }

