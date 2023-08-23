function findMatching(drivers, name) {
    return drivers.filter(function (driver) { 
        return driver.toUpperCase() === name.toUpperCase()
    })
}

function fuzzyMatch(drivers, letters) {
    return drivers.filter(function (driver) {
        return driver.toUpperCase().substring(0, letters.length) === letters.toUpperCase()
    })
}

function matchName (drivers, place) {
    return drivers.filter(function (driver) {
        return driver.name === place
    })
}