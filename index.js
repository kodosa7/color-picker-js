function fetchData() {
    // fetch data to and from the API
    fetch(`https://www.thecolorapi.com/scheme?hex=${getSeed()}&format=json&mode=${selectColors()}&count=6`)
        .then(res => res.json())
        .then(data => getColorData(data))
}
fetchData()  // fetch data on page load

// listen on button and fetch new data according
// to the color seed provided in the color-picker
document.getElementById('get-btn').addEventListener('click', () => fetchData())

function getColorData(apiData) {
    // iterate trough API data and returns array of color combinations
    const hexValues = apiData.colors.map((num) => num)

    // iterate trough data and returns hex value strings #xxyyzz
    const hexValuesArray = hexValues.map( (i) => i.hex.value )
    selectColors()
    renderColors(hexValuesArray)
}

function getSeed() {
    // get seed color from the color picker, slice the # char and return it
    return document.getElementById('color-picker').value.slice(1, 7)
}

function selectColors() {
    // get color scheme from the dropdown menu and return its name
    const selector = document.getElementById('menu')
    return selector.options[selector.selectedIndex].value
}

function renderColors(colorArray) {
    // puts colors data into the DOM
    for (let i = 0; i < colorArray.length - 1; i++) {
        document.getElementById('col--' + i).style.backgroundColor = `${colorArray[i]}`
        document.getElementById('col-id--' + i).innerHTML = `${colorArray[i]}`
    }
}