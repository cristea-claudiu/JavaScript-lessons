const txtScore1=document.querySelector("#txtScore1");
const txtScore2=document.querySelector("#txtScore2");
const txtScore3=document.querySelector("#txtScore3");
const btnAvg=document.querySelector("#btnAvg");
const resultTxt=document.querySelector("#resultTxt");
const result=document.querySelector("#result");
//function to calculate average of three scores
btnAvg.addEventListener("click", ()=>{
    const score1=txtScore1.value;
    const score2=txtScore2.value;
    const score3=txtScore3.value;
    

    let result=calculateAverage(score1,score2,score3).toFixed(2);
    
    if(!isScoreValid(score1)||!isScoreValid(score2)||!isScoreValid(score3)){
        alert("Please enter a valid score");
        txtScore1.focus();
        return
    }
   
    console.log(result);
    let letter=AvgToLetter(result)
    resultTxt.innerHTML=`The average of ${score1}, ${score2} and ${score3} is ${result}(${letter})`
})
const calculateAverage =(num1 , num2 , num3)=>{
    return (Number(num1)+Number(num2)+Number(num3))/3;
}
const isScoreValid = (score)=>{
    return score && !isNaN(score) && score >= 0 && score <101
}
const AvgToLetter =(score)=>{
    return score>=90 ? "A" : score>=80 ? "B" : score>=70 ? "C" : score>=60 ? "D" : "F"

}
