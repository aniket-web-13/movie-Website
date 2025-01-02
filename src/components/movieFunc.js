import { Component } from "react";
// import { LuBookmark, LuBookmarkCheck  } from "react-icons/lu";




import { MovieCard } from "./shared/movieCard";

export class MovieInfo extends Component {
    
    constructor() {
        super();
        this.state = {
            series: [
                {
                    src: "https://i.pinimg.com/736x/69/6b/77/696b77a925bb7e2a9dce7049c173d103.jpg",
                    name: "Peaky Blinders",
                    d: "2D",
                    language: {
                        lang1: "English",
                        lang2: "French",
                        lang3: "Hindi",
                        lang4: "Telugu",
                    },
                    time: "1h 45 min",
                    cate: {
                        cat1: "Crime",
                        cat2: "Thriller"
                    },
                    saveList: false,
                    date: "20 Dec, 2024",
                    star: 0,
                    para: "A notorious gang in 1919 Birmingham, England, is led by the fierce Tommy Shelby, a crime boss set on moving up in the world no matter the cost",
                },
                {
                    src: "https://i.pinimg.com/236x/e1/26/6e/e1266eae677f813415512876d98244f4.jpg",
                    name: "The Last Of Us",
                    d: "2D",
                    language: {
                        lang1: "English",
                        lang2: "French",
                        lang3: "Hindi",
                        lang4: "Telugu",
                    },
                    time: "1h 15 min",
                    cate: {
                        cat1: "apocalyptic",
                        cat2: "Thriller"
                    },
                    saveList: false,
                    date: "15 January 2023",
                    star: 0,
                    para: "Tasked with escorting a teenager across a post-apocalyptic world, a dreaded smuggler joins hands with a young apprentice to fulfil the mission.",
                },
                {
                    src: "https://i.pinimg.com/236x/41/bc/a3/41bca36b8c924cc43daf3624f02b6a29.jpg",
                    name: "Game of Thrones",
                    d: "2D",
                    language: {
                        lang1: "English",
                        lang2: "French",
                        lang3: "Hindi",
                        lang4: "Telugu",
                    },
                    time: "1h 28 min",
                    cate: {
                        cat1: "Adventure",
                        cat2: "Fantasy;"
                    },
                    saveList: false,
                    date: "17 April 2011",
                    star: 0,
                    para: "Nine noble families wage war against each other in order to gain control over the mythical land of Westeros. Meanwhile, a force is rising after.",
                },
                {
                    src: "https://i.pinimg.com/236x/9e/71/a2/9e71a29c1fd6c47953bcba4ecceba5d8.jpg",
                    name: "The Hobbit: Unexpected Journey",
                    d: "2D",
                    language: {
                        lang1: "English",
                        lang2: "French",
                        lang3: "Hindi",
                        lang4: "Telugu",
                    },
                    time: "1h 28 min",
                    cate: {
                        cat1: "Adventure",
                        cat2: "Fantasy;"
                    },
                    saveList: false,
                    date: "14 December 2012",
                    star: 0,
                    para: "he Hobbit is a series of three fantasy adventure films directed by Peter Jackson. The films are subtitled An Unexpected Journey.",
                },
            ]
        };
    }
    

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

    bookMarkAdd = () => {
        // { this.state.saveList ? <LuBookmarkCheck /> : <LuBookmark /> };
    }
 
    render() {
 

        const { series } = this.state;
        console.log("Series state in MovieInfo:", series);
        // console.log(this.increase);
        return (
            <>
                {series.map((value, index) => (
                    <MovieCard
                        key={index}
                        series={value}
                        onIncrease={this.increase()}
                        onDecrease={this.decrease()}
                        onAdd={this.bookMarkAdd()}
                    />
                ))}
                  
            </>
        );
    }
}




