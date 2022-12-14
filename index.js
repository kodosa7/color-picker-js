function init() {
    // initialize when run for the first time
    const selector = document.getElementById('menu')
    const selectedValue = selector.options[selector.selectedIndex].value
    fetch(`https://www.thecolorapi.com/scheme?hex=0047AB&rgb=0,71,171&hsl=215,100%,34%&cmyk=100,58,0,33&format=json&mode=${selectColors()}&count=6`)
        .then(res => res.json())
        .then(data => getColorData(data))
}
init()

document.getElementById('get-btn').addEventListener('click', function() {
    fetch(`https://www.thecolorapi.com/scheme?hex=0047AB&rgb=0,71,171&hsl=215,100%,34%&cmyk=100,58,0,33&format=json&mode=${selectColors()}&count=6`)
        .then(res => res.json())
        .then(data => getColorData(data))
})

function getColorData(apiData) {
    const hexValues = apiData.colors.map(function(num) {
        return num
    })

    // iterates trough data and returns hex value strings
    const hexValuesArray = hexValues.map(function(i) {
        return i.hex.value
    })
    selectColors()
    renderColors(hexValuesArray)
}

function selectColors() {
    const selector = document.getElementById('menu')
    const selectedValue = selector.options[selector.selectedIndex].value
    return selectedValue
}

function renderColors(colorArray) {
    // puts colors data into the DOM
    for (let i = 0; i < colorArray.length - 1; i++) {
        document.getElementById('col--' + i).style.backgroundColor = `${colorArray[i]}`
        document.getElementById('col-id--' + i).innerHTML = `${colorArray[i]}`
    }
}