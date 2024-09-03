/*
Lista de tarefas
- Saber quando o botao foi clicado
- Pegar o texto do input
- Colocar o texto na tela
- deletar a tarefa da tela(quando clicar no "x")
 */

function adicionarTarefa() {
    let valorDoInput = document.querySelector("input").value

    let li = document.createElement("li")
    li.innerHTML = valorDoInput + '<span onclick="deletarTarefa(this)">❌</span>'

    document.querySelector("ul").appendChild(li)

    document.querySelector("input").value = ''
}

function deletarTarefa(li) {
    li.parentElement.remove()
}