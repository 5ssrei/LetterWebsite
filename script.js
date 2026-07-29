/* ===========================================
   Music
=========================================== */

function playMusic(){

if(!bgm)return;

bgm.volume=0.15;

bgm.play().catch(()=>{});

let volume=0.15;

const fade=setInterval(()=>{

volume+=0.01;

if(volume>=0.45){

volume=0.45;

clearInterval(fade);

}

bgm.volume=volume;

},250);

}
/* ===========================================
   Our Story V1
   script.js
   Part 1
=========================================== */

const loading =
document.getElementById("loading");

const scene1 =
document.getElementById("scene1");

const scene2 =
document.getElementById("scene2");

const scene3 =
document.getElementById("scene3");

const scene4 =
document.getElementById("scene4");

const scene5 =
document.getElementById("scene5");

const scene6 =
document.getElementById("scene6");

/* ===========================================
   Buttons
=========================================== */

const yesBtn =
document.getElementById("yes");

const noBtn =
document.getElementById("no");

const continueBtn =
document.getElementById("continueBtn");

const restartBtn =
document.getElementById("restartBtn");

const dialog =
document.getElementById("dialog");

/* ===========================================
   Others
=========================================== */

const envelope =
document.getElementById("envelope");

const photos =
document.querySelectorAll(".photo");

const typingText =
document.getElementById("typingText");

const heartContainer =
document.getElementById("heartContainer");

const bgm =
document.getElementById("bgm");

const overlay =
document.getElementById("photoOverlay");

const overlayImage =
document.getElementById("overlayImage");

const photoCaption =
document.getElementById("photoCaption");


/* ===========================================
   Loading
=========================================== */

window.addEventListener("load",()=>{

playMusic();

setTimeout(()=>{

loading.classList.add("hidden");

scene1.classList.remove("hidden");

},2800);

});

/* ===========================================
   Dialog
=========================================== */

const messages=[

"🥺 真的嗎？",

"😭 再想一下嘛...",

"🥹 我會難過耶...嗚嗚",

"💔 不可以啦><",

"🥺 最後一次機會",

"💕 YES 比較可愛吧~~",

"❤️ 你一定會按 YES 的~~~ 嘿嘿"

];

/* ===========================================
   YES / NO
=========================================== */

let yesScale=1;

let noCount=0;

noBtn.addEventListener("click",()=>{

noCount++;

dialog.innerHTML=

messages[

Math.min(

noCount-1,

messages.length-1

)

];

yesScale+=0.25;

yesBtn.style.transform=

`scale(${yesScale})`;

if(noCount>=9){

moveNoButton();

}

});

/* ===========================================
   Hover Escape
=========================================== */

noBtn.addEventListener(

"mouseenter",

()=>{

if(noCount>=3){

moveNoButton();

}

}

);

/* ===========================================
   Move Button
=========================================== */

function moveNoButton(){

const w=

window.innerWidth-180;

const h=

window.innerHeight-120;

const x=

Math.random()*w;

const y=

Math.random()*h;

noBtn.style.position="fixed";

noBtn.style.left=x+"px";

noBtn.style.top=y+"px";

}

/* ===========================================
   YES
=========================================== */

yesBtn.addEventListener("click",()=>{

playMusic();  

heartExplosion();

setTimeout(()=>{

scene1.classList.add("hidden");

scene2.classList.remove("hidden");

},800);

});

/* ===========================================
   Scene 2
=========================================== */

continueBtn.addEventListener("click",()=>{

scene2.classList.add("hidden");

scene3.classList.remove("hidden");

});

/* ===========================================
   Envelope
=========================================== */

envelope.addEventListener("click",()=>{

envelope.classList.add("open");

setTimeout(()=>{

scene3.classList.add("hidden");

scene4.classList.remove("hidden");

showPhotos();

},1200);

});

/* ===========================================
   Photo Wall
=========================================== */

function showPhotos(){

const rotations=[

-8,

5,

-5,

8,

-3,

6,

-7,

4,

-6,

3

];

const positions=[

["45%","12%"],

["28%","22%"],

["64%","24%"],

["38%","48%"],

["58%","52%"],

["18%","55%"],

["73%","58%"],

["47%","72%"],

["27%","76%"],

["66%","78%"]

];

photos.forEach((photo,index)=>{

photo.style.position="absolute";

photo.style.left=positions[index][0];

photo.style.top=positions[index][1];

photo.style.transform="translate(-50%,-50%) scale(.75)";

photo.style.opacity="0";

setTimeout(()=>{

photo.onclick=()=>{

overlay.classList.add("show");

overlayImage.src=

photo.querySelector("img").src;

photoCaption.innerHTML=

captions[index];

}

photo.style.transition="all .9s ease";

photo.style.opacity="1";

photo.style.transform=

`translate(-50%,-50%) rotate(${rotations[index]}deg) scale(1)`;

},index*900);

});

setTimeout(()=>{

showPhotoContinue();

},photos.length*900+1200);

}

