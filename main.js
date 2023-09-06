
var buttons = document.getElementsByClassName("btn");
console.log(buttons)

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        var current = document.getElementsByClassName(" active");
        if (current.length > 0) {
            current[0].classList.remove('active');
        }
        this.className += " active";
    });
}