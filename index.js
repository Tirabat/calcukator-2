const currency = document.getElementById("currency")
const button1 = document.getElementById("show")
const result = document.getElementById("result")
const curency = document.getElementById("curency")
const button2 = document.getElementById("chow")
button1.addEventListener('click', () =>{
    const input = +document.getElementById("input").value

    let value

    if (currency.value === 'RUB'){
        if (curency.value === 'RUB'){
            value  = input / 1
        }
        else if (curency.value === 'USD'){
            value = input / 90
        }
        else if (curency.value === 'EUR'){
            value = input / 100
        }
        else if (curency.value === 'KZT'){
            value = input / 0.2
        }
    }
    else if (currency.value === 'USD'){
        if (curency.value === 'RUB'){
            value  = input * 90
        }
        else if (curency.value === 'USD'){
            value = input / 1
        }
        else if (curency.value === 'EUR'){
            value = input / 0.9
        }
        else if (curency.value === 'KZT'){
            value = input * 450
        }
    }
    else if (currency.value === 'EUR'){
        if (curency.value === 'RUB'){
            value  = input * 100
        }
        else if (curency.value === 'USD'){
            value = input * 0.9
        }
        else if (curency.value === 'EUR'){
            value = input / 1
        }
        else if (curency.value === 'KZT'){
            value = input * 500
        }
    }
    else if (currency.value === 'KZT'){
        if (curency.value === 'RUB'){
            value  = input * 0.2
        }
        else if (curency.value === 'USD'){
            value = input * 0.0022
        }
        else if (curency.value === 'EUR'){
            value = input * 0.1
        }
        else if (curency.value === 'KZT'){
            value = input * 1
        }
    }
    result.innerHTML = value.toFixed(2)
    console.log (value)
})
button2.addEventListener('click',() =>{
    const coth = currency.value
    currency.value = curency.value
    curency.value = coth
    button1.click()
})