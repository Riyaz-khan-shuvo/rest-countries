const countryEle = document.querySelector('.row')
const loadAllCountries = () => {
    fetch(`https://restcountries.com/v2/all`)
        .then(res => res.json())
        .then(data => {
            data.map((country, index) => {
                displayCountries(country)
            })
        })
}
loadAllCountries()

const displayCountries = (country) => {

    const singleCountry = document.createElement('div')
    singleCountry.classList.add('col-md-4')
    singleCountry.innerHTML += `
    <div class="single-country">
        <div id=${country.name}  class="country">
            <p> ${country.name} </p>
            <img class="cnt-img" src=${country.flags.png} alt="" />
            <button class="my-3 btn btn-success" >View Details</button>
        </div>
    </div>
    `
    countryEle.appendChild(singleCountry)
    singleCountry.addEventListener('click', () => {
        countryDetails(country)
    })
}

const countryDetails = (countryDetail) => {
    // fetch(`https://restcountries.com/v2/name/${countryName.name}`)
    //     .then(res => res.json())
    //     .then(data => console.log(data))

    countryEle.innerHTML = `
    <div id="country-details">
    <button class="btn btn-success" id='back'>back</button>
    <div class="country">
    <div class="d-flex align-items-center justify-content-center">
        <div class="country-img">
            <img src=${countryDetail.flags.png} alt="" />
        </div>
        <div class="mx-5">
            <h1> ${countryDetail.name} </h1>
            <p>Native Name : <span class="text-secondary">${countryDetail.nativeName} </span> </p>
            <p>Population : <span class="text-secondary">${countryDetail.population} </span> </p>
            <p>Region : <span class="text-secondary">${countryDetail.region} </span> </p>
            <p>Sub-Region : <span class="text-secondary">${countryDetail.subregion} </span> </p>
        </div>
        <div class="country-details ml-5 mt-3">
        <p>Capital : <span class="text-secondary">${countryDetail.capital} </span> </p>
        <p>Top Level Domain : <span class="text-secondary">${countryDetail.topLevelDomain} </span> </p>
        <p>Currencies : <span class="text-secondary">${countryDetail.currencies[0].name
        } </span> </p>
        <p>Language : <span class="text-secondary">${countryDetail.languages[0].name} </span> </p>
    </div>
    </div>
    </div>
    </div>
    `
    const back = document.getElementById('back');
    back.addEventListener('click', () => {
        document.getElementById('country-details').style.display = 'none'
        fetch(`https://restcountries.com/v2/all`)
            .then(res => res.json())
            .then(data => {
                data.map((country, index) => {
                    displayCountries(country)
                })
            })
    })
}

