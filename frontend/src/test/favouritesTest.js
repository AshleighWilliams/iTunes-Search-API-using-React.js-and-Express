import React from 'react';
//import favourites from components.
import Favourites from '../components/favourites.js';
//import render from react-test-renderer.
import {render} from '@testing-library/react';

//test if favourites component renders.
test("Render Correct", () => {
    //create a variable to hold rendered component.
    const tree = render(<Favourites />);
    //checks if original tree matches with the snapshot. 
    expect(tree).toMatchSnapshot();
    const functionality = <Favourites />;
    expect(functionality).toBeDefined();
})