function UpdateClock()
{
    var d = new window.Date();
    var Day=d.getDay();
    var months=d.getMonth();
    var Date = d.getDate();
    var year=d.getFullYear();
    var hours=d.getHours();
    var minutes=d.getMinutes();
    var seconds = d.getSeconds();
    var period="AM";
    if(hours>=12)
    {
        period="PM";
    }
    if(hours==0)
    {
        hours=12;
    }
    if(hours>12)
    {
        hours=hours-12;
    }
    //hours = (hours < 10) ? "0" + hours : hours;
    //minutes = (minutes < 10) ? "0" + minutes : minutes;
    //seconds = (seconds < 10) ? "0" + seconds : seconds;
    Number.prototype.pad= function(digits){
        for(var n = this.toString(); n.length < digits; n = 0 + n);
        return n;
      }
    var months = ["January", "February", "March", "April", "May", "June", "July", "Augest", "September", "October", "November", "December"];
    var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var idtime=["Day","months","Date","year","hours","minutes","seconds","period"];
    var timevalue=[week[Day], months[months], Date.pad(2), year, hours.pad(2), minutes.pad(2), seconds.pad(2), period];
    for(var i=0;i<idtime.length;i++)
    {
        document.getElementById(idtime[i]).firstChild.nodeValue=timevalue[i];
    } 
}
function initClock(){
    UpdateClock();
    window.setInterval("UpdateClock()", 1);
  }