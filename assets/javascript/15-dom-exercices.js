function setMode(){
    // document.body.classList.toggle("dark")
    const switchDiv =document.querySelector(".switch")
const isDark=document.body.classList.contains("dark");
if (isDark){
    switchDiv.innerHTML=`<i class="fa-solid fa-moon"></i>`
    document.body.classList.remove("dark")
}else{
    document.body.classList.add("dark")
    switchDiv.innerHTML=`<i class="fa-solid fa-sun"></i>`
}
}