fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(r => r.json())
    .then(data => {
        function create_btn(){

            let select = document.createElement('select');
            select.setAttribute("name", "list");
            select.id = "list";

            for(let i=0; i<data.results.length;i++){
                let option = document.createElement('option');
                option.setAttribute("value", `${data.results[i].name}`);
                option.innerHTML = `${data.results[i].name[0].toUpperCase() + data.results[i].name.slice(1)}`;
                select.appendChild(option);
            }

            let header = document.querySelector('.title');

            header.appendChild(select);

        }
        
        function create_send(){

            let send_btn = document.createElement('button');
            send_btn.id = "send";
            send_btn.innerHTML = "Rechercher"
            send_btn.setAttribute("onclick", "sort_pkmn()")

            let header = document.querySelector('.title');
            header.appendChild(send_btn);

        }
        create_btn();
        create_send();

        
    })
    .catch(error => console.log('ERR'))
