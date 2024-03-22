
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };

  document.addEventListener("DOMContentLoaded", function() {
    var audio = document.getElementById("audio");
    audio.play();
});

