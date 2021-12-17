for(let i=1; i<21;i++){
    fetch('https://pokeapi.co/api/v2/pokemon/'+i+'/')
    .then(r => r.json())
    .then(data => {

        function table_all(){

            let tr = document.createElement('tr');   
            let elem = document.querySelector('tbody');
            let td = `  <td class="sprite"><img src="${data.sprites.front_default}" alt="pkmn" height="50"></td>
                    <td class="nom"><a href="./pkmn.html?q=${data.name}">${data.name[0].toUpperCase() + data.name.slice(1)}</a></td>
                    <td class="type">${data.types.length == 2 ? '<a class="'+data.types[0].type.name+'" href="./type.html?q='+data.types[0].type.name+'">'+data.types[0].type.name+'</a><a class="'+data.types[1].type.name+'" href="./type.html?q='+data.types[1].type.name+'">'+data.types[1].type.name+'</a>' : '<a class="'+data.types[0].type.name+'" href="./type.html?q='+data.types[0].type.name+'">'+data.types[0].type.name+'</a>'}</td>
                    <td class="vide"></td>
                    <td class="stats"><span class="stat">HP</span><br> ${data.stats[0].base_stat}</td>
                    <td class="stats"><span class="stat">Atk</span><br> ${data.stats[1].base_stat}</td>
                    <td class="stats"><span class="stat">Def</span><br> ${data.stats[2].base_stat}</td>
                    <td class="stats"><span class="stat">SpA</span><br> ${data.stats[3].base_stat}</td>
                    <td class="stats"><span class="stat">SpD</span><br> ${data.stats[4].base_stat}</td>
                    <td class="stats"><span class="stat">Spe</span><br> ${data.stats[5].base_stat}</td>`;

            tr.innerHTML = td;
            elem.appendChild(tr);

        }
        table_all();

    })
    .catch(err => console.log("ERR"))
}

document.querySelector('#next').addEventListener('click', show_more)
function show_more(){
    function clear_tab(){
        let tab = document.querySelector('tbody');
        tab.remove();
    }
    clear_tab();

    let tbody = document.createElement('tbody');
    let tab = document.querySelector('table');
    tab.appendChild(tbody);
    for(let i=1; i<151;i++){
        fetch('https://pokeapi.co/api/v2/pokemon/'+i+'/')
        .then(r => r.json())
        .then(data => {
            function table_all(){

                let tr = document.createElement('tr');
                let td = ` 
                            <td class="sprite"><img src="${data.sprites.front_default}" alt="pkmn" height="50"></td>
                            <td class="nom"><a href="./pkmn.html?q=${data.name}">${data.name[0].toUpperCase() + data.name.slice(1)}</a></td>
                            <td class="type">${data.types.length == 2 ? '<a class="'+data.types[0].type.name+'" href="./type.html?q='+data.types[0].type.name+'">'+data.types[0].type.name+'</a><a class="'+data.types[1].type.name+'" href="./type.html?q='+data.types[1].type.name+'">'+data.types[1].type.name+'</a>' : '<a class="'+data.types[0].type.name+'" href="./type.html?q='+data.types[0].type.name+'">'+data.types[0].type.name+'</a>'}</td>
                            <td class="vide"></td>
                            <td class="stats"><span class="stat">HP</span><br> ${data.stats[0].base_stat}</td>
                            <td class="stats"><span class="stat">Atk</span><br> ${data.stats[1].base_stat}</td>
                            <td class="stats"><span class="stat">Def</span><br> ${data.stats[2].base_stat}</td>
                            <td class="stats"><span class="stat">SpA</span><br> ${data.stats[3].base_stat}</td>
                            <td class="stats"><span class="stat">SpD</span><br> ${data.stats[4].base_stat}</td>
                            <td class="stats"><span class="stat">Spe</span><br> ${data.stats[5].base_stat}</td>
                        `;
    
                tr.innerHTML = td;
                let elem = document.querySelector('tbody');
                elem.appendChild(tr);
    
            }
            table_all();
    
        })
        .catch(err => console.log("ERR"))
    }
}
