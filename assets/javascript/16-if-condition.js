function setPrice(){
    let txtPrice = document.querySelector("#price");
    let result=txtPrice.value;
    if(txtPrice.value>500){
    result*=0.9
    }else{
        result*=0.95
    }
    document.querySelector("#result").innerText = `The price is: ${result}`
}

let x = 10;
x=0; //false
x=null;
x = "false"; //string 
x=""; //false
x=" "; //space is a character which true
x = 1;
x = undefined;
x = false;
x = true;
x = Infinity; 
x = NaN; //false
x = {}; 
x = [];
x = "lkjkjl"
x = -0.98
x = {name :"blala"}
x = ["yellow", "blue"];

if(x){
    console.log("If block executed");


}