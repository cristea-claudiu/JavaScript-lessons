const ddlCarEl=document.querySelector("#ddlCar")
const ddResultEl=document.querySelector("#ddResult")
const car= {
    brand: 'Ford',
    model: 'Mustang',
    yearOfProduction: 2016,
    color:{
        interrior:"white",
        exterrior:"black"
    },
    doors:3,
    price: 30000,
    engine:"v8",
    transmission:"auttomatic",
    seats:4,
}
    for (let key in car){
        const optionEl=document.createElement("option")
        optionEl.value=key
        optionEl.textContent=key
        ddlCarEl.appendChild(optionEl)
    }

ddlCarEl.addEventListener("click",(e)=>{
    const carKey =e.target.value;
    ddResultEl.textContent=car[carKey]
})