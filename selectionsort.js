function Selection_sort()
{
    c_delay=0;

    for(var i=0;i<arraySize-1;i++)
    {
        div_update(divs[i],div_sizes[i],"#6e45e1");//Color update

        index_min=i;

        for(var j=i+1;j<arraySize;j++)
        {
            div_update(divs[j],div_sizes[j],"#f1a7f1");//Color update

            if(div_sizes[j]<div_sizes[index_min])
            {
                if(index_min!=i)
                {
                    div_update(divs[index_min],div_sizes[index_min],"#89d4cf");//Color update
                }
                index_min=j;
                div_update(divs[index_min],div_sizes[index_min],"#6e45e1");//Color update
            }
            else
            {
                div_update(divs[j],div_sizes[j],"#89d4cf");//Color update
            }
        }
        
        if(index_min!=i)
        {
            var temp=div_sizes[index_min];
            div_sizes[index_min]=div_sizes[i];
            div_sizes[i]=temp;

            div_update(divs[index_min],div_sizes[index_min],"#6e45e1");//Height update
            div_update(divs[i],div_sizes[i],"#6e45e1");//Height update
            div_update(divs[index_min],div_sizes[index_min],"#89d4cf");//Color update
        }
        div_update(divs[i],div_sizes[i],"#b621fe");//Color update
    }
    div_update(divs[i],div_sizes[i],"#b621fe");//Color update

}