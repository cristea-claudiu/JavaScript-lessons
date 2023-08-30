import {cities} from "../data/cities.js"
import showAlert,{showConfirm} from "../data/messages.js"

const btnAlert=document.getElementById("btnAlert");
const btnConfirm=document.getElementById("btnConfirm");

btnAlert.addEventListener("click",()=>{
    showAlert("Hello module")
})
btnConfirm.addEventListener("click",()=>{
    
    showConfirm("Are you sure you want to ")
})
