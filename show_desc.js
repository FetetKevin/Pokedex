fetch('./descriptions.json')
    .then((r) => { return r.json()})
    .then((data) => {
        function show_desc(){
            let nb = Math.floor(Math.random() * 151);
            console.log(data[nb])

            let elem = document.querySelector('.attributes p');
            elem.innerHTML = data[nb].description;
        }
        show_desc();
    })