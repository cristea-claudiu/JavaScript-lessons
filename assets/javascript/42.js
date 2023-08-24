const Hello=()=>alert("Hello There")
document.querySelector("#goodBye").onclick= Hello;
document.querySelector("#goodHello").onclick=()=>{alert(" I don't like this")}
document.querySelector("#badHello").addEventListener("click", Hello);
document.querySelector("#he5").addEventListener("click", (e)=>{alert(" I like this")})