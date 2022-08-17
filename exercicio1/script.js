
// let conta = 2.50

// while(desejaMais === "S"){ 
//     conta = conta+2.50
//     desejaMais = prompt('Deseja comer mais coxinha ?\n Digite S para siim \nDigite N para não').toUpperCase()

// }
// alert(conta)



let question = prompt('Deseja comer mais coxinhas?\n Sim = S\n Não = N').toUpperCase()
let count = 0

while (question !== 'N' || question === 'S') {
    question === 'S' ? count += 2.5 : console.log('Dígito inválido.')
    question = prompt('Deseja comer mais coxinhas?\n Sim = S\n Não = N').toUpperCase()
}
console.log(count);