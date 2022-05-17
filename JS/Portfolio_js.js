
//Slideshow
var currentSlide = 1;

function hideSlide(n) {
        var slideName = "img" + n.toString();
        document.getElementById(slideName).style.display = "none";
}

function showSlide(n) {
        var slideName = "img" + n.toString();
        document.getElementById(slideName).style.display = "block";
}

function ActivateDot(n) {
        document.getElementById("dot" + n.toString()).className += " activated";
}

function DeactivateDot(n) {
        document.getElementById("dot" + n.toString()).className = document.getElementById("dot" + n.toString()).className.replace(" activated" ,"");
}

function changeSlide(n) {
        hideSlide(currentSlide);
        DeactivateDot(currentSlide);
        currentSlide += n;
        if (currentSlide > 6) {
                currentSlide = 1;
        }
        
        if (currentSlide < 1) {
                currentSlide = 6;
        }
        showSlide(currentSlide);
        ActivateDot(currentSlide);

}


for (i = 1; i < 7; i++) {
        hideSlide(i);
}
showSlide(currentSlide);
ActivateDot(currentSlide);
//End Slideshow

//Contact Form
var hidden = true;
function showContact() {
        if (hidden) {
                document.getElementsByClassName("hiding")[0].className = document.getElementsByClassName("hiding")[0].className.replace("hiding", "visible");
                hidden = false;
                document.getElementsByClassName("visible")[0].style.left = "50%";
                        
        }      
}

function hideContact() {
        if (!hidden) {
                document.getElementsByClassName("visible")[0].className = document.getElementsByClassName("visible")[0].className.replace("visible", "hiding");
                document.getElementsByClassName("hiding")[0].style.left = "100%";
                hidden = true;
        }
}

document.addEventListener("click", function(event){
        if (!event.target.closest(".form") && !event.target.closest("#contactBttn") && !event.target.closest("#contactStr") && !event.target.closest(".navContact")
        ){
            hideContact();
        }}, false )

if ( window.history.replaceState ) {
        window.history.replaceState( null, null, window.location.href );
}