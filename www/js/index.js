
var form = document.querySelector("#form")


var calcul = function (e) {
    e.preventDefault()
    var op1 = document.querySelector(".operande1")
    var op2 = document.querySelector(".operande2")
    var op = document.querySelector("#operation")
    var result = document.querySelector(".result")
    //console.log(parseInt(op1.value))
    switch(op.value){
        case 'plus': result.value = parseInt(op1.value, 10)+ parseInt(op2.value, 10); break
        case 'moins': result.value = parseInt(op1.value, 10)- parseInt(op2.value, 10); break
        case 'fois': result.value = parseInt(op1.value, 10) * parseInt(op2.value, 10); break
        case 'div': result.value = parseInt(op1.value, 10)/parseInt(op2.value, 10); 
    }



}

form.addEventListener("submit",calcul)
