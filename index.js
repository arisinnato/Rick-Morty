const searchBtnElement = document.getElementById("search-btn")
searchBtnElement.addEventListener("click", () => {
    const searchInputElement = document.getElementById("search-input")

    if(searchInputElement.value){
        search(searchInputElement.value)
        
    }else{
        init()
    }
})

const init =  async() =>{
    try {
        //llamar a la api

        const response = await fetch("https://rickandmortyapi.com/api/character/?page=1")

        //transformas la info a JSON

        const data = await response.json()
        console.log(data.results)

        const charContainerElement = document.getElementById("char-container")

        //iteracion

        data.results.forEach( (element) => {
            charContainerElement.innerHTML +=
            `<div class="char-card">
                <img class="char-image" src="${element.image}" alt="character">
                <div class="char-info-container">
                    <div class="char-info">
                        <p class="text-white">${element.name}</p>
                        <p class="text-white">${element.species}-${element.status}</p>
                    </div>
                    <div class="char-info">
                        <p class="text-grey">Last known location:</p>
                        <p class="text-white">${element.location.name}</p>
                    </div>
                    <div class="char-info">
                        <p class="text-grey">First seen in:</p>
                        <p class="text-white">${element.origin.name}</p>
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

const search = async (nombre) =>{
    try {
       // llamar api(buscar)
       const response = await fetch("https://rickandmortyapi.com/api/character/?name=" + nombre)
       const data = await response.json()
       console.log(data.results)

       const charContainerElement = document.getElementById("char-container")

        charContainerElement.innerHTML = ""

       //iteracion

       data.results.forEach( (element) => {
           charContainerElement.innerHTML +=
           `<div class="char-card">
               <img class="char-image" src="${element.image}" alt="character">
               <div class="char-info-container">
                   <div class="char-info">
                       <p class="text-white">${element.name}</p>
                       <p class="text-white">${element.species}-${element.status}</p>
                   </div>
                   <div class="char-info">
                       <p class="text-grey">Last known location:</p>
                       <p class="text-white">${element.location.name}</p>
                   </div>
                   <div class="char-info">
                       <p class="text-grey">First seen in:</p>
                       <p class="text-white">${element.origin.name}</p>
                   </div>
               </div>
           </div>`
       
       });


    } catch (error) {
        console.log(error)
    }
}


const pages = () =>{
    const selectElement = document.getElementById("char-pages")

    for (let index = 1; index <= 42; index++) {
       selectElement.innerHTML += `
        <option value="${index}">${index}</option>
       `
    }
}
pages()


const selectElement = document.getElementById("char-pages")

selectElement.addEventListener("change", async (evt) => {
    console.log(evt.target.value)
    try {
        const response = await fetch("https://rickandmortyapi.com/api/character/?page=" +evt.target.value)
        const data = await response.json()
        console.log(data.results)
        
        const charContainerElement = document.getElementById("char-container")

        charContainerElement.innerHTML = ""

       //iteracion

       data.results.forEach( (element) => {
           charContainerElement.innerHTML +=
           `<div class="char-card">
               <img class="char-image" src="${element.image}" alt="character">
               <div class="char-info-container">
                   <div class="char-info">
                       <p class="text-white">${element.name}</p>
                       <p class="text-white">${element.species}-${element.status}</p>
                   </div>
                   <div class="char-info">
                       <p class="text-grey">Last known location:</p>
                       <p class="text-white">${element.location.name}</p>
                   </div>
                   <div class="char-info">
                       <p class="text-grey">First seen in:</p>
                       <p class="text-white">${element.origin.name}</p>
                   </div>
               </div>
           </div>`
       
       });

    } catch (error) {
        
    }
})

