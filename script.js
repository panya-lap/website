const body = document.querySelector("body");
const nav = document.querySelector("nav");
const siderbarOpen = document.querySelector(".siderbarOpen");
const siderbarClose = document.querySelector(".siderbarClose");
const darkLightToggle = document.querySelector(".dark-light");
const searchToggle = document.querySelector(".searchToggle");

let getMode = localStorage.getItem("mode");
if(getMode && getMode === "dark-mode"){
   body.classList.toggle("dark"); 
}

// เปิดเมนู
siderbarOpen.addEventListener("click", () => {
    nav.classList.add("active");
});

// ปิดเมนู
siderbarClose.addEventListener("click", () => {
    nav.classList.remove("active");

});
// สลับโหมดกลางวัน/กลางคืน

darkLightToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    darkLightToggle.classList.toggle("active");
// บันทึกสถานะโหมดลงใน localStorage
    if (!body.classList.contains("dark")) {
        localStorage.setItem("mode", "light-moede");}
    else {
        localStorage.setItem("mode", "dark-mode");
    }
});

// คลิกที่ไอคอนค้นหา
searchToggle.addEventListener("click", () => {
    searchToggle.classList.toggle("active");
});

// คลิกที่ body เพื่อปิดเมนู (ถ้าเมนูเปิดอยู่)
body.addEventListener("click", e => {
    let clickedElm = e.target;
    if (
        nav.classList.contains("active") &&
        !clickedElm.classList.contains("siderbarOpen") &&
        !clickedElm.classList.contains("menu") &&
        !clickedElm.closest(".menu")
    ) {
        nav.classList.remove("active");
    }
});


    

