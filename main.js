const $image = document.querySelector("#image");

function cat() {
  fetch("https://api.thecatapi.com/v1/images/search")
    .then((response) => response.json())
    .then((date) => {
      let img = date[0].url;
      $image.setAttribute("src", img);
    });
}
