let playlist = [
    "Numb",
    "In The End",
    "Enter Sandman",
    "Fear of the Dark",
    "Breaking the Law",
    "Master of Puppets",
    "The Trooper",
    "Paranoid"
];

console.log ("Playlist atual: " + playlist.join(", "));
console.log ("Opções:");
console.log (" 1 - Pesquisar música")
console.log (" 2 - Criar seleção")
console.log (" 3 - Remover música")
console.log (" 4 - Inserir música")
console.log (" 5 - Ordenar A-Z")
console.log (" 6 - Inverter playlist")
console.log (" 7 - Exibir playlist")
console.log (" 8 - Exibir playlist completa")
console.log (" 0 - Sair")

let opcao = 1


if (opcao = 1) {console.log ("Qual músicsa você quer ouvir? Digiet abaixo..");

if (playlist.includes("Fear of the Dark")) {
    console.log ("Música encontrada! Na posição: " + playlist.indexOf("Fear of the Dark"));
} 

else {
    console.log ("Música não encontrada!");
}
}

else if (opcao = 2) { 
    console.log ("Informe duas posições da playlist para criar uma nova playlist:")

        let posicoes = playlist.slice(1, 4);

    console.log ("Nova playlist criada: " + posicoes);
}

else if (opcao = 3) {
    console.log ("Vamos remover uma música da playlist. Digite a música que deseja remover: ");

        playlist.splice("Breaking the Law", 1);
    
    console.log ("Playlist atualizada: " + playlist);
}

else if (opcao = 4) {
        console.log ("vamos adicionar uma música. Digite o nome da música que deseja adicionar: ");

    let novamusica = "Billie jean";

        console.log ("Informe a posição que deseja adicionar a música: ");

    playlist.splice(2, 0, novamusica);

        console.log ("Playlist atualizada: " + playlist);
}

else if (opcao = 5) {
    console.log ("Playlist em ordem alfabética:");
    console.log (playlist.sort());
}

else if (opcao = 6) {
    console.log ("Playlist invertida:");
    console.log (playlist.reverse());
}

else if (opcao = 7) {
    console.log ("transformando em string:");
    console.log (playlist.join("|"));
}

else if (opcao = 8) {
    console.log ("==== Minha Playlist ====");
    console.log (playlist.join(", "));
}

else {
    console.log ("Você saiu")
}