let button = document.getElementById("button")
let select = document.getElementById("select-currency")

async function convertCurrencies() {

    let currency = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,CLP-BRL").then(function (data) {
        return data.json()
    })

    let dolar = currency.USDBRL.high
    let euro = currency.EURBRL.high
    let pesoChileno = currency.CLPBRL.high 

    let inputValorEmReais = Number(document.getElementById("input").value)
    let inputMoedas = document.getElementById("value-currency")
    let BRL = document.getElementById("BRL")
    if (select.value === "$ Dólar Americano") {
        let valorEmDolares = inputValorEmReais / dolar
        inputMoedas.innerHTML = valorEmDolares.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2, style: 'currency', currency: 'USD' })
    }
    if (select.value === "€ Euro") {
        let valorEmEuros = inputValorEmReais / euro
        inputMoedas.innerHTML = valorEmEuros.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2, style: 'currency', currency: 'EUR' })
    }
    if (select.value === "$ Peso Chileno") {
        let valorEmPesosChilenos = inputValorEmReais / pesoChileno
        inputMoedas.innerHTML = valorEmPesosChilenos.toLocaleString('es-CL',  { minimumFractionDigits: 2, maximumFractionDigits: 2, style: 'currency', currency: 'CLP' })
    }
    BRL.innerHTML = inputValorEmReais.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
}

function currencyExchange() {
    let textoCurrency = document.getElementById("text-currency")
    let flags = document.getElementById("flags")
    if (select.value === "$ Dólar Americano") {
        textoCurrency.innerHTML = "Dólar Americano"
        flags.src = "./img/eua.png"
    }
    if (select.value === "€ Euro") {
        textoCurrency.innerHTML = "Euro"
        flags.src = "./img/euro.png"
    }
    if (select.value === "$ Peso Chileno") {
        textoCurrency.innerHTML = "Peso Chileno"
        flags.src = "./img/chile.png"
    }
    convertCurrencies()
}

button.addEventListener("click", convertCurrencies)
select.addEventListener("change", currencyExchange)