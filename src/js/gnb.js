var gnbNav = document.querySelector('.gnbNav');
var gnbLis = document.querySelectorAll('.gnbLi');
function handleScroll() {
  if (window.scrollY > 1) {
    gnbNav.classList.add('scrolled');
  } else {
    gnbNav.classList.remove('scrolled');
  }
}
function handleClickToScroll(e) {
  e.preventDefault();
  var distance = window.scrollY;
  //   const videoCoords = video.getBoundingClientRect();
  //   const classCoords = flowerClass.getBoundingClientRect();
  if (e.target.innerText === '동영상') {
    // const toScrollY = videoCoords.y;
    // window.scrollTo(0, toScrollY);
    var scrollMove = setInterval(function () {
      if (distance < 500) {
        distance += 10;
        window.scrollTo(0, distance);
        if (distance >= 500) {
          clearInterval(scrollMove);
        }
      } else {
        distance -= 10;
        window.scrollTo(0, distance);
        if (distance <= 500) {
          clearInterval(scrollMove);
        }
      }
    }, 5);
    return;
  }
  if (e.target.innerText === '플라워클래스') {
    e.preventDefault();
    var distance = window.scrollY;
    // const toScrollY = classCoords.y;
    // window.scrollTo(0, toScrollY);
    var scrollMove = setInterval(function () {
      if (distance < 900) {
        distance += 10;
        window.scrollTo(0, distance);
        if (distance >= 900) {
          clearInterval(scrollMove);
        }
      } else {
        distance -= 10;
        window.scrollTo(0, distance);
        if (distance <= 900) {
          clearInterval(scrollMove);
        }
      }
    }, 5);
    return;
  }
}
for (let i = 0; i < gnbLis.length; i++) {
  gnbLis[i].addEventListener('click', handleClickToScroll);
}
window.addEventListener('scroll', handleScroll);
