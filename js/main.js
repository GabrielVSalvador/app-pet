const passeadores = [
    {nome: "João", avaliacao: 4.5, disponivel: true},
    {nome: "Maria", avaliacao: 4.8, disponivel: false},
    {nome: "Carlos", avaliacao: 4.2, disponivel: true}
]

passeadores.forEach(function(passeador, indice) {
    console.log(`${indice + 1}. ${passeador.nome}`);
    console.log(`Avaliação: ${passeador.avaliacao}`);
    console.log(`Disponível: ${passeador.disponivel}`);
});