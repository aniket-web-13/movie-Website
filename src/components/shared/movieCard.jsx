import { Component } from "react";

import { FaCircle } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { FaPlay } from "react-icons/fa";
import { MdOutlineDownloading } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";


import { MovieCardBtn, SaveListBtn } from "../shared/buttons.jsx";


export class MovieCard extends Component {
    constructor() {
        super();
        this.state = {
            src: "https://i.pinimg.com/736x/69/6b/77/696b77a925bb7e2a9dce7049c173d103.jpg",
            name: "Peaky Blinders",
            d: "2D",
            language: {
                lang1: "English",
                lang2: "Freanch",
                lang3: "Hindi",
                lang4: "Telugu",
            },
            time: "1h 58 min",
            cate: {
                cat1: "Crime",
                cat2: "Thriller"
            },
            saveList: "List",
            date: "20 Dec, 2024",
            star: "0",
            para:"A notorius gang in 1919 Birmingham, England, is led by the fierce Tommy Shelby, a crime boss set on moving up in the world no matter the cost",
        }   
    };
    increase = () => {
        if (this.state.star <= 0) {
          star: this.setState += 1
        }
    };
    
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
                                <div className="dl">
                                    <ul>
                                        <li>{this.state.time}</li>
                                        <li><FaCircle style={{fontSize:"0.5rem"}}/> {this.state.cate.cat1}, {this.state.cate.cat2}</li>
                                        <li><FaCircle style={{fontSize:"0.5rem"}}/> {this.state.date}</li>
                                    </ul>
                                </div>
                                <div className="dl-p">
                                    <p>{this.state.para}</p>
                                </div>
                                <div className="m-card-btn">
                                    <MovieCardBtn btnTitle={"Play"} icon={<FaPlay style={{fontSize:"0.875rem"}}/>}/>
                                    <MovieCardBtn btnTitle={"Download"} icon={<MdOutlineDownloading style={{fontSize:"1rem"}}/>}/>
                                </div>
                            </div>
                        </div>
                        <div className="m-card-rit">
                            <div className="mcr-top">
                                <SaveListBtn saveBtnT={this.state.saveList} sbIcon={<CiBookmark />}/>
                            </div>
                            <div className="mcr-btm dl" >
                                <p>Rate us</p>
                                <button className="pm-btn" onClick={this.increase}><FaPlus /></button>
                                <h3>{this.state.star}</h3>
                                <button className="pm-btn"><FaMinus /></button>
                            </div>
                        </div>  
                    </div>
                </div>
            </>
        )
    }
}