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

const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

// 브라우저 창을 의미
window.addEventListener('scroll',_.throttle(function(){
    console.log(window.scrollY);
    if(window.scrollY > 500){
        // 뱃지 사라지게
        //gsap.to(요소,지속시간,옵션)
        gsap.to(badgeEl,.6,{
            opacity:0, // display 속성은 중간값이 없기 때문에 opacity를 사용해서 서서히 사라지게 만듬
            display: 'none' // js이기 때문에 속성값은 ''으로 
        });
        // 버튼 보이기
        gsap.to(toTopEl, .2,{
            x: 0
        });
    }else{
        gsap.to(badgeEl,.6,{
            opacity:1,
            display: 'block'
        });
        // 버튼 숨기기
        gsap.to(toTopEl, .2,{
            x: 100
        });
    }
}, 300));
// _.throttle(함수, 시간);

toTopEl.addEventListener('click', function(){
    gsap.to(window, .7, {
        scrollTo:0
    });
});


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index){
    gsap.to(fadeEl,1,{
        delay:(index + 1) * .7, // 0.7 1.4 2.1 2.7
        opacity:1
    });
});

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper',{
    direction:'vertical',
    autoplay: true,
    loop:true
});

new Swiper('.promotion .swiper',{
    // 기본값은 horizental
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides: true,
    loop:true,
    autoplay:{
        delay: 5000
    },
    pagination:{
        el: '.promotion .swiper-pagination',
        clickable:true
    },
    navigation:{
        prevEl:'.promotion .swiper-prev',
        nextEl:'.promotion .swiper-next'
    }
});
new Swiper('.awards .swiper',{
    autoplay:true,
    loop:true,
    spaceBetween: 30,
    slidesPerView:5,
    navigation:{
        prevEl: '.awards .swiper-prev',
        nextEl: '.awards .swiper-next'
    }
});


const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click',function(){
    isHidePromotion = !isHidePromotion;
    if(isHidePromotion){
        // 숨김 처리
        promotionEl.classList.add('hide');
    } else {
        // 보임 처리
        promotionEl.classList.remove('hide');
    }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size){
    gsap.to(selector, random(1.5,2.5), { // 선택자, 애니메이션 동작 시간, 옵션
        y: size, // y축 이동
        repeat:-1, // 무한반복
        yoyo:true, // 다시 위로
        ease: Power1.easeInOut, // https://greensock.com/docs/v2/Easing
        delay:random(0,delay) // 지연시간
    })
};
floatingObject('.floating1',1,15);
floatingObject('.floating2',.5,15);
floatingObject('.floating3',1.5,20);

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl){
    new ScrollMagic
        .Scene({
            triggerElement:spyEl, // 보여짐 여부를 감시할 요소
            triggerHook : .8, // 가장 윗부분0 ~ 밑에 1 일떄 0.8에 걸리면 setClassToggle실행
        })
        .setClassToggle(spyEl,'show')
        .addTo(new ScrollMagic.Controller());
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 현재연도