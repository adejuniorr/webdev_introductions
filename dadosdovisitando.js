function confirmar(){
    var data = new Date()
    var anoatual = data.getFullYear()

    var nascimento = document.getElementById('anonascimento')
    var idade = anoatual - Number(nascimento.value)
    /*
    Considerando que a variável 'nascimento' adquire um valor do tipo
    string devido ao comando 'getElementById', é necessário converter
    seu tipo para um valor numérico para assim poder efetuar a operação
    e conseguir, por fim, o valor numérico desejado
    */

    var res = document.getElementById('res')


    if (nascimento.value.length == 0){
        alert('Não podem haver espaços em branco!')
    } else {
        var sex = document.getElementsByName('radsex')
        var race = document.getElementsByName('race')
        var genero = ''
        var imgrace = document.createElement('img')
        imgrace.setAttribute('id', 'racefoto')
        /*
        Ao criar um elemento, nesse caso do tipo 'img', de forma dinâmica 
        por meio do javascript, muitas vezes será necessário a atribuição
        de recursos a esses elementos por meio do comando 'setAttribute'
        como pode ser visto acima.
        */
        

        if (sex[0].checked) {
            if (idade >= 0 && idade < 5){ //bebê
                genero = 'um bebê'
                if (race[0].checked) {//pessoa negra
                    imgrace.src = 'bebenegromenino.png'
                } else if (race[1].checked) {//pessoa branca
                    imgrace.src ='bebebrancomenino.png'
                } else if (race[2].checked) {//pessoa asiática
                    imgrace.src ='bebeasiaticomenino.png'
                } else {
                    alert('Verifique se há espaços em branco!')
                }
            } else if (idade < 11){ //criança
                genero = 'uma criança'
                if (race[0].checked) {//pessoa negra
                    imgrace.src ='criançanegramenino.png'
                } else if (race[1].checked) {//pessoa branca
                    imgrace.src ='criançabrancamenino.png'
                } else if (race[2].checked) {//pessoa asiática
                    imgrace.src ='criançaasiaticamenino.png'
                } else {
                    alert('Verifique se há espaços em branco!')
                }
            } else if (idade < 15){ //garoto
                genero = 'um garoto'
                if (race[0].checked) {//pessoa negra
                    imgrace.src ='garotonegro.png'
                } else if (race[1].checked) {//pessoa branca
                    imgrace.src ='garotobranco.png'
                } else if (race[2].checked) {//pessoa asiática
                    imgrace.src ='garotoasiatico.png'
                } else {
                    alert('Verifique se há espaços em branco!')
                }
            } else if (idade < 18){ //adolescente
                genero = 'um rapaz'
                if (race[0].checked) {//pessoa negra
                    imgrace.src ='adolescentemeninonegro.png'
                } else if (race[1].checked) {//pessoa branca
                    imgrace.src ='adolescentemeninobranco.png'
                } else if (race[2].checked) {//pessoa asiática
                    imgrace.src ='adolescentemeninoasiatico.png'
                } else {
                    alert('Verifique se há espaços em branco!')
                }
            } else if (idade < 50){ //adulto
                genero = 'um homem adulto'
                if (race[0].checked) {//pessoa negra
                    imgrace.src ='homemadultonegro.png'
                } else if (race[1].checked) {//pessoa branca
                    imgrace.src ='homemadultobranco.png'
                } else if (race[2].checked) {//pessoa asiática
                    imgrace.src ='homemadultoasiatico.png'
                } else {
                    alert('Verifique se há espaços em branco!')
                }
            } else { //idoso
                genero = 'um homem idoso'
                if (race[0].checked) {//pessoa negra
                    imgrace.src ='homemidosonegro.png'
                } else if (race[1].checked) {//pessoa branca
                    imgrace.src ='homemidosobranco.png'
                } else if (race[2].checked) {//pessoa asiática
                    imgrace.src ='homemidosoasiatico.png'
                } else {
                    alert('Verifique se há espaços em branco!')
                }
            }
        } else if (sex[1].checked) {
            if (idade >= 0 && idade < 5){ //bebê
                genero = 'uma bebê'
                if (race[0].checked) {//pessoa negra
                    imgrace.src ='bebenegramenina.png'
                } else if (race[1].checked) {//pessoa branca
                    imgrace.src ='bebebrancamenina.png'
                } else if (race[2].checked) {//pessoa asiática
                    imgrace.src ='bebeasiaticamenina.png'
                } else {
                    alert('Verifique se há espaços em branco!')
                }
            } else if (idade < 11){ //criança
                genero = 'uma criança'
                if (race[0].checked) {//pessoa negra
                    imgrace.src ='criançanegramenina.png'
                } else if (race[1].checked) {//pessoa branca
                    imgrace.src ='criançabrancamenina.png'
                } else if (race[2].checked) {//pessoa asiática
                    imgrace.src ='criançaasiaticamenina.png'
                } else {
                    alert('Verifique se há espaços em branco!')
                }
            } else if (idade < 15){ //garota
                genero = 'uma garota'
                if (race[0].checked) {//pessoa negra
                    imgrace.src ='garotanegra.png'
                } else if (race[1].checked) {//pessoa branca
                    imgrace.src ='garotabranca.png'
                } else if (race[2].checked) {//pessoa asiática
                    imgrace.src ='garotaasiatica.png'
                } else {
                    alert('Verifique se há espaços em branco!')
                }
            } else if (idade < 18){ //adolescente
                genero = 'uma moça'
                if (race[0].checked) {//pessoa negra
                    imgrace.src ='adolescentemeninanegra.png'
                } else if (race[1].checked) {//pessoa branca
                    imgrace.src ='adolescentemeninabranca.png'
                } else if (race[2].checked) {//pessoa asiática
                    imgrace.src ='adolescentemeninaasiatica.png'
                } else {
                    alert('Verifique se há espaços em branco!')
                }
            } else if (idade < 50){ //adulta
                genero = 'uma mulher adulta'
                if (race[0].checked) {//pessoa negra
                    imgrace.src ='mulheradultanegra.png'
                } else if (race[1].checked) {//pessoa branca
                    imgrace.src ='mulheradultabranca.png'
                } else if (race[2].checked) {//pessoa asiática
                    imgrace.src ='mulheradultaasiatica.png'
                }
            } else { //idosa
                genero = 'uma mulher idosa'
                if (race[0].checked) {//pessoa negra
                    imgrace.src ='mulheridosanegra.png'
                } else if (race[1].checked) {//pessoa branca
                    imgrace.src ='mulheridosabranca.png'
                } else if (race[2].checked) {//pessoa asiática
                    imgrace.src ='mulheridosaasiatica.png'
                } else {
                    alert('Verifique se há espaços em branco!')
                }
            }
        } else {
            alert('Não podem haver espaços em branco!')
        }

    }
    res.innerHTML = `Olá, você ${genero} de ${idade} anos.<br>`
    res.appendChild(imgrace)
}