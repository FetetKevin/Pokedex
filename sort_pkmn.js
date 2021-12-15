function sort_pkmn(){
    let query = document.querySelector('#list').value;

    fetch('https://pokeapi.co/api/v2/pokemon/'+query+'/')
    .then(r => r.json())
    .then(data => {

        function clear_tab(){
            let tab = document.querySelector('table');
            tab.remove();
        }
        clear_tab();
        
            let tab = document.createElement('table');
            tab.className = "darkTable";   
            let elem = document.querySelector('#tab');
            let tbody = `<tbody>
                            <td class="sprite"><img src="${data.sprites.front_default}" alt="pkmn" height="50"></td>
                            <td class="nom"><a href="./pkmn.html?q=${data.name}">${data.name}</a></td>
                            <td class="type">${data.types.length == 2 ? '<a class="'+data.types[0].type.name+'" href="./type.html?q='+data.types[0].type.name+'">'+data.types[0].type.name+'</a><a class="'+data.types[1].type.name+'" href="./type.html?q='+data.types[1].type.name+'">'+data.types[1].type.name+'</a>' : '<a class="'+data.types[0].type.name+'" href="./type.html?q='+data.types[0].type.name+'">'+data.types[0].type.name+'</a>'}</td>
                            <td class="vide"></td>
                            <td class="stats"><span class="stat">HP</span><br> ${data.stats[0].base_stat}</td>
                            <td class="stats"><span class="stat">Atk</span><br> ${data.stats[1].base_stat}</td>
                            <td class="stats"><span class="stat">Def</span><br> ${data.stats[2].base_stat}</td>
                            <td class="stats"><span class="stat">SpA</span><br> ${data.stats[3].base_stat}</td>
                            <td class="stats"><span class="stat">SpD</span><br> ${data.stats[4].base_stat}</td>
                            <td class="stats"><span class="stat">Spe</span><br> ${data.stats[5].base_stat}</td>
                        </tbody>`;

            tab.innerHTML = tbody;
            elem.prepend(tab);

    })
    .catch(err => console.log("ERR"))
}
