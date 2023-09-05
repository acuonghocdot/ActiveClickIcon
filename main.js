
function Value() {
    var a = document.querySelectorAll(".btn");
    for (let i = 0; i < a.length; i++) {
        a[i].addEventListener('click', function () {
            a[i].style.setProperty("color", "#3a88f5");
            a[i].style.borderBottom = "medium solid #3a88f5";
        })
    }
}


function Color_Icon_Botton() {
    Value();

}

