function MenuComponent() {
    const menu = document.getElementById("menu_component")

    const template = `
    <div class="box_menu_container">
        <div class="menu_body">
            <a href="./index.html" id="a_home">
                <i class="fa-regular fa-house-heart"></i>
                <span>Dashboard</span>
            </a>

            <a href="./quanLyGiangVienPages.html" id="a_qlgv">
                <i class="fa-solid fa-business-time"></i>
                <span>Management</span>
            </a>

            <a href="./student.html" id="a_st">
                <i class="fa-duotone fa-star"></i>
                <span>Reward / Discipline</span>
            </a>

            <a href="./thongKe.html" id="a_tk">
                <i class="fa-duotone fa-calendar-days"></i>
                <span>Calender</span>
            </a>

        </div>
    </div>
    
    `;
    menu.insertAdjacentHTML("beforeend", template);

    var filePath = window.location.pathname;

    var fileName = filePath.split('/').pop();

    if (fileName === "index.html") {
        document.getElementById("a_home").style.borderLeft = "3px solid #2180F8";
        document.getElementById("a_home").style.background = "#eaeaea"
    } else if (fileName === "quanLyGiangVienPages.html") {
        document.getElementById("a_qlgv").style.borderLeft = "3px solid #2180F8";
        document.getElementById("a_qlgv").style.background = "#eaeaea"
    } else if (fileName === "student.html") {
        document.getElementById("a_st").style.borderLeft = "3px solid #2180F8";
        document.getElementById("a_st").style.background = "#eaeaea"
    } else if (fileName === "thongKe.html") {
        document.getElementById("a_tk").style.borderLeft = "3px solid #2180F8";
        document.getElementById("a_tk").style.background = "#eaeaea"
    }
}

MenuComponent();