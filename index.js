let nomeHeroi = "Renata";
let xpHeroi = 10000;
let nível ="";

if (xpHeroi <= 1000) {
    nível = "Ferro";
} 
else if (xpHeroi <= 2000) {
    nível = "Bronze";
} else if (xpHeroi <= 5000) {
    nível = "Prata";
} else if (xpHeroi <= 7000) {
    nível = "Ouro";
} else if (xpHeroi <= 8000) {
    nível = "Platina";
} else if (xpHeroi <= 9000) {
    nível = "Ascendente";
} else if (xpHeroi <= 10000) {
    nível = "Imortal";
} else {
    nível = "Radiante";
}

console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nível}`);