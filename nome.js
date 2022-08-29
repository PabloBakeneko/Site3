let userLogado = JSON.parse(localStorage.getItem('userLogado'))

let logado = document.querySelector('#nome')

logado.innerHTML = `${userLogado.nome}`