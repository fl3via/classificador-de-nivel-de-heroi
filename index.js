let nomeDoHeroi = "Batman"
let xpDoHeroi = 50000
let nivel = "ferro"

if (xpDoHeroi < 1000) {
    nivel = "FERRO"
    console.log("O Herói " + nomeDoHeroi + " está no nível de " + nivel)
} 
 
if (xpDoHeroi >= 1001 && xpDoHeroi <= 2000) {
    nivel = "BRONZE"
    console.log("O Herói " + nomeDoHeroi + " está no nível de " + nivel)
}

if (xpDoHeroi >= 2001 && xpDoHeroi <= 5000) {
    nivel = "PRATA"
    console.log("O Herói " + nomeDoHeroi + " está no nível de " + nivel)
}

if (xpDoHeroi >= 5001 && xpDoHeroi <= 7000) {
    nivel = "OURO"
    console.log("O Herói " + nomeDoHeroi + " está no nível de " + nivel)
}

if (xpDoHeroi >= 7001 && xpDoHeroi <= 8000) {
    nivel = "PLATINA"
    console.log("O Herói " + nomeDoHeroi + " está no nível de " + nivel)
}

if (xpDoHeroi >= 8001 && xpDoHeroi <= 9000) {
    nivel = "ASCENDENTE"
    console.log("O Herói " + nomeDoHeroi + " está no nível de " + nivel)
} 

if (xpDoHeroi >= 9001 && xpDoHeroi <= 10000) {
    nivel = "IMORTAL"
    console.log("O Herói " + nomeDoHeroi + " está no nível de " + nivel)
}

if (xpDoHeroi >= 10001 ) {
    nivel = "RADIANTE"
    console.log("O Herói " + nomeDoHeroi + " está no nível de " + nivel)
}