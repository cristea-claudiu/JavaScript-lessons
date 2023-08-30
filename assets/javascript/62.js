import { students } from "../data/students.js";

const tbody=document.getElementById("tbody")
document.getElementById("btnShowLowScores").addEventListener("click",()=>{
setColorForLowScores();

})

const setColorForLowScores=()=>{
    const SATBody=document.querySelectorAll("#tbody tr");
    SATBody.forEach((tr)=>{
        const point=tr.querySelector("td:last-child").innerText;
        if(point<50){
            tr.classList.add("table-danger")
        }
    })
   
}
const loadData=()=>{
    let html = "";
    students.forEach((student)=>{
        html += `<tr>
        <th>${student.id}</th>
        <td>${student.name}</td>
        <td>${student.point}</td>
        </tr>`

    })
    tbody.innerHTML = html
}
loadData();