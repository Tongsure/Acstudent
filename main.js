const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");
const ampmEl = document.getElementById("ampm");
function Update(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm ="AM"
    if(h>12){
        h-=12;
        ampm = "PM";
    }
    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
    setTimeout(() => {
        Update();
    } ,1000);
}
Update();