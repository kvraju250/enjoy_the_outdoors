//This file has locationsArray, nationParksArray, and ParkTypesArray available to it because
// we included load_national_parks_data.js above it in the html file
//onsole.log(locationsArray, "Tring to use immdetely")

let theSampleButton = document.querySelector("#theDemoButton")
let theSampleUL = document.querySelector("#locations")
let parkTypeUL = document.querySelector("#partTypes")
let parksUl = document.querySelector("#parks")

let parksSearch = document.querySelector("#parksSearch")
let locationList = document.querySelector("#locationList")
let typeList = document.querySelector("#typeList")
let locationTable = document.querySelector("#locationTable")
let locationTableBody = document.querySelector("#locationTable tbody")
let locationTableHead = document.querySelector("#locationTable thead")

let typeTable = document.querySelector("#typeTable")
let typeTableBody = document.querySelector("#typeTable tbody")
let typeTableHead = document.querySelector("#typeTable thead")

parksSearch.addEventListener("change", function(event){

    if(event.target.value === "location"){    

        locationList.innerHTML =  `<option value="">Select Option</option>`
        generateLocationOptions()        
        locationList.classList.remove("d-none")
        typeList.classList.add("d-none")
    }

    if(event.target.value === "type"){
        locationList.classList.add("d-none")
        typeList.innerHTML =  `<option value="">Select Option</option>`
        generateTypeOptions()                
        typeList.classList.remove("d-none")
        locationList.classList.add("d-none")
    }

    if(event.target.value === "Select Option"){           
        
        locationList.classList.add("d-none")        
        typeList.classList.add("d-none")
    }
})


locationList.addEventListener("change", function(event){

    typeTable.classList.add("d-none")  
    if(event.target.value === ""){
        locationTable.innerHTML = ``

    } else if(event.target.value !== "Select Option"){    

        
        let selectedstate = event.target.value

       let filterednationalParksArray  = nationalParksArray.filter((nationalPark) =>{

        return nationalPark.State === selectedstate
            
        })

        locationTableBody.innerHTML = ``
        generateLocationTableData(filterednationalParksArray)  
        locationTable.classList.remove("d-none")      
        
    }
   
})

function generateLocationTableData(filterednationalParksArray){

        filterednationalParksArray.forEach((nationalPark) => {
            locationTableBody.innerHTML += `<tr>
                                        <td>${nationalPark.LocationName}</td> 
                                        <td>${nationalPark.Address}</td>
                                        <td>${nationalPark.City}</td>
                                        <td>${nationalPark.State}</td>
                                        <td>${nationalPark.LocationID}</td>
                                    
                                    </tr>`
    })

}


typeList.addEventListener("change", function(event){

    locationTable.classList.add("d-none")
    if(event.target.value === ""){
        typeTable.innerHTML = ``

    } else if(event.target.value !== "Select Option"){    

        
        let selectedType = event.target.value

       let filterednationalParksByTypeArray  = nationalParksArray.filter((nationalParkByType) =>{

        return nationalParkByType.LocationName.includes(selectedType)   
            
        })

        typeTableBody.innerHTML = ``
        generateTypeTableData(filterednationalParksByTypeArray)  
        typeTable.classList.remove("d-none")      
        
    }
   
})


function generateTypeTableData(filterednationalParksByTypeArray){

    filterednationalParksByTypeArray.forEach((nationalPark) => {
        typeTableBody.innerHTML += `<tr>
                                    <td>${nationalPark.LocationName}</td> 
                                    <td>${nationalPark.Address}</td>
                                    <td>${nationalPark.City}</td>
                                    <td>${nationalPark.State}</td>
                                    <td>${nationalPark.LocationID}</td>
                                
                                </tr>`
})

}






function generateLocationOptions(){
    locationsArray.forEach((location) => {
        locationList.innerHTML +=  `<option value="${location}">${location}</option>`
    })
}

function generateTypeOptions(){
    parkTypesArray.forEach((parkType) => {
        typeList.innerHTML +=  `<option value="${parkType}">${parkType}</option>`
    })
}


theSampleButton.addEventListener("click", function(event){

//console.log(locationsArray)
//console.log(nationalParksArray)
//console.log(parkTypesArray)

locationsArray.forEach((location) => {

    theSampleUL.innerHTML += `<li>${location}</li>`
    
});

parkTypesArray.forEach((parkType) => {
    parkTypeUL.innerHTML += `<li>${parkType}</li>`
})

nationalParksArray.forEach((park) => {
    parksUl.innerHTML += `<li>${park.LocationName}</li>`
})

theSampleUL.classList.remove("d-none")

parkTypeUL.classList.remove("d-none")

parksUl.classList.remove("d-none")



})

