'use strict';

var gnbNav = document.querySelector('.gnbNav');
var gnbLis = document.querySelectorAll('.gnbLi');
var mobileLis = document.querySelectorAll('.mobileLi');
var video = document.querySelector('#video-section');
var flowerClass = document.querySelector('#class-section');

function handleScroll() {
  var bodyCoords = document.body.getBoundingClientRect();
  var bodyWidth = bodyCoords.width;
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
  var adder = 1;
  var scroller = setInterval(function () {
    if (distance <= endPoint + 1) {
      clearInterval(scroller);
      window.scrollTo(0, endPoint);
      return;
    }
    adder *= 1.08;
    distance -= adder;
    window.scrollTo(0, distance);
  }, 5);
}
function handleScrollDown(startPoint, endPoint) {
  var distance = startPoint + 1;
  var scroller = setInterval(function () {
    if (distance >= endPoint) {
      clearInterval(scroller);
      window.scrollTo(0, endPoint);
      return;
    }
    distance += Math.ceil(distance * 0.05);
    window.scrollTo(0, distance);
  });
}

function handleClickToScroll(e) {
  e.preventDefault();
  var startPoint = window.pageYOffset;

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

for (var i = 0; i < gnbLis.length; i++) {
  gnbLis[i].addEventListener('click', handleClickToScroll);
}
for (var _i = 0; _i < mobileLis.length; _i++) {
  mobileLis[_i].addEventListener('click', handleClickToScroll);
}
window.addEventListener('scroll', handleScroll);