var slideIndex = 1;
var slideIndexGallery = 1;
showDivs(slideIndex);
showDivsForGallery(slideIndexGallery)
function plusDivs(n) {
    showDivs(slideIndex += n);
}

function plusDivsGallery(n) {
    showDivsForGallery(slideIndexGallery += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}

function showDivsForGallery(n) {
    var i;
    var x = document.getElementsByClassName("mySlidesGallery");
    if (n > x.length) {slideIndexGallery = 1}
    if (n < 1) {slideIndexGallery = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndexGallery-1].style.display = "block";
}

/*code for accordion control*/
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}