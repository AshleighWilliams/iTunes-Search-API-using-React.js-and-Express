import React from 'react';
//import external stylesheet app.css.
import '../App.css';
//import link from react-router-dom.
import { Link } from 'react-router-dom';
//import button component from react-bootstrap.
import { Button } from 'react-bootstrap';
//import font awesome icons.
import 'font-awesome/css/font-awesome.min.css';

//return to display landing page with search button.
function LandingPage() {
    return (
        <div className="home-screen-background">
            <div className="home-screen-content">
                <div className="landing-page">
                    <div>
                        <i class="fa fa-apple" aria-hidden="true"></i> iTunes Search
					</div>
                    <p>An innovative tool created for searching iTunes</p>
                    <p>Search any Music, Audiobooks, Podcasts, Movies, eBooks or Apps</p>
                    <p>Save them in your favorites</p>
                    <Link to="/search"><Button variant="danger" style={{ backgroundColor: 'black', color: 'white', fontSize:'18px'}}>Search</Button> </Link>
                </div>
            </div>
        </div>
    );
}

//export code to make it available outside this module.
export default LandingPage;