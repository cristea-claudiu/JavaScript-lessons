const numbers =[34, -23, 65, 35, 564, -25, 9]

numbers.forEach((num)=>{
//    console.log(num);
    if ( num >0){
        console.log("positive")
    }
    else{
       console.log("negative")
    }
})

const animals = ['camel', 'dog', 'cat', 'mouse','deer','elephant' ]
// for in return indexis
for(let i in animals){
    console.log(i, );
}
// for of return values

for(let i of animals){
    console.log(i);
   }
   // it is working with string too
const str= "Hello World"
    for(let ch of str){
        console.log(ch)
    }

    const fNames = ["Sauron" ,"Frodo", "Galadriel", "Aragorn", "Gandalf"];

    const lNames = ["Mordor" ,"Shire", "Valinor", "Rivendell", "Valinor","Rivendell"];

    const joinNames = (arr1, arr2)=>{

        let newArr = [];
        for(let i in  arr1){
            newArr[i] = `${arr1[i]} ${arr2[i]}`
        }
        return newArr;

    }
   const result= joinNames(fNames,lNames);
   console.log(result);


   //  .entries() give two dimensional array
   //[0 'Sauron'],[1 'Frodo'],[2 'Galadriel'],[3 'Aragorn'],[4 'Gandalf']
      for (let [n, fName] of fNames.entries()){
    console.log(n,fName);
    
   }
   


