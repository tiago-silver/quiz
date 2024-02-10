
const perguntas = [
  {
    pergunta: "Qual é a palavra-chave utilizada para declarar uma variável que não pode ser alterada posteriormente?",
    respostas: [
      "let",
      "const",
      "var"
    ],
    correta: 1
  },
  {
    pergunta: "Qual função é usada para exibir uma mensagem de alerta ao usuário?",
    respostas: [
      "alert()",
      "confirm()",
      "prompt()"
    ],
    correta: 0
  },
  {
    pergunta: "Qual operador é utilizado para verificar se dois valores são iguais em valor e tipo?",
    respostas: [
      "==",
      "===",
      "="
    ],
    correta: 1
  },
  {
    pergunta: "Qual método é usado para adicionar um elemento ao final de um array?",
    respostas: [
      "push()",
      "append()",
      "addToEnd()"
    ],
    correta: 0
  },
  {
    pergunta: "Qual função é usada para converter uma string em um número inteiro?",
    respostas: [
      "parseInt()",
      "parseFloat()",
      "parseInteger()"
    ],
    correta: 0
  },
  {
    pergunta: "Qual dos seguintes métodos é usado para remover o último elemento de um array?",
    respostas: [
      "removeLast()",
      "pop()",
      "deleteLast()"
    ],
    correta: 1
  },
  {
    pergunta: "Qual operador é utilizado para concatenar strings em JavaScript?",
    respostas: [
      "&",
      "+",
      "||"
    ],
    correta: 1
  },
  {
    pergunta: "Qual função é usada para obter o comprimento de uma string?",
    respostas: [
      "length()",
      "size()",
      "length"
    ],
    correta: 2
  },
  {
    pergunta: "Qual dos seguintes é um tipo de dado primitivo em JavaScript?",
    respostas: [
      "Object",
      "Array",
      "String"
    ],
    correta: 2
  },
  {
    pergunta: "Qual método é usado para converter um número em uma string?",
    respostas: [
      "toString()",
      "stringify()",
      "numToString()"
    ],
    correta: 0
  }
];
//Capaturar os elemntos necessários 
const quiz = document.querySelector("#quiz")
const template = document.querySelector("template")
const acertos = document.querySelector("#acertos span")



const corretas = new Set()
const totalDePerguntas = perguntas.length


for(const item of perguntas){

  const quizItems = template.content.cloneNode(true)
  quizItems.querySelector("h3").textContent = item.pergunta

  //Adiciona as alternativas
  for(let respostas of item.respostas){
    const dt = quizItems.querySelector("dl dt").cloneNode(true)
    dt.querySelector("span").textContent = respostas
    //Adicionar na lista 
    
    dt.querySelector("input").setAttribute("name", "pergunta"+ perguntas.indexOf(item))

    dt.querySelector("input").value = item.respostas.indexOf(respostas)

    dt.querySelector("input").onchange = (event) => {
      const isTrue = event.target.value == item.correta
      
      corretas.delete(item)
      if(isTrue){
        corretas.add(item)
      }
      
      acertos.textContent = `Acertos: ${corretas.size} de ${totalDePerguntas}`
    }

    quizItems.querySelector("dl").appendChild(dt) 
  }

 
  quizItems.querySelector("dl dt").remove()

  //Adiciona as perguntas na tela
  quiz.appendChild(quizItems)
}









