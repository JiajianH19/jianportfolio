//Variables (BE CAREFUL THESE MIGHT BE USED IN OTHER JS FILES TOO)
// var inp_as=document.getElementById('a_size')
// var array_size=inp_as.value;
const arraySize = 50;

// var inp_gen=document.getElementById("a_generate");
// var inp_aspeed=document.getElementById("a_speed");
const sortSpeed = 4;
////var array_speed=document.getElementById('a_speed').value;

var sortingAlgos = document.querySelectorAll(".algos button");

var div_sizes=[];
var divs=[];
var margin_size;

var cont=document.getElementById("array_container");    //
//cont.style="flex-direction:row";

//Array generation and updation.

// inp_gen.addEventListener("click",generate_array);
// inp_as.addEventListener("input",update_array_size);

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

// function update_array_size()
// {
//     array_size=inp_as.value;
//     generate_array();
// }

window.onload=generate_array();

//Running the appropriate algorithm.
for(var i=0;i<sortingAlgos.length;i++)
{
    sortingAlgos[i].addEventListener("click",runalgo);
}

// function disable_buttons()
// {
//     for(var i=0;i<butts_algos.length;i++)
//     {
//         sortingAlgos[i].classList=[];
//         sortingAlgos[i].classList.add("butt_locked");

//         sortingAlgos[i].disabled=true;
//         inp_as.disabled=true;
//         inp_gen.disabled=true;
//         inp_aspeed.disabled=true;
//     }
// }

function runalgo()
{
    // disable_buttons();

    this.classList.add("butt_selected");
    switch(this.innerHTML)
    {
        case "Bubble":Bubble();
                        break;
        case "Selection":Selection_sort();
                        break;
        case "Insertion":Insertion();
                        break;
        case "Merge":Merge();
                        break;
        case "Quick":Quick();
                        break;
    }
}