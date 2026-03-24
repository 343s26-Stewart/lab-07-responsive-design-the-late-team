document.addEventListener("DOMContentLoaded", function () {
    const darkBtn = document.getElementById("dark");
    const lightBtn = document.getElementById("light");
    const defaultBtn = document.getElementById("default");

    darkBtn.addEventListener("click", function(e) {
        e.preventDefault();
        document.body.classList.remove("force-light");
        document.body.classList.add("force-dark");
    });
    lightBtn.addEventListener("click", function(e) {
        e.preventDefault();
        document.body.classList.remove("force-dark");
        document.body.classList.add("force-light");
    });
    defaultBtn.addEventListener("click", function(e) {
        e.preventDefault();
        document.body.classList.remove("force-dark");
        document.body.classList.remove("force-light");
    });
});