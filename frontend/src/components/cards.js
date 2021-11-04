import React from 'react';
//import external stylesheet app.css.
import '../App.css'
//import card and col from react-bootstrap.
import { Card, Col } from 'react-bootstrap';
//import button components from react-bootstrap.
import { Button } from 'react-bootstrap';

//return to display itunes results in a card display.
function CardLayout(props) {
    return (
        <Col>
            <Card className="mb-5 ml-1 mr-1">
                <Card.Img variant="top" src={props.info.artworkUrl100.replace("100x100", "250x250")} />
                <Card.Body>
                    <Card.Title>{props.info.trackName}</Card.Title>
                    <Card.Text>{props.info.artistName}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button variant="secondary" style={{backgroundColor: 'black', color: 'white'}} onClick={() => props.addToFav(props.info)}>Add to Favorites</Button>
                </Card.Footer>
            </Card>
        </Col >
    )
}

//export code to make it available outside this module.
export default CardLayout;