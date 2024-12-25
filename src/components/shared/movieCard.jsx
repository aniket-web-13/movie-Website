import { Component } from "react";


export class MovieCard extends Component {
    constructor() {
        super();
        this.state = {
            src: "https://i.pinimg.com/736x/69/6b/77/696b77a925bb7e2a9dce7049c173d103.jpg",
            name: "Peaky blinders",
            d: "2D",
            language: {
                lang1: "English",
                lang2: "Freanch",
                lang3: "Hindi",
                lang4: "Telugu",
            },
            season: "season1",
            cate: {
                cat1: "Action",
                cat: "Thriller"
            },
            movieRate: "A",
            date: "20 Dec, 2024",
            star: "0"
        }
    }
    render() {
        return (
            <>
                <div className="movie-card-count">
                    <div className="movie-card">
                        <div className="m-card-lft">
                            <div className="mcl-img">
                                <img src={this.state.src} alt="" />
                            </div>
                            <div className="mcl-info">
                                <h1>{this.state.name}</h1>
                                <div className="dl-sec">
                                    <div className="dl">
                                        <p>{this.state.d}</p>
                                    </div>
                                    <div className="dl">
                                        <ul>
                                            <li>{this.state.language.lang1},</li>
                                            <li>{this.state.language.lang2},</li>
                                            <li>{this.state.language.lang3},</li>
                                            <li>{this.state.language.lang4}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="m-card-rit"></div>
                    </div>
                </div>
            </>
        )
    }
}