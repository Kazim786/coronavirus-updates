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
        
        console.log(theCountries)
       console.log(`${countries} has number of deaths as ${deaths}, confirmed ${confirmed},recovered ${recovered}`)
    }

    catch{
        console.log("Error");
    }
    
}

//Show results function:

function showResults(){
    if (countries !== null){
        return results.innerText = `${countries} has number of deaths as <strong>${deaths}</strong>, confirmed <strong>${confirmed}</strong>,recovered <strong>${recovered}</strong>`
    } else {
        results.innerText = 'Enter a name of a Valid Country'
    }

}


//Add Event Listener

submitBtn.addEventListener('click', () => {
    byCountries()
    showResults()
})
