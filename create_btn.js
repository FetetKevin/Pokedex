fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(r => r.json())
    .then(data => {
        //console.log(data)

        function create_btn(){

            let select = document.createElement('select');
            select.setAttribute("name", "list");
            select.id = "list";

            for(let i=0; i<data.results.length;i++){
                // console.log(data.results[i].name)
                let option = document.createElement('option');
                option.setAttribute("value", `${data.results[i].name}`);
                option.innerHTML = `${data.results[i].name[0].toUpperCase() + data.results[i].name.slice(1)}`;
                select.appendChild(option);
            }

            let header = document.querySelector('.title');
            header.appendChild(select);

        }
        create_btn();
    })
    .catch(error => console.log('ERR'))
