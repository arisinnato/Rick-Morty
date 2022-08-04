const init =  async() =>{
    try {
        //llamar a la api

        const response = await fetch("https://rickandmortyapi.com/api/episode")

        //transformas la info a JSON

        const data = await response.json()
        console.log(data.results)

        const charContainerElement = document.getElementById("char-container")

        //iteracion

        data.results.forEach( (element) => {
            charContainerElement.innerHTML +=
            `<div class="char-card">
                <div class="char-info-container">
                    <div class="char-info">
                        <p class="text-white">${element.name}</p>
                        <p class="text-white">${element.air_date}</p>
                        <p class="text-white">${element.episode}</p>
                    </div>
                </div>
            </div>`
        
        });
    
        //mostramos dinamicamente 

        console.log("init");
        
    } catch (error) {
        console.log(error);
    }
}

init()