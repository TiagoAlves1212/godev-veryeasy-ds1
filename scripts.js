const btnCalcular = document.querySelector('button')


btnCalcular.addEventListener('click', () => {
    const inputNumbers = document.querySelector('#input-numbers').value
    console.log(inputNumbers)

    const arrayNumbers = inputNumbers.split(',').map(nota => parseFloat(nota.trim())).filter(nota => !isNaN(nota))

    if (arrayNumbers.length === 0) {
        alert('O campo não pode está vazio!')
        document.querySelector('#media').innerText = ''
        return
    }

    const soma = arrayNumbers.reduce((acc, nota) => acc + nota, 0)
    const result = soma / arrayNumbers.length
    document.querySelector('#media').innerText = `Média: ${result}`
})