// =========================
// ELEMENT
// =========================


const music =
document.querySelector("#music");

console.log("JS berhasil dimuat");

const memory =
document.querySelector(".memory");


const ribbon =
document.querySelector(".ribbon");


const container =
document.querySelector(".container");


const paper =
document.querySelector(".paper");


const paperTitle =
document.querySelector(
    ".letter-header h1"
);


const paperContent =
document.querySelector(
    ".letter-content"
);



// =========================
// DATA SURAT
// =========================


const letterData = {


    title: "Please Read This",


    content: `

        <p>
            Dear Repasta
        </p>


        <p>
        MWEHEHHEEHEHHEHEHHHEHEHEHE
        </p>
        <p>
        MWEHEHHEEHEHHEHEHHHEHEHEHE
        </p>
        <p>
        MWEHEHHEEHEHHEHEHHHEHEHEHE
        </p>
        <p>
        MWEHEHHEEHEHHEHEHHHEHEHEHE
        </p>
        <p>
        MWEHEHHEEHEHHEHEHHHEHEHEHE
        </p>
        <p>
        MWEHEHHEEHEHHEHEHHHEHEHEHE
        </p>

    `

};




// =========================
// DATA FOTO BUNGA
// =========================


const flowers = [

    "foto/1.jpg",

    "foto/2.jpg",

    "foto/3.jpg ",

    "foto/4.jpg",

    "foto/5.jpg",

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


        // sembunyikan pita

        ribbon.style.display =
        "none";



        // aktifkan animasi buka

        container.classList.add(
            "open"
        );


    }
);





// =========================
// KLIK KERTAS
// =========================


paper.addEventListener(
    "click",
    () => {


        // kertas fullscreen

        container.classList.add(
            "show-paper"
        );



        // musik mulai

        music.play();



        // tunggu animasi kertas

        setTimeout(
            () => {


                showFlowers();


            },
            1000
        );



        // bunga hilang setelah 7 detik

        setTimeout(
            () => {


                hideFlowers();


            },
            8000
        );


    }
);






// =========================
// TAMPILKAN BUNGA
// =========================


function showFlowers(){


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



            // pilih bunga random

            img.src =
            flowers[
                Math.floor(
                    Math.random()
                    *
                    flowers.length
                )
            ];



            // ukuran random

            const size =
            Math.floor(
                Math.random()
                *
                250
            ) + 80;



            img.style.width =
            size + "px";



            // posisi random layar

            img.style.left =
            Math.random()
            *
            90
            +
            "vw";



            img.style.top =
            Math.random()
            *
            90
            +
            "vh";



            // rotasi random

            img.style.rotate =
            Math.random()
            *
            360
            +
            "deg";



            memory.appendChild(
                img
            );



            // hapus foto lama

            setTimeout(
                () => {

                    img.remove();

                },
                4000
            );



        },
        300
    );

}






// =========================
// HILANGKAN BUNGA
// =========================


function hideFlowers(){


    clearInterval(
        flowerTimer
    );



    memory.classList.remove(
        "show"
    );



    setTimeout(
        () => {

            memory.innerHTML =
            "";

        },
        800
    );

}
