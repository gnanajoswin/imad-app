var button=document.grtElementById('counter');
var counter=0;
button.onclick=function()
{
    counter=counter+1;
    var span=document.grtElementById('count');
    span.innerHTML=count.toString();
    
};