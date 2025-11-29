const btnAdd = document.getElementById("btnAdd");
const input = document.getElementById("novaTarefa");
const lista = document.getElementById("lista");

btnAdd.addEventListener("click", adicionarTarefa);
input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") adicionarTarefa();
});

function adicionarTarefa() {
    const texto = input.value.trim();
    if (!texto) return;

    const li = document.createElement("li");

    li.innerHTML = `
        <span class="texto">${texto}</span>
        <div>
            <button class="status-btn btn-status">Em andamento</button>
            <button class="status-btn btn-remover">X</button>
        </div>
    `;

    lista.appendChild(li);
    input.value = "";
    input.focus();

    li.querySelector(".btn-status").addEventListener("click", function () {
        li.classList.toggle("concluida");
        this.textContent = li.classList.contains("concluida")
            ? "Concluída"
            : "Em andamento";
    });

    li.querySelector(".btn-remover").addEventListener("click", function () {
        li.classList.add("fade-out");
        setTimeout(() => li.remove(), 150);
    });
}
