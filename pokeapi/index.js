const link = `https://pokeapi.co/api/v2/pokemon/`;

const buscadorPokemon = document.getElementById('texto');
const boton = document.getElementById('buscarPokemon');
const contenedor = document.getElementById('contenedor');


boton.addEventListener('click', agregarPokemon);
async function agregarPokemon(){
    if(!buscadorPokemon.value.trim()){
        alert("Agregue un valor valido al input");
        return;
    }else{
        try{ 
            const respuesta = await fetch(`${link}${buscadorPokemon.value.toLocaleLowerCase()}`);
            const infoPokemon = await respuesta.json();

            const arreglo = [];
            const resultado = [];

            for(let datosPokemon in infoPokemon){
                resultado.push([datosPokemon, infoPokemon[datosPokemon]]);
            }

            const imgPkmn = document.createElement('img');
            imgPkmn.src = resultado[14][1].front_default;

            const nombrePkmn = document.createElement('h2');
            nombrePkmn.innerText = `Name: ${resultado[10][1]} - ID: ${resultado[6][1]}`;

            const tipoPkmn = document.createElement('p');
            tipoPkmn.innerText = `Type: ${resultado[16][1][0].type.name}`;
            
            const hpPkmn = document.createElement('p');
            hpPkmn.innerText = `HP: ${resultado[15][1][0].base_stat}`;
            hpPkmn.classList.add('pokemonStats');

            const atkPkmn = document.createElement('p');
            atkPkmn.innerText = `Attack: ${resultado[15][1][1].base_stat}`;
            atkPkmn.classList.add('pokemonStats');

            const defPkmn = document.createElement('p');
            defPkmn.innerText = `Defense: ${resultado[15][1][2].base_stat}`;
            defPkmn.classList.add('pokemonStats');

            const spAtkPkmn = document.createElement('p');
            spAtkPkmn.innerText = `Special Attack: ${resultado[15][1][3].base_stat}`;
            spAtkPkmn.classList.add('pokemonStats');

            const estadisticas = document.createElement('div');
            estadisticas.append(hpPkmn, atkPkmn, defPkmn, spAtkPkmn);
            estadisticas.classList.add('pokemonStatsContainer');

            const container= document.createElement('div');
            container.append(imgPkmn, nombrePkmn, tipoPkmn, estadisticas);
            container.classList.add('container');
            arreglo.push(container);
            contenedor.append(...arreglo);
        }catch(error){
            alert("Este pokemon no existe, vuelva a intentarlo")
        }
    }
    buscadorPokemon.value = "";

}

