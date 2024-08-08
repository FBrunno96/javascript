function carregar() {
    var data = new Date()
    var hora = data.getHours()
    var frase = document.getElementById('frase')
    var img = document.getElementById('imagem')
    frase.innerHTML = `Agora são ${hora} horas.`
    //var hora = 18
    if (hora < 12) {
        frase.innerHTML += '<p>Bom Dia!</p>' 
    } else if (hora < 18) {
        frase.innerHTML += '<p>Boa tarde!</p>'
        img.src = 'imagens/tarde.png'
        document.body.style.background = 'orange'
    } else {
        frase.innerHTML += '<p>Boa noite!</p>'
        img.src = 'imagens/noite.png'
        document.body.style.background = 'gray'
    }
}