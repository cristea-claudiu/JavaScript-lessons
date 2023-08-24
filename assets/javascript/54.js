import { countries } from "../../assets/data/countries.js";

const loadData = ()=>{
    let option = "";
    for(let country of countries){
        option += `<option>${country.name.common}</option>`
    }

    const ddlCountries = document.querySelector("#ddlCountries");
    ddlCountries.innerHTML = option

}

loadData()