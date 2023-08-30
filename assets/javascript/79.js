


const bsOffCanvas= new bootstrap.Offcanvas('#offPrivacy');
const isPrivacyPolicyAccepted=localStorage.getItem("privacy-policy");
isPrivacyPolicyAccepted ?? bsOffCanvas.show();

document.getElementById("btnAcceptPrivacy").addEventListener("click", ()=>{
    localStorage.setItem("privacy-policy", true);
    bsOffCanvas.hide()
})

