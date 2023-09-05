
const txtName = document.getElementById("txtName");
const txtPoint = document.getElementById("txtPoint");
const btnAdd = document.getElementById("btnAdd");
const tblListBody = document.querySelector("#tblList tbody");
const tblListFootDnone = document.querySelector("#tblList tfoot .summary-row");
const tblListFootNoRecordsTxt = document.querySelector("#tblList tfoot .empty-row");
const tblListFootAveregeText = document.querySelector("#tblList tfoot #lblAverage");


btnAdd.addEventListener("click", ()=>{
    const name = txtName.value;
    const point  = txtPoint.value;

    if(!name || (!point && point ==0) || isNaN(point) || point<0 || point > 100) {alert("Put real name and points");return}

    const row = getNewRows(name, point);
    tblListBody.prepend(row);
    updateTableTowIndex();
    updateAverage();
    setFooter()
    resetForm()
    attachUpdateEventListener(row);
    attachApprovedEventListener(row);
    attachCancelEventListener(row);
})

//function to create new row
const getNewRows =(name, point)=>{
    const row = document.createElement("tr");
    row.innerHTML = getRowHTML(name, point)
    return row;
}

//function to fill table data in created row
const getRowHTML = (name, point)=>{
    return `
    <td>#</td>
    <td>${name}</td>
    <td>${point}</td>
    <td>
        <span class="btn-group-primary">
            <button class="btn btn-link btn-del"> <i class="fa-solid fa-trash"></i></button>
            <button  class="btn btn-link btn-edit"> <i class="fa-solid fa-edit"></i></button>
        </span>

        <span class="btn-group-secondary d-none">
            <button class="btn btn-link btn-update" ><i class="fa-solid fa-check"></i></button>
            <button  class="btn btn-link btn-cancel"> <i class="fa-solid fa-times"></i></button>
        </span>
        
    </td>
   
    `
}

//functon to count rows and add index number 
const updateTableTowIndex=()=>{
    const trList=tblListBody.querySelectorAll("tr td:first-child");
    trList.forEach((col,index) => {
        col.innerHTML = index+1;
        
    });
    
}

//function to calculate average
const updateAverage=()=>{
    const pointEls=Array.from(tblListBody.querySelectorAll("tr td:nth-child(3)"));
    const totalPoints=pointEls.map((item)=>item.innerHTML).reduce((total,p)=>total+Number(p),0)
    const avg=(totalPoints/pointEls.length).toFixed(2);
    tblListFootAveregeText.innerHTML=avg;
   
}
//function to hide “No records found” and display average
const setFooter = ()=>{
    const isTableBodyEmpty = tblListBody.querySelectorAll("tr").length>0 ? false:true;
    if(isTableBodyEmpty){
        tblListFootNoRecordsTxt.classList.remove("d-none")
        tblListFootDnone.classList.add("d-none")
    }else{
        tblListFootNoRecordsTxt.classList.add("d-none")
        tblListFootDnone.classList.remove("d-none")
    }
}

//functo to resetForm/inputs
const resetForm=()=>{
    txtName.value="";
    txtPoint.value="";
    txtName.focus();
}

//function to delete row
tblListBody.addEventListener("click", (e)=>{
    if(e.target.classList.contains("fa-trash")){
        e.target.closest("tr").remove();
        updateTableTowIndex();
        updateAverage();
        setFooter()
    }
})

//function to reset table rows
const resetTableRows=()=>{
    tblListBody.querySelectorAll("tr").forEach((row)=>{
        const name = row.querySelector("td:nth-child(2)");
        const point = row.querySelector("td:nth-child(3)");
        name.contentEditable = false;
        point.contentEditable = false;
        name.focus();
        //hide existing buttons and display others
        row.querySelector(".btn-group-primary").classList.remove("d-none")
        row.querySelector(".btn-group-secondary").classList.add("d-none")
        row.closest("tr").classList.remove("table-info")
    })
}
//function to edit row
const attachUpdateEventListener=(row)=>{
    row.querySelector(".btn-edit").addEventListener("click", ()=>{
        //before starting update/edit reset all row to initial state
        resetTableRows();
        const name = row.querySelector("td:nth-child(2)");
        const point = row.querySelector("td:nth-child(3)");

        name.dataset.name=name.innerText;
        point.dataset.point=point.innerText;
        name.contentEditable = true;
        point.contentEditable = true;
        name.focus();
        //hide existing buttons and display others
        row.querySelector(".btn-group-primary").classList.add("d-none")
        row.querySelector(".btn-group-secondary").classList.remove("d-none")
        row.closest("tr").classList.add("table-info")
    })
}

const attachCancelEventListener=(row)=>{
    row.querySelector(".btn-cancel").addEventListener("click", ()=>{
        const name = row.querySelector("td:nth-child(2)");
        const point = row.querySelector("td:nth-child(3)");
        name.contentEditable = false;
        point.contentEditable = false;
            name.innerText=name.dataset.name
            point.innerText=point.dataset.point
        row.querySelector(".btn-group-primary").classList.remove("d-none")
        row.querySelector(".btn-group-secondary").classList.add("d-none")
        row.closest("tr").classList.remove("table-info")
 
    })
}

const attachApprovedEventListener=(row)=>{
    row.querySelector(".btn-update").addEventListener("click", ()=>{
        const name = row.querySelector("td:nth-child(2)");
        const point = row.querySelector("td:nth-child(3)");
        name.contentEditable = false;
        point.contentEditable = false;
        name.dataset.name=name.innerText;
        point.dataset.point=point.innerText;
            name.innerText=name.dataset.name
            point.innerText=point.dataset.point
        row.querySelector(".btn-group-primary").classList.remove("d-none")
        row.querySelector(".btn-group-secondary").classList.add("d-none")
        row.closest("tr").classList.remove("table-info")
 
    })
}

