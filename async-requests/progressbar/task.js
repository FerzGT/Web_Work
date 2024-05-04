const progress = document.getElementById('progress')

document.forms.form.addEventListener('submit', (event) => {
    event.preventDefault()
    const xhr = new XMLHttpRequest()
    xhr.upload.addEventListener('progress', (item) => {
    progress.value = (item.loaded / item.total)
    })
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload')
    const formData = new FormData(document.forms.form)
    xhr.send(formData)
})