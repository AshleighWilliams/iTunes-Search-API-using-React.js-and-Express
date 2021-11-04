import React from 'react';
//import search from components.
import Search from '../components/search.js';
//import render from react-test-renderer.
import {render} from '@testing-library/react';

//test if search component renders.
test("Correct Render", () => {
    const tree = render(<Search />)
    expect(tree).toMatchSnapshot();
})

test('Check if API correct', async () => {
    //await fetch method and assign to variable to test it. 
    const postToServer = await fetch(`https://itunes.apple.com/search?term=migos&limit=25&entity=song`, {
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify({
            search:"migos",
            option:"song"
        })
    })
    expect(postToServer).toBeDefined();
    //awaits object data from above and converts to a string.
    const convertJSON = await postToServer.json();
    //toBeTruthy tests if data is true or fail. 
    expect(convertJSON).toBeTruthy();
})