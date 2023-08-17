function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let formularioAno = document.getElementById(`ano`)
    let text = document.getElementById(`espaco`)
    if (formularioAno.value.length == 0 || formularioAno.value > ano){
        alert(`Verifique os dados e tente novamente!`)
    }
    else{
        let sexo = document.getElementsByName(`radsexo`)//como demos o mesmo nome para os dois por conta da caixinha de marcacao o radsexo 0 == masculiino e o radsexo 1 == feminino
        let idade = ano - Number(formularioAno.value)
        //resto.innerHTML = `Idade = ${idade}`
        let genero = ``
        let img = document.getElementById(`img`)
        if (sexo[0].checked){
            genero = `Homem`
            if(idade >=0 && idade < 10){
                //crianca
                img.src = `assets/bebeMenino.jpg`
            }else if(idade<21){
                //jovem
                img.src =`assets/jovemHomem.jpg`
            }else if(idade<50){
                //adulto
                img.src = `assets/adultoHomem.jpg`
            }else{
                //velho
                img.src = `assets/velhoHomem.jpg`
            }
        }else{
            genero = `Mulher`
            if(idade >=0 && idade < 10){
                //crianca
                img.src = `assets/bebeMenina.jpg`
            }else if(idade<21){
                //jovem
                img.src = `assets/jovemMulher.jpg`
            }else if(idade<50){
                //adulto
                img.src = `assets/adultoMulher.jpg`
            }else{
                //velho
                img.src = `assets/velhaMulher.jpg`
            }
        }
        text.innerHTML = `Detectamos ${genero} com ${idade} anos`
    }
}