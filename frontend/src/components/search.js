import React, { useState } from 'react';
//import external stylesheet app.css.
import '../App.css'
//import axios.
import axios from "axios";
//import row and buttons from react-bootstrap.
import { Row, ButtonGroup, ToggleButton, Button } from 'react-bootstrap';
//import layout compomponent from card.js.
import Layout from './cards.js'
//import link from react-router-dom.
import { Link } from 'react-router-dom';
//import useeffect from react.
import { useEffect } from 'react';

function Search() {
    //set state.
    const [artist, setArtist] = useState("Jack Johnson");
    const [displayArtist, setDisplayArtist] = useState("");
    const [itunesFetchComplete, setItunesFetchComplete] = useState([]);
    const [searchBanner, setsearchBanner] = useState("");
    const [radioValue, setRadioValue] = useState('song');
    const [favourites, setfavourites] = useState([]);

    //create radio buttons.
    const radios = [
        { name: 'Music', value: 'song' },
        { name: 'Audiobook', value: 'audiobook' },
        { name: 'Podcast', value: 'podcast' },
        { name: 'Movie', value: 'movie' },
        { name: 'eBook', value: 'ebook' },
        { name: 'App', value: 'software' },
    ];

    //add favourites to local storage.
    const addToFav = (fav) => {
        setfavourites([...favourites, fav])
    }
    useEffect(() => {
        localStorage.setItem("favourites", JSON.stringify(favourites));
    }, [favourites]);

    const clickHandler = () => {
        axios.get(`/media`, { params: { artist, radioValue } })
            .then(function (response) {
                //handle success.
                const mediaSearchResults = response.data.results;
                setItunesFetchComplete(mediaSearchResults ? mediaSearchResults : []);
                setsearchBanner("Search Results for:")
                setDisplayArtist(artist);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    //create inputdata for user to input.
    let inputData = "";
    const inputHandler = (e) => {
        const rawInputData = (e.target.value);
        inputData = rawInputData
        setArtist(inputData);
    }

    //return to display the items searched for.
    return (
        <div className="search-screen-background" >
            <div className="search-screen-content ">
                <header>
                    <div className="input" >
                        <input type="text" className="input" placeholder="Search" style={{fontSize: '18px'}} onChange={inputHandler} />
                        <button type="submit" style={{backgroundColor: 'black', color: 'white', fontSize: '18px'}} onClick={clickHandler}>Search</button>
                    </div>
                    <ButtonGroup toggle >
                        {radios.map((radio, idx) => (
                            <ToggleButton
                                key={idx}
                                type="radio"
                                variant="danger"
                                name="radio"
                                value={radio.value}
                                checked={radioValue === radio.value}
                                onChange={(e) => setRadioValue(e.currentTarget.value)}
                                style={{color: 'black', fontSize: '16px'}}
                            >
                                {radio.name}
                            </ToggleButton>
                        ))}
                    </ButtonGroup>
                    <br />
                    <Link to="/favourites"><Button variant="warning" style={{backgroundColor: 'black', color: 'white', fontSize: '18px'}}>View Favourites</Button>{' '} </Link>
                </header>
                <div>
                    <div className="below-header">
                        <p style={{color: 'black'}}> {searchBanner} </p>
                        <p style={{color: 'black'}}>{displayArtist}</p>
                    </div>
                    <div className="search-page" >
                        <div className="container-fluid" >
                            <Row md={5} style={{overflowY: 'scroll', height: '1000px', weight: '200px'}}>
                                {
                                    itunesFetchComplete.length !== 0 ?
                                        itunesFetchComplete.map(info => (<Layout addToFav={addToFav} info={info} />)) :
                                        <h1></h1>
                                }
                            </Row>
                        </div>
                    </div >
                </div>
            </div>
        </div >
    );
}

//export code to make it available outside this module.
export default Search;