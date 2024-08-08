function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 11
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        msg.innerHTML += '<p>Bom Dia!</p>'
        img.src = 'imagens/manha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        msg.innerHTML += '<p>Boa Tarde!</p>'
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#b9846f'
    } else {
        msg.innerHTML += '<p>Boa noite!</p>'
        img.src = 'imagens/noite.png'
        document.body.style.background = '#515154'
    }
}