const url2 = new URL(window.location.href);
let res2 = url.searchParams.get('q');

fetch('https://pokeapi.co/api/v2/pokemon/'+res2+'/')
    .then(r => r.json())
    .then(data => {
        for(let i=0;i<data.moves.length;i++){
            fetch(data.moves[i].move.url)
            .then(r => r.json())
            .then(atk =>{
                let tr = document.createElement('tr');
                let modele = `
                                <td class="nom">${atk.names[7].name}</td>
                                <td class="vide"></td>
                                <td class="stats"><span class="stat">Power</span><br> ${atk.past_values[0].power != null ? atk.past_values[0].power : "-"}</td>
                                <td class="stats"><span class="stat">Accuracy</span><br> ${atk.accuracy != null ? atk.accuracy : "-"}</td>
                                <td class="stats"><span class="stat">PP</span><br> ${atk.pp}</td>
                                <td class="desc">${atk.effect_entries[0].short_effect}</td>
                            `;
                let elem = document.querySelector('.atk tbody');
                tr.innerHTML = modele;
                elem.appendChild(tr);
            })
        }
    })