function validateCreditCard(num) {
    let tarjeta = String(num)

    if (tarjeta.length !== 16 || isNaN(tarjeta)) {
        return false
    }

    let primerDigito = tarjeta[0]
    let todosIguales = true

    for (i = 1; i < tarjeta.length; i++) {
        if (tarjeta[i] != primerDigito) {
            todosIguales = false
            break
        }
    }

    if (todosIguales) {
        return false
    }

    let ultimo = Number(tarjeta[tarjeta.length - 1])
    if (ultimo % 2 !== 0) {
        return false
    }

    let suma = 0
    for (i = 0; i < tarjeta.length; i++) {
        suma += Number(tarjeta[i])
    }

    if (suma <= 16) {
        return false
    }

    return true
}

console.log(validateCreditCard("9999777788880000"))
console.log(validateCreditCard("6666666666661666"))
console.log(validateCreditCard("4444444444444444"))