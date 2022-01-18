// document = HTML이라고 생각하면 됨

const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function(){
    // searchEl을 클릭하면 InputEl을 포커스
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function(){
    // focused 클래스 추가
    searchEl.classList.add('focused');
    // html 속성 지정 placeholder = '통합검색'
    searchInputEl.setAttribute('placeholder','통합검색');
});

//blur = focus해제
searchInputEl.addEventListener('blur', function(){
    searchEl.classList.remove('focused');
    // html 속성 지정 placeholder = '통합검색'
    searchInputEl.setAttribute('placeholder','');
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 현재연도