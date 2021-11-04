let Server = require('../server');
//require chai.
let expect = require('chai').expect;
let request = require('request');

//test if the server statusrenders correctly as well as the API Fetch.
describe("Server status and API fetch", () => { 
    it('status', function(completed) {
        request('http://localhost:3001/', function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            completed();
        })
    })
    it('fetch correct data', () => {
        let artist = 'selena gomez'
        let radioValue = 'artistName'
        request(`https://itunes.apple.com/search?term=${artist}&limit=25&entity=${radioValue}`, function(error, response, body) {
            expect(response.statusCode).to.equal(200)
        });

    })  
})