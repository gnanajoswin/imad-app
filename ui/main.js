var button=document.getElementById('counter');

button.onclick=function()
{
    //request
     var request=new XMLhttpRequest();
     //response
     request.onreadystatechange=function(){
       if(request.readystate===XMLhttpRequest.DONE)  {
           if(request.status===200)
           {
               var counter=request.responseText;
               var span=document.getElementById('count');
              span.innerHTML=counter.toString();
    
           }
       }
     };
request.open('GET','http://pbjoswin97.imad.hasura-app.io/counter',true);
request.send(null);
    
};