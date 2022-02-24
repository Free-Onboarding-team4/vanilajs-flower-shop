# 꽃 쇼핑몰 웹 페이지

## 프로젝트 소개

> Vanila JavaScript만을 활용하여 꽃 쇼핑몰 페이지를 구현하였습니다.

| 팀 구성 | 담당                  |
| ------- | --------------------- |
| 이현호  | Footer, iframe 동영상 |
| 박훈주  | GNB                   |
| 윤창현  | 배너, 팝업창          |
| 이주영  | 플라워클래스 섹션     |

### member

<table>
  <tr>
        </td>
      <td align="center">
      <a href="https://github.com/LEEHYUNHO2001"
        ><img
          src="https://avatars.githubusercontent.com/LEEHYUNHO2001"
          width="100px;"
          alt=""
        /><br /><sub><b>이현호</b></sub></a>
    <br />
    </td>
    <td align="center">
      <a href="https://github.com/hoonjoo-park"
        ><img
          src="https://avatars.githubusercontent.com/hoonjoo-park"
          width="100px;"
          alt=""
        /><br /><sub><b>박훈주</b></sub></a
      ><br />
    </td>
    <td align="center">
      <a href="https://github.com/Yoon-CH"
        ><img
          src="https://avatars.githubusercontent.com/Yoon-CH"
          width="100px;"
          alt=""
        /><br /><sub><b>윤창현</b></sub></a
      ><br />
    </td>
    <td align="center">
      <a href="https://github.com/devjoylee"
        ><img
          src="https://avatars.githubusercontent.com/devjoylee"
          width="100px;"
          alt=""
        /><br /><sub><b>이주영</b></sub></a
      ><br />
  </tr>
</table>

<br />

## 배포 주소

### [https://vanilajs-flower-shop.netlify.app](https://vanilajs-flower-shop.netlify.app)

<br />

## 사용 기술 및 스택

- Stack
  - JavaScript, HTML5, SCSS
  - Babel
  - Deploy : Netilfy
  - Other : Git / GitHub
  - Code Quality Tool (Prettier)

<br />

## 주요 기능 구현 설명

### GNB

- 미디어 쿼리를 활용하여 반응형 작업을 했습니다. 반응형은 총, 데스크탑, 태블릿, 모바일 세 개의 화면구조를 대상으로 삼아 제작했습니다.
- 스크롤 기능은 `offsetTop`, `window.scrollTo`, `window.scrollY` 등을 활용하여 제작했습니다.
- 애니메이션 효과를 주기 위해, `setInterval`을 사용했고, 해당 엘리먼트의 위치까지 스크롤이 닿으면 `clearInterval`을 통해 인터벌을 종료했습니다. 그리고, 곱셈연산을 통해 점점 빠르게 스크롤이 움직이도록 구현했습니다.
- 일정 거리만큼 스크롤이 내려갈 때, 헤더의 `position`이 `fixed`로 전환되어 스크롤을 따라다니도록 구현했습니다. 해당 기능 또한 `window.scrollY`, 그리고 `Element.offsetHeight` 기능을 활용했습니다.

### 메인 플라워클래스 슬라이드

- `classInfo` 라는 데이터를 만들어 이전, 다음 버튼 클릭 시 데이터 내부를 순회하며 값을 출력하도록 구현했습니다.
- 섹션 내부 지점 태그들은 `switch~case` 문을 사용하여 각 지점 이름에 맞는 클래스명을 추가함으로써 태그 스타일링을 하였습니다.
- 이전(`prev`) 버튼 클릭 시, 마지막 데이터를 `pop` 으로 추출한 후 첫번째값으로 `unshift`
- 다음(`next`) 버튼 클릭 시, 첫번째 데이터를 `shift` 로 추출한 후 마지막값으로 `push`

### 팝업 창

- 초기 HTML 문서를 완전히 불러오고 분석했을 때 발생하는 `DOMContentLoaded` 이벤트에 쿠키에 저장된 값을 확인하는 함수를 부여하였습니다.
- 최초 팝업 창에서 `오늘은 더 이상 보지 않기` 체크박스를 선택하면 그 기억된 값을 쿠키에 저장시키고 X 버튼을 눌러 팝업 창을 숨기게 하였습니다.
- 이를 통해 쿠키에 저장된 여부에 따라 하루동안 팝업을 보이지 않게하는 기능과 단순 제거 기능을 부여한 팝업 창을 구현했습니다.

<br />

## CRA 구조

```markdown
src
│
├─public
│ ├── css
│ └── index.html
│
└──src
├── images
├── js
├── script
│ └── cross
└── scss
```

<br />

## 커밋 컨벤션

깃모지를 사용하여 직관성을 높이고, 기능이나 UI 설계에 따른 메세지를 커밋 메세지에 담는것을 컨벤션으로 결정했습니다. 깃모지로 인해 상대방이 어떤 작업을 수행했는지 한 눈에 확인할 수 있고, 메세지를 보며 조금 더 상세한 상황을 파악할 수 있습니다.

| 깃모지 | 사용 예시               |
| ------ | ----------------------- |
| 🎉     | init                    |
| 🚚     | 디렉토리 또는 파일 이동 |
| ✨     | 기능 구현               |
| 💄     | CSS 스타일링            |
| ♻️     | 리팩토링                |
| 📝     | Readme 수정             |
| ➕     | 모듈 추가               |
| 🐛     | 버그 해결               |
| 🚑️    | 치명적인 오류 해결      |

<br />

## 과제 후기

### **이현호** 😎

여러가지의 이미지를 하나의 이미지 파일 안에 배치하여 이미지 로드 부담을 줄이는 CSS Sprite 를 사용했습니다. 프로젝트를 구현할 때, 이러한 효율 하나 하나를 생각하는 것이 개발자로서 더욱 성장시켜주는 계기가 된다는것을 다시한번 깨달았습니다.

### 윤창현 ✨

바닐라 자바스크립트를 이용하여 프로젝트를 진행하면서 기본기의 중요성을 다시 한 번 깨달았습니다. 그동안 새로운 기술과 react에 중점을 두었다면, 앞으로는 프론트엔드 개발자로서 기본기에 중심을 두고 공부를 하고 탄탄하게 성장해야겠다는 다짐을 하게 되는 시간이었습니다.

### **박훈주** 🐳

오랜만에 바닐라 자바스크립트만을 활용한 프로젝트를 진행할 수 있어서 나름 즐거웠습니다. 하지만 IE8까지의 크로스브라우징을 고려하다 보니, Babel과 같은 트랜스파일러의 중요성, 그리고 브라우저 호환성의 중요성을 깨달을 수 있었습니다.

### **이주영 🍀**

Vanila JS로 페이지를 제작하면서 DOM을 다루는 방식에 대해 더 정확히 알게되었고 너무 프레임워크에 의존하지 말고 javascript를 꾸준히 공부해야겠다고 생각했습니다. 그 외에도 IE로 크로스 브라우징을 하면서 기존에 몰랐던 호환 방식에 대해 알 수 있었습니다.
