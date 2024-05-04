const pollTitleElement = document.getElementById("poll__title");
const pollAnswersElement = document.getElementById("poll__answers");
const url = "https://students.netoservices.ru/nestjs-backend/poll"

let xhr = new XMLHttpRequest();


xhr.open("GET", url);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send();

xhr.onreadystatechange = function() {
  if (xhr.readyState === xhr.DONE) {
      xhrText = JSON.parse(xhr.responseText);

      pollTitleElement.innerHTML = ` ${xhrText.data.title}`;
      pollAnswersElement.innerHTML = "";

      for(let item of xhrText.data.answers) {
      pollAnswersElement.innerHTML +=
          `<button class="poll__answer">
              ${item}
          </button>
          `
      }

      buttonElement = Array.from(pollAnswersElement.querySelectorAll("button"));

  }
  function func(index) {

    let xhrOpen = new XMLHttpRequest();
    xhrOpen.open('POST', url);
    xhrOpen.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhrOpen.send(`vote=${xhrText.id}&answer=${index}`);

    xhrOpen.onreadystatechange = function () {
        if (xhrOpen.readyState === xhr.DONE) {
            xhrOpenText= JSON.parse(xhrOpen.responseText);
            pollAnswersElement.innerHTML = "";
            for (let item of xhrOpenText.stat) {
                pollAnswersElement.innerHTML +=
                    `<div>
               ${item.answer} : ${item.votes}
            </div>`;
            }
        }
    }
}

buttonElement.forEach((elem, index) => {
    elem.addEventListener("click", () => {
        func(index);
        alert("Спасибо, Ваш голос засчитан");
    })
});

}