function Insertion()
{
    c_delay=0;

    for(var j=0;j<arraySize;j++)
    {
        div_update(divs[j],div_sizes[j],"#f1a7f1");//Color update

        var key= div_sizes[j];
        var i=j-1;
        while(i>=0 && div_sizes[i]>key)
        {
            div_update(divs[i],div_sizes[i],"#6e45e1");//Color update
            div_update(divs[i+1],div_sizes[i+1],"#6e45e1");//Color update

            div_sizes[i+1]=div_sizes[i];

            div_update(divs[i],div_sizes[i],"#6e45e1");//Height update
            div_update(divs[i+1],div_sizes[i+1],"#6e45e1");//Height update
    
            div_update(divs[i],div_sizes[i],"#89d4cf");//Color update
            if(i==(j-1))
            {
                div_update(divs[i+1],div_sizes[i+1],"#f1a7f1");//Color update
            }
            else
            {
                div_update(divs[i+1],div_sizes[i+1],"#89d4cf");//Color update
            }
            i-=1;
        }
        div_sizes[i+1]=key;

        for(var t=0;t<j;t++)
        {
            div_update(divs[t],div_sizes[t],"#b621fe");//Color update
        }
    }
    div_update(divs[j-1],div_sizes[j-1],"#b621fe");//Color update

    enable_buttons();
}