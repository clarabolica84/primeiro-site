const botao = document.getElementById("curtidas")
botao.addEventListener("click", aumentarCurtidas)

function aumentarCurtidas(){
    let curtidas = document.querySelector("span")
    curtidas.textContent++
}  