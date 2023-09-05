


var a = document.querySelectorAll(".btn");
for (let i = 0; i < a.length; i++) {
    a[i].addEventListener('click', function () {
        // Thêm lớp haha cho nút được nhấp
        this.classList.add("active");
        if (a[i].className == "btn active") {
            a[i].style.setProperty("color", "#3a88f5");
            a[i].style.borderBottom = "medium solid #3a88f5";
        }
        // Tìm nút khác có lớp active và xóa lớp đó

        var b = document.querySelector(".btn.active:not(:nth-child(" + (i + 1) + "))");
        if (b) {
            b.classList.remove("active");
            b.style.removeProperty("color");
            b.style.removeProperty("border-bottom");
        }
    })
}

