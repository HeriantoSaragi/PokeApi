const axios = require('axios').default;

async function fetchData() {
    const result = await axios.get('http://localhost:3200/pokemons');
    console.log(result);
}

fetchData();