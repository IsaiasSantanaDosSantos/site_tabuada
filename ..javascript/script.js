function calcular() { //Função
    var num = document.getElementById('txtn') //Pegar valor do id 'txtn' do html
    var most = document.getElementById('tab') //Variável para retornar valor
    if (num.value.length == 0) { //Se não digitar nenhum número e clicar no botão...
        window.alert('[ERRO] Digite algum número!') //Mostrará essa mensagem  
   } else { //Saco contrario..
        var n = Number(num.value) //Converterá variável em número
        var c = 1 //Criar variável para ser contador
        most.innerHTML = ` ` //Limpar resultado cada vez que gerar nova tabuada
        while (c <= 10) {
            var item = document.createElement('option') //Criar uma variável 'item' no 'option' do html
            item.text = `${n} X ${c} = ${n*c}` //Mostrar na variável 'item'
            //item.value = `tab${c}` //Valor de cada item (não está sento usado)
           tab.appendChild(item) //Anexar valor do 'item' na id 'tad' do html
            c++   //Contador (c = c + 1)
        }
        }
    }







