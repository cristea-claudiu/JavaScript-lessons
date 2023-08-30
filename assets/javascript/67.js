import { students } from "../data/students.js";

document.getElementById("btnShowLowScores").addEventListener("click", ()=>{
    setColorForLowScores();
})

const setColorForLowScores = ()=>{
    //select tr -s in tbody
    const trEls = document.querySelectorAll("#tblStudents tbody tr");
    trEls.forEach((tr)=>{
        //from each tr, get last td's innerText
        const score = tr.querySelector("td:nth-child(3)").innerText;
        //console.log(score)
        if(score<50){
            tr.classList.add("table-danger") //add bootstrap class
        }
    })
}

const loadData = ()=>{

    let html = "";
    students.forEach((student, index) =>{
        html +=
        `
        <tr>
            <th>${index+1}</th>
            <td>${student.name}</td>
            <td>${student.point}</td>
            <td><button class="btn btn-link btn-del">🗑️</button> </td>
        </tr>`
        
    })

    document.querySelector("#tblStudents tbody").innerHTML=html;
}
document.getElementById("tblStudents").addEventListener("click",(e)=>{
    if(e.target.classList.contains("btn-del")){
    const name=e.target.closest("tr").children[1].innerText;
   const result= confirm(`are you sure you delete ${name}`)
   console.log(result);
    }else{
        e.target.closest("tr").classList.toggle("table-info")
        
    }

})
loadData()


