function clicar(){
    let degrauStr= document.getElementById("degrau").value
    let alturaPedreirostr= document.getElementById("alturaPedreiro").value
    let res = document.getElementById("saida")
    let degrau = Number(degrauStr)
    let alturaPedreiro = Number(alturaPedreirostr)
    let altura = (alturaPedreiro*100) / degrau
    res.innerHTML = ` São ${altura} degraus `

}