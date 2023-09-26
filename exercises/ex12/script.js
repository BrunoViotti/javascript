function contar() {
    let ini = document.getElementById('ini')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert(`[ERRO] faltam dados!`)
    } else {
        res.innerHTML = 'Contando: <br>' 
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            p = 1
        }

        if (i < f) {
            for(let c = i; c <= f; c += p) {
                res.innerHTML += `${c} `
            }
        } else {
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} `
            }
        }

    }
}