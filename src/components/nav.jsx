import React, { Component } from "react";
import { RiShoppingCartLine } from "react-icons/ri";


export class Navbar extends Component {
   render(){
    const { cartCount } = this.props;
    return (
        <>
            <nav>
                <div className="nav-padding">
                    <div className="container">
                        <div className="nav-main-count">
                            <div className="nav-inn">
                                <h2>Blinders</h2>
                            </div>
                            <div className="nav-inn">
                                <button className="cart-icon">
                                    <RiShoppingCartLine style={{fontSize:"1.875rem"}}/>
                                </button>
                                <span className="cart-num"><sup>{cartCount}</sup></span>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
   }
}

// export const Navbar = () => {
   
// }