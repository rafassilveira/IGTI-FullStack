window.addEventListener("load", () => {
  const timer = document.querySelector(".timer");
  timer.style.fontSize = "xx-large";
  let count = 0;
  const interval = setInterval(() => {
    timer.textContent = ++count;

    if (count === 10) {
      clearInterval(interval);
      return;
    }

    //mostrar ,5 no contador que é multiplo de 5 após 0,5s
    if (count % 5 === 0) {
      setTimeout(() => {
        timer.textContent = count + ",5";
      }, 500);
    }
  }, 1000);
});
