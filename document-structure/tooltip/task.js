const checkArr = Array.from(document.querySelectorAll('.has-tooltip'))

checkArr.forEach((check) => {
    check.addEventListener('click', (event) => {
        event.preventDefault()
        let activeEl = document.querySelector('.tooltip_active')
        if (activeEl == null || check.nextSibling.className != 'tooltip tooltip_active') {
            let divEl = document.createElement('div')
            divEl.classList.add('tooltip')
            divEl.classList.add('tooltip_active')
            divEl.setAttribute('style', `left: ${Math.round(check.getBoundingClientRect().left)}px; top: ${Math.round(check.getBoundingClientRect().bottom)}px`)
            divEl.textContent = check.getAttribute('title')
            check.after(divEl)
        } else {
            check.nextSibling.remove();
        }
        event.preventDefault()
    })
})
