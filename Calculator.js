var i = document.querySelector("#dis")
i.value = "";
var t1 = document.querySelector("#t1")
t1.addEventListener("click", function(e){
    if(e.target.classList.contains("btn")){
        if(e.target.innerText === "Ac"){
            i.value = "";
        }
        else if(e.target.innerText == "="){
            i.value = eval(i.value);
        }
        else{
            i.value=  i.value + e.target.innerText;
        }
    }
});
