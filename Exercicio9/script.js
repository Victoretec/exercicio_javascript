function clicar(){
    let nome = document.getElementById("nome").value
    let anoNasc= document.getElementById("anoNasc").value
    let anoAtual= document.getElementById("anoAtual").value
    let res = document.getElementById("saida")
    atual = parseInt(anoAtual)
    nasc = parseInt(anoNasc)
    let idade = atual - nasc
    res.innerHTML = `Nome: ${nome}
    Idade: ${idade}`

}