const som = document.querySelector('#som')
const usd = document.querySelector('#usd')
const euro = document.querySelector('#euro')

const convert = (elem, target, isTrue) =>{
    elem.addEventListener('input', ()=>{
        const request = new XMLHttpRequest()
        request.open ('GET', 'data.json')
        request.setRequestHeader('Content-type', 'application/json')
        request.send()
        request.addEventListener('load', ()=>{
            const data = JSON.parse(request.response)
            if (elem === som) {
                target.value = (elem.value / data.euro).toFixed(2)
                isTrue.value = (elem.value / data.usd).toFixed(2)
            }else if (elem === usd) {
                target.value = (elem.value * data.usd).toFixed(2)
                isTrue.value = (elem.value * data.usd / data.euro).toFixed(2)
            }else if (elem === euro) {
                target.value = (elem.value * data.euro).toFixed(2)
                isTrue.value = (elem.value * data.euro  / data.usd).toFixed(2)
            }
            elem.value === '' ? (target.value = '') : null
            elem.value === '' ? (isTrue.value = '') : null
        })
    })
}
convert (som, usd, euro, 42)
convert (usd, som, euro, '')
convert(euro, som, usd, "" )