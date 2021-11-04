import React from 'react';
//import cardlayout from components.
import CardLayout from '../components/cards.js';
//import render from react-test-renderer.
import {render} from '@testing-library/react';


//test if cardlayout component renders.
test("Render Correct", () => {
    //create a variable to hold rendered component.
    const tree = render(<CardLayout />);
    //checks if original tree matches with the snapshot. 
    expect(tree).toMatchSnapshot();
    const functionality = <CardLayout />;
    expect(functionality).toBeDefined();
})

//test if localstorage works.
test("localstorage works", () => {
    let addFavourite = []
    addFavourite.push("test")
    localStorage.setItem('favouriteList', JSON.stringify(addFavourite));
    let testFavourite = JSON.parse(localStorage.getItem('favouriteList'));
    expect(testFavourite).toHaveLength(1);
})