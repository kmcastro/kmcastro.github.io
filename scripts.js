
function show(category){
    document.querySelectorAll(".detail").forEach(function(detail){
        detail.style.display = "none";
    });
    console.log(category);
    document.getElementById(category).style.display = "block";

    if (document.getElementById("nav").style.display == "none") {
        document.getElementById("nav").style.display = "flex";
    }

    window.scrollTo(0, 0);
}