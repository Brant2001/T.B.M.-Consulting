let locations = []

//this grabs the locations from the server
export const getLocations = () => {
    return fetch('http://localhost:8088/locations')
        .then(response => response.json())
        .then(parsedLocations => {
            locations = parsedLocations
        })

}

export const useLocations = () => locations.slice()