'use strict';

document.addEventListener('DOMContentLoaded', function () {
  checkCookie();
});

function closeWin() {
  if (document.getElementById('popup_close_check').checked) {
    setCookie('maindiv', 'done', 1);
  }
  document.getElementById('modal').style.display = 'none';
}

function setCookie(name, value, expiredays) {
  var todayDate = new Date();
  todayDate.setDate(todayDate.getDate() + expiredays);
  document.cookie = name + '=' + escape(value) + '; path=/; expires=' + todayDate.toGMTString() + ';';
}

function checkCookie() {
  if (getCookie('maindiv') == 'done') {
    document.getElementById('modal').style.display = 'none';
  } else {
    document.getElementById('modal').style.display = 'block';
  }
}

function getCookie(name) {
  var nameOfCookie = name + '=';
  var x = 0;
  while (x <= document.cookie.length) {
    var y = x + nameOfCookie.length;
    var endOfCookie = '';
    if (document.cookie.substring(x, y) == nameOfCookie) {
      if ((endOfCookie = document.cookie.indexOf(';', y)) == -1) endOfCookie = document.cookie.length;
      return unescape(document.cookie.substring(y, endOfCookie));
    }
    x = document.cookie.indexOf(' ', x) + 1;
    if (x == 0) break;
  }
  return '';
}