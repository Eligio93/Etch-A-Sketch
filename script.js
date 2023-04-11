let dimension=0;

const button=document.querySelector("button").addEventListener("click",function(e){
    dimension=document.querySelector('#gridsize').value;
    console.log(dimension);
  });