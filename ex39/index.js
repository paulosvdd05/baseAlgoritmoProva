const verificar = () =>{
    let numero = parseInt((document.getElementById('numero')).value)
    div.innerHTML = `Salario: R$${numero}<br>Salario com aumento(25%): R$${(numero+(numero*0.25)).toFixed(2)}`
}