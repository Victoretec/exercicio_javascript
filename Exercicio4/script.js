function clicar(){
    let sn1 = document.getElementById("numero1").value
    let sn2 = document.getElementById("numero2").value
    let res = document.getElementById("saida")
    n1 = Number(sn1)
    n2 = Number(sn2)
    let resultado = n1+n2
    res.innerHTML = resultado
}