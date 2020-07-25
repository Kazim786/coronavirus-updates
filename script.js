// The api: https://api.covid19api.com/live/country/south-africa

// const theCountries = await axios.get(`https://api.covid19api.com/live/country/south-africa`)
//         console.log(theCountries.data[0].Confirmed)
//         console.log(theCountries.data[0].Deaths)
//         console.log(theCountries.data[0].Recovered)

// const countries = document.getElementById('countries').value

const results = document.getElementsByClassName('results')

const submitBtn = document.getElementById('submit')

const data = []
console.log(countries)

//Async Function
//`https://api.covid19api.com/live/country/${countries}`
console.log(byCountries())
async function byCountries(){
    try {
        const countries = document.getElementById('countries').value
        const theCountries = await axios.get(`https://api.covid19api.com/live/country/${countries}`)
        const deaths = theCountries.data[0].Deaths
        const confirmed = theCountries.data[0].Confirmed
        const recovered = theCountries.data[0].Recovered
        data.push(deaths, confirmed, recovered)
        console.log(theCountries)
        await console.log(data)
    }

    catch{
        console.log("Error");
    }
    
}

//Show results function:

function showResults(){
    if (countries !== null){
        results.innerHTML = `<strong>${countries}</strong> has number of deaths as <emphasize>${deaths}</emphasize>, confirmed cases numbering <emphasize>${confirmed}</emphasize>, recovered people as the following number: <emphasize>${recovered}</emphasize>. `
    } else {
        results.innerHTML = 'Enter a name of a Valid Country'
    }

}


//Add Event Listener

submitBtn.addEventListener('click', () => {
    byCountries()
    showResults()
})
