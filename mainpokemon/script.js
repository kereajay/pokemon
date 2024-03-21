let pcontainer = document.getElementById('container');
let selectval = document.getElementById('type');
let typesearc = document.getElementById('TypeSearch');
//     console.log(selectval.value);
// })
let searchval = document.getElementById('search');
let reset=document.getElementById('reset');
// console.log(searchval.value);


let colors = {
    grass: "rgb(153, 255, 102)",
    fire: "	rgb(255, 140, 102)",
    water: "#4d90ff",
    bug: "rgb(0, 153, 0)",
    normal: "rgb(179, 179, 179)",
    poison: "rgb(213, 128, 255)",
    electric: "rgb(255, 255, 51)",
    ground: "rgb(255, 255, 51)",
    fairy: "	rgb(255, 204, 230)",
    fighting: "rgb(230, 92, 0)",
    psychic: "rgb(255, 102, 217)",
    rock: "rgb(136, 136, 68)",
    ghost: "rgb(191, 0, 255)",
    ice: "rgb(102, 179, 255",
    dragon: "rgb(255, 204, 0)",

}
function pokemondispaly(det) {
    console.log(det);
    // console.log(det.sprites.front_default);
    // console.log(det.name);
    // console.log(det.types[0].type.name);
    
    let card = document.createElement('div');
    card.classList.add("card");

    card.innerHTML = `
            
<div class="flip-card" style="font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;" >
          
    <div class="flip-card-inner" style="position: relative;width: 100%;height:100%;text-align: center;transition: transform 0.6s;transform-style: preserve-3d;box-shadow: 0px 0px 8px 0 rgba(0, 0, 0, 0.2);">
            <div class="flip-card-front" style="text-align: center;margin:auto; padding:15%;">
                     <div id="ids" style="background-color:white;border-radius:50%;">${det.id}</div>
                     <br>
                 <div id="img" style="text-align:center;margin:auto;">
                      <img src="${det.sprites.front_default}" alt="" " style="align-self:center;">
                 </div>
                <br>
      
                   <h1 style="font-size:x-large;font-weight:bolder;text-transform: capitalize;;">${det.name}</h1>
                     <br>
       
                  <p id="type" style=" font-size: 15px;text-transform: uppercase; background-color: aliceblue;width:70px;border-radius:5px;margin-left:25%;">${det.types[0].type.name}</p>
            </div>
        <div class="flip-card-back" style="position: relative;width: 100%;height: 100%;text-align: center;margin:auto; padding:15%;">
            <div id="ids" style="background-color:white;border-radius:50%;">${det.id}</div>
            <br>
            <div id="img" style="text-align:center;margin:auto;margin-left:26%;">
            <img src="${det.sprites.back_default}" alt="" " style="align-self:center;">
            </div>
                <br>
      
                   <h1 style="font-size:x-large;font-weight:bolder;text-transform: capitalize;;">${det.name}</h1>
                    <br>
                 <p>Abilities:</p>
                  <p id="typeinner">${det.abilities[0].ability.name}</p>
       
           
        </div>
            
           
    </div>
</div>
   
`
    card.style.backgroundColor = colors[det.types[0].type.name]
    
    return card;
   
}

typesearc.addEventListener('click', () => {
    // console.log(selectval.value)
   let allcardsfortype=document.querySelectorAll('.card');
   let cardsarrtype=Array.from(allcardsfortype);
   cardsarrtype.forEach(item2=>{
        let poktypename=item2.querySelector('#type').innerHTML;
      if(poktypename.startsWith(selectval.value)){
        item2.style.display='block';
    }
    else{
        item2.style.display='none';
        
      }
   })
})


searchval.addEventListener('input', () => {
    // console.log(searchval.value);
    let allcard = document.querySelectorAll(".card");
    let pokcards = Array.from(allcard);
    // console.log(pokcards[0]);
    pokcards.forEach(item => {
        // console.log(item)
        let pokname = item.children[0].children[0].children[0].children[4].innerHTML;
        // console.log(pokname);
        if (pokname.startsWith(searchval.value)) {

            item.style.display = 'block';
        }
        else {
            item.style.display = "none";

        }
    })
})





async function fetchpokimon(i) {
    let res1 = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    let data = await res1.json();
    // console.log(data.sprites);
    return data;

}
async function pkimon() {
    for (let i = 1; i < 151; i++) {
        let pokemondetails = await fetchpokimon(i);
        // console.log(pokemondetails);
        let displaypok = pokemondispaly(pokemondetails);
        pcontainer.appendChild(displaypok)
    }

}
pkimon();
