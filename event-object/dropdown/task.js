const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach((dropdown) => {
  const valueElement = dropdown.querySelector('.dropdown__value');
  const listElement = dropdown.querySelector('.dropdown__list');

valueElement.addEventListener('click', () => {
    listElement.classList.toggle('dropdown__list_active');
  });

  listElement.addEventListener('click', (event) => {
    event.preventDefault();//Close link

    const selectedItem = event.target.closest('.dropdown__item');

    if (selectedItem) {
        valueElement.textContent = selectedItem.querySelector('.dropdown__link').textContent;
        listElement.classList.remove('dropdown__list_active');
    }
  });
});