// Smooth scroll for all anchor links

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener('click', function(e) {

e.preventDefault();

const target = document.querySelector(this.getAttribute('href'));

if(target){

target.scrollIntoView({

behavior:'smooth'

});

}

});

});

window.addEventListener("load", () => {

    const bgMusic = document.getElementById("bgMusic");

    if (bgMusic) {

        bgMusic.play().catch(() => {
            console.log("Autoplay ");
        });

    }

});
/*==================================
 Birthday Card Scroll Animation
===================================*/

const birthdayCard = document.querySelector(".birthday-card");

if (birthdayCard) {

    window.addEventListener("scroll", () => {

        const position = birthdayCard.getBoundingClientRect().top;

        if (position < window.innerHeight - 120) {

            birthdayCard.classList.add("show");

        }

    });

}
/*=============================
   About Section Animation
=============================*/

const aboutCard = document.querySelector(".about-card");

if (aboutCard) {

    window.addEventListener("scroll", () => {

        const top = aboutCard.getBoundingClientRect().top;

        if (top < window.innerHeight - 120) {

            aboutCard.classList.add("show");

        }

    });

}
/*=========================
 Timeline Animation
==========================*/

function revealTimeline(){

    let reveals = document.querySelectorAll(".reveal");

    reveals.forEach((item)=>{

        let windowHeight = window.innerHeight;

        let top = item.getBoundingClientRect().top;

        let visible = 120;

        if(top < windowHeight - visible){

            item.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealTimeline);

revealTimeline();

/*==========================
 Gallery Animation
==========================*/

const galleryItems = document.querySelectorAll(".gallery-item");

function galleryReveal(){

galleryItems.forEach(item=>{

const top=item.getBoundingClientRect().top;

const visible=window.innerHeight-100;

if(top<visible){

item.classList.add("active");

}

});

}

window.addEventListener("scroll",galleryReveal);

galleryReveal();

/*===========================
 Love Cards Animation
===========================*/

const loveCards=document.querySelectorAll(".love-card");

function loveReveal(){

loveCards.forEach(card=>{

const top=card.getBoundingClientRect().top;

if(top<window.innerHeight-100){

card.classList.add("active");

}

});

}

window.addEventListener("scroll",loveReveal);

loveReveal();
/*==========================
 Love Letter Animation
==========================*/

const letter = document.querySelector(".letter-card");

if (letter) {

    function revealLetter() {

        const top = letter.getBoundingClientRect().top;

        if (top < window.innerHeight - 120) {

            letter.classList.add("active");

        }

    }

    window.addEventListener("scroll", revealLetter);

    revealLetter();

}


/*==========================
 Typewriter Effect
==========================*/

const loveLetter = `Meeting you changed my life forever.

Every smile of yours makes my world brighter.

Thank you for believing in me,
supporting me,
and loving me unconditionally.

No matter where life takes us,
I promise to always stand beside you.

You are my happiness,
my peace,
my greatest blessing.

Happy Birthday, My Love ❤️

I love you today,
tomorrow,
and forever.`;

const typing = document.getElementById("typing-text");

if (typing) {

    let i = 0;

    function typeWriter() {

        if (i < loveLetter.length) {

            typing.innerHTML += loveLetter.charAt(i);

            i++;

            setTimeout(typeWriter, 35);

        }

    }

    window.addEventListener("load", typeWriter);

}
/*====================================
     Relationship Counter
=====================================*/

// YYYY-MM-DD
const relationshipDate = new Date("2023-07-31");

function updateCounter(){

const now = new Date();

let years = now.getFullYear() - relationshipDate.getFullYear();
let months = now.getMonth() - relationshipDate.getMonth();
let days = now.getDate() - relationshipDate.getDate();

if(days < 0){
months--;
const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
days += previousMonth.getDate();
}

if(months < 0){
years--;
months += 12;
}

const diff = now - relationshipDate;

const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
const minutes = Math.floor(diff / (1000 * 60)) % 60;
const seconds = Math.floor(diff / 1000) % 60;

document.getElementById("years").innerHTML = years;
document.getElementById("months").innerHTML = months;
document.getElementById("days").innerHTML = days;
document.getElementById("hours").innerHTML = hours;
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds;

}

if (document.getElementById("years")) {

    updateCounter();

    setInterval(updateCounter, 1000);

}

/*====================================
        Surprise Gift
====================================*/

const gift = document.getElementById("giftBox");

const surpriseMessage = document.getElementById("surpriseMessage");

if (gift && surpriseMessage) {

    gift.addEventListener("click", () => {

        gift.classList.add("open");

        surpriseMessage.classList.add("show");

gift.classList.add("open");

message.classList.add("show");

/* Confetti */

confetti({

particleCount:250,

spread:180,

origin:{y:.6}

});

/* Floating Hearts */

for(let i=0;i<30;i++){

let heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.top="100vh";

heart.style.fontSize=(20+Math.random()*25)+"px";

heart.style.pointerEvents="none";

heart.style.transition="all 4s linear";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.top="-100px";

heart.style.opacity="0";

},100);

setTimeout(()=>{

heart.remove();

},4000);

}

});
};

/*====================================
      Grand Finale Fireworks
====================================*/

const fireworksBtn = document.getElementById("fireworksBtn");

if (fireworksBtn) {

    fireworksBtn.addEventListener("click", () => {

const duration = 5000;

const end = Date.now() + duration;

(function frame(){

confetti({

particleCount:8,

angle:60,

spread:55,

origin:{x:0}

});

confetti({

particleCount:8,

angle:120,

spread:55,

origin:{x:1}

});

if(Date.now() < end){

requestAnimationFrame(frame);

}

})();

});
};

/*====================================
        Heart Rain
====================================*/

setInterval(()=>{

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.top="-30px";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(15+Math.random()*25)+"px";

heart.style.zIndex="999";

heart.style.pointerEvents="none";

heart.style.transition="transform 8s linear, opacity 8s linear";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.transform="translateY(110vh)";

heart.style.opacity="0";

},100);

setTimeout(()=>{

heart.remove();

},8000);

},700);