// by using array function 

const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => displayCountries(data))
}

loadCountries();
// we will show this data into another array function
const displayCountries = (countries) => {
    console.log(countries);
    const countryDiv = document.getElementById('country');

    countries.forEach(country => {
        console.log(country);
        const div = document.createElement('div');
        div.classList.add('country-details')
        div.innerHTML = `
        <h3>${country.name.common}</h3>
        <p>${country.capital}</p>
        <a class = "btn" href="#country-details" onclick= "loadCountryByName('${country.name.common}')">Show Details</a>
        `
        countryDiv.appendChild(div)
    })

}

const loadCountryByName = (name) => {
    const url = `https://restcountries.com/v3.1/name/${name}`
    // console.log(url)
    fetch(url)
        .then(response => response.json())
        .then(data => displayCountryDetails(data))

}

// 4th array function // for getting single country and capital

const displayCountryDetails = (country) => {

    //console.log(country);

    const singleCountry = country[0];
     console.log(singleCountry.capital);
    // if we click any button we will able to see at the top of UI.
    let detailDiv = document.getElementById('country-details');
    detailDiv.innerHTML = `<h3> ${country[0].name.common}</h3>
    <p>Capital: ${country[0].capital}</p>
    <p>Population: ${country[0].population}</p>
    <img src="${country[0].flags.png}" alt="">


    `
}






