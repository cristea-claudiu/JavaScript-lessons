const sortStringAsc = (arr)=>{
    return arr.sort ((a, b)=>a.localeCompare(b))
}
const sortStringDesc = (arr)=>{
    return arr.sort ((a, b)=>b.localeCompare(a))
}
const sortNumAsc=(arr)=>{
    return arr.sort((a,b)=>a-b);
}
const sortNumDesc=(arr)=>{
    return arr.sort((a,b)=>b-a);
}
const sortNumRandom=(arr)=>{
    return arr.sort(()=>Math.random() - 0.5)
}







export default sortNumRandom
export  {sortStringAsc,sortStringDesc,sortNumAsc,sortNumDesc}