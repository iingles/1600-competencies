/**
 *  fetchCards.js
 *  By Isaac Ingles
 * 
 *  Script for fetching data from the starwars API 
 *  and generating HTML to display it 
 *  
 * 
 */

async function fetchPeople(searchParam) {

    const uri = 'https://swapi.dev/api/people/'
    const method = 'GET'
    // const mode = 'no-cors'
    const headers = {
        'Content-Type': 'application/json',
    }

    try {
        const response = await fetch(uri)
        const data = await response.json()
        return data.results
    } catch (err) {
        console.log(err)
    }
}

async function createCards () {
    // Using JS to create cards for each person
    const cardWrapper = document.querySelector('#cardWrapper')

    const people = await fetchPeople()

       for (person of people) {
        const card = document.createElement('div')
           card.setAttribute('class', 'card')
           card.classList.add('clickable')

        const cardTitle = document.createElement('div')
        cardTitle.setAttribute('class', 'card-title')
        cardTitle.innerHTML = person.name

        const cardBody = document.createElement('div')
        cardBody.setAttribute('class', 'card-body')
        cardBody.innerHTML =            
            `
            <p>Height: ${person.height}</p>
            <p>Mass: ${person.mass}</p>
            <p>Hair Color: ${person.hair_color}</p>
            <p>gender: ${person.gender}</p>
            `
        card.appendChild(cardTitle)
        card.appendChild(cardBody)        
        cardWrapper.appendChild(card)
    }

}