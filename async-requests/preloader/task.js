const item = document.querySelector('.item')
const loader = document.querySelector('.loader_active')
let xhr = new XMLHttpRequest()

xhr.addEventListener('load', () => {
    if (xhr.readyState === xhr.DONE) {
        let array = xhr.response.response.Valute        
        for (let i in array) {
            let charCode = array[i]['CharCode']
            let value = array[i]['Value']
            item.insertAdjacentHTML('beforebegin',
            `<div class="item">
                <div class="item__code">${charCode}</div>
                <div class="item__value">${value}</div>
                <div class="item__currency">руб.</div>
            </div>`
        )
        loader.classList.remove('loader_active')
        }
    }
})
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses')
xhr.responseType = 'json'
xhr.send()