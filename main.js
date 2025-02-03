document.body.addEventListener("mousemove", (e) => {
  // console.log(e.clientX, e.clientY);
  document.querySelector("h1").textContent = `${e.clientX}, ${e.clientY}`;

  //ustawienia nasłuchiwania zdarzenia ruchu myszką i przypisana funkcja do tego zdarzenia
  document.body.style.backgroundColor = `rgb(${e.clientX / 3}, ${
    e.clientY / 2
  }, ${(e.clientX / e.clientY) * 10})`;
});
