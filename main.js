function brocode(){
   var neram = new Date();
   var hour = neram.getHours();
   var min = neram.getMinutes();
   var sec = neram.getSeconds();

 document.getElementById("min").innerHTML = min;
 document.getElementById("sec").innerHTML = sec;
 hour= Number(hour);

 if(hour>=12){
   
    hour= Number(hour);
     hour = hour-12;
     document.getElementById("hour").innerHTML = hour;
     document.getElementById("mode").innerHTML = "PM";
 }
 else if(hour<=12){
  
    document.getElementById("mode").innerHTML = "AM";
}
}
setInterval(brocode,10);