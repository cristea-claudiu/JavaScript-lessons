const hourEl=document.querySelector(".clock li:nth-child(1)")
const minuteEl=document.querySelector(".clock li:nth-child(3)")
const secondEl=document.querySelector(".clock li:nth-child(5)")
const twoPoint1El=document.querySelector(".clock li:nth-child(2)")
const twoPoint2El=document.querySelector(".clock li:nth-child(4)")

setInterval(()=>{
    const now=new Date()
    const hour=now.getHours()
    const minute=now.getMinutes()
    const second=now.getSeconds()
    hourEl.innerHTML = hour.toString().length ===1 ? `0${hour}` : hour
    minuteEl.innerHTML = minute.toString().length ===1 ? `0${minute}` : minute
    secondEl.innerText= second.toString().length ===1 ? `0${second}` : second
  
   

})
setInterval(()=>{
twoPoint1El.classList.toggle("hidden")
    twoPoint2El.classList.toggle("hidden")
   

},550)










