function clicar(){
    let sAltura = document.getElementById("numero1").value
    let sBase = document.getElementById("numero2").value
    let res = document.getElementById("saida")
    base = parseInt(sAltura)
    altura = parseInt(sBase)
    let resultado = (base*altura)/2  
    res.innerHTML = resultado.toFixed(2)
}