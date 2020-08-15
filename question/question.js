var plus = document.getElementsByClassName(".fa-plus");
var minus = document.getElementsByClassName(".fa-minus");
var answer = document.getElementsByClassName(".answer");

for(var i=0 ; i < plus.length ;i++){
    plus[i].addEventListener("click",()=>{
        answer[i].style.display = "flex";
    })
}

for (var i = 0; i < minus.length; i++) {
    minus[i].addEventListener("click", () => {
        answer[i].style.display = "none";
    })
}