function showPhotoContinue(){

const btn=document.createElement("button");

btn.id="photoContinue";

btn.innerHTML="Continue ♡";

document.body.appendChild(btn);

btn.onclick=()=>{

btn.remove();

scene4.classList.add("hidden");

scene5.classList.remove("hidden");

startTyping();

};

}
/* ===========================================
   Typing Letter
=========================================== */
const captions=[

"♡ 第一次一起過聖誕節",

"用我的電腦貼貼合照~~你好內向喔寶寶",

"用寶寶的電腦貼貼合照",

"這天真的好幸福~~我幫寶寶拍的",

"你的笑容我超喜歡 鯛魚燒William",

"寶寶領到醫師袍的那天傳給我的照片~~~",

"喔!!!我們的故事開始那天~~<3",

"這張我看了好多次",

"每一天都值得收藏",

"謝謝你一直都在 ❤️"

];

const letter=`

親愛的 王維廉先生：

謝謝你來到我的生命裡。
很高興我們已經在一起超過260天了

謝謝你一直陪著我，
也謝謝你一直包容我。

和你在一起之後，

很多原本平凡的日子，
都變成了值得期待的回憶。

不是因為有人陪我過日子而開心，
而是因為那個人，是你
我很開心~~

希望以後，

每一次旅行、
每一個生日、
每一年的夏天，

身邊的人都還是你。

謝謝你。

也謝謝你愛我。

我愛你 ❤️

快點叫我老婆大人😠😠💞

—— Joanna

`;

function startTyping() {

    typingText.innerHTML = "";

    let index = 0;

    const timer = setInterval(() => {

        typingText.innerHTML += letter.charAt(index);

        // 自動捲到最新一行
        typingText.scrollIntoView(false);

        index++;

        if (index >= letter.length) {

            clearInterval(timer);

            // 建立 Continue 按鈕（只建立一次）
            if (!document.getElementById("letterContinue")) {

                const btn = document.createElement("button");

                btn.id = "letterContinue";

                btn.innerHTML = "Continue →";

                document.querySelector(".letter-container").appendChild(btn);

                btn.onclick = () => {

                    scene5.classList.add("hidden");

                    scene6.classList.remove("hidden");

                    heartExplosion();

                    startFloatingHearts();

                };

            }

        }

    }, 70);   // ← 打字速度（越大越慢）

}
/* ===========================================
   Heart Explosion
=========================================== */

function heartExplosion(){

for(let i=0;i<80;i++){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML=Math.random()>.5?"💖":"💕";

heart.style.left=

window.innerWidth/2+"px";

heart.style.top=

window.innerHeight/2+"px";

heart.style.position="fixed";

heart.style.fontSize=

(18+Math.random()*18)+"px";

const dx=

(Math.random()-.5)*700;

const dy=

(Math.random()-.5)*700;

heart.animate(

[

{

transform:

"translate(0,0) scale(1)",

opacity:1

},

{

transform:

`translate(${dx}px,${dy}px) scale(.2)`,

opacity:0

}

],

{

duration:1200,

easing:"ease-out"

}

);

heartContainer.appendChild(heart);

setTimeout(()=>{

heart.remove();

},1200);

}

}

/* ===========================================
   Floating Hearts
=========================================== */

function startFloatingHearts(){

setInterval(()=>{

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML=

Math.random()>.5?"💖":"💕";

heart.style.left=

Math.random()*100+"vw";

heart.style.animationDuration=

(5+Math.random()*4)+"s";

heart.style.fontSize=

(16+Math.random()*18)+"px";

heartContainer.appendChild(heart);

setTimeout(()=>{

heart.remove();

},9000);

},250);

}


/* ===========================================
   Restart
=========================================== */

restartBtn.addEventListener("click",()=>{

location.reload();

});

/* ===========================================
   Resize
=========================================== */

window.addEventListener("resize",()=>{

noBtn.style.position="";

noBtn.style.left="";

noBtn.style.top="";

});

/* ===========================================
   Keyboard Support
=========================================== */

document.addEventListener("keydown",(e)=>{

if(e.key==="Enter"){

if(!scene1.classList.contains("hidden")){

yesBtn.click();

}

}

});

overlay.onclick = () => {

    overlay.classList.remove("show");

};



/* ===========================================
   End
=========================================== */

