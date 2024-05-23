const form = document.getElementById("form")
const userColor = document.getElementById("color")
const colorScheme = document.getElementById("color-scheme")
const col1 = document.getElementById("col-1")
const col2 = document.getElementById("col-2")
const col3 = document.getElementById("col-3")
const col4 = document.getElementById("col-4")
const col5 = document.getElementById("col-5")
const col1Hex = document.getElementById("col-1-hex")
const col2Hex = document.getElementById("col-2-hex")
const col3Hex = document.getElementById("col-3-hex")
const col4Hex = document.getElementById("col-4-hex")
const col5Hex = document.getElementById("col-5-hex")

let columnColorsArray = []

form.addEventListener("submit", function (e) {
  e.preventDefault()

  let hex = userColor.value.slice(1)
  let mode = colorScheme.value

  fetch(`https://www.thecolorapi.com/scheme?hex=${hex}&mode=${mode}&count=5`)
    .then((response) => response.json())
    .then((data) => {
      data.colors.forEach(function (color) {
        columnColorsArray.push(color.hex.value)
      })
      updateColumns()
    })
})

//sets css styles from columnColorsArray values
function updateColumns() {
  col1.style.backgroundColor = columnColorsArray[0]
  col1Hex.textContent = columnColorsArray[0]
  col2.style.backgroundColor = columnColorsArray[1]
  col2Hex.textContent = columnColorsArray[1]
  col3.style.backgroundColor = columnColorsArray[2]
  col3Hex.textContent = columnColorsArray[2]
  col4.style.backgroundColor = columnColorsArray[3]
  col4Hex.textContent = columnColorsArray[3]
  col5.style.backgroundColor = columnColorsArray[4]
  col5Hex.textContent = columnColorsArray[4]
  columnColorsArray = []
}
