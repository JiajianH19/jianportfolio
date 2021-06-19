
const arraySize = 50;
const sortSpeed = 4;


var sortingAlgos = document.querySelectorAll(".algos button");

var div_sizes=[];
var divs=[];
var margin_size;

var cont=document.getElementById("array_container");    

var backBtn = document.getElementsByClassName("back");
backBtn[0].addEventListener("click", function(){
    location.href="project.html";
});


function generate_array()
{
    cont.innerHTML="";

    for(var i=0;i<arraySize;i++)
    {
        div_sizes[i]=Math.floor(Math.random() *  arraySize ) + 5;
        divs[i]=document.createElement("div");
        cont.appendChild(divs[i]);
        margin_size=0.2;
        divs[i].style=" margin:0% " + margin_size + "%; background-color:#f8ceec; width:" 
        + (100/arraySize-(2*margin_size)) + "%; height:" + (div_sizes[i] ) + "%;"
        + "border-top-left-radius: 35px; border-top-right-radius: 35px; border-bottom-left-radius: 35px; border-bottom-right-radius: 35px;" ;
    }
}


window.onload=generate_array();

//Running the appropriate algorithm.
for(var i=0;i<sortingAlgos.length;i++)
{
    sortingAlgos[i].addEventListener("click",runalgo);
}


function runalgo()
{

    this.classList.add("butt_selected");
    switch(this.innerHTML)
    {
        case "Bubble":Bubble();
                        break;
        case "Selection":Selection_sort();
                        break;
        case "Insertion":Insertion();
                        break;
    }
}