import React, { useState } from 'react';
//import external stylesheet app.css.
import '../App.css'
//import row from react-bootstrap.
import { Row } from 'react-bootstrap';
//import link from react-router-dom.
import { Link } from 'react-router-dom';
//import useeffect from react.
import { useEffect } from 'react';
//import col,card and button components from react-bootstrap.
import { Card, Col, Button } from 'react-bootstrap';

function Favourites() {
    const [removeFavourite, setRemoveFavourite] = useState();

    //allow a favourited item to be deleted/removed from local storage.
    const removeItem = (id) => {
        const favourites = (JSON.parse(localStorage.getItem("favourites")))
        const filteredFavourites = favourites.filter(x => x.trackId !== id);
        localStorage.setItem("favourites", JSON.stringify(filteredFavourites));
        window.location.reload()
    }

    //display favourites.
    const [Displayfavourites, setDisplayfavourites] = useState([]);

    useEffect(() => {
        setDisplayfavourites(JSON.parse(localStorage.getItem("favourites")))
    }, []);

    //return to display favourited items in card format.
    return (
        <div className="search-screen-background">
            <div className="search-screen-content ">
                <header>
                    <p style={{color: 'black'}}>Your Favourites are:</p>
                    <br />
                </header >
                <div className="container-fluid" style={{ alignItems: "center", justifyContent: "center", textAlign: "center" }} >
                    <Row md={5} style={{overflowY: 'scroll', height: '1000px', weight: '200px'}}>
                        {Displayfavourites.map(info => (
                            <Col>
                                <Card className="mb-5 ml-1 mr-1">
                                    <Card.Img variant="top" src={info.artworkUrl100.replace("100x100", "250x250")} />
                                    <Card.Body>
                                        <Card.Title>{info.trackName}</Card.Title>
                                        {info.artistName && <Card.Text>{info.artistName}</Card.Text>}
                                    </Card.Body>
                                    <Card.Footer>
                                        <Button variant="secondary" style={{backgroundColor: 'black', color: 'white'}} onClick={() => removeItem(info.trackId)} >Delete</Button>
                                    </Card.Footer>
                                </Card>
                            </Col >
                        ))}
                    </Row>
                </div>
            </div>
        </div >
    );
}

//export code to make it available outside this module.
export default Favourites;