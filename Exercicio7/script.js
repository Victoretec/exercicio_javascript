function clicar(){
    let sn1 = document.getElementById("numero1").value
    let sn2 = document.getElementById("numero2").value
    let sn3 = document.getElementById("numero3").value
    let res = document.getElementById("saida")
    n1 = parseInt(sn1)
    n2 = parseInt(sn2)
    n3 = parseInt(sn3)
    let resultado = (n1+n2+n3)/3
    res.innerHTML = resultado.toFixed(2)
}