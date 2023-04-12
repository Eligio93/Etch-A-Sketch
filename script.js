let flexBasis="";
let color="#00FF00";

const button=document.getElementById("btndimension").addEventListener("click",function(e){
    const dimension=document.querySelector('#gridsize').value;
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
        div.style.flexShrink=0;        
        container.appendChild(div);
     }
     //applcia la funzione di mouseover e cambia colore
     //il colore inizialmente è quello dichiarato all'inziio dello script
    const over = document.querySelectorAll(".box");
    over.forEach(box => {
    box.addEventListener('mouseover', function() {
    this.style.backgroundColor = color;
  });
});

   
 });
 //Seleziona il colore desiderato
 const btncolor=document.getElementById("btncolor").addEventListener("click",function(e){
    color=document.getElementById("colorpicker").value;
   
  
    
});


