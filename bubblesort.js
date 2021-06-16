function Bubble()
{
    c_delay=0;

    for(var i=0;i<arraySize-1;i++)
    {
        for(var j=0;j<arraySize-i-1;j++)
        {
            div_update(divs[j],div_sizes[j],"#f1a7f1");//Color update

            if(div_sizes[j]>div_sizes[j+1])
            {
                div_update(divs[j],div_sizes[j], "#6e45e1");//Color update
                div_update(divs[j+1],div_sizes[j+1], "#6e45e1");//Color update

                var temp=div_sizes[j];
                div_sizes[j]=div_sizes[j+1];
                div_sizes[j+1]=temp;

                div_update(divs[j],div_sizes[j], "#6e45e1");//Height update
                div_update(divs[j+1],div_sizes[j+1], "#6e45e1");//Height update
            }
            div_update(divs[j],div_sizes[j], "#89d4cf");//Color updat
        }
        div_update(divs[j],div_sizes[j], "#b621fe");//Color update
    }
    div_update(divs[0],div_sizes[0], "#b621fe");//Color update

    enable_buttons();
}