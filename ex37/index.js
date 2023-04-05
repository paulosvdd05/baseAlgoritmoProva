const verificar = () =>{
    let numero = (document.getElementById('numero')).value
    numero > 10 ? div.innerHTML = `${Math.pow(numero, 2)}<br>${Math.cbrt(numero)}` : div.innerHTML = `${Math.pow(numero,2)}`
}