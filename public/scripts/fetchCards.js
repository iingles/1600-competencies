async function fetchPeople ( searchParam ) {

    const uri = 'https://swapi.dev/api/people/'
    const method = 'GET'
    // const mode = 'no-cors'
    const headers = {
        'Content-Type': 'application/json',
    }

    // const people = await fetch(uri)
        
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
    console.log(people)

       for (person of people) {
        const card = document.createElement('div')
        card.setAttribute('class', 'card')

        const cardTitle = document.createElement('div')
        cardTitle.setAttribute('class', 'card-title')
        cardTitle.innerHTML = person.name

        const cardBody = document.createElement('div')
        cardBody.setAttribute('class', 'card-body')
        cardBody.innerHTML =
            
            `
            Height: ${person.height}
            Mass: ${person.mass}
            Hair Color: ${person.hair_color}
            gender: ${person.gender}
            `
        card.appendChild(cardTitle)
        card.appendChild(cardBody)        
        cardWrapper.appendChild(card)
    }

}