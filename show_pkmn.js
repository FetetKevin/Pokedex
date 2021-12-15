const url = new URL(window.location.href);
let res = url.searchParams.get('q');

fetch('https://pokeapi.co/api/v2/pokemon/'+res+'/')
    .then(r => r.json())
    .then(data => {
        
        function show_infos(){
            document.querySelector('.infos').innerHTML = `<h2>${data.forms[0].name[0].toUpperCase() + data.forms[0].name.slice(1)}</h2>`;
        }    
        show_infos();  

        function show_content(){
            let content = document.querySelector('.content');

            let modele = `<img class="sprite-perso" src="${data.sprites.front_default}" alt="pkmn" height="180">
                            <div class="content-btn">
                                <h3 class="type">Type: ${data.types.length == 2 ? ' <a class="'+data.types[0].type.name+'" href="./type.html?q='+data.types[0].type.name+'">'+data.types[0].type.name+'</a> <a class="'+data.types[1].type.name+'" href="./type.html?q='+data.types[1].type.name+'">'+data.types[1].type.name+'</a>' : '<a class="'+data.types[0].type.name+'" href="./type.html?q='+data.types[0].type.name+'">'+data.types[0].type.name+'</a>'}</h3>
                                <button id="show_shiny">Show shiny</button>
                            </div>
                            <img class="sprite-shiny sprite-shiny-none" src="${data.sprites.front_shiny}" alt="pkmn" height="180">
                            <div class="content-stat">
                                <table class="darkTable">
                                    <tbody>
                                        <tr>
                                        <td class="stats"><span class="stat">HP</span><br> ${data.stats[0].base_stat}</td>
                                        <td class="stats"><span class="stat">Atk</span><br> ${data.stats[1].base_stat}</td>
                                        <td class="stats"><span class="stat">Def</span><br> ${data.stats[2].base_stat}</td>
                                        <td class="stats"><span class="stat">SpA</span><br> ${data.stats[3].base_stat}</td>
                                        <td class="stats"><span class="stat">SpD</span><br> ${data.stats[4].base_stat}</td>
                                        <td class="stats"><span class="stat">Spe</span><br> ${data.stats[5].base_stat}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>`;

            content.innerHTML = modele;
        }
        show_content();

        document.querySelector('#show_shiny').addEventListener("click", show_shiny)
        function show_shiny(){
            let elem = document.querySelector('.sprite-shiny');
            elem.classList.toggle('sprite-shiny-none');
            elem.classList.toggle('sprite-shiny-toggled');
        }
    })
    .catch(err => console.log("ERR"))

