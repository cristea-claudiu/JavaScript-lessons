
const car1={model:'Mercedes',
model:'S550',
year:2022,
price:200000,
engine:'V8',
body:'Sedan',
fuel:'Diesel',
gearbox:'Automatic',
color:{
    interior:'black',
    exterrior:'red'},
tires:{
    size:15,
    front:'Pirelli',
    rear:'Pirelli'},
    increasePrice:function(){
      return this.price+=5000;
    }

}    

// console.log(car1.price)
// console.log(car1.increasePrice())
// console.log(car1);
// console.log(this);

//when "this" keyword is used in eventListener normal function
// it acts the same like e.target
//which means it refer the location of where the event occured
document.querySelector("#test1").addEventListener("click",function(e){
    alert("Hello")
    console.log(this);
    console.log(e.target);
})

//when "this" keyword is used in eventListener arrow function 
//it reffers to window obj
document.querySelector("#test2").addEventListener("click",(e)=>{
    alert("Hello")
    console.log(this);
    console.log(e.target);
})