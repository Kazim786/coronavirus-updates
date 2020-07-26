

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
        
        // console.log(theCountries)
       console.log(`Today ${countries} has number of deaths as ${deaths}, confirmed cases ${confirmed},recovered ${recovered}`)
       if (countries !== null){
       const results = document.getElementById('results')
       results.innerHTML = `Today ${countries} has number of deaths as ${deaths}, confirmed cases ${confirmed}, recovered ${recovered}`
       } 
        else {
        results.innerHTML = 'Enter a name of a Valid Country'
        }
    }

    catch{
        console.log("Error");
    }
    
}




//Add Event Listener

submitBtn.addEventListener('click', async () => {
    await byCountries()
    
})
