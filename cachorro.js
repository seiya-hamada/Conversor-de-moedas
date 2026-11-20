const convertButton = document.querySelector(".convert-button")
const currencySelectConverted = document.querySelector(".currency-select-converted")
const currencySelectToConvert = document.querySelector(".currency-select-to-convert")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".valorConverter").value
    const currencyValueToConvert = document.querySelector("#toConvert")
    const currencyValueConverted = document.querySelector("#converted")

    const dolarToday = 6
    const euroToday = 6.5
    const ieneToday = 0.037
    const realToday = 1

    const currencies = {
        real: {
            rate: realToday,
            locale: "pt-BR",
            currency: "BRL"
        },

        dolar: {
            rate: dolarToday,
            locale: "en-US",
            currency: "USD"
        },
        euro: {
            rate: euroToday,
            locale: "de-DE",
            currency: "EUR"
        },
        iene: {
            rate: ieneToday,
            locale: "ja-JP",
            currency: "JPY"
        }
    }

    const selectedCurrencyFrom = currencies[currencySelectToConvert.value]
    const selectedCurrencyTo = currencies[currencySelectConverted.value]

    const convertedValue = inputCurrencyValue * selectedCurrencyFrom.rate / selectedCurrencyTo.rate

    currencyValueToConvert.innerHTML = new Intl.NumberFormat(selectedCurrencyFrom.locale, {
        style: "currency",
        currency: selectedCurrencyFrom.currency
    }).format(inputCurrencyValue)

    currencyValueConverted.innerHTML = new Intl.NumberFormat(selectedCurrencyTo.locale, {
        style: "currency",
        currency: selectedCurrencyTo.currency
    }).format(convertedValue)

}


function changeCurrencyConverted() {
    const currencyTextConverted = document.getElementById("currency-text-converted")
    const currencyImageConverted = document.getElementById("currency-flag-converted")


    if (currencySelectConverted.value == "real") {
        currencyTextConverted.innerHTML = "Real"
        currencyImageConverted.src = "./assets/brasil.png"

    }

    if (currencySelectConverted.value == "dolar") {
        currencyTextConverted.innerHTML = "Dólar Americano"
        currencyImageConverted.src = "./assets/usa.png"

    }

    if (currencySelectConverted.value == "euro") {
        currencyTextConverted.innerHTML = "Euro"
        currencyImageConverted.src = "./assets/euro.png"

    }

    if (currencySelectConverted.value == "iene") {
        currencyTextConverted.innerHTML = "Iene"
        currencyImageConverted.src = "./assets/jpn.webp"

    }

    convertValues()

}

function changeCurrencyToConvert() {
    const currencyTextToConvert = document.getElementById("currency-text-to-convert")
    const currencyImageToConvert = document.getElementById("currency-flag-to-convert")

    if (currencySelectToConvert.value == "real") {
        currencyTextToConvert.innerHTML = "Real"
        currencyImageToConvert.src = "./assets/brasil.png"
    }

    if (currencySelectToConvert.value == "dolar") {
        currencyTextToConvert.innerHTML = "Dólar Americano"
        currencyImageToConvert.src = "./assets/usa.png"
    }

    if (currencySelectToConvert.value == "euro") {
        currencyTextToConvert.innerHTML = "Euro"
        currencyImageToConvert.src = "./assets/euro.png"
    }

    if (currencySelectToConvert.value == "iene") {
        currencyTextToConvert.innerHTML = "Iene"
        currencyImageToConvert.src = "./assets/jpn.webp"
    }

}


currencySelectConverted.addEventListener("change", changeCurrencyConverted)
currencySelectToConvert.addEventListener("change", changeCurrencyToConvert)
convertButton.addEventListener("click", convertValues)

