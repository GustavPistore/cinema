const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const input3 = document.getElementById('input3')
const subtotal1 = document.getElementById('subtotal1')
const subtotal2 = document.getElementById('subtotal2')
const subtotal3 = document.getElementById('subtotal3')
const total = document.getElementById("total")
const finalizar = document.getElementById("finalizar")
input1.addEventListener('input', () => {
    subtotal1.innerText = `Subtotal: R$${input1.value * 20},00`
    totall = input1.value * 20 + input2.value * 25 + input3.value * 30
    total.innerText = `total: R$${totall},00`
})
input2.addEventListener('input', () => {
    subtotal2.innerText = `Subtotal: R$${input2.value * 25},00`
    totall = input1.value * 20 + input2.value * 25 + input3.value * 30
    total.innerText = `total: R$${totall},00`
})
input3.addEventListener('input', () => {
    subtotal3.innerText = `Subtotal: R$${input3.value * 30},00`
    totall = input1.value * 20 + input2.value * 25 + input3.value * 30
    total.innerText = `total: R$${totall},00`
})
finalizar.addEventListener('click', () => {
    window.alert(`O valor total dos ${Number(input1.value) + Number(input2.value) + Number(input3.value)} ingressos foi de R$${totall},00 Reais`)
})
