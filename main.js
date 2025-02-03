/*
Zmiana koloru po ruszaniu myszką

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
*/

document.body.addEventListener("click", (e) => {
  const x = e.clientX;
  const y = e.clientY;

  const getColor = (x, y) => {
    if (x % 2 === 0 && y % 2 === 0) {
      return "red";
    } else if (x % 2 === 0) {
      return "orange";
    } else if (y % 2 === 0) {
      return "blue";
    } else {
      return "silver";
    }
  };
  const color = getColor(x, y);

  console.log(x, y);
  document.body.style.backgroundColor = color;
});
