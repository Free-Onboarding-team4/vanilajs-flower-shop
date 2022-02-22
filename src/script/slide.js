'use strict';

var mainClass = document.querySelector('.main-class');
var subClass = document.querySelectorAll('.sub-class');
var prev = document.querySelector('.btn-prev');
var next = document.querySelector('.btn-next');

var classInfo = [{
  name: '취미 클래스',
  period: '4주 과정',
  price: '299,000원',
  branch: ['잠실점', '월계점', '구로점', '송파점', '부산동래점'],
  image: 'https://kukka-2-media-123.s3.amazonaws.com/media/class-name/ContentsTopBanner/3/class_2022_home_mob_okfoQzB.jpeg',
  link: '#'
}, {
  name: '오아시스 리스',
  period: '2/21~2/27',
  price: '79,000원',
  branch: ['광화문점', '잠실점', '월계점', '구로점', '송파점', '부산동래점'],
  image: 'https://kukka-2-media-123.s3.amazonaws.com/media/class-name/ClassProductGroup/106/img_%EC%98%A4%EC%95%84%EC%8B%9C%EC%8A%A4-%EB%A6%AC%EC%8A%A4.jpg',
  link: '#'
}, {
  name: '클래식 핸드타이드',
  period: '2/28~3/6',
  price: '79,000원',
  branch: ['잠실점', '월계점', '구로점', '송파점', '부산동래점'],
  image: 'https://kukka-2-media-123.s3.amazonaws.com/media/class-name/ClassProductGroup/107/img_%ED%81%B4%EB%9E%98%EC%8B%9D-%ED%95%B8%EB%93%9C%ED%83%80%EC%9D%B4%EB%93%9C.jpg',
  link: '#'
}];

prev.addEventListener('click', function (e) {
  var last = classInfo.pop();
  classInfo.unshift(last);
  printInfo();
});

next.addEventListener('click', function (e) {
  var first = classInfo.shift();
  classInfo.push(first);
  printInfo();
});

function printInfo() {
  // Change mainClass Info
  var mainClassName = mainClass.querySelector('.main-class-txt span');
  mainClass.href = classInfo[0].link;
  mainClass.style.backgroundImage = 'url(' + classInfo[0].image + ')';
  mainClassName.innerText = classInfo[0].name;

  // Change subClass Info
  for (var i = 0; i < subClass.length; i++) {
    var thumbnail = subClass[i].querySelector('.thumbnail');
    var subClassName = subClass[i].querySelector('.class-info .name a');
    var price = subClass[i].querySelector('.class-info .price');
    var branch = subClass[i].querySelector('.branch-tag');
    var info = classInfo[i + 1];

    thumbnail.href = info.link;
    thumbnail.children[0].style.backgroundImage = 'url(' + info.image + ')';
    subClassName.innerText = info.name + '(' + info.period + ')';
    price.innerText = info.price;
    createTags(branch, info.branch);
  }
}

function createTags(tagContainer, tagArray) {
  tagContainer.innerHTML = '';
  for (var i = 0; i < tagArray.length; i++) {
    var tag = document.createElement('li');
    var name = getTagName(tagArray[i]);
    tag.innerText = tagArray[i];
    tag.classList.add('tag');
    tag.classList.add(name);
    tagContainer.appendChild(tag);
  }
}

function getTagName(tags) {
  var tagName = '';
  switch (tags) {
    case '광화문점':
      tagName = 'tag-ghm';
      break;
    case '잠실점':
      tagName = 'tag-js';
      break;
    case '월계점':
      tagName = 'tag-wg';
      break;
    case '구로점':
      tagName = 'tag-gr';
      break;
    case '송파점':
      tagName = 'tag-sp';
      break;
    case '부산동래점':
      tagName = 'tag-bdr';
      break;
    default:
      throw new Error('Invalid tag name: ' + tagName);
  }
  return tagName;
}

printInfo();