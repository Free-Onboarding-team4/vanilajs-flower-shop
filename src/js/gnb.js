var gnbNav = document.querySelector('.gnbNav');
var gnbLis = document.querySelectorAll('.gnbLi');
var mobileLis = document.querySelectorAll('.mobileLi');
var video = document.querySelector('.video-container');
var flowerClass = document.querySelector('.container');

function handleScroll() {
  const bodyCoords = document.body.getBoundingClientRect();
  const bodyWidth = bodyCoords.width;
  if (bodyWidth <= 1024) {
    if (window.scrollY >= gnbNav.offsetHeight) {
      gnbNav.classList.add('scrolled');
      document.body.style.paddingTop = gnbNav.offsetHeight + 'px';
    } else {
      gnbNav.classList.remove('scrolled');
      document.body.style.paddingTop = 0;
    }
  } else {
    if (window.scrollY >= 1) {
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

  if (e.target.innerText === '동영상') {
    var toScrollY = video.offsetTop - gnbNav.offsetHeight - 10;
    if (startPoint < toScrollY) {
      handleScrollDown(startPoint, toScrollY);
    } else {
      handleScrollUp(startPoint, toScrollY);
    }
  }
  if (e.target.innerText === '플라워클래스') {
    var toScrollY = flowerClass.offsetTop - gnbNav.offsetHeight - 90;
    if (startPoint < toScrollY) {
      handleScrollDown(startPoint, toScrollY);
    } else {
      handleScrollUp(startPoint, toScrollY);
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
