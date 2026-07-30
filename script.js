// =========================
// ELEMENT
// =========================



const music =
document.querySelector("#music");


const memory =
document.querySelector(".memory");


const ribbon =
document.querySelector(".ribbon");


const container =
document.querySelector(".container");


const paper =
document.querySelector(".paper");


const paperTitle =
document.querySelector(".letter-header h1");


const paperContent =
document.querySelector(".letter-content");

const canvas =
document.querySelector("#canvas");


const ctx =
canvas.getContext("2d");


let width;
let height;


let effectStarted = false;



function canvasResize(){

    width = window.innerWidth;
    height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

}


canvasResize();


window.addEventListener(
    "resize",
    canvasResize
);


// =========================
// DATA SURAT
// =========================


const letterData = {


    title: "Please Read This",


    content: `
    <p>
        Terima kasih, semesta,<br>
        di antara bisingnya dunia dan riuhnya kepala,
        engkau masih menghadirkanku pada hal-hal sederhana yang mampu menenangkan jiwa.
    </p>

    <p>
        Semoga langkahmu selalu dipertemukan dengan jalan yang baik,
        semoga hatimu tetap memiliki ruang untuk tenang di tengah segala keresahan,
        semoga hari-harimu dipenuhi oleh hal-hal kecil yang sering luput disadari —
        senyum yang datang tanpa rencana, kabar baik yang sederhana,
        waktu yang cukup untuk beristirahat, dan keberanian untuk terus melangkah.
    </p>

    <p>
        Semoga kamu selalu menemukan alasan untuk bersyukur,
        bukan hanya ketika hal besar hadir dalam hidupmu,
        tetapi juga dalam diamnya pagi, hangatnya percakapan,
        dan setiap momen kecil yang mengingatkan bahwa hidup adalah anugerah yang patut dihargai.
    </p>
    
    `
};



// =========================
// DATA FOTO BUNGA
// =========================


const flowers = [

    "foto/1.png",
    "foto/2.png",
    "foto/3.png",
    "foto/4.png",
    "foto/5.png",
    "foto/6.png",
    "foto/7.png",
    "foto/8.png",
    "foto/9.png",
    "foto/10.png",
    "foto/11.png",
    "foto/12.png",

];


let flowerTimer;




// =========================
// MASUKKAN ISI SURAT
// =========================


paperTitle.textContent =
letterData.title;


paperContent.innerHTML =
letterData.content;




// =========================
// BUKA AMPLOP
// =========================


ribbon.addEventListener(
    "click",
    () => {


        ribbon.style.display =
        "none";



        // MUSIC

        music.currentTime = 0;

        music.play()
        .then(() => {

            console.log("musik mulai");

        })
        .catch(error => {

            console.log("musik gagal:", error);

        });



        // BUKA AMPLOP

        container.classList.add(
            "open"
        );



        // BUNGA MUNCUL BERSAMA MUSIK

        setTimeout(
            () => {

                showFlowers();

            },
            0
        );



        setTimeout(
            () => {

                clearInterval(
                    flowerTimer
                );

            },
            3000
        );



        setTimeout(
            () => {

                hideFlowers();

            },
            5000
        );


    }
);






// =========================
// KLIK KERTAS
// =========================


paper.addEventListener(
    "click",
    () => {


        paper.style.pointerEvents =
        "none";



        container.classList.add(
            "show-paper"
        );

        if(!effectStarted){

    effectStarted = true;

    renderloop();

}


    }
);






// =========================
// BUNGA MUNCUL DARI TENGAH
// =========================


