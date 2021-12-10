fetch('https://pokeapi.co/api/v2/pokemon/'//, {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         name: 'bulbasaur'
//     })
// }
)
    .then(res => {
        return res.json()
    })
    .then(data => console.log(data))
    .catch(error => console.log('ERR'))
