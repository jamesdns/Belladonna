document.addEventListener("DOMContentLoaded", function(event) { 
    var imagesIndex = 0;
    slideShow();

    function slideShow() {
    var i;
    var images = document.getElementsByClassName("currentImage");
    for (i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }
    imagesIndex++;
    if (imagesIndex > images.length) {imagesIndex = 1}
    images[imagesIndex-1].style.display = "block";
    setTimeout(slideShow, 10000); // Change image every 10 seconds
    }
});