




document.querySelector('.nav-toggle').addEventListener('click', function() {
    var navList = document.querySelector('.nav-list');
    var icon = document.querySelector('.nav-toggle i');
    if (navList.style.display === "block") {
      navList.style.display = "none";
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    } else {
      navList.style.display = "block";
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times');
    }
  });