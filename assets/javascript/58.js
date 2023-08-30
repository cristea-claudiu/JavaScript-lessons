import { countries } from "../data/countries.js";

const ddlCountries = document.querySelector("#ddlCountries");
const tblCountry = document.querySelector("#tblCountry");
const totalArea =  document.querySelector("#totalArea");
//on any change in select tag, this event listener will be executed
ddlCountries.addEventListener("change", (e)=>{
    //alert(e.target.value)
    const selectedCountry = getCountry(e.target.value); //select one country out of countries array
    console.log(selectedCountry)
    fillCountryTable(selectedCountry)
})

//function to fill table data using country object which will be passed as parametr
const fillCountryTable = (country)=>{
    const capital = country.capital.join("-"); 
    const currency = Object.keys(country.currencies).join("-");
    const language = Object.values(country.languages).join("-")
    const area = country.area;
    const map = `<a href="https://www.google.com/maps/@${country.latlng.toString()},6z" target="_blank"> go to map </a>`;

    tblCountry.querySelector("tr:nth-child(1) td").innerHTML = capital;
    tblCountry.querySelector("tr:nth-child(2) td").innerHTML = currency;
    tblCountry.querySelector("tr:nth-child(3) td").innerHTML = language;
    tblCountry.querySelector("tr:nth-child(4) td").innerHTML = area;
    tblCountry.querySelector("tr:nth-child(5) td").innerHTML = map;

    tblCountry.style.display = "block"
}


//function to select country from array
const getCountry = (countryCode)=>{
    const filteredCounty = countries.filter((country)=>country.cca2 === countryCode);
    return filteredCounty.length >0 ? filteredCounty[0] : null;
}


const loadData = ()=>{
    let option = `<option value="" disabled selected>select a country</option>`;
    for(let country of countries){
        option += `<option value="${country.cca2}">${country.name.common}</option>`
    }

    
    ddlCountries.innerHTML = option
    totalArea.innerHTML  = getTotalArea()+" km2"


}

const getTotalArea = ()=>{
    const totalArea = countries.reduce((total, country)=>total + country.area, 0);
    return totalArea.toFixed(2);
}


loadData()