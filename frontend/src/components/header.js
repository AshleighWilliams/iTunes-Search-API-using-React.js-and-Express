import React from 'react';
//import link from react-router-dom.
import { Link } from "react-router-dom";
//import external stylesheet app.css.
import "../App.css";
//import font awesome icons.
import 'font-awesome/css/font-awesome.min.css';

//render and return to display a navbar.
class Header extends React.Component {
    render() {
        return (
            <div class='navbar-div'>
                <nav className='navbar navbar-expand-lg'>
                    <ul className='navbar-nav list-group'>
                        <li class='nav-item'>
                            <i class="fa fa-apple" aria-hidden="true"></i> iTunes Search
                        </li>
                        <li className='nav-item'>
                            <Link className="home-nav" to="/" style={{color: 'white', fontFamily: 'MyriadPro-Regular'}}>Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className="favourite-nav" to="/favourites" style={{color: 'white', fontFamily: 'MyriadPro-Regular'}}>Favourites</Link>
                        </li>
                    </ul>
                </nav>
            </div> 
        )
    }
}

//export code to make it available outside this module.
export default Header;

