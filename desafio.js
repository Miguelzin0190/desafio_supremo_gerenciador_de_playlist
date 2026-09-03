let playlist = [
    'Numb',
    'In The End',
    'Enter Sandman',
    'Fear of the Dark',
    'Breaking the Law',
    'Master of Puppets',
    'The Trooper',
    'Paranoid',];

let opcao;

while (opcao != 0) {
    console.log('Spotify')
    console.log('1-pesquisar música')
    console.log('2-criar seleção')
    console.log('3-remover música')
    console.log('4-inserir música')
    console.log('5-ordenar em ordem alfabética')
    console.log('6-inverter playlist')
    console.log('7-mostrar playlist')
    console.log('0-sair')

    opcao = Number(prompt('escolha uma opção:'))

    if (opcao == 1) {
        let musica = prompt('escreva o nome da música:')
        if (playlist.includes(musica)) {
            let pos = playlist.indexOf(musica)
        console.log('a música ' + musica + ' existe na playlist na posição ' + pos)
        } else {
            console.log('a música não existe na playlist')
        }

    } else if (opcao == 2) {
        let pos1 = Number(prompt('digite a primeira posição:'))
        let pos2 = Number(prompt('digite a segunda posição:'))
        let selecao = playlist.slice(pos1, pos2 + 1)
        console.log('seleção:')
        console.log(selecao.join('/'))

    } else if (opcao == 3) {
        let pos = Number(prompt('digite a posição da música para remover:'))
        console.log('música que será removida: ' + playlist[pos])
        playlist.splice(pos, 1)
        console.log('música removida')

    } else if (opcao == 4) {
        let musica = prompt('escreva o nome da música:')
        let pos = Number(prompt('insira a posição onde inserir:'))
        playlist.splice(pos, 0, musica)
        console.log('música inserida')

    } else if (opcao == 5) {
        playlist.sort()
        console.log('playlist em ordem')

    } else if (opcao == 6) {
        playlist.reverse();
        console.log('playlist invertida')

    } else if (opcao == 7) {
        console.log(playlist.join('/'))

    } else if (opcao == 0) {
        console.log('saindo');

    } else {
        console.log('opção inválida')
    }
}