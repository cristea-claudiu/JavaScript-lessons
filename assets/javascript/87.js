import  sortNumRandom,{sortStringAsc,sortStringDesc,sortNumAsc,sortNumDesc} from "../data/sorting.js"




const btn1=document.getElementById("btn1")
const btn2=document.getElementById("btn2")
const btn3=document.getElementById("btn3")
const btn4=document.getElementById("btn4")
const btn5=document.getElementById("btn5")




const num=[1,222,2,12,33,11,12,32,53,56,77,48,100,69,50]
const cities=["Ankara","Tokyo","Beijing","Paris","London"]

btn1.addEventListener("click",()=>{
    console.log(sortNumAsc(num))
})

btn2.addEventListener("click",()=>{
    console.log(sortNumDesc(num))
})
btn3.addEventListener("click",()=>{
    
    console.log(sortStringAsc(cities))
})
btn4.addEventListener("click",()=>{
    console.log(sortStringDesc(cities))
})
btn5.addEventListener("click",()=>{
    console.log(sortNumRandom(num))
})