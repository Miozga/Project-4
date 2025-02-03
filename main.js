document.body.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;
  const width = window.innerWidth;
  const height = window.innerHeight;

  // console.log(e.clientX, e.clientY);
  document.querySelector("h1").textContent = `${x}, ${y}`;

  const red = (x / width) * 100;
  const green = (y / height) * 100;
  const blue = (x / width) * 100 + ((y / height) * 100) / 2;
  //ustawienia nasłuchiwania zdarzenia ruchu myszką i przypisana funkcja do tego zdarzenia
  document.body.style.backgroundColor = `rgb(${red}%, ${green}%, ${blue}%)`;
});
