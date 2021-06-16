/*project.html*/

let bugreportingProject = document.querySelector(".bugreportingSystem");
bugreportingProject.addEventListener("mouseenter", showBugArrow);
bugreportingProject.addEventListener("mouseleave", hideBugArrow);

function showBugArrow(){
  var bugreportSystembg = document.getElementsByClassName("bugreportSystembg");
  bugreportSystembg[0].style.visibility = "visible";
  console.log("showing");
}

function hideBugArrow(){
  var bugreportSystembg = document.getElementsByClassName("bugreportSystembg");
  bugreportSystembg[0].style.visibility = "hidden";
}


let sortAnimation = document.querySelector(".sortingAnimation");
sortAnimation.addEventListener("mouseenter", showSortArrow);
sortAnimation.addEventListener("mouseleave", hideSortArrow);

function showSortArrow(){
  var sortAnimationbg = document.getElementsByClassName("sortAnimationbg");
  sortAnimationbg[0].style.visibility = "visible";
  console.log("showing");
}

function hideSortArrow(){
  var sortAnimationbg = document.getElementsByClassName("sortAnimationbg");
  sortAnimationbg[0].style.visibility = "hidden";
}
