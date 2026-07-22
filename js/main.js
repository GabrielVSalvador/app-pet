const locais = [
    "Praça Getúlio Vargas",
    "Parque das Flores",
    "Praça 1 de Maio",
    "Parque Municipal",
    "Lago da Saudade",
    "Praça do Suspiro"
];

const campoBusca = document.getElementById("campoBusca");
const listaSugestoes = document.getElementById("listaSugestoes");

campoBusca.addEventListener("input", () => {
    const termoBusca = campoBusca.value.toLowerCase();
    listaSugestoes.innerHTML = "";

    if (termoBusca) {
        const sugestoesFiltradas = locais.filter(local => local.toLowerCase().includes(termoBusca));
        sugestoesFiltradas.forEach(sugestao => {
            const li = document.createElement("li");
            li.innerHTML = `<i class="fa-solid fa-search"></i> ${sugestao}`;
            listaSugestoes.appendChild(li);
        });
    } else {
        locais.slice(0, 3).forEach(local => {
            const li = document.createElement("li");
            li.innerHTML = `<i class="fa-solid fa-clock history-icon"></i> ${local}`;
            listaSugestoes.appendChild(li);
        });
    }
});