const { get } = require('superagent');
const superagent = require('superagent');

const url = 'https://api.fetch-user.rest/';

async function getAPI(){
    const response = await superagent.get(url);
    const quote = response.body.quote;
    console.log(quote);
}

getAPI();







