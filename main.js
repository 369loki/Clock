function brocode(){
   var time = new Date();
   var hour = time.getHours();
   var min = time.getMinutes();
   var sec = time.getSeconds();
 if(hour>=12){
     document.getElementById("mode").innerHTML = "PM";
        hour=hour-12;
 }
 else if(hour<12){
    document.getElementById("mode").innerHTML = "AM";
}
document.getElementById("hour").innerHTML = hour;
document.getElementById("min").innerHTML = min;
document.getElementById("sec").innerHTML = sec;
hour= Number(hour);
}
setInterval(brocode,100);
