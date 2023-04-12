let flexBasis="";

const button=document.querySelector("button").addEventListener("click",function(e){
    dimension=document.querySelector('#gridsize').value;
    const container =document.getElementById("container");
    //set the dimension of the div removing the border
    flexBasis=((500/dimension)-2)+"px";
    //every click remove the previous grid
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    //loop that creates the div and append them to the container
    for(let i=0;i<(dimension*dimension);i++){
        const div=document.createElement("div");
        div.classList.add("box");
        div.style.flexBasis=flexBasis;
        div.style.flexGrow=1;
        div.style.flexShrink=1;        
        container.appendChild(div);
    }

  });