function showFlowers() {


    memory.classList.add(
        "show"
    );



    flowerTimer =
    setInterval(
        () => {


            const img =
            document.createElement(
                "img"
            );



            img.src =
            flowers[
                Math.floor(
                    Math.random()
                    *
                    flowers.length
                )
            ];



            const size =
            Math.floor(
                Math.random()
                *
                400
            ) + 70;



            img.style.width =
            size + "px";



            img.style.left =
            "50%";


            img.style.top =
            "50%";



            img.style.opacity =
            "0";



            img.style.transform =
            `
            translate(-50%, -50%)
            scale(0)
            `;



            img.style.transition =
            "none";



            memory.appendChild(
                img
            );



            const angle =
            Math.random()
            *
            Math.PI
            *
            2;



            let distance;



            if(
                Math.random() < 0.1
            ){


                distance =
                Math.random()
                *
                180
                +
                40;


            }else{


                distance =
                Math.random()
                *
                300
                +
                100;


            }



            const x =
            Math.cos(angle)
            *
            distance;



            const y =
            Math.sin(angle)
            *
            distance;




            img.offsetHeight;



            requestAnimationFrame(
                () => {


                    img.style.transition =
                    "opacity 0.8s ease, transform 0.8s ease";



                    img.style.opacity =
                    "1";



                    img.style.transform =
                    `
                    translate(
                    calc(-50% + ${x}px),
                    calc(-50% + ${y}px)
                    )
                    scale(1)
                    `;


                }
            );



        },


        90

    );


}






// =========================
// HILANGKAN BUNGA
// =========================


function hideFlowers() {


    const allFlowers =
    document.querySelectorAll(
        ".memory img"
    );



    allFlowers.forEach(
        (img, index) => {


            setTimeout(
                () => {


                    img.style.transition =
                    "opacity 0.8s ease, transform 0.8s ease";



                    img.style.opacity =
                    "0";



                    img.style.transform +=
                    " scale(0)";



                    setTimeout(
                        () => {

                            img.remove();

                        },
                        800
                    );


                },

                index * 60

            );


        }
    );



    setTimeout(
        () => {


            memory.classList.remove(
                "show"
            );


        },

        allFlowers.length * 80 + 1000

    );


}

let fps = 70;

let frameTime =
100 / fps;


let objArr = [];

let instanceNum = 0;


let lastTimeRender =
+new Date();


let lastTimePushObj =
+new Date();




function getRandomInt(min,max){

return Math.floor(
Math.random()
*
(max-min)
)+min;

}




function motionObj(x,y){


this.r =
getRandomInt(1,20);


this.g =
getRandomInt(5,10)
/
-1000
/
fps;


this.t = 0;


this.k =
getRandomInt(1,5)
/
1000;



this.x=x;

this.px=x;

this.ax=0;

this.vx=.5;


this.hsl =
getRandomInt(60,120)
+
",45%,80%";



this.alpha =
getRandomInt(40,90);



this.y=y;


}



motionObj.prototype.move=function(){


this.t += frameTime;


this.ax =
(this.px-this.x)
*
this.k;


this.vx += this.ax;


this.x += this.vx;


this.y =
3*this.g*this.t*this.t
+
height
+
this.r*3;


}




motionObj.prototype.fadeAway=function(){


if(this.t<5000)
return;


this.alpha -=1;


}




motionObj.prototype.render=function(){


ctx.beginPath();


ctx.shadowBlur =
this.r*3;


ctx.shadowColor =
"rgba(255,255,255,1)";


ctx.fillStyle =
`hsla(${this.hsl},${this.alpha/100})`;



ctx.arc(

this.x,

this.y,

this.r,

0,

Math.PI*2

);


ctx.fill();


ctx.closePath();


}




motionObj.prototype.isLast=function(){


return this.alpha < 0;


};







function render(){


ctx.clearRect(
0,
0,
width,
height
);



instanceNum=0;



objArr.forEach(

(obj,i)=>{


if(obj){


instanceNum++;


obj.move();

obj.fadeAway();

obj.render();



if(obj.isLast()){

delete objArr[i];

}


}


}

);


}





function renderloop(){


let now =
+new Date();



requestAnimationFrame(
renderloop
);



if(
now-lastTimeRender
>
frameTime
){


render();


lastTimeRender =
+new Date();


}



if(
now-lastTimePushObj>200
&&
instanceNum<15

){


for(let i=0;i<10;i++){


objArr.push(

new motionObj(

Math.random()*width,

height

)

);


}



lastTimePushObj =
+new Date();


}


}