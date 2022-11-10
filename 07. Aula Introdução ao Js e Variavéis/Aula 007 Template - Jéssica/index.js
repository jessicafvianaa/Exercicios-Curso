//Primeira Aula sobre JS.

console.log("Bom dia!")

//prompt("Qual é o seu nome?")

const nome = "Jessica Fonseca"
console.log(nome)

let idade = 27
idade = 28
console.log(idade)

console.log ("Olá!", "meu nome é", nome, "minha idade é", idade,)

//variavel boleana - true ou false
let temPet = true
console.log(temPet)

const nomePet = null 
console.log("o nome do pet é;", nomePet)

//Verificar Tipos
console.log("o tipo do nome é:", typeof(nome))
console.log("o tipo da idade é:", typeof (idade))
console.log("o tipo da temPet é?", typeof (temPet)
console.log(typeof(nomePet))



const nomePrompt = prompt("Qual é o seu nome?")
console.log(nomePrompt)

let idade = prompt("Qual é a sua idade")
console.log(idade)

console.log(typeof(nomePrompt))
console.log(typeof(idade))

//Conversão de tipo string -> number
idade = Number (idade)
console.log(typeof(idade)) //number

//Conversão de tipo Number -> String
let numero = 10
console.log(typeof(numero)) //number

numero = String(numero) // converti tipo number para tipo String
console.log(typeof(numero), numero) //


//variaveis exércício
const objeto = "celular"; let tamanho = 7; let corBranca = true 

//verifando tipos 
console.log(typeof objeto); console.log(typeof tamanho); console.log(typeof corBranca)

//Frase
console.log("O objeto é um?", objeto, "Que mede", tamanho, "Da cor branca", corBranca)

let a = 30
let b = 20
let c = undefined
console.log(a, b, c)

c = a 
a = b
b = c

console.log(a, b, c )


