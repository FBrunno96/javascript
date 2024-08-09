function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var nasc = document.getElementById('txtano')
    var res = document.getElementById('res')
    
    if (nasc.value.length == 0 || Number(nasc.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var sexo = document.getElementsByName('radsex')
        var idade = ano - Number(nasc.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sexo[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/foto-bebe-m.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/foto-jovem-m.png')
            } else if (idade < 60) {
                img.setAttribute('src', 'imagens/foto-adulto-m.png')
            } else {
                img.setAttribute('src', 'imagens/foto-idoso-m.png')
            }
        } else if (sexo[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/foto-bebe-f.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/foto-jovem-f.png')
            } else if (idade < 60) {
                img.setAttribute('src', 'imagens/foto-adulto-f.png')
            } else {
                img.setAttribute('src', 'imagens/foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
        img.style.margin = 'auto'
        img.style.display = 'block'
    }
}