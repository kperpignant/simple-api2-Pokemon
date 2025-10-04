//url = https://db.ygoprodeck.com/api/v7/cardinfo.php
//have to do data[0]
//data[0].humanReadableCardType


document.querySelector('button').addEventListener('click',getCard);

function getCard() {
    
    let search = document.querySelector('#wildCard').value;
    let url = `https://pokeapi.co/api/v2/pokemon/${search}`;

    fetch(url) //fetch at this url
        .then(response => response.json()) //then get the response data
        .then(fetched => { //renamed to fetched because the actual data array is called 'data' smh
            console.table(fetched)
            document.querySelector('#monName').innerText = fetched.name; //eventually make this uppercase
            //document.querySelector('#monType').innerText = fetched.types[0].type.name;
            document.querySelector('#typeOne').innerText = fetched.types[0].type.name;
            document.querySelector('#sprite').src = fetched.sprites.front_default;
            if(fetched.types[1].type.name) {
                document.querySelector('#typeTwo').innerText = fetched.types[1].type.name;
            }
            else {
                return null;
            }
        }) //then start using the data
        .catch(error => console.error(error)); //catch errors instead of crashing or something
}
