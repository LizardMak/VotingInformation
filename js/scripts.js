window.onload = function() {
  let form = document.querySelector('form');
  form.onsubmit = function(e) {
    const inputAge = parseInt(document.getElementById("inputAge").value);
    e.preventDefault();
    if (inputAge >= 18) {
      let voterInfo = document.getElementById("legalAge");
      voterInfo.removeAttribute("class");
    } else {
      let clownMusic = document.getElementById("illegalAge");
      clownMusic.removeAttribute("class");
    }
  }
}