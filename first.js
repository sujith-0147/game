let a=document.getElementById("decrease");
let b=document.getElementById("increase");
let c=document.getElementById("reset");
let d=document.getElementById("count");

let co=0;
a.onclick=function(){
    co--;
    d.textContent=co;

}
b.onclick=function(){
    co++;
    d.textContent=co;

}
a
c.onclick=function(){
    co=0;
    d.textContent=co;

}