"use strict"

let mountainsArray = []
let mountainsList = document.querySelector("#mountainsList")

window.onload = function(){

    loadJsonData("assets/data/mountains.json").then((mountains) => {
        mountainsArray = mountains.mountains;

        generateMountainsData()
    })

}

//function that can "fetch" the sunset/sunrise times
let loadJsonData = async (path) => {
    let response = await fetch(path)
    let data = await response.json()
    return data
}


function generateMountainsData(){

    mountainsList.innerHTML = `<option value="">Choose A Mountain</option>`

    mountainsArray.forEach((mountain) => {
        mountainsList.innerHTML += `<option value="${mountain.name}">${mountain.name}</option>`
    })

}