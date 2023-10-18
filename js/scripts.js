window.onload = function () {
  let form = document.querySelector('form');
  form.onsubmit = function (e) {
    const inputAge = parseInt(document.getElementById("inputAge").value);
    e.preventDefault();
    if (inputAge >= 18) {
      let voterInfo = document.getElementById("legalAge");
      let clownMusic = document.getElementById("illegalAge");
      clownMusic.setAttribute("class", "hidden")
      voterInfo.removeAttribute("class");
    } else {
      let clownMusic = document.getElementById("illegalAge");
      let voterInfo = document.getElementById("legalAge");
      voterInfo.setAttribute("class", "hidden")
      clownMusic.removeAttribute("class");
    }
  }
}