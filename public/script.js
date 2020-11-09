
//fetch data and store it
const endpoint='https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';
const list=[],
    searchInput = document.querySelector('.search'),
    filtered = document.querySelector('.filtered');

fetch(endpoint)
    .then(blob => blob.json()
    .then(data => list.push(...data)))

function findMatches(wordToMatch, list) {
    return list.filter(place => {
        const regex = new RegExp(wordToMatch,'gi');
        return place.name.match(regex);
    })
}

function displayMatches(){
    const matchArray = findMatches(this.value, list);
    const html = matchArray.map(place => {
        const regex= new RegExp(this.value, 'gi');
        /*const placeName= list.name.replace(regex,`<span class="h1">${this.value}</span>`)*/
        return `
        <li>
            <span class="name">${place.name}</span>
            <span class="category">${place.category}</span>
            <span class="address">${place.address_line_1},${place.city},
                ${place.state},${place.zip}</span>
            
        </li>
        `;
    }).join('');
    filtered.innerHTML= html;
}


searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);