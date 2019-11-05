
function cafesList() {
    return fetch("https://raw.githubusercontent.com/debojyoti/places-fake-rest-api/master/cafes.json")
        .then(res => res.json())
        .then(res2 => {
            console.log(res2.cafes);

        })
}
cafesList()

function placesList() {
    return fetch("https://raw.githubusercontent.com/debojyoti/places-fake-rest-api/master/places.json")
        .then(res => res.json())
        .then(res2 => {
            console.log(res2.places);

        })
}
placesList()
