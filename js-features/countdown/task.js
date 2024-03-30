function start(timer) {
  timer = document.getElementById('timer').textContent;
  if (timer == '59') {
    timer = '00:00:58';
    document.getElementById('timer').textContent = timer;
  } else if (timer != '00:00:00') {
    timer = timer.split(':');
    hour = timer[0];
    minute = timer[1];
    second = timer[2] - 1;
    second = (second < 10) ? "0" + second : second;
    document.getElementById('timer').textContent = `${hour}:${minute}:${second}`;
  } else {
    clearInterval(start);
    return alert('Вы победили в конкурсе!');
  };
}
setInterval (start, 1000);