

// The api: https://api.covid19api.com/live/country/south-africa

// const theCountries = await axios.get(`https://api.covid19api.com/live/country/south-africa`)
//         console.log(theCountries.data[0].Confirmed)
//         console.log(theCountries.data[0].Deaths)
//         console.log(theCountries.data[0].Recovered)

// const countries = document.getElementById('countries').value

// const results = document.getElementById('results')

const submitBtn = document.getElementById('submit')

const container = document.querySelector('container')

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
       console.log(`Today ${countries} has number of deaths as ${deaths}, confirmed cases ${confirmed},recovered ${recovered}`)
    }

    catch{
        console.log("Error");
    }
    
}

//Show results function:

function showResults(){
    if (countries !== null){
        // const span = document.createElement('span')
        // span.innerHTML = `Today ${countries} has Number of deaths as <strong>${deaths}</strong>, Number confirmed cases is <strong>${confirmed}</strong>, Number of people recovered is <strong>${recovered}</strong>`

        // container.appendChild('span')
        const results = document.getElementById('results')

        results.innerHTML = `Today ${countries} has Number of deaths as <strong>${deaths}</strong>, Number confirmed cases is <strong>${confirmed}</strong>, Number of people recovered is <strong>${recovered}</strong>`
    } else {
        results.innerHTML = 'Enter a name of a Valid Country'
    }

}


//Add Event Listener

submitBtn.addEventListener('click', () => {
    byCountries()
    showResults()
})
