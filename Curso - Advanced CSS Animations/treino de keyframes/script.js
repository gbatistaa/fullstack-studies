const div = document.getElementsByClassName('caixas')
const teste = document.getElementsByClassName('teste')
const slice = document.getElementById('slice')
const btn = document.getElementById('animation')

btn.value = true

//função de alternância de valor de um elemento

const putX = (element) => (div) => {
    if (element.value === 'true') {
        div.innerText = 'X'
        element.value = false
    } else {
        div.innerText = 'O';
        element.value = true;
    };
};

//função currificada da anterior

const putXinDiv = putX(btn);

//evento de clique para acionar a animação:

btn.addEventListener("click", (e) => {
    slice.style.animation = 'anima 1s ease-out';
    console.log(slice.id);
    setTimeout(() => {
        slice.style.height = '280px';
        slice.style.backgroundColor = 'blue';
    }, 100)
});


//mudança de nome de classe:

console.log(teste['0'].className)
teste['0'].className = 'teste mudada'
console.log(teste['0'].className)

//laço para executar a alternância do valor do botão e também o acesso dos itens de um objeto de classe HTML
//pode ser substituido por uma função recursiva com contador;

for (const key in div) {
    if (key < 9) {
        div[key].addEventListener("click", putXinDiv(div[key]))
    }
};