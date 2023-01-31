const som = document.querySelector('#som')
const usd = document.querySelector('#usd')
const euro = document.querySelector('#euro')

const convert = (elem, target, isTrue) =>{
    elem.addEventListener('input', ()=>{
        fetch("data.json")
            .then(request => request.json())
            .then(data => {
            if (elem === som) {
                target.value = (elem.value / data.usd).toFixed(2)
                isTrue.value = (elem.value / data.euro).toFixed(2)
            }else if (elem === usd) {
                isTrue.value = (elem.value * data.usd).toFixed(2)
                target.value = (elem.value * data.usd / data.euro).toFixed(2)
            }else if (elem === euro) {
                target.value = (elem.value * data.euro).toFixed(2)
                isTrue.value = (elem.value * data.euro / data.usd).toFixed(2)
            }
            elem.value === '' ? (target.value = '') : null
            elem.value === '' ? (isTrue.value = '') : null
        })
    })
}
convert (som, usd, euro, 42)
convert (euro, som, usd, '')
convert(usd, euro, som, "" );

///////////////////////////////////////////////////////////////////////////
let button = document.querySelector(".btn")
let items = document.querySelector(".items")

button.onclick = () => {
    fetch("son.json")
        .then(baitik => baitik.json())
        .then(data => {
            data.forEach(item => {
                const div = document.createElement('div')
                div.innerHTML = `
               <div class="card">
                    <img src="${item.img}">
                    <h2>${item.name}</h2>
                    <span>${item.price}</span>
               </div>
               `
                items.append(div)
            })
        })
}