// Countries name api called 
const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}
loadCountries();
let serial = 0;
const displayCountries = data => {
    const countriesElement = document.getElementById('countries');
    for(const country of data){
        console.log(country)
        serial++;
        const div = document.createElement('div');
        div.classList.add('country')
        div.innerHTML = `<span>${serial}</span><h4>Name: ${country.name}</h4> <p>Capital: ${country.capital}</p> <span>Alpha2Code: ${country.alpha2Code}</span> <button class = "btn btn-success mt-4" onclick = "loadDetails('${country.name}')" data-bs-toggle="modal" data-bs-target="#exampleModal">Details</button>`;
        countriesElement.appendChild(div);
    }
}
const loadDetails = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountry(data[0]))
}
const displayCountry = country => {
    const modalElement = document.getElementById('modal');
    modalElement.innerHTML = `<p>Name: ${country.name}</p> <p>NativeName: ${country.nativeName}</p> <p>Alpha3Code: ${country.alpha3Code}</p>  <p>Region: ${country.region}</p> <p>SubRegion: ${country.subregion}</p> <p>Timezones: ${country.timezones}</p> <img width = 100% src = "${country.flag}">`
}