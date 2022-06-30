
let mountainCardData = document.querySelector("#mountainCardData")

mountainsList.addEventListener("change", function(event){
   
    mountainCardData.innerHTML=''

    if(event.target.value !=="Choose A Mountain"){     

        let selectedMountain = event.target.value

        let filteredMountain  = mountainsArray.filter((mountain) =>{
 
         return mountain.name === selectedMountain
             
         })

         generateMountainCardData(filteredMountain)
         mountainCardData.classList.remove("d-none")
    }

     
})


function generateMountainCardData(filteredMountain) {

     mountainCardData.innerHTML += `<img src="/assets/images/mountains/${filteredMountain[0].img}" class="card-img-top" alt="...">
                                    <div class="card-body">
                                    <h5 class="card-title">${filteredMountain[0].name}</h5>
                                    <p class="card-text">${filteredMountain[0].desc}</p>
                                    <p class="card-text">Elevation: ${filteredMountain[0].elevation}</p>
                                    <p class="card-text">Latitude: ${filteredMountain[0].coords.lat}</p>
                                    <p class="card-text">Latitude: ${filteredMountain[0].coords.lng}</p>                                    
                                </div> `

}