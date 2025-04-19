const inputStr = "O imc de Fred é 25.3. O imc de Maria é 20.2. O imc de Ana é 15.5. O imc de Paulo é 32.4"


//1
const processarStringPacientes = (input) => {
    listaInput = input.match(/O imc de [A-Za-z]+ é \d+(\.\d+)?/g)
    regInput = listaInput.map(str => { 
        const [,nome,imc] = str.match(/O imc de (\w+) é (\d+(\.\d+)?)/)
        return {nome, imc: parseFloat(imc)}
    })
    return regInput
} 

const inputLista = processarStringPacientes(inputStr)

//2

//metodo simples
const ordenarPacientesPorIMC = (lista) => [...lista].sort((a,b) => a.imc - b.imc)

//metodo complexo
/*const ordenarPacientesPorIMC = (lista) => [...lista].sort((a,b) =>{
    if (a.imc < b.imc) return -1;
    if (a.imc > b.imc) return 1;
    return 0
}*/

//3

const maiorEmenorIMC = (lista) => {
    const pacientesOrdenados = [...lista].sort((a,b) => a.imc - b.imc)
    })

    return {maior: pacientesOrdenados[pacientesOrdenados.length-1].nome, menor: pacientesOrdenados[0].nome} 
}

/* solução de hendrik

const maiorEmenorIMC = (pacientes) => {
  const temp = pacientes.reduce((acc, paciente) => {
  if (paciente.imc > acc.maior.imc) acc.maior = paciente;
  if (paciente.imc < acc.menor.imc) acc.menor = paciente;
  return acc;
}, { maior: pacientes[0], menor: pacientes[0] })
  return {maior: temp.maior.nome, menor: temp.menor.nome};
}

*/

//4

const classificarPacientes = (lista) => {
    return lista.map((x) => {
        if (x.imc < 18.5) return {nome: x.nome, imc: x.imc, risco: "Baixo Peso"}
        if (x.imc >= 18.5 && x.imc < 24.9) return {nome: x.nome, imc: x.imc, risco: "Peso normal"}
        if (x.imc >= 24.9 && x.imc < 29.9) return {nome: x.nome, imc: x.imc, risco: "Sobrepeso"}
        else return {nome: x.nome, imc: x.imc, risco: "Obesidade"}

    })
}


//5

const calcularMediaIMC = (lista) => lista.reduce((acc,x) => (acc+ x.imc), 0)/ lista.length


//TESTES

//Funcionalidade 1
console.log('\nFuncionalidade 1');
const pacientesprocessados = processarStringPacientes(inputStr);
console.log(pacientesprocessados);
//Funcionalidade 2
console.log('\nFuncionalidade 2');

console.log(ordenarPacientesPorIMC(inputLista));
//Funcionalidade 3

console.log('\nFuncionalidade 3');
console.log(classificarPacientes(inputLista));
//Funcionalidade 4

console.log('\nFuncionalidade 4');
console.log(maiorEmenorIMC(inputLista));
//Funcionalidade 5

console.log('\nFuncionalidade 5');
console.log(calcularMediaIMC(inputLista));
//Prova de que a lista original não foi alterada

console.log('\nLista original');
console.log(inputLista);