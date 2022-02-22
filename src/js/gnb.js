var gnbNav = document.querySelector('.gnbNav');
var gnbLis = document.querySelectorAll('.gnbLi');
var mobileLis = document.querySelectorAll('.mobileLi');

function handleScroll() {
  const bodyCoords = document.body.getBoundingClientRect();
  const bodyWidth = bodyCoords.width;
  if (bodyWidth <= 1024) {
    if (window.scrollY >= 52) {
      gnbNav.classList.add('scrolled');
      document.body.style.paddingTop = gnbNav.offsetHeight + 'px';
    } else {
      gnbNav.classList.remove('scrolled');
      document.body.style.paddingTop = 0;
    }
  } else {
    if (window.scrollY > 1) {
      gnbNav.classList.add('scrolled');
    } else {
      gnbNav.classList.remove('scrolled');
      document.body.style.paddingTop = 0;
    }
  }
}

function handleScrollUp(startPoint, endPoint) {
  var distance = startPoint + 1;
  var scroller = setInterval(function () {
    distance -= Math.ceil(distance * 0.05);
    window.scrollTo(0, distance);
    if (distance <= endPoint) {
      clearInterval(scroller);
      return;
    }
  }, 5);
}
function handleScrollDown(startPoint, endPoint) {
  var distance = startPoint + 1;
  var scroller = setInterval(function () {
    distance += Math.ceil(distance * 0.05);
    window.scrollTo(0, distance);
    if (distance >= endPoint) {
      clearInterval(scroller);
      return;
    }
  });
}

function handleClickToScroll(e) {
  e.preventDefault();
  var startPoint = window.scrollY;
  //   var videoCoords = video.getBoundingClientRect();
  //   var classCoords = flowerClass.getBoundingClientRect();
  if (e.target.innerText === '동영상') {
    // var toScrollY = videoCoords.y;
    if (startPoint < 500) {
      handleScrollDown(startPoint, 500);
    } else {
      handleScrollUp(startPoint, 500);
    }
  }
  if (e.target.innerText === '플라워클래스') {
    // var toScrollY = classCoords.y;
    if (startPoint < 900) {
      handleScrollDown(startPoint, 900);
    } else {
      handleScrollUp(startPoint, 900);
    }
    return;
  }
}

for (let i = 0; i < gnbLis.length; i++) {
  gnbLis[i].addEventListener('click', handleClickToScroll);
}
for (let i = 0; i < mobileLis.length; i++) {
  mobileLis[i].addEventListener('click', handleClickToScroll);
}
window.addEventListener('scroll', handleScroll);
