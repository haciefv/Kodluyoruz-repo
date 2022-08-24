let name = prompt("Enter your name")
function showTime(){
    
    document.querySelector("#myName").innerHTML=name
    let currentdate = new Date()
    let time = + currentdate.getHours() + ":"  
    + currentdate.getMinutes() + ":" 
    + currentdate.getSeconds();
    console.log(time)
    document.querySelector("#myClock").innerHTML=time}
setInterval(showTime,1000)