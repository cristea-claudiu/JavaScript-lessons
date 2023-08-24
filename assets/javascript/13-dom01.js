//document.querySelector("") select the first match
const headerElement=document.querySelector("h1")
console.log(headerElement);
const menuElLi4=document.querySelector("ul.menu li:nth-child(4)")
console.log(menuElLi4);
const aboutUs=document.querySelector("ul.menu li:nth-child(2)")
aboutUs.innerText="<b>About us</b>";
aboutUs.innerHTML="<b>About us</b>";
const contactUs=document.querySelector("ul.menu li:nth-child(3)").innerText
console.log(contactUs);
const service=document.querySelector("ul.menu li:last-child")
service.innerText +=` 
   ${contactUs}`
                        console.log(service.innerHTML);


headerElement.innerText="Hey JS. It is me Mario"



//document.querySelectorAll("") select the all match
const listElement=document.querySelectorAll("li")
console.log(listElement);