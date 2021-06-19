var speed=400;


var delay_time=10000/(Math.floor(arraySize/10)*speed);        //Decrease numerator to increase speed.
var c_delay=0;//This is updated on every div change so that visualization is visible.

function div_update(cont,height,color)
{
    window.setTimeout(function(){
        cont.style=" margin:0% " + margin_size + "%; width:" + (100/arraySize-(2*margin_size)) + "%; height:" + height + "%; background-color:" + color + ";"
        + "border-top-left-radius: 35px; border-top-right-radius: 35px; border-bottom-left-radius: 35px; border-bottom-right-radius: 35px;";
    },c_delay+=delay_time);

    //setTimeout() calls a function or evaluates an expression after a specified number of milliseconds.
}
