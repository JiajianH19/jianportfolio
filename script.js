

let programBtn = document.querySelector(".programbtn");
programBtn.addEventListener("click", directProgramPg);

//Programming Question button actions
function overProgramBtn(){
    let programPopup = document.getElementById("programPopup");
    programPopup.classList.toggle("show");
}

function outProgramBtn(){
    let programPopup = document.getElementById("programPopup");
    programPopup.classList.toggle("hide");
}

function directProgramPg(){
    location.href = "programming.html";
}

//End of Programming Question button actions


//DSA button actions
function overDsaBtn(){
    let dsaPopup = document.getElementById("dsaPopup");
    dsaPopup.classList.toggle("show");
}

function outDSABtn(){
    let dsaPopup = document.getElementById("dsaPopup");
    dsaPopup.classList.toggle("hide");
}

function directDsaPg(){
    location.href = "dsa.html";
}


let dsaBtn = document.querySelector(".dsabtn");
dsaBtn.addEventListener("click", directDsaPg);

//End of DSA button actions


//Servlet JSP button actions
function overSrvJSPBtn(){
    let srvJSPPopup = document.getElementById("SrvJSPPopup");
    srvJSPPopup.classList.toggle("show");
}

function outSrvJSPBtn(){
    let srvJSPPopup = document.getElementById("SrvJSPPopup");
    srvJSPPopup.classList.toggle("hide");
}

function directSrvJSPPg(){
    location.href = "srvjsp.html";
}


let srvJspBtn = document.querySelector(".SrvJSPbtn");
srvJspBtn.addEventListener("click", directSrvJSPPg);
//End of Servlet JSP button actions



/*achivements.html*/
// var slideIndex = 1;
// showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// End of achivements.html





