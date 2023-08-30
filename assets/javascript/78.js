
const  welcomeMessage =document.getElementById("welcomeMessage")
const  lblCounter =document.getElementById("lblCounter")
const  txtName =document.getElementById("txtName")
const  btnSave =document.getElementById("btnSave")



const handleCounter=()=>{
    let counterValue=localStorage.getItem('counter');
     //counterValue = counterValue ? parseInt(counterValue) : 0 //ternary
          //  counterValue = counterValue ?? 0 //nullish
    counterValue ??=0 //short version nullish

     counterValue++;
    localStorage.setItem('counter',counterValue);
    lblCounter.innerHTML=`<b>You have visited the site ${counterValue} times</b>`
}
handleCounter();
handleMessage=()=>{
    const name =localStorage.getItem("name")
    if(name){
    welcomeMessage.innerHTML=`Welcome ${name}`
    }else{
        welcomeMessage.innerHTML=`Welcome, please enter your name`
    }
}
handleMessage()

btnSave.addEventListener("click",()=>{
    localStorage.setItem("name",txtName.value)
});
