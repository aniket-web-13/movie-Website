import { Component } from "react";
import { FaCircle, FaPlay, FaPlus, FaMinus } from "react-icons/fa";
import { LuBookmark, LuBookmarkCheck } from "react-icons/lu";

import { MdOutlineDownloading } from "react-icons/md";
import { MovieCardBtn } from "../shared/buttons.jsx";

export class MovieCard extends Component {
    render() {
        const { series, onIncrease, onDecrease } = this.props;

        // console.log("Series prop received:", series); // Log the series prop

        const { src, name, d, language, time, cate, saveList, date, star, para } = series;
        const { } = this.props;
        console.log(onIncrease);

        return (
            <>
                <div className="movie-card-count">
                    <div className="movie-card">
                        <div className="m-card-lft">
                            <div className="mcl-img">
                                <img src={src} alt="" />
                            </div>
                            <div className="mcl-info">
                                <h1>{name}</h1>
                                <div className="dl-sec">
                                    <div className="dl">
                                        <p>{d}</p>
                                    </div>
                                    <div className="dl">
                                        <ul>
                                            <li>{language.lang1},</li>
                                            <li>{language.lang2},</li>
                                            <li>{language.lang3},</li>
                                            <li>{language.lang4}</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="dl">
                                    <ul>
                                        <li>{time}</li>
                                        <li><FaCircle style={{ fontSize: "0.5rem" }} /> {cate.cat1}, {cate.cat2}</li>
                                        <li><FaCircle style={{ fontSize: "0.5rem" }} /> {date}</li>
                                    </ul>
                                </div>
                                <div className="dl-p">
                                    <p>{para}</p>
                                </div>
                                <div className="m-card-btn">
                                    <MovieCardBtn btnTitle={"Play"} icon={<FaPlay style={{ fontSize: "0.875rem" }} />} />
                                    <MovieCardBtn btnTitle={"Download"} icon={<MdOutlineDownloading style={{ fontSize: "1rem" }} />} />
                                </div>
                            </div>
                        </div>
                        <div className="m-card-rit">
                            <div className="mcr-top">
                                <button className="pd-btn">
                                    {saveList ? <LuBookmarkCheck /> : <LuBookmark />}
                                </button>
                            </div>
                            <div className="mcr-btm dl">
                                <p>Rate us</p>
                                <button className="pm-btn" onClick={() => onIncrease}><FaPlus /></button>
                                <h3>{star}</h3>
                                <button className="pm-btn" onClick={() => onDecrease}><FaMinus /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
