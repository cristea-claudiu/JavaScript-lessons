const h1El=document.querySelector("#header")
console.log(h1El);
h1El.classList.add("header")
const pEl = document.querySelector('#ex');
console.log(pEl);
pEl.classList.add("background")
pEl.classList.remove("st")
console.log(pEl);

const txtEl=document.querySelector("#txtName").value

// welcomeEl.innerHTML=`Welcome <strong><em> ${txtEl}</em> </strong>`

function sayHello(){
    const txtEl2=document.querySelector("#txtName2")
    const welcomeEl=document.querySelector("#welcome")
    welcomeEl.innerHTML=`Hello ${txtEl2.value}`
}



