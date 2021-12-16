const url = new URL(window.location.href);
let res = url.searchParams.get('q');

fetch('https://pokeapi.co/api/v2/type/'+res+'/')
    .then(r => r.json())
    .then(data => {
        for(let i=0; i<30;i++){
            fetch(data.pokemon[i].pokemon.url)
            .then(r => r.json())
            .then(pkmn => {
                function name(){
                    let h2 = document.querySelector('.infos h2');
                    h2.innerHTML = res[0].toUpperCase() + res.slice(1);
                }
                name();

                function show_pkmn(){
                    let tr = document.createElement('tr');
                    let modele = `  <td class="sprite"><img src="${pkmn.sprites.front_default}" alt="pkmn" height="50"></td>
                    <td class="nom"><a href="./pkmn.html?q=${pkmn.name}">${pkmn.forms[0].name[0].toUpperCase() + pkmn.forms[0].name.slice(1)}</a></td>
                    <td class="type">${pkmn.types.length == 2 ? '<a class="'+pkmn.types[0].type.name+'" href="./type.html?q='+pkmn.types[0].type.name+'">'+pkmn.types[0].type.name+'</a><a class="'+pkmn.types[1].type.name+'" href="./type.html?q='+pkmn.types[1].type.name+'">'+pkmn.types[1].type.name+'</a>' : '<a class="'+pkmn.types[0].type.name+'" href="./type.html?q='+pkmn.types[0].type.name+'">'+pkmn.types[0].type.name+'</a>'}</td>
                    <td class="vide"></td>
                    <td class="stats"><span class="stat">HP</span><br> ${pkmn.stats[0].base_stat}</td>
                    <td class="stats"><span class="stat">Atk</span><br> ${pkmn.stats[1].base_stat}</td>
                    <td class="stats"><span class="stat">Def</span><br> ${pkmn.stats[2].base_stat}</td>
                    <td class="stats"><span class="stat">SpA</span><br> ${pkmn.stats[3].base_stat}</td>
                    <td class="stats"><span class="stat">SpD</span><br> ${pkmn.stats[4].base_stat}</td>
                    <td class="stats"><span class="stat">Spe</span><br> ${pkmn.stats[5].base_stat}</td>`;

                    tr.innerHTML = modele;
                    let tbody = document.querySelector('tbody')
                    tbody.appendChild(tr);
                }
                show_pkmn();
            })
        }
    })