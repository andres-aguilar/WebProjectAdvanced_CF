document.querySelector(".menu").addEventListener('click', function() {
  document.querySelector(".menu-screen").classList.add("active");
});

document.querySelector(".close").addEventListener('click', function() {
  document.querySelector(".menu-screen").classList.remove("active");
});


let links = document.querySelectorAll(".menu-screen a");

links.forEach(link => {
  link.addEventListener('click', function() {
    document.querySelector(".menu-screen").classList.remove("active");
  });
});
