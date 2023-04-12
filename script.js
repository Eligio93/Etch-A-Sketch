let flexBasis="";
let color="#00FF00";
function randomColor() {
    const color = Math.floor(Math.random() * 16777215).toString(16);
    return "#" + "0".repeat(6 - color.length) + color;
  }
  function resetGrid(){
    const dimension=document.querySelector('#gridsize').value;
    const container =document.getElementById("container");
    flexBasis=((500/dimension)-2)+"px";
    while(container.firstChild){
        container.removeChild(container.firstChild);
        
    }
    for(let i=0;i<(dimension*dimension);i++){
        const div=document.createElement("div");
        div.classList.add("box");
        div.style.flexBasis=flexBasis;
        div.style.flexGrow=1;
        div.style.flexShrink=0;  
        div.style.backgroundColor="blue";      
        container.appendChild(div);
     }
     const over = document.querySelectorAll(".box");
    over.forEach(box => {
    box.addEventListener('mouseover', function() {
    this.style.backgroundColor = color;
  });
});

  }

const button=document.getElementById("btndimension").addEventListener("click",function(e){
    resetGrid();

 });
 //Seleziona il colore desiderato ed è stata riapplicata per tutti i div in quanto non si poteva tornare
 //da unicorn a selezionare il colore
 const btncolor=document.getElementById("btncolor").addEventListener("click",function(e){
    color=document.getElementById("colorpicker").value;
    document.querySelectorAll(".box").forEach(function(div){
        div.addEventListener("mouseover",function(){
            this.style.backgroundColor=color;
        })
    })
    });
//implementata funzione per assegnare colori random ai diversi div
    const btnUnicorn=document.getElementById("unicorn").addEventListener("click", function(el){
        document.querySelectorAll(".box").forEach(function(unidiv){
            unidiv.addEventListener("mouseover",function(){
                this.style.backgroundColor=randomColor();
            })
        })
    });
    const clear=document.getElementById("clear").addEventListener("click", function(){
        resetGrid();
        });
    


