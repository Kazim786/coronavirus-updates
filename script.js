// https://api.covid19api.com/live/country/south-africa

const countries = document.getElementById('countries').value


async function byCountries(){
    const theCountries = await axios.get(`https://api.covid19api.com/live/country/${countries}`)
}