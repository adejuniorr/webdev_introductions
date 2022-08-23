var data = new Date()
var hora = data.getHours()
var min = data.getMinutes()
if (min < 10){
    min = '0' + min 
}

var txt1 = document.getElementById('txt1')
var txt2 = document.getElementById('txt2')

var divfot = document.getElementById('divfot')
var img = document.createElement('img')
img.setAttribute('id', 'foto')
divfot.appendChild(img)

var btnc = document.getElementById('c')
var btnmais = document.getElementById('mais')
var btnmenos = document.getElementById('menos')
var btnmulti = document.getElementById('multi')
var btndivi = document.getElementById('divi')
var btnigual = document.getElementById('igual')
var lupa = 2

txt1.onmouseover = function(){
    this.style.textDecoration = 'underline'
}
txt1.onmouseout = function(){
    this.style.textDecoration = 'none'
}

/*
img.onmouseover = function(){
    this.style.width = (this.clientWidth * lupa) + "px"
    this.style.height = (this.clientHeight * lupa) + "px"
}
img.onmouseout = function(){
    this.style.width = (this.clientWidth / lupa) + "px"
    this.style.height = (this.clientHeight / lupa) + "px"
}
*/

txt2.onmouseover = function(){
    this.style.width = (this.clientWidth * lupa) + "px"
    //this.style.height = (this.clientHeight * lupa) + "px"
    this.style.color = 'white'
    this.style.boxShadow = '0px 4px 8px black'
}
txt2.onmouseout = function(){
    this.style.width = (this.clientWidth / lupa) + "px"
    //this.style.height = (this.clientHeight / lupa) + "px"
    this.style.color = 'white'
    this.style.boxShadow = '0px 2px 4px black'
}



txt1.innerHTML = `Agora são ${hora}:${min}`

if (hora >= 0 && hora < 5){ //madrugada
    img.src = 'madrugada.png'
    txt2.innerHTML = 'Boa madrugada!'
    txt2.style.width = '150px'
    document.body.style.background = 'black'
    txt2.style.background = 'black'
    btnc.style.background = 'black'
    btnmais.style.background = 'black'
    btnmenos.style.background = 'black'
    btnmulti.style.background = 'black'
    btndivi.style.background = 'black'
    btnigual.style.background = 'black'

} else if (hora < 12){ //dia-manhã
    img.src = 'manha.png'
    txt2.innerHTML = 'Bom dia!'
    document.body.style.background = 'yellow'
    txt2.style.color = 'black'
    txt2.style.background = 'yellow'
    btnmais.style.background = 'yellow'
    btnmenos.style.background = 'yellow'
    btnmulti.style.background = 'yellow'
    btndivi.style.background = 'yellow'
    btnigual.style.background = 'yellow'

} else if (hora < 16){ //tarde-início
    img.src = 'tarde-inicio.png'
    txt2.innerHTML = 'Boa tarde!'
    document.body.style.background = 'turquoise'
    txt2.style.background = 'turquoise'
    btnmais.style.background = 'turquoise'
    btnmenos.style.background = 'turquoise'
    btnmulti.style.background = 'turquoise'
    btndivi.style.background = 'turquoise'
    btnigual.style.background = 'turquoise'

} else if (hora < 18){ //tarde-fim
    img.src = 'tarde-fim.png'
    txt2.innerHTML = 'Boa tarde!'
    document.body.style.background = 'orange'
    txt2.style.background = 'orange'
    btnc.style.borderColor= 'orange'
    btnmais.style.background = 'orange'
    btnmenos.style.background = 'orange'
    btnmulti.style.background = 'orange'
    btndivi.style.background = 'orange'
    btnigual.style.background = 'orange'

} else { //noite
    img.src = 'noite.png'
    txt2.innerHTML = 'Boa noite!'
    document.body.style.background = 'darkblue'
    txt2.style.background = 'darkblue'
    btnc.style.borderColor= 'darkblue'
    btnmais.style.background = 'darkblue'
    btnmais.style.color = 'white'
    btnmenos.style.background = 'darkblue'
    btnmenos.style.color = 'white'
    btnmulti.style.background = 'darkblue'
    btnmulti.style.color = 'white'
    btndivi.style.background = 'darkblue'
    btndivi.style.color = 'white'
    btnigual.style.background = 'darkblue'
    btnigual.style.color = 'white'

}