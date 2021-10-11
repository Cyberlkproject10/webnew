document.getElementById("en").style.display="none"
document.getElementById("trans-sin").style.display="none"
document.getElementById("trans").onclick=function(){
    document.getElementById("en").style.display=""
    document.getElementById("sin").style.display="none"
    document.getElementById("trans").style.display="none"
    document.getElementById("trans-sin").style.display=""
}

document.getElementById("trans-sin").onclick=function(){
    document.getElementById("en").style.display="none"
    document.getElementById("sin").style.display=""
    document.getElementById("trans").style.display=""
    document.getElementById("trans-sin").style.display="none"
}


/*video*/

document.getElementById("main-vid").style.display="none"
document.getElementById("wv").onclick=function(){
    document.getElementById("main-vid").style.display=""
    document.getElementById("second-img").style.display="none"
    document.getElementById("wv").onclick=function(){
        alert("Already watching Thank you!")
    }
}
document.getElementById("w-i-t").onclick=function(){
    window.location.href = "#wh";
}
